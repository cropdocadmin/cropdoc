import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';

// Verify required environment variables on startup
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error('FATAL SECURITY CONFIGURATION ERROR: MONGODB_URI environment variable is missing.');
  process.exit(1);
}

const PORT = process.env.PORT || 5000;

const app = express();

// Disable x-powered-by header to prevent server fingerprinting
app.disable('x-powered-by');

// Middleware
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10kb' })); // Mitigate payload DOS

// Auth API Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    dbState: mongoose.connection.readyState === 1 ? 'Connected' : 'Connecting'
  });
});

// Generic 404 Handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Resource not found' });
});

// Global Error Handler (Prevents stack trace leaks to client in prod, logs error on server)
app.use((err, req, res, next) => {
  console.error('🔴 Express API Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'An internal server error occurred.'
  });
});

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ Connected securely to MongoDB database');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Auth Server running securely on 0.0.0.0:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database Connection Failure');
    process.exit(1);
  });
