import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

const SlideNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext, 
  onGoToSlide 
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="glow-button group flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-md border border-primary/30 rounded-full disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-primary group-hover:animate-pulse" />
        <span className="text-foreground font-body text-sm hidden sm:inline">Previous</span>
      </button>

      {/* Slide Indicators */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSlide(index)}
            className={`slide-indicator ${
              currentSlide === index 
                ? 'active' 
                : 'bg-muted hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="glow-button group flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-md border border-primary/30 rounded-full disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none transition-all duration-300"
        aria-label="Next slide"
      >
        <span className="text-foreground font-body text-sm hidden sm:inline">Next</span>
        <ChevronRight className="w-5 h-5 text-primary group-hover:animate-pulse" />
      </button>
    </div>
  );
};

export default SlideNavigation;
