import { Facebook, Linkedin, Instagram, Youtube, Phone, ChevronDown, ArrowUp, MessageCircle, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import svgFacebook from '@/imports/svg-6kcf8pvuq5';
import svgYouTube from '@/imports/svg-3e8ojguhqo';
import svgLinkedIn from '@/imports/svg-twb1s0h1za';
import svgInstagram from '@/imports/svg-nk5p82cujq';
import svgTwitterX from '@/imports/svg-59d8mtznx7';
import SocialsContactUs542981 from '@/imports/SocialsContactUs-54-2981';
import GooglePlayBadge from '@/imports/Group';
import AppStoreBadge from '@/imports/Group28702';
import PaymentBadges from '@/imports/1';
import IconWhatapp from '@/imports/IconWhatapp1761101872';
import liveChatIcon from 'figma:asset/c5797cf91884d8d7fdc1362ee54a39dfe936e0ad.png';

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#332A2A] text-white pt-12 pb-0">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Row 1 - Main Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/20">
            {/* Column 1: Company Formation */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-base">Company Formation</h3>
              <ul className="space-y-2.5 text-sm">
                <li><Link to="/jurisdiction/singapore" className="text-gray-300 hover:text-[#C91F26] transition-colors">Singapore Company</Link></li>
                <li><Link to="/jurisdiction/hong-kong" className="text-gray-300 hover:text-[#C91F26] transition-colors">Hong Kong Company</Link></li>
                <li><Link to="/jurisdiction/bvi" className="text-gray-300 hover:text-[#C91F26] transition-colors">BVI Company</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">USA LLC / C-Corp</a></li>
                <li><Link to="/jurisdiction/uk" className="text-gray-300 hover:text-[#C91F26] transition-colors">UK Ltd</Link></li>
                <li><Link to="/jurisdictions" className="text-[#C91F26] hover:text-white transition-colors font-medium">All Jurisdictions →</Link></li>
              </ul>
            </div>

            {/* Column 2: Other Services */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-base">Other Services</h3>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">Business Account Opening</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">Multi-Currency Accounts</a></li>
                <li><Link to="/nominee-services" className="text-gray-300 hover:text-[#C91F26] transition-colors">Nominee Director / Shareholder</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">Accounting & Compliance</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">Renewal</a></li>
                <li><Link to="/all-services" className="text-[#C91F26] hover:text-white transition-colors font-medium">All Services →</Link></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-base">Support</h3>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">Client Portal</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">Structure</a></li>
                <li><Link to="/fees" className="text-gray-300 hover:text-[#C91F26] transition-colors">Payment Guidelines</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">Partnership</a></li>
                <li><Link to="/make-payment" className="text-gray-300 hover:text-[#C91F26] transition-colors">Make Payment</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">Glossary</a></li>
              </ul>
            </div>

            {/* Column 4: Social Network */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-base">Social Network</h3>

              {/* Social Icons */}
              <div className="flex gap-2.5 mb-6 flex-wrap">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded hover:opacity-80 transition-opacity">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48">
                    <g clipPath="url(#clip0_facebook)">
                      <path d={svgFacebook.p27c8a480} fill="url(#paint0_linear_facebook)" />
                      <path d={svgFacebook.p30358200} fill="white" />
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_facebook" x1="24" x2="24" y1="0" y2="48">
                        <stop stopColor="#18ACFE" />
                        <stop offset="1" stopColor="#0062E0" />
                      </linearGradient>
                      <clipPath id="clip0_facebook">
                        <rect fill="white" height="48" width="48" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded hover:opacity-80 transition-opacity">
                  <div className="w-10 h-10">
                    <SocialsContactUs542981 />
                  </div>
                </a>
                
                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded hover:opacity-80 transition-opacity">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48">
                    <path d={svgLinkedIn.p27c8a480} fill="#0A66C2" />
                    <path d={svgLinkedIn.p1245d500} fill="white" />
                    <path d={svgLinkedIn.p183900c0} fill="white" />
                    <path d={svgLinkedIn.p291a9200} fill="white" />
                  </svg>
                </a>
                
                {/* Instagram */}
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded hover:opacity-80 transition-opacity">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48">
                    <rect fill="url(#paint0_radial_instagram)" height="48" rx="10" width="48" />
                    <path d={svgInstagram.p27c8a480} fill="url(#paint1_radial_instagram)" />
                    <path d={svgInstagram.p10c6d600} fill="white" />
                    <defs>
                      <radialGradient cx="0" cy="0" gradientTransform="translate(12.7501 51.697) rotate(-90) scale(47.5715 44.2453)" gradientUnits="userSpaceOnUse" id="paint0_radial_instagram" r="1">
                        <stop stopColor="#FFDD55" />
                        <stop offset="0.1" stopColor="#FFDD55" />
                        <stop offset="0.5" stopColor="#FF543E" />
                        <stop offset="1" stopColor="#C837AB" />
                      </radialGradient>
                      <radialGradient cx="0" cy="0" gradientTransform="matrix(4.17378 20.851 -85.947 17.2138 -8.04025 3.45784)" gradientUnits="userSpaceOnUse" id="paint1_radial_instagram" r="1">
                        <stop stopColor="#3771C8" />
                        <stop offset="0.128" stopColor="#3771C8" />
                        <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </a>
                
                {/* Twitter/X */}
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded hover:opacity-80 transition-opacity">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" fill="white" r="24" />
                    <g clipPath="url(#clip0_twitter)">
                      <path d={svgTwitterX.p1a3a3300} fill="#2C2C2C" />
                    </g>
                    <defs>
                      <clipPath id="clip0_twitter">
                        <rect fill="white" height="27" transform="translate(9 10.5)" width="30" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>

              {/* QR Code Section */}
              <div className="mb-4">
                <p className="text-gray-300 text-xs mb-2">Download app iOS/Android</p>
                <div className="flex gap-3">
                  <div className="w-[110px] h-9">
                    <GooglePlayBadge />
                  </div>
                  <div className="w-[110px] h-9">
                    <AppStoreBadge />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={16} className="text-gray-400" />
                  <a href="mailto:support@offshorecompanycorp.com" className="text-gray-300 hover:text-[#C91F26] transition-colors">
                    support@offshorecompanycorp.com
                  </a>
                </div>

                {/* Live Chat */}
                <div className="flex items-center gap-2 text-sm">
                  <MessageCircle size={16} className="text-gray-400" />
                  <a href="#" className="text-gray-300 hover:text-[#C91F26] transition-colors">
                    Live Chat 24/7
                  </a>
                </div>

                {/* View More */}
                <div>
                  <a href="#" className="text-[#C91F26] hover:text-white transition-colors text-xs flex items-center gap-1">
                    View more Worldwide
                    <ChevronDown size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Trust · Legal · Contact */}
          <div className="text-center mb-8 pb-8 border-b border-white/20">
            <div className="h-auto flex items-center justify-center">
              <PaymentBadges />
            </div>
          </div>

          {/* Row 3 - Policies */}
          <div className="pb-6 mb-0">
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs justify-center">
              <a href="#" className="text-gray-400 hover:text-[#C91F26] transition-colors whitespace-nowrap">Terms & Conditions</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#C91F26] transition-colors whitespace-nowrap">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#C91F26] transition-colors whitespace-nowrap">Cookie Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#C91F26] transition-colors whitespace-nowrap">Legal Agreements</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#C91F26] transition-colors whitespace-nowrap">Legal Disclaimer</a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-[#C91F26] transition-colors whitespace-nowrap">Digital Service Act-DSA (EU)</a>
            </div>
          </div>
        </div>

        {/* Row 4 - Copyright - Full Width */}
        <div className="bg-black/20 py-3">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gray-400 text-xs leading-relaxed max-w-4xl mx-auto text-center">
              Copyright ©1997 - 2026 One IBC® refers to One IBC® network of members firms, each of which is an independent and separate legal entity affiliated with One IBC® Group ("One IBC Limited"), a Hong Kong entity. All rights reserved. Please see One IBC structure for further details.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      {showScrollTop && (
        <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
          <button
            onClick={scrollToTop}
            className="bg-white text-gray-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 rounded-full"></span>
            <ArrowUp size={24} className="relative" />
          </button>
          <a
            href="https://wa.me/6586419350"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 rounded-full"></span>
            <div className="relative w-full h-full">
              <IconWhatapp />
            </div>
          </a>
          <button className="w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 rounded-full"></span>
            <img src={liveChatIcon} alt="Live Chat" className="relative w-full h-full rounded-full" />
          </button>
        </div>
      )}
    </>
  );
}