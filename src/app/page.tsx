import AmbientGlow from "@/components/AmbientGlow";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#2B221C] text-[#F8F6F0]">
      {/* Dynamic Cursor Ambient Glow */}
      <AmbientGlow />

      {/* Dock Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Portfolio Gallery Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Tech Stack Section */}
      <Stack />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
