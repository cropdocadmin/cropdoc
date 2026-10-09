import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    sparse: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    sparse: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  role: {
    type: String,
    enum: ['farmer', 'agronomist', 'partner'],
    default: 'farmer'
  },
  plan: {
    type: String,
    enum: ['free', 'premium'],
    default: 'free'
  },
  subscribedAt: {
    type: Date
  },
  subscriptionExpiresAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Ensure at least email or phone is provided
UserSchema.pre('validate', function() {
  if (!this.email && !this.phone) {
    this.invalidate('email', 'Either Email or Mobile Number is required');
  }
});

export default mongoose.model('User', UserSchema);
