import { X } from 'lucide-react';
import SignIn from '@/imports/SignIn';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-[200] backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
        <div 
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[1400px] h-[90vh] max-h-[900px] overflow-auto animate-in zoom-in-95 fade-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-[202] p-2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <X className="w-6 h-6 text-[#3B3A3C] group-hover:text-[#C91F26] transition-colors" />
          </button>

          {/* Sign In Content */}
          <div className="size-full">
            <SignIn />
          </div>
        </div>
      </div>
    </>
  );
}