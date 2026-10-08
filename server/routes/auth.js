import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('FATAL SECURITY CONFIGURATION ERROR: JWT_SECRET environment variable is missing.');
  }
  return secret;
};

// Helper to format user response safely (excludes sensitive internal fields)
const formatUserResponse = (user) => {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    plan: user.plan,
    subscribedAt: user.subscribedAt,
    subscriptionExpiresAt: user.subscriptionExpiresAt
  };
};

// @route   POST /api/auth/register
// @desc    Register a new user securely
router.post('/register', async (req, res, next) => {
  try {
    const { name, email, phone, password, role } = req.body;

    if (!name || (!email && !phone) || !password) {
      return res.status(400).json({ success: false, message: 'Please provide Name, Password, and Email or Mobile number.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long.' });
    }

    // Check if user already exists
    let existingUser = null;
    if (email) {
      existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    }
    if (!existingUser && phone) {
      existingUser = await User.findOne({ phone: phone.trim() });
    }

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'An account with this Email or Mobile Number already exists.' });
    }

    // Hash password with salt cost 10
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user object
    const newUser = new User({
      name: name.trim(),
      email: email ? email.toLowerCase().trim() : undefined,
      phone: phone ? phone.trim() : undefined,
      password: hashedPassword,
      role: ['farmer', 'agronomist', 'partner'].includes(role) ? role : 'farmer'
    });

    await newUser.save();

    // Issue JWT token
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      getJwtSecret(),
      { expiresIn: '7d' }
    );

    res.status(201).json({
      success: true,
      message: 'Account registered successfully.',
      token,
      user: formatUserResponse(newUser)
    });

  } catch (err) {
    next(err);
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user against stored credentials
router.post('/login', async (req, res, next) => {
  try {
    const { identifier, password, role } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({ success: false, message: 'Please enter your Email/Mobile Number and Password.' });
    }

    const cleanId = identifier.trim().toLowerCase();
    const user = await User.findOne({
      $or: [
        { email: cleanId },
        { phone: identifier.trim() }
      ]
    });

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials.' });
    }

    // Compare bcrypt password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials.' });
    }

    if (role && ['farmer', 'agronomist', 'partner'].includes(role) && user.role !== role) {
      user.role = role;
      await user.save();
    }

    // Issue JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      getJwtSecret(),
      { expiresIn: '7d' }
    );

    res.json({
      success: true,
      message: 'Logged in successfully.',
      token,
      user: formatUserResponse(user)
    });

  } catch (err) {
    next(err);
  }
});

// @route   POST /api/auth/subscribe
// @desc    Upgrade authenticated user to Premium Plan
router.post('/subscribe', async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Authentication required.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, getJwtSecret());

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User account not found.' });
    }

    const now = new Date();
    const expiresAt = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);

    user.plan = 'premium';
    user.subscribedAt = now;
    user.subscriptionExpiresAt = expiresAt;

    await user.save();

    res.json({
      success: true,
      message: 'Premium Subscription activated successfully.',
      user: formatUserResponse(user)
    });
  } catch (err) {
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Invalid or expired authentication session.' });
    }
    next(err);
  }
});

// @route   GET /api/auth/me
// @desc    Get current authenticated user profile
router.get('/me', async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Authentication required.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, getJwtSecret());

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User account not found.' });
    }

    res.json({
      success: true,
      user: formatUserResponse(user)
    });
  } catch (err) {
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Invalid or expired authentication session.' });
    }
    next(err);
  }
});

export default router;
