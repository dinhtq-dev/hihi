import { ArrowRight, Shield, Globe, Users } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in production, this would validate credentials
    navigate('/my-account');
  };

  const handleGoogleSignIn = () => {
    // Simulate Google login
    navigate('/my-account');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <h2 className="text-3xl font-bold text-[#C91F26] mb-2">OffShore CompanyCorp</h2>
            <p className="text-[#2C2C2C]/60">Sign in to your account</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#2C2C2C] mb-2">
                Welcome Back
              </h2>
              <p className="text-[#2C2C2C]/60">
                Sign in to access your account
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                  Email Address <span className="text-[#C91F26]">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent transition-all"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-[#2C2C2C] mb-2">
                  Password <span className="text-[#C91F26]">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#C91F26] transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="text-sm text-[#C91F26] hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-[#C91F26] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#a51920] transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg"
              >
                Sign In
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-[#2C2C2C]/60">Or continue with</span>
                </div>
              </div>

              {/* Google Sign In */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full border-2 border-[#4285F4] text-[#4285F4] py-3.5 rounded-xl font-medium hover:bg-[#4285F4] hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#FBBB00" d="M6 12a6 6 0 0 0 11.66 2H12v-4h9.5a10 10 0 1 1-3-7.28L16 5.28A6 6 0 0 0 6 12z"/>
                  <path fill="#518EF8" d="M23.5 10H12v4h5.66A6 6 0 0 1 6 12a6 6 0 0 1 10-4.72l2.5-2.56A10 10 0 0 0 2 12a10 10 0 0 0 17.45 6.72"/>
                  <path fill="#28B446" d="M6 12a6 6 0 0 0 .28 1.8l-3.28 2.52A10 10 0 0 1 2 12"/>
                  <path fill="#F14336" d="M12 18a6 6 0 0 0 5.16-2.92l-2.72-2.28A6 6 0 0 1 6 13.8l-3.28 2.52A10 10 0 0 0 12 22"/>
                </svg>
                Sign in with Google
              </button>

              {/* Create Account */}
              <p className="text-center text-[#2C2C2C]/70 mt-6">
                Don't have an account?{' '}
                <a href="#" className="text-[#C91F26] font-semibold hover:underline">
                  Create your account
                </a>
              </p>
            </form>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center text-sm text-[#2C2C2C]/50">
            <a href="#" className="hover:text-[#C91F26] transition-colors">Privacy Policy</a>
            <span className="mx-3">•</span>
            <a href="#" className="hover:text-[#C91F26] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Right Side - Brand Section with Gradient */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] relative overflow-hidden min-h-screen items-center justify-center">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white transform rotate-45"></div>
        </div>

        <div className="relative z-10 px-12 max-w-xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Welcome to<br />
            <span className="text-6xl">OffShore CompanyCorp</span>
          </h1>
          <p className="text-white/90 text-xl mb-12 leading-relaxed">
            Your trusted partner for international business formation and corporate services worldwide.
          </p>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">150+ Jurisdictions</h3>
                <p className="text-white/80">Access to global business opportunities</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Secure & Compliant</h3>
                <p className="text-white/80">Full regulatory compliance guaranteed</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">Expert Support</h3>
                <p className="text-white/80">Dedicated team available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}