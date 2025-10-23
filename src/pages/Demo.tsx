import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DemoSection from "@/components/DemoSection";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Demo;


