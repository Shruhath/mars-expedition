import { Rocket } from 'lucide-react';
import marsHero from '@/assets/mars-hero.jpg';

interface IntroSlideProps {
  isActive: boolean;
}

const IntroSlide = ({ isActive }: IntroSlideProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Mars Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full overflow-hidden animate-rotate-slow opacity-60"
          style={{
            background: `url(${marsHero}) center/cover`,
            boxShadow: '0 0 100px rgba(255, 100, 50, 0.3), inset -50px -50px 100px rgba(0, 0, 0, 0.5)',
          }}
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-l from-transparent to-background" />
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full mx-auto text-center md:text-left z-10">
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 ${
            isActive ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <Rocket className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-body">Mission to Mars</span>
        </div>

        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-tight ${
            isActive ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <span className="text-foreground">Space</span>
          <br />
          <span className="text-primary neon-text">Exploration</span>
        </h1>

        <h2 
          className={`text-2xl md:text-4xl font-heading text-secondary neon-text-orange mb-8 ${
            isActive ? 'animate-slide-up-delayed' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          Journey to Mars
        </h2>

        <p 
          className={`text-lg md:text-xl text-muted-foreground font-body max-w-xl ${
            isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          From Earth to the Red Planet — Discover humanity's greatest adventure 
          as we explore the possibilities of becoming a multi-planetary species.
        </p>

        {/* Animated Rocket */}
        <div 
          className={`absolute bottom-32 left-10 md:left-32 ${
            isActive ? 'animate-float' : ''
          }`}
        >
          <div className="relative">
            <Rocket className="w-12 h-12 md:w-16 md:h-16 text-primary transform rotate-45" />
            {/* Exhaust Effect */}
            <div className="absolute -bottom-4 -left-2 w-4 h-8 bg-gradient-to-b from-secondary via-primary to-transparent rounded-full blur-sm animate-pulse opacity-80" />
          </div>
        </div>
      </div>

      {/* Decorative Orbit Lines */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/10 rounded-full animate-rotate-slow" style={{ animationDuration: '120s' }} />
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-accent/5 rounded-full animate-rotate-slow" style={{ animationDuration: '180s', animationDirection: 'reverse' }} />
    </div>
  );
};

export default IntroSlide;
