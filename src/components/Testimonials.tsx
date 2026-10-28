import React from 'react';
import { SITE_CONFIG, TestimonialItem } from '../siteConfig';
import { Quote, ExternalLink, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 bg-[#F2F4F7] text-slate-900 border-b border-slate-300 relative overflow-hidden"
      aria-label="Client Feedback and Project Reviews"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-300/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0284C7] mb-3">
              <span className="w-2 h-2 bg-[#0284C7] rotate-45" />
              <span>{SITE_CONFIG.testimonials.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0F1114]">
              {SITE_CONFIG.testimonials.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
              {SITE_CONFIG.testimonials.note}
            </p>
          </div>

          {/* Google Reviews Button: HIDDEN UNTIL A VALID URL IS CONFIGURED IN siteConfig.ts */}
          {SITE_CONFIG.googleReviewsUrl && SITE_CONFIG.googleReviewsUrl.trim() !== '' ? (
            <div className="shrink-0">
              <a
                href={SITE_CONFIG.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F1114] hover:bg-slate-800 rounded shadow-md transition-all duration-200"
              >
                <span>Read Verified Google Reviews</span>
                <ExternalLink className="w-4 h-4 text-[#27B8F0]" />
              </a>
            </div>
          ) : (
            <div className="text-xs text-slate-500 italic max-w-xs bg-slate-200/60 p-2.5 rounded border border-slate-300">
              <span className="font-semibold text-slate-700 block not-italic">
                Owner Note:
              </span>
              Google Reviews button will appear here once your business Google URL is added to{' '}
              <code className="text-slate-800 font-mono text-[11px]">googleReviewsUrl</code> in{' '}
              <code className="text-slate-800 font-mono text-[11px]">siteConfig.ts</code>.
            </div>
          )}
        </div>

        {/* 3 Clearly Labelled Placeholder Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.testimonials.items.map((item: TestimonialItem, idx: number) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Mark Icon */}
              <div className="mb-4 flex items-center justify-between">
                <div className="w-10 h-10 rounded bg-[#0F1114] text-[#27B8F0] flex items-center justify-center">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{item.verifiedLabel}</span>
                </div>
              </div>

              {/* Quote Body */}
              <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-8 flex-1">
                "{item.quote}"
              </blockquote>

              {/* Author & Verification: Clean unboxed metadata with separators */}
              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-sm uppercase tracking-wide">
                  {item.author}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  <span>{item.role}</span>
                  <span className="mx-1.5" aria-hidden="true">·</span>
                  <span className="text-slate-600 font-medium">{item.companyOrProject}</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-2 uppercase">
                  [Placeholder #{idx + 1} - Edit in siteConfig.ts]
                </div>
              </div>

              {/* Top Accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#27B8F0]/40 to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
