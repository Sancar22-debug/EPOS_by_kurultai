import skyBg from "@/assets/sky-mountains-bg.png";
import tsiLogo from "@/assets/tsi-logo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden snap-start snap-always"
      style={{
        backgroundImage: `url(${skyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        <h1 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary mb-6 drop-shadow-lg leading-relaxed">
          Welcome to EPOS
        </h1>
        
        <p className="font-body text-lg sm:text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto drop-shadow">
          A cozy game about culture, adventure, and history.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/demo" className="pixel-border pixel-hover bg-destructive text-destructive-foreground font-nav px-8 py-4 text-lg">
            Play Demo
          </a>
          <button 
            className="pixel-border-light pixel-hover bg-card text-card-foreground font-nav px-8 py-4 text-lg"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* TSI Logo - Left Bottom */}
      <div className="absolute bottom-10 left-10 z-20">
        <img 
          src={tsiLogo} 
          alt="Technical School of Innovation" 
          className="h-[100px] w-[300px] object-contain"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
