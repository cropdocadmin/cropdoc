# 🌿 CropDOC — Smart Diagnosis. Healthy Crops. Better Tomorrow.

An AI-powered agricultural pathology platform designed for farmers to detect crop diseases, receive eco-friendly treatment advice, and access premium farm protection.

---

## 🚀 Features

- **Multilingual UI Support**: Available in English, Hindi, Marathi, Telugu, and Spanish.
- **Plain Product Explanation & 3-Step Workflow**: Clear 1-2-3 guidance (Snap Photo ➔ AI Detect ➔ Get Treatment).
- **Free vs. Premium Subscriptions**: Free tier with basic scanning + Premium tier (₹149/year) with 365-day tracking.
- **Secure MERN Stack Backend**: JWT authentication, bcrypt password hashing, and Mongoose user persistence.
- **Direct CropDOC App Access**: Integrated web app redirect to `https://cropdoc-app.ai.studio`.

---

## 🛡️ Security & Zero-Trust Guidelines

This repository enforces strict AppSec rules:
- **Zero Hardcoded Secrets**: All sensitive keys, database URIs, and JWT secrets are abstracted into environment variables.
- **Strict Git Exclusion**: `.env` and sensitive environment configurations are blocked via `.gitignore`.
- **Sanitized Error Handling**: Server stack traces and internal system paths are suppressed from API responses.

---

## ⚙️ Configuration & Environment Setup

### 1. Provision Environment Variables

Copy the template environment configuration file:

```bash
cp .env.example .env
```

### 2. Configure Environment Variables

Edit `.env` and populate the required variables safely:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Connection (MongoDB Atlas)
MONGODB_URI=your_mongodb_atlas_connection_string

# Authentication Security
JWT_SECRET=your_strong_jwt_secret_here

# Frontend API Endpoint Configuration (Vite)
VITE_API_URL=http://localhost:5000/api/auth
```

> ⚠️ **IMPORTANT**: Never commit your `.env` file to version control.

---

## 🛠️ Local Installation & Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Backend Server

```bash
node server/server.js
```

### 3. Start Frontend Development Server

```bash
npm run dev
```

The application will be accessible at:
- **Frontend SPA**: `http://localhost:5173`
- **Backend API**: `http://localhost:5000`

---

## 🧪 Build & Verification

To verify production bundle compilation:

```bash
npm run build
```

---

## 📜 License

MIT License. Built for sustainable agriculture.
