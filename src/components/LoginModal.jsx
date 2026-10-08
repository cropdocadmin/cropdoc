import React, { useState } from 'react';
import CropDocLogo from './CropDocLogo';
import { X, Smartphone, Mail, Lock, User, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

export default function LoginModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const { login, register } = useAuth();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [role, setRole] = useState('farmer'); // 'farmer' | 'agronomist' | 'partner'
  const [loginMethod, setLoginMethod] = useState('phone'); // 'phone' | 'email'

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setIsSubmitting(true);

    if (mode === 'login') {
      const identifier = loginMethod === 'phone' ? phone : email;
      const res = await login(identifier, password, role);
      setIsSubmitting(false);
      if (res.success) {
        setSuccessMsg(res.message || 'Logged in successfully!');
        setTimeout(() => {
          onClose();
          setSuccessMsg('');
        }, 800);
      } else {
        setErrorMsg(res.message);
      }
    } else {
      // Register Mode
      const res = await register({
        name,
        email: email || undefined,
        phone: phone || undefined,
        password,
        role
      });
      setIsSubmitting(false);
      if (res.success) {
        setSuccessMsg('Account registered in MongoDB & Logged in!');
        setTimeout(() => {
          onClose();
          setSuccessMsg('');
        }, 1000);
      } else {
        setErrorMsg(res.message);
      }
    }
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
        <div className="text-center space-y-3 mb-6">
          <div className="flex justify-center">
            <CropDocLogo className="h-9" showText={true} />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">
            {mode === 'login' ? t.loginModal.title : 'Create MongoDB Account'}
          </h3>
          <p className="text-xs text-slate-500">
            {t.loginModal.subtitle}
          </p>
        </div>

        {/* Mode Switcher Tabs (Login vs Register) */}
        <div className="flex border-b border-slate-200 mb-5">
          <button
            onClick={() => { setMode('login'); setErrorMsg(''); setSuccessMsg(''); }}
            className={`flex-1 pb-2.5 text-xs font-bold transition-all border-b-2 cursor-pointer ${
              mode === 'login' ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {t.loginModal.title}
          </button>
          <button
            onClick={() => { setMode('register'); setErrorMsg(''); setSuccessMsg(''); }}
            className={`flex-1 pb-2.5 text-xs font-bold transition-all border-b-2 cursor-pointer ${
              mode === 'register' ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {t.loginModal.createAccount}
          </button>
        </div>

        {/* Error / Success Feedback */}
        {errorMsg && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl mb-5 text-xs font-bold">
          <button
            type="button"
            onClick={() => setRole('farmer')}
            className={`py-2 rounded-lg transition-all cursor-pointer ${
              role === 'farmer' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.loginModal.farmer}
          </button>
          <button
            type="button"
            onClick={() => setRole('agronomist')}
            className={`py-2 rounded-lg transition-all cursor-pointer ${
              role === 'agronomist' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.loginModal.agronomist}
          </button>
          <button
            type="button"
            onClick={() => setRole('partner')}
            className={`py-2 rounded-lg transition-all cursor-pointer ${
              role === 'partner' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.loginModal.partner}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name field for Registration */}
          {mode === 'register' && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Ramesh Patil"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>
            </div>
          )}

          {/* Login method toggle in login mode */}
          {mode === 'login' && (
            <div className="flex justify-between items-center text-xs text-slate-500 font-medium px-1">
              <span>{t.loginModal.loginUsing}</span>
              <div className="space-x-2">
                <button
                  type="button"
                  onClick={() => setLoginMethod('phone')}
                  className={`underline underline-offset-2 cursor-pointer ${loginMethod === 'phone' ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}
                >
                  {t.loginModal.otpMethod}
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => setLoginMethod('email')}
                  className={`underline underline-offset-2 cursor-pointer ${loginMethod === 'email' ? 'text-emerald-700 font-bold' : 'text-slate-400'}`}
                >
                  {t.loginModal.emailMethod}
                </button>
              </div>
            </div>
          )}

          {/* Mobile Number Field */}
          {(mode === 'register' || loginMethod === 'phone') && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">{t.loginModal.mobileLabel}</label>
              <div className="relative">
                <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required={mode === 'login' && loginMethod === 'phone'}
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>
            </div>
          )}

          {/* Email Address Field */}
          {(mode === 'register' || loginMethod === 'email') && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">{t.loginModal.emailLabel}</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required={mode === 'login' && loginMethod === 'email'}
                  placeholder="farmer@cropdoc.ai"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>
            </div>
          )}

          {/* Password field */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">{t.loginModal.passwordLabel}</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-3 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Connecting to MongoDB...</span>
            ) : (
              <>
                <span>{mode === 'login' ? t.loginModal.signInBtn : 'Create Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
          {mode === 'login' ? (
            <>
              {t.loginModal.noAccount}{' '}
              <button onClick={() => setMode('register')} className="text-emerald-700 font-bold hover:underline cursor-pointer">
                {t.loginModal.createAccount}
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button onClick={() => setMode('login')} className="text-emerald-700 font-bold hover:underline cursor-pointer">
                Sign In
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
