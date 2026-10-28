import React from 'react';
import { SITE_CONFIG } from '../siteConfig';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us & Projects', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact & Quote', href: '#contact' },
  ];

  return (
    <footer
      className="bg-[#0A0C0E] text-slate-300 border-t border-[#C9CED6]/10 pt-16 pb-12 relative overflow-hidden"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <a href="#hero" className="mb-4 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27B8F0] rounded">
              <Logo size="md" />
            </a>
            <p className="text-sm text-[#C9CED6] max-w-sm leading-relaxed mb-6 font-normal">
              Precision metal fabricator providing custom steel and aluminum fabrication, structural certified welding, architectural railings, and field repairs for commercial, industrial, and residential builders.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#27B8F0]" />
              <span>CATEGORY: METAL FABRICATOR // CAN</span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#27B8F0] font-bold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-[#C9CED6] hover:text-[#27B8F0] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#27B8F0]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#27B8F0] font-bold mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#27B8F0] shrink-0" />
                <a
                  href={SITE_CONFIG.phone.telLink}
                  className="text-white hover:text-[#27B8F0] font-semibold tabular-nums transition-colors"
                >
                  {SITE_CONFIG.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#27B8F0] shrink-0" />
                <a
                  href={SITE_CONFIG.email.mailTo}
                  className="text-[#C9CED6] hover:text-white transition-colors truncate max-w-[260px]"
                >
                  {SITE_CONFIG.email.display}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#27B8F0] shrink-0 mt-1" />
                <span className="text-slate-400 text-xs leading-relaxed">
                  {SITE_CONFIG.address.display}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="text-[11px] text-slate-400">
                Service Region: {SITE_CONFIG.serviceArea.description}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; 2025 {SITE_CONFIG.businessName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Precision Engineering & Welding</span>
            <span aria-hidden="true">·</span>
            <span>WCAG AA Accessible</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
