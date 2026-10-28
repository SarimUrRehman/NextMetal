import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../siteConfig';
import { Phone, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Circular Cyan Call Button (Visible on mobile / small screens, bottom-right) */}
      <div className="fixed bottom-5 right-5 z-40 md:hidden flex flex-col items-end gap-3">
        <a
          href={SITE_CONFIG.phone.telLink}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#27B8F0] text-[#0F1114] shadow-2xl glow-cyan active:scale-95 transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
          aria-label={`Direct Call: ${SITE_CONFIG.phone.display}`}
        >
          {/* Animated pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#27B8F0] animate-ping opacity-30 pointer-events-none" />
          <Phone className="w-6 h-6 fill-current relative z-10" />
        </a>
      </div>

      {/* Back to Top Button (Bottom-right, desktop & mobile when scrolled down) */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-6 right-5 md:right-6 z-40 flex items-center justify-center w-11 h-11 rounded-lg bg-[#16191E]/90 hover:bg-[#252a32] text-[#C9CED6] hover:text-white border border-[#C9CED6]/25 shadow-lg backdrop-blur-sm transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27B8F0]"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </>
  );
};
