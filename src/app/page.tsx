import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBento from "@/components/TrustBento";
import InstalledStats from "@/components/InstalledStats";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Coverage from "@/components/Coverage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SectionWave from "@/components/SectionWave";
import ScrollMotion from "@/components/ScrollMotion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollMotion />
      <Navbar />
      <Hero />
      <SectionWave />
      <TrustBento />
      <SectionWave className="-mt-2" />
      <InstalledStats />
      <SectionWave className="-mt-2" />
      <Services />
      <SectionWave className="-mt-2" />
      <Benefits />
      <SectionWave className="-mt-2" />
      <Gallery />
      <SectionWave className="-mt-2" />
      <Testimonials />
      <SectionWave className="-mt-2" />
      <Coverage />
      <SectionWave className="-mt-2" />
      <Contact />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
