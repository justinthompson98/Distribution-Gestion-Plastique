import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { RecoveryProgram } from './components/RecoveryProgram';
import { ImpactStats } from './components/ImpactStats';
import { AboutUs } from './components/AboutUs';
import { Partners } from './components/Partners';
import { ContactForm } from './components/ContactForm';
import { EditableProvider } from './components/EditableText';
import { GoogleAnalytics } from './components/GoogleAnalytics';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleSelectProduct = (productName: string) => {
    setSelectedProduct(productName);
  };

  return (
    <EditableProvider>
      <GoogleAnalytics />
      <div className="min-h-screen bg-[#f8faff] font-sans antialiased text-zinc-900 scroll-smooth">
        {/* 27 years industry, professional-industrial-ecological styling */}
        <Navbar />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Products Grille Tarifaire & Personalisation Options */}
        <Products onSelectProduct={handleSelectProduct} />
        
        {/* 4-Step Recovery / Closed-loop Recycling Program */}
        <RecoveryProgram />

        {/* Our Impact in numbers */}
        <ImpactStats />
        
        {/* About Us of Distribution GP */}
        <AboutUs />
        
        {/* Partners & Active Clients */}
        <Partners />
        
        {/* Quote request contact form */}
        <ContactForm selectedBagType={selectedProduct} />
      </div>
    </EditableProvider>
  );
}

