import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundRemover from "@/components/BackgroundRemover";
import WhatsAppButton from "@/components/WhatsAppButton";

const BackgroundRemoval = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BackgroundRemover />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BackgroundRemoval;