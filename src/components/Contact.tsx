import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../siteConfig';
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle,
  AlertCircle,
  Upload,
  ArrowRight,
  ExternalLink,
  Navigation,
} from 'lucide-react';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService = '' }) => {
  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    description: '',
    fileName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preselectedService when passed from parent (e.g., from Services enquire click)
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for dispatch & callback';
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required for quote documents';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.serviceType) errs.serviceType = 'Please select a service category';
    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = 'Please provide at least a brief description of project requirements (min 10 characters)';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Simulate real submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 700);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      description: '',
      fileName: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#0F1114] text-white border-b border-[#C9CED6]/10 relative"
      aria-label="Contact and Request a Fabrication Quote"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#27B8F0] mb-3">
            <span className="w-2 h-2 bg-[#27B8F0] rotate-45" />
            <span>{SITE_CONFIG.contact.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-4">
            {SITE_CONFIG.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-[#C9CED6] font-normal leading-relaxed">
            {SITE_CONFIG.contact.description}
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Column 1: Interactive Quote Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#16191E] border border-[#C9CED6]/20 rounded-xl p-6 sm:p-8 shadow-2xl relative">
            <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold uppercase text-white">
                  Fabrication & Welding Estimate
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {SITE_CONFIG.contact.formHelpText}
                </p>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#27B8F0] shadow-[0_0_8px_#27B8F0]" />
            </div>

            {isSuccess ? (
              <div className="py-8 text-center flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#27B8F0]/20 text-[#27B8F0] flex items-center justify-center mb-4 ring-8 ring-[#27B8F0]/10">
                  <CheckCircle className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h4 className="text-2xl font-black uppercase text-white mb-2">
                  Quote Request Received
                </h4>
                <p className="text-sm text-[#C9CED6] max-w-md mb-6 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our estimating desk has registered your project inquiry for{' '}
                  <span className="text-[#27B8F0] font-semibold">{formData.serviceType}</span>. A fabricator will contact you at{' '}
                  <span className="text-white font-semibold">{formData.phone}</span> or{' '}
                  <span className="text-white font-semibold">{formData.email}</span> shortly.
                </p>
                {formData.fileName && (
                  <div className="text-xs font-mono text-slate-400 bg-[#0F1114] px-4 py-2 rounded border border-white/10 mb-6">
                    Attached file: {formData.fileName}
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-[#1B1E23] border border-white/10 rounded transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={SITE_CONFIG.phone.telLink}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0F1114] bg-[#27B8F0] hover:bg-[#1fa5d8] rounded clip-chamfer-sm inline-flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call Now for Urgent Work</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Phone in 2 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#C9CED6] mb-1.5"
                    >
                      Full Name / Company <span className="text-[#27B8F0]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dave Miller / Apex Construction"
                      className={`w-full px-3.5 py-2.5 bg-[#0F1114] border rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#27B8F0] transition-colors ${
                        errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#C9CED6]/20'
                      }`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-mono uppercase tracking-wider text-[#C9CED6] mb-1.5"
                    >
                      Phone Number <span className="text-[#27B8F0]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(780) 555-0199"
                      className={`w-full px-3.5 py-2.5 bg-[#0F1114] border rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#27B8F0] transition-colors ${
                        errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#C9CED6]/20'
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Service Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#C9CED6] mb-1.5"
                    >
                      Email Address <span className="text-[#27B8F0]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="dave@example.com"
                      className={`w-full px-3.5 py-2.5 bg-[#0F1114] border rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#27B8F0] transition-colors ${
                        errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#C9CED6]/20'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-mono uppercase tracking-wider text-[#C9CED6] mb-1.5"
                    >
                      Service Category <span className="text-[#27B8F0]">*</span>
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className={`w-full px-3.5 py-2.5 bg-[#0F1114] border rounded text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#27B8F0] transition-colors ${
                        errors.serviceType ? 'border-red-500 ring-1 ring-red-500' : 'border-[#C9CED6]/20'
                      }`}
                      required
                    >
                      <option value="" disabled className="text-slate-500">
                        Select a fabrication category...
                      </option>
                      {SITE_CONFIG.services.map((svc) => (
                        <option key={svc.id} value={svc.title} className="bg-[#0F1114] text-white">
                          {svc.title}
                        </option>
                      ))}
                      <option value="Custom General Metalwork" className="bg-[#0F1114] text-white">
                        Other / Custom Metalwork
                      </option>
                    </select>
                    {errors.serviceType && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.serviceType}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label
                    htmlFor="contact-description"
                    className="block text-xs font-mono uppercase tracking-wider text-[#C9CED6] mb-1.5"
                  >
                    Project Details & Dimensions <span className="text-[#27B8F0]">*</span>
                  </label>
                  <textarea
                    id="contact-description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe material (mild steel, aluminum, stainless), quantity, rough dimensions, timeline, and whether installation or mobile welding is needed..."
                    className={`w-full px-3.5 py-2.5 bg-[#0F1114] border rounded text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#27B8F0] transition-colors resize-y ${
                      errors.description ? 'border-red-500 ring-1 ring-red-500' : 'border-[#C9CED6]/20'
                    }`}
                    required
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.description}</span>
                    </p>
                  )}
                </div>

                {/* Optional File Upload Field Label & Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#C9CED6] mb-1.5">
                    Optional Drawings / Blueprints (PDF, DWG, STEP, JPG)
                  </label>
                  <label
                    htmlFor="blueprint-upload"
                    className="flex items-center justify-between px-3.5 py-2.5 bg-[#0F1114] border border-dashed border-[#C9CED6]/30 hover:border-[#27B8F0] rounded cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Upload className="w-4 h-4 text-[#27B8F0] group-hover:scale-110 transition-transform" />
                      <span className="truncate max-w-[240px]">
                        {formData.fileName ? formData.fileName : 'Click to select blueprint file or drag & drop'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      Max 25MB
                    </span>
                    <input
                      id="blueprint-upload"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png,.webp"
                    />
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0F1114] bg-[#27B8F0] hover:bg-[#1fa5d8] disabled:opacity-50 transition-all duration-200 clip-chamfer glow-cyan active:scale-[0.99] min-h-[48px]"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Blueprint Data...</span>
                    ) : (
                      <>
                        <span>Submit Project for Estimate</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Direct shop review. Your contact details remain confidential.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Column 2: Direct Contact, Quick Actions, Hours, Area, Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Action Buttons (Call, WhatsApp, Email) */}
            <div className="bg-[#16191E] border border-[#C9CED6]/20 rounded-xl p-6 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#27B8F0] mb-3">
                Direct Contact & Dispatch
              </div>

              <div className="space-y-3">
                {/* Click to call */}
                <a
                  href={SITE_CONFIG.phone.telLink}
                  className="flex items-center justify-between p-3.5 bg-[#0F1114] border border-[#27B8F0]/30 hover:border-[#27B8F0] rounded-lg transition-all group"
                  aria-label={`Call ${SITE_CONFIG.phone.display}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-[#27B8F0] text-[#0F1114] flex items-center justify-center">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Direct Telephone</div>
                      <div className="text-base font-bold text-white group-hover:text-[#27B8F0] transition-colors tabular-nums">
                        {SITE_CONFIG.phone.display}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#27B8F0] font-bold uppercase tracking-wider">
                    Call &rarr;
                  </span>
                </a>

                {/* Email Button */}
                <a
                  href={SITE_CONFIG.email.mailTo}
                  className="flex items-center justify-between p-3.5 bg-[#0F1114] border border-white/10 hover:border-slate-400 rounded-lg transition-all group"
                  aria-label={`Email ${SITE_CONFIG.email.display}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-[#1B1E23] text-[#C9CED6] flex items-center justify-center border border-white/10">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Email Blueprints</div>
                      <div className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors truncate max-w-[200px]">
                        {SITE_CONFIG.email.display}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                    Email &rarr;
                  </span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={SITE_CONFIG.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-[#0F1114] border border-white/10 hover:border-emerald-500/60 rounded-lg transition-all group"
                  aria-label="Chat with NexMetal Works on WhatsApp"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-[#1B1E23] text-emerald-400 flex items-center justify-center border border-white/10">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Instant Messaging</div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {SITE_CONFIG.whatsapp.display}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                    Chat &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Operating Hours & Service Area Placeholders */}
            <div className="bg-[#16191E] border border-[#C9CED6]/20 rounded-xl p-6 shadow-xl text-xs space-y-4">
              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#27B8F0] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase tracking-wider block mb-0.5">
                    {SITE_CONFIG.hours.title}
                  </span>
                  <p className="text-slate-300">{SITE_CONFIG.hours.weekday}</p>
                  <p className="text-slate-400 mt-0.5">{SITE_CONFIG.hours.weekend}</p>
                  <p className="text-slate-500 italic mt-1">{SITE_CONFIG.hours.emergency}</p>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <MapPin className="w-5 h-5 text-[#27B8F0] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase tracking-wider block mb-0.5">
                    {SITE_CONFIG.serviceArea.title}
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {SITE_CONFIG.serviceArea.description}
                  </p>
                  <p className="text-slate-400 mt-1 font-mono">
                    {SITE_CONFIG.address.display}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Schematic Map Placeholder Card */}
            <div className="bg-[#16191E] border border-[#C9CED6]/20 rounded-xl p-5 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Location & Service Hub
                  </div>
                  <span className="text-[11px] font-mono text-[#27B8F0]">
                    ALBERTA, CA
                  </span>
                </div>

                {/* Industrial Vector Map Graphic */}
                <div className="relative w-full h-36 bg-[#0B0D0F] border border-white/10 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  {/* Grid Lines */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(39, 184, 240, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(39, 184, 240, 0.4) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Schematic Region Marker */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[#27B8F0]/20 border border-[#27B8F0] flex items-center justify-center mb-1 animate-pulse">
                      <Navigation className="w-5 h-5 text-[#27B8F0]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      NexMetal Works Shop Hub
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Edmonton & Surrounding Industrial Corridors
                    </span>
                  </div>
                </div>
              </div>

              {/* Get Directions Button (Editable Link) */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Shop visits by consultation
                </span>
                <a
                  href={SITE_CONFIG.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0F1114] bg-[#27B8F0] hover:bg-[#1fa5d8] rounded transition-colors"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
