import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroCarouselProps {
  children: React.ReactNode;
}

export function HeroCarousel({ children }: HeroCarouselProps) {
  const images = [
    'https://images.unsplash.com/photo-1710699799270-60557af12e2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGdyZWVuJTIwZmllbGQlMjBzdW5zZXQlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NzE0OTQ4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1643474004250-05d73e1473e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYXJtZXIlMjBvcmdhbmljJTIwdmVnZXRhYmxlcyUyMGZyZXNoJTIwaGFydmVzdHxlbnwxfHx8fDE3NzE0OTQ4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1709733971576-8caa9df3abf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWlyeSUyMGNvdyUyMHBhc3R1cmUlMjBncmVlbiUyMG5hdHVyZSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc3MTQ5NDgyOXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1670932913464-71e4e87bd616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwcGxhbnRhdGlvbiUyMHRyZWVzJTIwYWdyb2ZvcmVzdHJ5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MTQ5NDgyOXww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const AUTOPLAY_INTERVAL = 6000; // 6 seconds - optimal for reading content

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-advance carousel with progress
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    // Reset progress when slide changes
    setProgress(0);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (AUTOPLAY_INTERVAL / 50)); // Update every 50ms
      });
    }, 50);

    // Slide change
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, AUTOPLAY_INTERVAL);

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isAutoPlaying, currentIndex, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setProgress(0);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Images with Ken Burns Effect */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <motion.div
            animate={{ scale: 1.08 }}
            transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${images[currentIndex]}')`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator with Progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 rounded-full overflow-hidden ${
              index === currentIndex
                ? 'w-12 h-3'
                : 'w-3 h-3 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex ? (
              <>
                {/* Background */}
                <div className="absolute inset-0 bg-white/40" />
                {/* Progress Bar */}
                <motion.div
                  className="absolute inset-0 bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isAutoPlaying ? progress / 100 : 0 }}
                  transition={{ duration: 0.05, ease: 'linear' }}
                />
              </>
            ) : (
              <div className="w-full h-full bg-white/50" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}