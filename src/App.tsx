/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUsAndProjects } from './components/WhyUsAndProjects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  // Service pre-selection state passed from Services "Enquire" buttons to Contact form
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#0F1114] text-slate-100 flex flex-col font-sans selection:bg-[#27B8F0] selection:text-[#0F1114]">
      {/* Sticky Navbar (Not counted as a content section) */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services (8 Responsive Cards with Enquire links) */}
        <Services onSelectService={handleSelectService} />

        {/* Section 3: Why Choose Us + Projects (Benefits, Stats, Blueprint Showcase) */}
        <WhyUsAndProjects />

        {/* Section 4: Testimonials (3 Clearly Marked Placeholders, No Invented Ratings) */}
        <Testimonials />

        {/* Section 5: Contact & Quote Form (Two-Column Layout, Validated Form, Direct Dispatch) */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Footer (Not counted as a content section) */}
      <Footer />

      {/* Floating Cyan Mobile Call Button & Back-to-Top Button */}
      <FloatingActions />
    </div>
  );
}
