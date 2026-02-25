import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, ChevronDown, Bell, User, Globe, Menu, X } from 'lucide-react';
import { CompanyFormationPopup } from './CompanyFormationPopup';
import { AllServicesPopup } from './AllServicesPopup';
import LogoFrame from '@/imports/Frame2147225849';
import Header1 from '@/imports/Header-56-4304';

export function Header() {
  const [isCompanyFormationOpen, setIsCompanyFormationOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md ${isScrolled ? 'bg-gray-100' : ''}`}>
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden lg:block border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-8 py-2">
          <div className="flex items-center justify-between">
            {/* Left: Phone Number */}
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-[#2C2C2C]" />
              <span className="text-[#2C2C2C] font-medium">
                Consultant & Support (Toll free): 
                <span className="text-[#C91F26] ml-1 font-semibold">+852 3702 1796</span>
              </span>
            </div>

            {/* Right: Language, Currency, Icons */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <button className="flex items-center gap-1 text-sm text-[#2C2C2C] hover:text-[#C91F26] transition-colors">
                <Globe className="w-4 h-4" />
                <span className="font-medium">English</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              <div className="w-px h-4 bg-gray-300" />

              {/* Currency Selector */}
              <button className="flex items-center gap-1 text-sm text-[#2C2C2C] hover:text-[#C91F26] transition-colors">
                <span className="font-medium">USD</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              <div className="w-px h-4 bg-gray-300" />

              {/* Notification Icon */}
              <button className="relative p-1.5 rounded-full hover:bg-gray-100 transition-all">
                <Bell className="w-4 h-4 text-[#2C2C2C]" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#C91F26] rounded-full border border-white"></span>
              </button>

              {/* Account Icon */}
              <Link to="/sign-in">
                <button className="p-1.5 rounded-full hover:bg-gray-100 transition-all">
                  <User className="w-4 h-4 text-[#2C2C2C]" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto lg:px-8">
          {/* Mobile Layout - 2 Rows */}
          <div className="lg:hidden">
            {/* Row 1: Logo + Set Up + Menu */}
            <div className="flex items-center justify-between px-4 py-3 bg-white">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <div className="w-[133.333px] h-10 relative">
                  <LogoFrame />
                </div>
              </Link>

              {/* Right Side: Set Up + Menu */}
              <div className="flex items-center gap-2">
                {/* Set Up Now Button */}
                <button 
                  onClick={() => navigate('/setup-now')}
                  className="bg-[var(--color-primary,#c91f26)] hover:opacity-90 text-white px-4 py-3 rounded-[8px] text-[14px] transition-all duration-300 whitespace-nowrap shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]"
                >
                  Set Up Now
                </button>

                {/* Menu Button */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-8 h-8 flex items-center justify-center text-[#2C2C2C] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Row 2: Language + Currency + Notification + Account */}
            <div 
              className={`flex items-center justify-between px-4 bg-[#f8f9fa] border-t border-[#e9ecef] overflow-hidden transition-all duration-300 ${
                isScrolled ? 'max-h-0 py-0 border-t-0' : 'max-h-20 py-2'
              }`}
            >
              {/* Left side: Language + Currency */}
              <div className="flex items-center gap-4">
                {/* Language Selector */}
                <button className="flex items-center gap-1 text-[14px] text-[#2C2C2C] hover:text-[var(--color-primary,#C91F26)] transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>EN</span>
                </button>

                {/* Currency Selector */}
                <button className="text-[14px] text-[#2C2C2C] hover:text-[var(--color-primary,#C91F26)] transition-colors">
                  USD
                </button>
              </div>

              {/* Right side: Notification + Account */}
              <div className="flex items-center gap-4">
                {/* Notification Icon */}
                <button className="relative bg-[#e9ecef] rounded-[50px] w-[30px] h-[30px] flex items-center justify-center hover:bg-[#dee2e6] transition-colors">
                  <Bell className="w-4 h-4 text-[#2C2C2C]" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-primary,#C91F26)] rounded-full border border-white"></span>
                </button>

                {/* Account Icon */}
                <Link to="/sign-in">
                  <button className="bg-[#e9ecef] rounded-[50px] w-[30px] h-[30px] flex items-center justify-center hover:bg-[#dee2e6] transition-colors">
                    <User className="w-4 h-4 text-[#2C2C2C]" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Single Row */}
          <div className="hidden lg:flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center h-12">
              <div className="w-[165px] h-[48px] relative">
                <LogoFrame />
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="flex items-center gap-8">
              {/* Company Formation with Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsCompanyFormationOpen(true)}
                onMouseLeave={() => setIsCompanyFormationOpen(false)}
              >
                <button className="flex items-center gap-1 text-[15px] font-medium text-[#2C2C2C] hover:text-[#C91F26] transition-colors py-2">
                  Company Formation
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isCompanyFormationOpen && (
                  <div 
                    onMouseEnter={() => setIsCompanyFormationOpen(true)}
                    onMouseLeave={() => setIsCompanyFormationOpen(false)}
                  >
                    <CompanyFormationPopup onClose={() => setIsCompanyFormationOpen(false)} />
                  </div>
                )}
              </div>

              {/* Rate Card */}
              <button className="flex items-center gap-1 text-[15px] font-medium text-[#2C2C2C] hover:text-[#C91F26] transition-colors">
                Rate Card
              </button>

              {/* Services */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link 
                  to="/all-services"
                  className="flex items-center gap-1 text-[15px] font-medium text-[#2C2C2C] hover:text-[#C91F26] transition-colors py-2"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </Link>
                {isServicesOpen && (
                  <div 
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <AllServicesPopup onClose={() => setIsServicesOpen(false)} />
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <Link 
                to="/contact" 
                className="flex items-center gap-1 text-[15px] font-medium text-[#2C2C2C] hover:text-[#C91F26] transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop Set Up Now Button */}
            <button 
              onClick={() => navigate('/setup-now')}
              className="bg-[#C91F26] hover:bg-[#A01820] text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] flex items-center gap-2 hover:gap-3 transition-all duration-300 hover:shadow-lg group relative overflow-hidden border border-[#C91F26]/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              <span className="relative">Set Up Now</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[52px] bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-6">
            {/* Navigation Links */}
            <nav className="space-y-2">
              {/* Company Formation */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  onClick={() => setIsCompanyFormationOpen(!isCompanyFormationOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 text-[15px] font-medium text-[#2C2C2C] hover:text-[#C91F26] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Company Formation</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCompanyFormationOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCompanyFormationOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link to="/jurisdictions" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm text-[#6C757D] hover:text-[#C91F26] hover:bg-gray-50 rounded-lg">
                      Jurisdictions
                    </Link>
                    <Link to="/fees" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm text-[#6C757D] hover:text-[#C91F26] hover:bg-gray-50 rounded-lg">
                      Fees
                    </Link>
                    <Link to="/nominee-services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm text-[#6C757D] hover:text-[#C91F26] hover:bg-gray-50 rounded-lg">
                      Nominee Services
                    </Link>
                  </div>
                )}
              </div>

              {/* Rate Card */}
              <button 
                onClick={() => navigate('/fees')}
                className="block py-3 px-4 text-[15px] font-medium text-[#2C2C2C] hover:text-[#C91F26] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Rate Card
              </button>

              {/* Services */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 text-[15px] font-medium text-[#2C2C2C] hover:text-[#C91F26] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link to="/all-services" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm text-[#6C757D] hover:text-[#C91F26] hover:bg-gray-50 rounded-lg">
                      All Services
                    </Link>
                    <Link to="/tax-accounting" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-sm text-[#6C757D] hover:text-[#C91F26] hover:bg-gray-50 rounded-lg">
                      Tax – Accounting & Auditing
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-[15px] font-medium text-[#2C2C2C] hover:text-[#C91F26] hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}