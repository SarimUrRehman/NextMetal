import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../siteConfig';
import { Logo } from './Logo';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us & Projects', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact & Quote', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F1114]/95 backdrop-blur-md border-b border-[#C9CED6]/15 shadow-xl py-2.5'
          : 'bg-gradient-to-b from-[#0F1114] via-[#0F1114]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Emblem Lockup */}
          <a
            href="#hero"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27B8F0] rounded"
            aria-label="NexMetal Works - Return to top"
          >
            <Logo size="sm" />
          </a>

          {/* Zone 2: 5 Clean Single-Line Navigation Links (Desktop) */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-[#C9CED6]"
            aria-label="Primary site navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#27B8F0] transition-colors py-1 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27B8F0] rounded text-[13px] uppercase font-semibold"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#27B8F0] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Cyan Call Button) & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.phone.telLink}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#0F1114] bg-[#27B8F0] hover:bg-[#1fa5d8] transition-all duration-200 clip-chamfer-sm glow-cyan-sm active:scale-95 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`Call NexMetal Works at ${SITE_CONFIG.phone.display}`}
            >
              <Phone className="w-4 h-4 fill-current stroke-[2.5]" />
              <span>Call {SITE_CONFIG.phone.display}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-[#C9CED6] hover:text-white bg-[#1B1E23] border border-[#C9CED6]/20 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27B8F0]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111418] border-b border-[#C9CED6]/20 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1 text-sm font-semibold tracking-wider text-[#C9CED6]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded hover:bg-[#1B1E23] hover:text-[#27B8F0] transition-colors uppercase text-xs"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#27B8F0]/70" />
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href={SITE_CONFIG.phone.telLink}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-[#0F1114] bg-[#27B8F0] rounded clip-chamfer-sm text-center uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Direct Dispatch: {SITE_CONFIG.phone.display}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-[#C9CED6] bg-[#1B1E23] border border-white/10 rounded clip-chamfer-sm text-center uppercase tracking-wider hover:text-white"
            >
              <span>Request Project Quote</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
