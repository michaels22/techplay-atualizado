import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Devices from "@/components/Devices";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Devices />
      <Pricing />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
