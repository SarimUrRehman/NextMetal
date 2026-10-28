import React, { useState } from 'react';
import { SITE_CONFIG, BenefitItem, ProjectShowcaseItem, StatItem } from '../siteConfig';
import {
  CheckCircle2,
  Maximize,
  X,
  Compass,
  Layers,
  Sparkles,
  Shield,
  Clock,
  FileText,
  Hammer,
} from 'lucide-react';

export const WhyUsAndProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectShowcaseItem | null>(null);

  const getBenefitIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[#27B8F0]" />;
      case 1:
        return <Layers className="w-5 h-5 text-[#27B8F0]" />;
      case 2:
        return <Shield className="w-5 h-5 text-[#27B8F0]" />;
      case 3:
        return <Clock className="w-5 h-5 text-[#27B8F0]" />;
      case 4:
        return <FileText className="w-5 h-5 text-[#27B8F0]" />;
      case 5:
        return <Hammer className="w-5 h-5 text-[#27B8F0]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#27B8F0]" />;
    }
  };

  /**
   * Renders high-fidelity technical blueprint SVG placeholder tile
   * Styled cleanly to look intentionally engineered rather than an empty box.
   */
  const renderProjectPlaceholder = (proj: ProjectShowcaseItem) => {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#111418] border-b border-white/10 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:bg-[#15191f] transition-colors">
        {/* Technical Blueprint Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(rgba(39, 184, 240, 0.3) 1px, transparent 1px), radial-gradient(rgba(201, 206, 214, 0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px, 10px 10px',
          }}
        />

        {/* Technical crosshairs & dimension markings */}
        <div className="absolute top-3 left-3 text-[10px] font-mono text-[#C9CED6]/60 flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-[#27B8F0] rounded-full inline-block" />
          <span>SPEC // {proj.category.toUpperCase()}</span>
        </div>
        <div className="absolute top-3 right-3 text-[10px] font-mono text-[#27B8F0]/70">
          {proj.tolerance}
        </div>

        {/* Central Blueprint Schematic Icon / Graphic */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-lg bg-[#1B1E23] border border-[#C9CED6]/20 flex items-center justify-center mb-3 shadow-inner group-hover:border-[#27B8F0]/60 transition-colors">
            <svg
              className="w-10 h-10 text-[#27B8F0] stroke-[1.5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth="1.5" />
              <polyline points="2 17 12 22 22 17" strokeWidth="1.5" />
              <polyline points="2 12 12 17 22 12" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Requested Label */}
          <span className="text-xs font-mono uppercase tracking-wider text-[#C9CED6] font-semibold bg-[#0F1114]/80 px-2.5 py-1 rounded border border-white/10">
            {proj.placeholderLabel}
          </span>
          <span className="text-[11px] text-slate-400 mt-1 max-w-[200px] truncate">
            {proj.material}
          </span>
        </div>

        {/* Corner alignment marks */}
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-500">
          NEX-WELD CAD-REV: A.1
        </div>
        <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[9px] font-mono text-[#27B8F0]">
          <span>DETAILS</span>
          <Maximize className="w-2.5 h-2.5" />
        </div>
      </div>
    );
  };

  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-[#0F1114] text-white border-b border-[#C9CED6]/10 relative"
      aria-label="Why Choose Us and Project Showcase"
    >
      {/* Background radial highlights */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#27B8F0]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Part A: Why Choose Us Narrative & 6 Benefit Points */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#27B8F0] mb-3">
              <span className="w-2 h-2 bg-[#27B8F0] rotate-45" />
              <span>{SITE_CONFIG.whyUs.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
              {SITE_CONFIG.whyUs.title}
            </h2>
            <p className="text-base sm:text-lg text-[#C9CED6] leading-relaxed font-normal">
              {SITE_CONFIG.whyUs.description}
            </p>
          </div>

          {/* 6 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_CONFIG.whyUs.benefits.map((benefit: BenefitItem, idx: number) => (
              <div
                key={benefit.id}
                className="bg-[#1B1E23] border border-[#C9CED6]/15 hover:border-[#27B8F0]/60 p-6 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#0F1114] border border-white/10 rounded group-hover:border-[#27B8F0]/40 transition-colors">
                    {getBenefitIcon(idx)}
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-[#27B8F0] uppercase tracking-wider">
                    {benefit.spec}
                  </span>
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#C9CED6] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part B: Stats Row with Tabular Numerals & Industrial Metallic Bevel */}
        <div className="mb-20 bg-[#16191E] border border-[#C9CED6]/20 rounded-xl p-8 shadow-xl bg-metallic-brushed">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_CONFIG.whyUs.stats.map((stat: StatItem, idx: number) => (
              <div
                key={idx}
                className="flex flex-col border-l-2 border-[#27B8F0]/40 pl-4 lg:pl-6"
              >
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="font-tech text-xs sm:text-sm font-bold uppercase tracking-widest text-[#27B8F0] mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Part C: Project Showcase (Row of 6 Tiles) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#27B8F0] mb-1">
                Field & Shop Portfolio
              </div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Project Showcase & Blueprint Archive
              </h3>
            </div>
            <div className="text-xs text-[#C9CED6] max-w-sm">
              <span className="text-[#27B8F0] font-semibold">Ready for owner images:</span> Drop photos into{' '}
              <code className="text-white font-mono bg-[#1B1E23] px-1 py-0.5 rounded text-[11px]">/public/images/</code>{' '}
              and update <code className="text-white font-mono bg-[#1B1E23] px-1 py-0.5 rounded text-[11px]">siteConfig.ts</code>.
            </div>
          </div>

          {/* Responsive 3x2 Grid for 6 Showcase Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_CONFIG.whyUs.projects.map((proj: ProjectShowcaseItem) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group cursor-pointer bg-[#1B1E23] border border-[#C9CED6]/20 hover:border-[#27B8F0] rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image or SVG Placeholder Tile */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0D0F]">
                  {proj.imageSrc ? (
                    <img
                      src={proj.imageSrc}
                      alt={proj.title}
                      width={600}
                      height={375}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Resilient fallback if local file is missing
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.svg-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                  ) : null}

                  {/* SVG Placeholder Tile */}
                  <div className={`svg-fallback w-full h-full ${proj.imageSrc ? 'hidden' : ''}`}>
                    {renderProjectPlaceholder(proj)}
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-[#0F1114]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                    <span className="px-3.5 py-1.5 bg-[#27B8F0] text-[#0F1114] text-xs font-bold uppercase tracking-wider rounded clip-chamfer-sm">
                      Inspect Technical Specs
                    </span>
                  </div>
                </div>

                {/* Card Content & Meta */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#27B8F0] font-mono mb-1.5">
                      <span className="font-semibold uppercase">{proj.category}</span>
                      <span className="text-slate-400">{proj.tolerance}</span>
                    </div>

                    <h4 className="text-base font-bold uppercase tracking-tight text-white group-hover:text-[#27B8F0] transition-colors mb-2">
                      {proj.title}
                    </h4>

                    <p className="text-xs text-[#C9CED6] leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="truncate max-w-[190px]">Mat: {proj.material}</span>
                    <span className="text-[#27B8F0] font-semibold group-hover:underline">
                      Spec Sheet &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal for Inspecting Project Specs */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div className="relative w-full max-w-xl bg-[#16191E] border border-[#27B8F0]/40 rounded-xl p-6 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded bg-[#1B1E23] border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27B8F0]"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono text-[#27B8F0] uppercase tracking-wider mb-1">
              Project Specification // {selectedProject.category}
            </div>

            <h3 id="project-modal-title" className="text-2xl font-bold uppercase text-white mb-4">
              {selectedProject.title}
            </h3>

            <div className="grid grid-cols-2 gap-4 p-4 bg-[#0F1114] border border-white/10 rounded-lg text-xs font-mono mb-4">
              <div>
                <span className="text-slate-500 block mb-0.5">MATERIAL GRADE</span>
                <span className="text-white font-semibold">{selectedProject.material}</span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">TOLERANCE SPEC</span>
                <span className="text-[#27B8F0] font-semibold">{selectedProject.tolerance}</span>
              </div>
            </div>

            <p className="text-sm text-[#C9CED6] leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="p-3 bg-[#1B1E23] border border-white/10 rounded text-xs text-slate-300 mb-6">
              <span className="text-[#27B8F0] font-semibold">Photo Replacement Note:</span> To display your real project photo here, upload your photo file as recommended in <code className="text-white">siteConfig.ts</code> and set <code className="text-white">imageSrc: './images/...'</code>.
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-bold uppercase text-slate-300 hover:text-white bg-[#1B1E23] rounded border border-white/10"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-bold uppercase text-[#0F1114] bg-[#27B8F0] hover:bg-[#1fa5d8] rounded clip-chamfer-sm"
              >
                Request Similar Fabrication
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
