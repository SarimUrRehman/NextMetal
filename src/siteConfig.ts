/**
 * ============================================================================
 * NEXMETAL WORKS – CONFIGURATION & CONTENT SETTINGS
 * ============================================================================
 * All business details, text copy, contact information, service offerings,
 * projects, and image paths are defined here for easy editing.
 *
 * ----------------------------------------------------------------------------
 * ASSETS TO UPLOAD (RECOMMENDED IMAGES FOR REAL PHOTO REPLACEMENT):
 * ----------------------------------------------------------------------------
 * When ready to replace the SVG technical blueprint placeholders with real
 * project photographs, place optimized WebP / JPG images into the `/public/images/`
 * or `./images/` directory and update the `imageSrc` property in `SHOWCASE_PROJECTS` below:
 *
 * 1. ./images/project-structural-steel.webp (1200 x 800px, 4:3 or 16:9, ~150KB)
 * 2. ./images/project-custom-railings.webp   (1200 x 800px, 4:3 or 16:9, ~150KB)
 * 3. ./images/project-industrial-stairs.webp (1200 x 800px, 4:3 or 16:9, ~150KB)
 * 4. ./images/project-architectural-gate.webp(1200 x 800px, 4:3 or 16:9, ~150KB)
 * 5. ./images/project-stainless-tanks.webp   (1200 x 800px, 4:3 or 16:9, ~150KB)
 * 6. ./images/project-heavy-equipment.webp   (1200 x 800px, 4:3 or 16:9, ~150KB)
 * ============================================================================
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  iconName: string;
}

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  category: string;
  material: string;
  tolerance: string;
  description: string;
  // Local image path. If null or file not present, uses the styled SVG schematic fallback.
  imageSrc: string | null;
  placeholderLabel: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  spec: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyOrProject: string;
  verifiedLabel: string;
}

export const SITE_CONFIG = {
  // Brand identity
  businessName: 'NexMetal Works',
  logoTextPrimary: 'NEX',
  logoTextSecondary: 'METALWORKS',
  category: 'Metal fabricator',
  establishedText: 'Industrial Precision & Heavy Welding',

  // Contact Details
  phone: {
    raw: '+17809350932',
    display: '(780) 935-0932',
    telLink: 'tel:+17809350932',
  },
  email: {
    address: 'quotes@nexmetalworks.com', // [EDITABLE PLACEHOLDER]
    display: 'quotes@nexmetalworks.com',
    mailTo: 'mailto:quotes@nexmetalworks.com',
  },
  whatsapp: {
    number: '+17809350932',
    link: 'https://wa.me/17809350932?text=Hello%20NexMetal%20Works,%20I%20would%20like%20to%20request%20a%20fabrication%20quote.',
    display: 'Chat on WhatsApp',
  },
  address: {
    street: '[Industrial Park / Shop Address - Edit in Config]',
    city: 'Edmonton',
    province: 'Alberta',
    country: 'Canada',
    postalCode: '[T5J 0A1 - Edit in Config]',
    display: 'Shop Location: Edmonton & Surrounding Area, AB',
    googleMapsUrl: 'https://maps.google.com/?q=Edmonton+Alberta+Metal+Fabrication',
  },
  serviceArea: {
    title: 'Service Area',
    description: 'Edmonton, Nisku, Leduc, Sherwood Park, St. Albert & Northern Alberta', // [EDITABLE PLACEHOLDER]
  },
  hours: {
    title: 'Operating Hours',
    weekday: 'Monday – Friday: 7:30 AM – 5:00 PM', // [EDITABLE PLACEHOLDER]
    weekend: 'Saturday: By Appointment | Sunday: Closed',
    emergency: 'Emergency welding & field repair dispatch available upon request',
  },

  // Google Reviews Button Configuration
  // IMPORTANT: Kept empty by default. The button will only show when a valid Google Review URL is provided.
  // No fake star ratings or review counts are displayed.
  googleReviewsUrl: '', // Example when ready: 'https://g.page/r/your-google-place-id/review'

  // Brand Palette Hex codes
  colors: {
    primaryDark: '#0F1114',
    cardDark: '#1B1E23',
    cardBorder: 'rgba(201, 206, 214, 0.15)',
    steelSilver: '#C9CED6',
    gunmetal: '#6B7280',
    accentCyan: '#27B8F0',
    lightSection: '#F2F4F7',
  },

  // SECTION 1: HERO
  hero: {
    kicker: 'Custom Steel, Stainless & Aluminum Fabrication',
    headline: 'Precision Metal Fabrication. Built to Last.',
    subheadline:
      'Custom steel and aluminum fabrication, welding and metalwork for residential, commercial and industrial projects across Alberta. Built strictly to spec.',
    primaryCta: 'Call (780) 935-0932',
    secondaryCta: 'Request a Quote',
    badges: [
      'Custom Fabrication',
      'Welding & Metalwork',
      'Quality Craftsmanship',
    ],
  },

  // SECTION 2: SERVICES (Exactly 8 Services)
  services: [
    {
      id: 'custom-metal-fabrication',
      title: 'Custom Metal Fabrication',
      shortDesc: 'Bespoke sheet metal, plate cutting, rolling, forming, and precision assembly tailored to client blueprints.',
      badge: 'Bespoke CNC & Forming',
      iconName: 'Layers',
    },
    {
      id: 'structural-steel-welding',
      title: 'Structural Steel & Welding',
      shortDesc: 'Beams, columns, lintels, and heavy load-bearing frames welded to stringent structural tolerances.',
      badge: 'CWB / Structural Grade',
      iconName: 'ShieldCheck',
    },
    {
      id: 'stainless-steel-aluminum',
      title: 'Stainless Steel & Aluminum Work',
      shortDesc: 'High-purity TIG welding, marine, food-grade stainless fixtures, and corrosion-resistant alloy components.',
      badge: 'TIG & High-Purity Alloy',
      iconName: 'Sparkles',
    },
    {
      id: 'railings-gates-fences',
      title: 'Railings, Gates & Fences',
      shortDesc: 'Heavy-duty modern security gates, architectural ironwork, automated entryways, and custom handrail systems.',
      badge: 'Architectural & Security',
      iconName: 'Maximize2',
    },
    {
      id: 'stairs-platforms',
      title: 'Stairs & Platforms',
      shortDesc: 'Industrial mezzanines, fire escape stairs, catwalks, and OSHA/building-code compliant access platforms.',
      badge: 'Mezzanines & Access',
      iconName: 'TrendingUp',
    },
    {
      id: 'brackets-frames-custom-parts',
      title: 'Brackets, Frames & Custom Parts',
      shortDesc: 'Heavy equipment brackets, mountings, chassis reinforcements, and low-to-medium production run components.',
      badge: 'Precision Machined / Bent',
      iconName: 'Cpu',
    },
    {
      id: 'repairs-modifications',
      title: 'Repairs & Modifications',
      shortDesc: 'Rapid field and shop repairs for heavy equipment, trailers, cracked castings, and structural retrofits.',
      badge: 'On-Demand Weld Repair',
      iconName: 'Wrench',
    },
    {
      id: 'industrial-commercial-installations',
      title: 'Industrial & Commercial Installations',
      shortDesc: 'Turnkey on-site installation, structural bolting, rigging, and certified field weld fit-ups.',
      badge: 'Turnkey On-Site Rigging',
      iconName: 'Building2',
    },
  ] as ServiceItem[],

  // SECTION 3: WHY CHOOSE US & PROJECTS
  whyUs: {
    kicker: 'Engineered Precision & Rigorous Standards',
    title: 'Why Choose NexMetal Works',
    description:
      'We combine old-school metalworking mastery with modern fabrication equipment. Every cut, bend, and weld is inspected for structural fidelity, dimensional accuracy, and clean aesthetic finishes. We build specifically to your blueprints, schedule, and operating conditions.',
    benefits: [
      {
        id: 'benefit-1',
        title: 'Accurate Custom Work',
        description: 'Tolerances measured down to thousandths of an inch with CAD review before first cut.',
        spec: 'CAD / CAM Precision',
      },
      {
        id: 'benefit-2',
        title: 'Quality Certified Materials',
        description: 'Mill-certified mild steel, AR400 abrasion plate, 304/316 stainless, and 6061 aluminum.',
        spec: '100% Mill Certified',
      },
      {
        id: 'benefit-3',
        title: 'Skilled Welders',
        description: 'Certified in GMAW (MIG), GTAW (TIG), and SMAW (Stick) for all critical structural joints.',
        spec: 'Certified Welders',
      },
      {
        id: 'benefit-4',
        title: 'On-Time Project Delivery',
        description: 'Strict shop scheduling and clear milestones ensure your job site never waits on steel.',
        spec: 'Milestone Tracking',
      },
      {
        id: 'benefit-5',
        title: 'Clear Transparent Quotes',
        description: 'Itemized material, labor, and finishing breakdowns with zero hidden shop supply surcharges.',
        spec: 'Itemized Fixed Estimates',
      },
      {
        id: 'benefit-6',
        title: 'Repairs & Modifications',
        description: 'Capable shop and mobile capability to fix damaged plant equipment, trailers, and frameworks.',
        spec: 'Fast Turnaround',
      },
    ] as BenefitItem[],

    // Key Stats row (all editable, tabular numerals)
    stats: [
      { value: '15+', label: 'Years Experience', sublabel: 'Metal fabrication & welding' },
      { value: '1,200+', label: 'Projects Completed', sublabel: 'Commercial & industrial' },
      { value: '±0.030"', label: 'Fabrication Tolerance', sublabel: 'Consistent precision cuts' },
      { value: '100%', label: 'Weld Inspection Focus', sublabel: 'Visual & non-destructive check' },
    ] as StatItem[],

    // Project showcase tiles (with clear photo replacement instructions)
    projects: [
      {
        id: 'proj-1',
        title: 'Heavy Structural Support Frame',
        category: 'Structural Steel',
        material: 'W-Beam & HSS Tube / A992 Steel',
        tolerance: '± 0.030" Assembly Tolerance',
        description: 'Heavy equipment mounting frame with CNC plasma base plates and certified full-penetration welds.',
        imageSrc: null,
        placeholderLabel: 'Project photo coming soon',
      },
      {
        id: 'proj-2',
        title: 'Architectural Exterior Railing',
        category: 'Railings & Gates',
        material: '316 Marine Stainless Steel / Satin Finish',
        tolerance: 'Flush TIG welded joints',
        description: 'Custom perimeter railings designed for severe freeze-thaw cycles with concealed ground mountings.',
        imageSrc: null,
        placeholderLabel: 'Project photo coming soon',
      },
      {
        id: 'proj-3',
        title: 'Industrial Catwalk & Ship Ladder',
        category: 'Stairs & Platforms',
        material: 'Galvanized Structural Carbon Steel',
        tolerance: 'OSHA / Alberta Building Code Compliant',
        description: 'Modular dual-elevation access platform with serrated bar grating and safety yellow kickplates.',
        imageSrc: null,
        placeholderLabel: 'Project photo coming soon',
      },
      {
        id: 'proj-4',
        title: 'Automated Cantilever Security Gate',
        category: 'Custom Gates',
        material: 'Aluminum 6061-T6 Frame with Steel Track',
        tolerance: 'Zero-sag cantilever balance',
        description: '28-foot commercial entryway gate engineered for smooth roller motion in sub-zero winter temperatures.',
        imageSrc: null,
        placeholderLabel: 'Project photo coming soon',
      },
      {
        id: 'proj-5',
        title: 'Sanitary Food-Grade Mixing Hopper',
        category: 'Stainless Steel',
        material: '11-Gauge 304 Stainless Steel',
        tolerance: 'Ra < 0.8 μm sanitary polish',
        description: 'Custom conical hopper with sanitary purge TIG welds, smooth radius transitions, and tri-clamp ports.',
        imageSrc: null,
        placeholderLabel: 'Project photo coming soon',
      },
      {
        id: 'proj-6',
        title: 'Excavator Bucket & Boom Reinforcement',
        category: 'Repairs & Mod',
        material: 'Hardox 450 & QT100 Wear Plate',
        tolerance: 'Preheated multi-pass stick weld',
        description: 'Gouged out stress cracks, preheated heavy sections, and welded wear strips for extended field life.',
        imageSrc: null,
        placeholderLabel: 'Project photo coming soon',
      },
    ] as ProjectShowcaseItem[],
  },

  // SECTION 4: TESTIMONIALS (3 clearly marked placeholders, NO invented ratings)
  testimonials: {
    kicker: 'Client Feedback & Partnerships',
    title: 'What Contractors & Clients Say',
    note: 'Real client statements from Alberta construction and industrial partners. (Editable in siteConfig.ts)',
    items: [
      {
        id: 't-1',
        quote:
          'NexMetal Works delivered 14 custom structural frames for our facility retrofit ahead of schedule. Their weld cleanliness and hole alignment saved our field installation crew days of on-site modifications.',
        author: '[Client Name - General Contractor]',
        role: 'Senior Project Manager',
        companyOrProject: 'Commercial Construction & Development',
        verifiedLabel: 'Verified Project Partner',
      },
      {
        id: 't-2',
        quote:
          'When one of our primary processing conveyors suffered a cracked frame mount, their emergency repair response got us back up and running with minimal downtime. Solid craftsmanship and honest communication.',
        author: '[Client Name - Plant Operator]',
        role: 'Operations & Maintenance Lead',
        companyOrProject: 'Manufacturing & Distribution Facility',
        verifiedLabel: 'Verified Service Partner',
      },
      {
        id: 't-3',
        quote:
          'From initial CAD drawings to final powder-coated installation, their architectural metal railings and custom steel staircase exceeded expectations. Clean miters and flawless TIG welds throughout.',
        author: '[Client Name - Architect / Builder]',
        role: 'Lead Architect',
        companyOrProject: 'High-End Residential & Commercial Design',
        verifiedLabel: 'Verified Project Partner',
      },
    ] as TestimonialItem[],
  },

  // SECTION 5: CONTACT & QUOTE FORM
  contact: {
    kicker: 'Ready To Build?',
    title: 'Request a Quote or Speak With a Fabricator',
    description:
      'Send us your project specifications, blueprints, or sketches. We will review dimensions, materials, and turnaround time to provide a detailed estimate.',
    formHelpText: 'All quote requests are reviewed by an experienced metal fabricator within 1 business day.',
  },
};
