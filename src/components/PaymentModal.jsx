import React, { useState } from 'react';
import { X, CreditCard, Smartphone, ShieldCheck, CheckCircle2, ArrowRight, Lock, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';

export default function PaymentModal({ isOpen, onClose }) {
  const { upgradeToPremium } = useAuth();
  const [method, setMethod] = useState('card'); // 'card' | 'upi' | 'netbanking'
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [upiId, setUpiId] = useState('');

  const [isProcessing, setIsProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePay = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate 1 second payment gateway processing
    setTimeout(async () => {
      const res = await upgradeToPremium();
      setIsProcessing(false);

      if (res.success) {
        setSuccess(true);
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 1500);
      } else {
        alert(res.message || 'Payment failed. Please try again.');
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 relative max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
            <span>Sample Payment Gateway</span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">
            Upgrade to Premium Protection
          </h3>
          <div className="flex items-baseline justify-center gap-1.5 pt-1">
            <span className="text-3xl font-extrabold text-emerald-600">₹149</span>
            <span className="text-xs text-slate-500 font-semibold">/ 1 Year Full Access</span>
          </div>
        </div>

        {/* Payment Method Selector */}
        <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-2xl mb-6 text-xs font-bold">
          <button
            type="button"
            onClick={() => setMethod('card')}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              method === 'card' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CreditCard className="w-4 h-4 text-emerald-600" />
            <span>Debit / Credit Card</span>
          </button>
          <button
            type="button"
            onClick={() => setMethod('upi')}
            className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              method === 'upi' ? 'bg-white text-emerald-800 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Smartphone className="w-4 h-4 text-emerald-600" />
            <span>UPI / GPay / PhonePe</span>
          </button>
        </div>

        {/* Success View */}
        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900">
              Payment Successful!
            </h4>
            <p className="text-xs text-emerald-700 font-semibold">
              ⭐ Premium User status activated in MongoDB!
            </p>
          </div>
        ) : (
          /* Payment Form */
          <form onSubmit={handlePay} className="space-y-4">
            
            {method === 'card' ? (
              <>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Cardholder Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Ramesh Patil"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Card Number (Sample - Type Any Number)</label>
                  <div className="relative">
                    <CreditCard className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="4532 1111 2222 3333"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Expiry (MM/YY)</label>
                    <input
                      type="text"
                      required
                      placeholder="12/28"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">CVV</label>
                    <input
                      type="password"
                      required
                      maxLength="4"
                      placeholder="123"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-3 py-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Enter UPI ID (e.g. farmer@upi)</label>
                  <div className="relative">
                    <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="farmer@upi / 9876543210@paytm"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Supports GPay, PhonePe, Paytm, BHIM & all bank UPI apps.</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-4 disabled:opacity-50"
            >
              {isProcessing ? (
                <span>Processing Payment...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Pay ₹149 & Activate Premium</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-4 text-center text-[11px] text-slate-400 font-mono flex items-center justify-center gap-1">
          <Lock className="w-3 h-3 text-slate-400" />
          <span>256-Bit SSL Encrypted Sample Gateway</span>
        </div>

      </div>
    </div>
  );
}
