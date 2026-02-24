# 🏥 TrustCare

**Reliable & Trusted Care Services for Your Loved Ones**

A comprehensive web application connecting families with professional caregivers for babysitting, elderly care, and special needs assistance. Built with Next.js 16, React 19, and modern web technologies.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-TrustCare-blue?style=for-the-badge&logo=vercel)](https://trust-care-pi.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.1-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?style=for-the-badge&logo=stripe)](https://stripe.com/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation & Setup](#installation--setup)
- [API Routes](#api-routes)
- [Authentication](#authentication)
- [Payment Integration](#payment-integration)
- [Admin Dashboard](#admin-dashboard)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**TrustCare** is a full-stack caregiving platform designed to make hiring trusted caretakers simple, secure, and accessible. Whether you need babysitting services, elderly care, or specialized medical assistance at home, our platform connects you with verified professionals in your area.

### Mission
> Making caregiving easy, secure, and accessible for every family in Bangladesh and beyond.

### Available Services
- 👶 **Baby Care** - Professional babysitting and childcare services
- 👴 **Elderly Care** - Compassionate care for senior citizens
- 🏥 **Sick People Service** - Specialized care for ill or recovering patients

---

## ✨ Key Features

### 🔐 Authentication & Security
- **Email & Password** authentication with bcryptjs encryption
- **Google OAuth** social login integration
- **NextAuth.js** session management with JWT
- Protected routes for authenticated users only
- Password validation (6+ chars, 1 uppercase, 1 lowercase)

### 📱 Responsive Design
- Fully responsive across Mobile, Tablet, and Desktop
- Optimized UI/UX with React Icons
- Smooth carousel integration for banners
- Toast notifications for user feedback

### 🛒 Dynamic Booking System
- **Step-by-step booking process:**
  1. Select Duration (Days/Hours)
  2. Select Location (Division → District → City → Area)
  3. Detailed Address Input
  4. Real-time Cost Calculation
  5. Secure Payment via Stripe
  6. Instant Booking Confirmation

### 📊 Booking Management
- **Status Tracking:** Pending → Confirmed → Completed → Cancelled
- **My Bookings Page:** View all booking history
- **Cancel Booking:** Easy cancellation with status updates
- **Email Invoices:** Automated email confirmations (Challenge Feature)

### 💳 Payment Integration (Optional)
- **Stripe Payment Gateway** integration
- Secure checkout process
- Payment history tracking
- Admin dashboard for financial oversight

### 🔍 SEO & Metadata
- Dynamic metadata for Homepage
- Service-specific metadata for detail pages
- Optimized for search engines

---

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.6 | React Framework with App Router |
| **React** | 19.2.3 | UI Library |
| **React DOM** | 19.2.3 | DOM Rendering |
| **React Hook Form** | 7.71.2 | Form Validation & Handling |
| **React Icons** | 5.5.0 | Icon Library |
| **React Responsive Carousel** | 3.2.23 | Image Sliders |
| **React Toastify** | 11.0.5 | Notifications |

### Backend & Database
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js API Routes** | 16.1.6 | Backend API |
| **MongoDB** | 7.1.0 | NoSQL Database |
| **Mongoose** | Latest | MongoDB ODM |
| **NextAuth.js** | 4.24.13 | Authentication |
| **bcryptjs** | 3.0.3 | Password Hashing |

### Payment & External Services
| Technology | Version | Purpose |
|------------|---------|---------|
| **Stripe** | 20.3.1 | Payment Processing |
| **Stripe.js** | 8.8.0 | Frontend Stripe Integration |
| **Axios** | 1.13.5 | HTTP Client |

---
## 📁 Project Structure
care.xyz/
├── .next/                  # Next.js build output
├── .vercel/                # Vercel deployment config
├── node_modules/           # Dependencies
├── public/                 # Static assets
├── src/
│   ├── action/             # Server actions
│   ├── app/                # Next.js App Router
│   │   ├── (routes)/       # Route groups
│   │   ├── api/            # API routes
│   │   ├── booking/        # Booking pages
│   │   ├── my-bookings/    # User dashboard
│   │   ├── service/        # Service detail pages
│   │   ├── login/          # Authentication
│   │   ├── register/       # Registration
│   │   └── page.js         # Homepage
│   ├── Components/         # Reusable components
│   │   ├── Buttons/        # Button components
│   │   ├── Home/           # Homepage sections
│   │   ├── Layouts/        # Layout wrappers
│   │   ├── Logo/           # Brand components
│   │   ├── MyBooking/      # Booking management UI
│   │   ├── Navlink/        # Navigation components
│   │   ├── paymentSuccess/ # Payment confirmation
│   │   └── service/        # Service display components
│   ├── Context/            # React Context providers
│   ├── data/               # Static data & constants
│   ├── hook/               # Custom React hooks
│   └── lib/                # Utility functions
│       └── proxy.js        # API proxy configuration
├── .env.local              # Environment variables
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies
└── README.md               # Documentation


# 🏥 Care.xyz (TrustCare) - Environment Variables Guide

## 📁 Create `.env.local` file in root directory

```env
# ==========================================
# Database Configuration (MongoDB Atlas)
# ==========================================
DATABASE_URI=
DATABASE_NAME=

# ==========================================
# NextAuth.js Configuration
# ==========================================
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# ==========================================
# Google OAuth 2.0 Credentials
# ==========================================
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# ==========================================
# Stripe Payment Gateway
# ==========================================
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# ==========================================
# Application URL
# ==========================================
NEXT_PUBLIC_URL=


🚀 Installation & Setup
Prerequisites
Node.js 18+
MongoDB Atlas account
Stripe account (for payments)
Google Cloud Console (for OAuth)
Steps
Clone the repository
bash
Copy
git clone https://github.com/yourusername/care-xyz.git
cd care-xyz
Install dependencies
bash
Copy
npm install
Set up environment variables
Copy .env.example to .env.local
Fill in your credentials
Run development server
bash
Copy
npm run dev
Build for production
bash
Copy
npm run build
npm start
🛣 API Routes
Table
Copy
Route	Method	Description	Auth Required
/api/auth/[...nextauth]	GET/POST	NextAuth.js authentication	No
/api/register	POST	User registration	No
/api/services	GET	Get all services	No
/api/services/[id]	GET	Get service details	No
/api/bookings	GET	Get user's bookings	Yes
/api/bookings	POST	Create new booking	Yes
/api/bookings/[id]	PATCH	Update booking status	Yes
/api/bookings/[id]	DELETE	Cancel booking	Yes
/api/payment	POST	Create Stripe payment intent	Yes
/api/invoice	POST	Send email invoice	Yes
🔒 Authentication Flow
Registration
NID Number validation
Email verification
Password strength check
Auto-redirect to booking page after registration
Login
Credentials provider (Email/Password)
Google OAuth provider
JWT session strategy
Protected route handling
Session Management
Persistent sessions
No redirect to login on page reload
Secure token handling
💳 Payment Integration
Stripe Setup
Create a Stripe account
Get API keys from Dashboard
Configure webhook endpoints
Test with Stripe test cards
Payment Flow
User confirms booking details
Frontend creates payment intent
Stripe Checkout modal appears
On success, booking status updates to "Confirmed"
Email invoice sent automatically
Admin dashboard records transaction
🎛 Admin Dashboard (Optional)
Features
Payment History: View all transactions
Booking Management: Update booking statuses
User Management: View registered users
Service Management: Add/Edit services
Analytics: Revenue and booking statistics
Access
Protected admin routes
Role-based access control
Secure admin authentication




👨‍💻 Author
Your Name
GitHub: @yourusername
LinkedIn: Your LinkedIn
Email: your.email@example.com
🙏 Acknowledgments
Next.js Documentation
MongoDB Atlas
Stripe Documentation
NextAuth.js
Vercel Deployment
🔗 Links
Live Demo: https://trust-care-pi.vercel.app/
GitHub Repository: [Your Repo URL]
