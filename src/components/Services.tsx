import React from 'react';
import { SITE_CONFIG, ServiceItem } from '../siteConfig';
import {
  Layers,
  ShieldCheck,
  Sparkles,
  Maximize2,
  TrendingUp,
  Cpu,
  Wrench,
  Building2,
  ArrowRight,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  // Render domain-specific industrial SVG icon for each service
  const renderIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-[#27B8F0] stroke-[2] transition-transform duration-300 group-hover:scale-110';
    switch (iconName) {
      case 'Layers':
        return <Layers className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Maximize2':
        return <Maximize2 className={iconClass} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'Wrench':
        return <Wrench className={iconClass} />;
      case 'Building2':
        return <Building2 className={iconClass} />;
      default:
        return <Wrench className={iconClass} />;
    }
  };

  const handleEnquire = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#F2F4F7] text-slate-900 border-b border-slate-300 relative overflow-hidden"
      aria-label="Fabrication and Welding Services"
    >
      {/* Subtle industrial blueprint grid overlay in light tone */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0F1114 1px, transparent 1px), linear-gradient(90deg, #0F1114 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-slate-300/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-3">
              <span className="w-2 h-2 bg-[#0284C7] rotate-45" />
              <span>Full-Scope Metal Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0F1114]">
              Comprehensive Fabrication & Welding
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From heavy structural beams to architectural fixtures and field modifications, our shop handles carbon steel, stainless steel, and aluminum with certified precision.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={SITE_CONFIG.phone.telLink}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F1114] bg-white border border-slate-300 px-4 py-2.5 rounded shadow-sm hover:border-[#0284C7] transition-colors"
            >
              <span>Need custom sizing? Speak directly with shop</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0284C7]" />
            </a>
          </div>
        </div>

        {/* Responsive Grid of 8 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.services.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              className="group relative bg-white border border-slate-200/90 hover:border-[#27B8F0] rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded bg-[#0F1114] flex items-center justify-center p-2.5 shadow-md">
                    {renderIcon(service.iconName)}
                  </div>
                  {/* Clean unboxed index and badge */}
                  <span className="font-mono text-xs font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] mb-1.5">
                  {service.badge}
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-[#0F1114] mb-2 group-hover:text-[#0284C7] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-normal line-clamp-3 mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Footer: Interactive Enquire Button */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <button
                  type="button"
                  onClick={() => handleEnquire(service.title)}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0F1114] group-hover:text-[#0284C7] py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27B8F0] transition-colors"
                  aria-label={`Enquire about ${service.title}`}
                >
                  <span>Enquire About Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Subtle top indicator bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#27B8F0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
