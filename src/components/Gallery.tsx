
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src: "/public/images/8f32465a-f3c6-43bd-957d-245ef80d1dab.png",
      alt: "NLP Presentation - What is NLP?",
      caption: "Presenting on Natural Language Processing"
    },
    {
      src: "/public/images/be2ebd16-1663-4a57-960a-be08b2663e1a.png",
      alt: "Conference Group Photo",
      caption: "Conference networking and collaboration"
    },
    {
      src: "/public/images/Screenshot2025-06-20003417.png",
      alt: "Professional Portrait",
      caption: "Professional development activities"
    },
    {
      src: "/public/images/f07872e9-47eb-4159-b3fb-6b2ba4ff6f17.png",
      alt: "Speaking Engagement",
      caption: "Conference presentation on stage"
    },
    {
      src: "/public/images/96a80c04-231a-4020-abc7-434074738ebf.png",
      alt: "Workshop Participation",
      caption: "Hands-on technical workshop"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="relative py-20 overflow-hidden">
      {/* Background with enhanced purple-cyan gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-400/10 to-cyan-500/15"></div>
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.4))] dark:bg-grid-slate-700/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-4">
            Professional Journey
          </h2>
          <p className="text-4xl md:text-5xl font-bold holographic-text mb-4">
            Highlights from conferences, presentations, and collaborative work
          </p>
        </div>

        <div className="relative">
          {/* Main image display - much larger */}
          <div className="relative h-96 md:h-[32rem] lg:h-[36rem] rounded-lg overflow-hidden glass-morphism neon-border">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-contain bg-gradient-to-br from-purple-900/20 to-cyan-900/20 transition-all duration-500"
            />
            
            {/* Image overlay with caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="text-white font-medium text-xl md:text-2xl">
                {images[currentImage].caption}
              </p>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/30 border-purple-400/50 hover:bg-purple-500/30 backdrop-blur-sm w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/30 border-purple-400/50 hover:bg-purple-500/30 backdrop-blur-sm w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Thumbnail navigation - larger thumbnails */}
          <div className="flex justify-center gap-4 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentImage === index 
                    ? 'border-purple-400 shadow-lg shadow-purple-400/40 scale-110' 
                    : 'border-purple-400/30 hover:border-cyan-400/50 hover:scale-105'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Image counter */}
          <div className="text-center mt-6">
            <span className="text-purple-400 text-lg">
              {currentImage + 1} of {images.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
