import { useRef, useState } from "react";
import { Maximize2, Play } from "lucide-react";

const DemoSection = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleFullscreen = () => {
    const el = screenRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    // Other vendor-prefixed APIs are rarely needed in modern browsers
  };

  const handlePlay = () => {
    setIsOverlayVisible(false);
    // Placeholder: When Unity build is ready, inject the HTML here
  };

  return (
    <section id="demo" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-title text-2xl sm:text-3xl md:text-4xl text-primary mb-8 text-center leading-relaxed">
          Play Demo
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={handlePlay}
              className="pixel-border pixel-hover bg-primary text-primary-foreground font-nav px-6 py-3 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Play
            </button>
            <button
              onClick={handleFullscreen}
              className="pixel-border-light pixel-hover bg-card text-card-foreground font-nav px-6 py-3 flex items-center gap-2"
            >
              <Maximize2 className="w-5 h-5" />
              Fullscreen
            </button>
          </div>

          {/* Placeholder Screen */}
          <div ref={screenRef} className="pixel-border bg-black overflow-hidden">
            <div className="relative aspect-video">
              {/* Placeholder area where Unity game will be embedded */}
              {isOverlayVisible && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-title text-white text-2xl mb-2">Demo Coming Soon</div>
                    <div className="font-body text-white/80">Press Play to preview the frame</div>
                  </div>
                </div>
              )}
              {/* When ready, mount the Unity canvas/iframe inside this container */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;


