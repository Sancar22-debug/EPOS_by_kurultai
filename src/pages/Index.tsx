import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="scroll-smooth">
        <HeroSection />
        <AboutSection />
        <ScreenshotsSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
