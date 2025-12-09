import { useState, useEffect, useCallback } from 'react';
import StarField from './StarField';
import SlideNavigation from './SlideNavigation';
import TeamSlide from './slides/TeamSlide';
import IntroSlide from './slides/IntroSlide';
import WhyMarsSlide from './slides/WhyMarsSlide';
import ChallengesSlide from './slides/ChallengesSlide';
import RocketsSlide from './slides/RocketsSlide';
import LivingOnMarsSlide from './slides/LivingOnMarsSlide';
import RobotsSlide from './slides/RobotsSlide';
import FutureSlide from './slides/FutureSlide';

const slides = [
  { id: 'team', component: TeamSlide },
  { id: 'intro', component: IntroSlide },
  { id: 'why-mars', component: WhyMarsSlide },
  { id: 'challenges', component: ChallengesSlide },
  { id: 'rockets', component: RocketsSlide },
  { id: 'living', component: LivingOnMarsSlide },
  { id: 'robots', component: RobotsSlide },
  { id: 'future', component: FutureSlide },
];

const SpacePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= slides.length || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const goToPrevious = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated Star Background */}
      <StarField />

      {/* Slides Container */}
      <div className="relative z-10">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component;
          const isActive = currentSlide === index;
          
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive 
                  ? 'opacity-100 translate-x-0 pointer-events-auto' 
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full pointer-events-none'
                  : 'opacity-0 translate-x-full pointer-events-none'
              }`}
              style={{
                visibility: Math.abs(currentSlide - index) <= 1 ? 'visible' : 'hidden',
              }}
            >
              <SlideComponent isActive={isActive} />
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToSlide={goToSlide}
      />

      {/* Slide Counter */}
      <div className="fixed top-6 right-6 z-50 glass-card px-4 py-2">
        <span className="font-heading text-primary">{currentSlide + 1}</span>
        <span className="text-muted-foreground mx-1">/</span>
        <span className="text-muted-foreground">{slides.length}</span>
      </div>

      {/* Keyboard Hint */}
      <div className="fixed bottom-6 right-6 z-50 text-xs text-muted-foreground hidden md:flex items-center gap-2">
        <kbd className="px-2 py-1 bg-muted rounded text-foreground">←</kbd>
        <kbd className="px-2 py-1 bg-muted rounded text-foreground">→</kbd>
        <span>to navigate</span>
      </div>
    </div>
  );
};

export default SpacePresentation;
