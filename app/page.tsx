import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import BestSellers from "@/components/BestSellers";
import Authentic from "@/components/Authentic";
import Installers from "@/components/Installers";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Features />
      <BestSellers />
      <Authentic />
  <Installers />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}