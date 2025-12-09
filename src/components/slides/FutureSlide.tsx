import { Calendar, Globe2, Microscope, Lightbulb, Users, Rocket } from 'lucide-react';
import futureCity from '@/assets/future-mars-city.jpg';

interface FutureSlideProps {
  isActive: boolean;
}

const timeline = [
  { year: '2024', event: 'Artemis III Moon Landing', status: 'current' },
  { year: '2026', event: 'First Starship orbital tests to Mars', status: 'planned' },
  { year: '2030', event: 'Cargo missions establish supply depots', status: 'planned' },
  { year: '2035', event: 'First human landing on Mars', status: 'planned' },
  { year: '2040', event: 'Permanent Mars settlement begins', status: 'vision' },
  { year: '2050+', event: 'Terraforming initiatives start', status: 'vision' },
];

const impacts = [
  { 
    icon: Globe2, 
    title: 'Global Collaboration', 
    desc: 'NASA, ESA, SpaceX, and international partners working together'
  },
  { 
    icon: Microscope, 
    title: 'Scientific Breakthroughs', 
    desc: 'Understanding planetary formation and potential alien life'
  },
  { 
    icon: Lightbulb, 
    title: 'Technology Transfer', 
    desc: 'Mars innovations improving life on Earth'
  },
  { 
    icon: Users, 
    title: 'Multi-Planetary Species', 
    desc: 'Ensuring humanity\'s long-term survival'
  },
];

const FutureSlide = ({ isActive }: FutureSlideProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img 
          src={futureCity}
          alt="Future Mars City"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>

      <div className="max-w-7xl w-full mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className={`text-5xl md:text-7xl font-heading font-bold text-accent neon-text-magenta mb-4 ${
              isActive ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            The Future
          </h1>
          <p 
            className={`text-xl text-muted-foreground font-body max-w-2xl mx-auto ${
              isActive ? 'animate-slide-up-delayed' : 'opacity-0'
            }`}
          >
            Mission timelines and the impact of Mars exploration on Earth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Timeline */}
          <div 
            className={`${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-primary" />
              Mission Timeline
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary" />
              
              {/* Timeline Events */}
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative pl-12 ${
                      isActive ? 'animate-slide-right opacity-0' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Dot */}
                    <div className={`absolute left-2 top-1 w-4 h-4 rounded-full border-2 ${
                      item.status === 'current' 
                        ? 'bg-primary border-primary animate-pulse' 
                        : item.status === 'planned'
                        ? 'bg-accent/20 border-accent'
                        : 'bg-secondary/20 border-secondary'
                    }`} />
                    
                    <div className="glass-card py-3 px-4 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className={`text-lg font-heading font-bold ${
                          item.status === 'current' ? 'text-primary' :
                          item.status === 'planned' ? 'text-accent' : 'text-secondary'
                        }`}>
                          {item.year}
                        </span>
                        {item.status === 'current' && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary animate-pulse">
                            NOW
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground font-body mt-1">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Impact on Earth */}
          <div>
            <h2 
              className={`text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2 ${
                isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <Rocket className="w-6 h-6 text-secondary" />
              Impact on Earth
            </h2>
            
            <div className="space-y-4">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <div
                    key={impact.title}
                    className={`glass-card group hover:border-secondary/50 transition-all duration-300 ${
                      isActive ? 'animate-slide-left opacity-0' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                          {impact.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-body">
                          {impact.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote */}
            <div 
              className={`mt-8 glass-panel p-6 border-l-4 border-accent ${
                isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.9s' }}
            >
              <p className="text-foreground font-body italic">
                "Mars is there, waiting to be reached."
              </p>
              <p className="text-primary font-heading mt-2">— Buzz Aldrin</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div 
          className={`mt-12 text-center ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          <p className="text-2xl font-heading text-foreground">
            The journey has already begun.
            <span className="text-primary ml-2">Will you be part of it?</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureSlide;
