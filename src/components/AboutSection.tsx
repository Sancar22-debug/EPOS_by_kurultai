import villageBg from "@/assets/village-bg.png";
import { Button } from "@/components/ui/button";
import { Users, BookOpen } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden snap-start snap-always"
      style={{
        backgroundImage: `url(${villageBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/10" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="pixel-border-light bg-card/70 backdrop-blur-sm p-8 md:p-12">
            <h2 className="font-title text-2xl sm:text-3xl md:text-4xl text-primary mb-8 text-center leading-relaxed">
              About the Game
            </h2>
            
            <div className="font-body text-base sm:text-lg md:text-xl text-foreground/90 space-y-6 mb-8">
              <p>
                EPOS is a peaceful adventure game where you can explore the rich tapestry of Kyrgyz history and culture. 
                Journey through beautiful pixel art landscapes, meet fascinating characters, and discover ancient stories 
                that have been passed down through generations.
              </p>
              
              <p>
                Immerse yourself in a cozy world filled with traditional yurts, majestic mountains, and vibrant communities. 
                Experience the warmth of nomadic hospitality, learn about ancient customs, and embark on a journey that 
                celebrates cultural heritage while having fun.
              </p>
              
              <p className="font-semibold text-primary">
                Discover. Explore. Learn. Have Fun.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="pixel-border pixel-hover bg-primary text-primary-foreground font-nav flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Play Trailer
              </Button>
              <a href="/about">
                <Button 
                  variant="outline" 
                  className="pixel-border pixel-hover font-nav flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  About Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
