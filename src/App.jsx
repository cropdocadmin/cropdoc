import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import SimpleNavbar from './components/SimpleNavbar';
import SimpleHero from './components/SimpleHero';
import ProductExplanation from './components/ProductExplanation';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import SimpleFooter from './components/SimpleFooter';
import LoginModal from './components/LoginModal';
import PaymentModal from './components/PaymentModal';

function MainApp() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar with Language Dropdown & Real MongoDB Auth State */}
      <SimpleNavbar onOpenLogin={() => setIsLoginOpen(true)} />

      <main>
        {/* Plain Product Explanation Hero */}
        <SimpleHero
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenPayment={() => setIsPaymentOpen(true)}
        />

        {/* Product Purpose & Problem/Solution Breakdown */}
        <ProductExplanation />

        {/* 3-Step Core Workflow */}
        <Workflow
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenPayment={() => setIsPaymentOpen(true)}
        />

        {/* Free vs Premium (₹149/year) Subscription Blocks */}
        <Pricing
          onOpenLogin={() => setIsLoginOpen(true)}
          onOpenPayment={() => setIsPaymentOpen(true)}
        />
      </main>

      {/* Footer */}
      <SimpleFooter onOpenLogin={() => setIsLoginOpen(true)} />

      {/* Real Working MongoDB Login & Register Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Sample Payment Modal (UPI / Debit Card) */}
      <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
    </AuthProvider>
  );
}
