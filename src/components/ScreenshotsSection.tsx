import villageBg from "@/assets/village-bg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ScreenshotsSection = () => {
  // Generate placeholder screenshots using the village image
  const screenshots = Array(6).fill(villageBg);

  return (
    <section id="screenshots" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-title text-2xl sm:text-3xl md:text-4xl text-primary mb-12 text-center leading-relaxed">
          Game Screenshots
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {screenshots.map((screenshot, index) => (
                <CarouselItem key={index}>
                  <div className="pixel-border bg-card overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={screenshot}
                        alt={`Game screenshot ${index + 1}`}
                        className="w-full h-full object-cover pixel-art"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="pixel-border" />
            <CarouselNext className="pixel-border" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
