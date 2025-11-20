import { Smartphone, Tablet, Monitor, Gamepad2, GamepadIcon } from "lucide-react";
import appStoreBadge from "@/assets/Download_on_the_App_Store_Badge.png";
import googlePlayBadge from "@/assets/google_play.b8a7e58.png";

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-title text-2xl sm:text-3xl md:text-4xl text-primary mb-6 text-center leading-relaxed">
          Download EPOS
        </h2>
        
        <p className="font-body text-lg text-center text-foreground/80 mb-8 max-w-2xl mx-auto">
          EPOS will be available on multiple platforms
        </p>
        
        {/* Device Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          <div className="flex flex-col items-center gap-2">
            <Smartphone className="w-8 h-8 text-primary" />
            <span className="font-body text-sm text-foreground/70">Phone</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Tablet className="w-8 h-8 text-primary" />
            <span className="font-body text-sm text-foreground/70">Tablet</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Monitor className="w-8 h-8 text-primary" />
            <span className="font-body text-sm text-foreground/70">PC</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <span className="font-body text-sm text-foreground/70">PlayStation</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GamepadIcon className="w-8 h-8 text-primary" />
            <span className="font-body text-sm text-foreground/70">Nintendo</span>
          </div>
        </div>
        
        {/* Store Download Images */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-4xl mx-auto mb-12">
          {/* App Store */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              className="h-16 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>
          
          {/* Google Play */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="h-16 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>
        </div>
        
        {/* PC Download Button */}
        <div className="flex justify-center mb-8">
          <button className="pixel-border pixel-hover bg-primary text-primary-foreground font-nav px-12 py-8 text-2xl flex items-center gap-4">
            <Monitor className="w-8 h-8" />
            <span>Download for PC</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
