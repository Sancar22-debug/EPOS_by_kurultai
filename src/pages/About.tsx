import Header from "@/components/Header";
import Footer from "@/components/Footer";
import peoples from "@/assets/peoples.png";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="px-4 py-24">
        <div className="w-full max-w-5xl mx-auto min-h-[calc(100vh-16rem)] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div className="pixel-border bg-card p-8 shadow-xl">
          <h1 className="font-title text-3xl text-primary mb-4">About Us</h1>
          <p className="font-body text-foreground/90 leading-relaxed">
            We are Team Kurultai FIP #6, 10 third-year students from TSI AUCA, combining
            skills in design, development, marketing, and management. Our mission is to
            create a game that celebrates real people, real history, and authentic culture,
            offering players an experience far from typical Westernized stories.
          </p>
          </div>
          <div className="flex items-end justify-center">
          <img
            src={peoples}
            alt="Team Kurultai"
            className="w-full max-w-xl drop-shadow-2xl"
          />
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;


