import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Serverless / Cloud DB Connection Caching
let isConnected = false;
const connectDB = async () => {
  if (isConnected || mongoose.connection.readyState === 1) {
    return;
  }
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error('FATAL SECURITY CONFIGURATION ERROR: MONGODB_URI environment variable is missing.');
  }
  await mongoose.connect(MONGODB_URI);
  isConnected = true;
  console.log('✅ Connected securely to MongoDB database');
};

// Ensure Database is connected for all API requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

// Auth API Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    dbState: mongoose.connection.readyState === 1 ? 'Connected' : 'Connecting'
  });
});

// Serve compiled static React frontend in Production / Render
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Fallback to React SPA index.html for non-API client routing
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ success: false, message: 'API endpoint not found' });
  }
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(404).json({ success: false, message: 'Resource not found' });
    }
  });
});

// Global Error Handler (Prevents stack trace leaks to client in prod, logs error on server)
app.use((err, req, res, next) => {
  console.error('🔴 Express API Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'An internal server error occurred.'
  });
});

// Local Standalone & Cloud Web Service Execution (Render / Heroku / Railway)
if (!process.env.VERCEL) {
  connectDB()
    .then(() => {
      app.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 CropDOC Web Service running securely on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error('❌ Database Connection Failure:', err);
    });
}

export default app;
