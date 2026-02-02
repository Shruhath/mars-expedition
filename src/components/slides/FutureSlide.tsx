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
    <div className="h-screen w-full overflow-hidden flex flex-col justify-center px-6 pt-4 pb-24 md:pb-32 relative">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src={futureCity}
          alt="Future Mars City"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>

      <div className="max-w-7xl w-full mx-auto z-10 flex flex-col h-full max-h-[900px]">
        {/* Header - Compact */}
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <h1
            className={`text-3xl md:text-5xl font-heading font-bold text-accent neon-text-magenta mb-2 ${isActive ? 'animate-slide-up' : 'opacity-0'
              }`}
          >
            The Future
          </h1>
          <p
            className={`text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto ${isActive ? 'animate-slide-up-delayed' : 'opacity-0'
              }`}
          >
            Mission timelines and the impact of Mars exploration on Earth
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 flex-1 min-h-0 items-start overflow-hidden">
          {/* Left: Timeline - Scrollable if needed */}
          <div
            className={`h-full overflow-y-auto pr-2 ${isActive ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-lg md:text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2 sticky top-0 bg-background/80 backdrop-blur-sm p-2 z-10 rounded-lg">
              <Calendar className="w-5 h-5 text-primary" />
              Mission Timeline
            </h2>

            <div className="relative pl-2">
              {/* Timeline Line */}
              <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

              {/* Timeline Events */}
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative pl-10 ${isActive ? 'animate-slide-right opacity-0' : 'opacity-0'
                      }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Dot */}
                    <div className={`absolute left-4 top-1.5 w-3 h-3 rounded-full border-2 ${item.status === 'current'
                        ? 'bg-primary border-primary animate-pulse'
                        : item.status === 'planned'
                          ? 'bg-accent/20 border-accent'
                          : 'bg-secondary/20 border-secondary'
                      }`} />

                    <div className="glass-card py-2 px-3 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-base font-heading font-bold ${item.status === 'current' ? 'text-primary' :
                            item.status === 'planned' ? 'text-accent' : 'text-secondary'
                          }`}>
                          {item.year}
                        </span>
                        {item.status === 'current' && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary animate-pulse">
                            NOW
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground font-body mt-0.5">
                        {item.event}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Impact on Earth */}
          <div className="flex flex-col h-full overflow-hidden">
            <h2
              className={`text-lg md:text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2 ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'
                }`}
              style={{ animationDelay: '0.4s' }}
            >
              <Rocket className="w-5 h-5 text-secondary" />
              Impact on Earth
            </h2>

            <div className="space-y-3 overflow-y-auto pr-2 flex-1">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <div
                    key={impact.title}
                    className={`glass-card p-3 group hover:border-secondary/50 transition-all duration-300 ${isActive ? 'animate-slide-left opacity-0' : 'opacity-0'
                      }`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-base font-heading font-semibold text-foreground mb-0.5 group-hover:text-secondary transition-colors">
                          {impact.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-body leading-tight">
                          {impact.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote - Compact */}
            <div
              className={`mt-4 glass-panel p-4 border-l-4 border-accent shrink-0 ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'
                }`}
              style={{ animationDelay: '0.9s' }}
            >
              <p className="text-sm md:text-base text-foreground font-body italic">
                "Mars is there, waiting to be reached."
              </p>
              <p className="text-xs md:text-sm text-primary font-heading mt-1">— Buzz Aldrin</p>
            </div>
          </div>
        </div>

        {/* Final CTA - Compact */}
        <div
          className={`mt-4 md:mt-8 text-center shrink-0 ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          <p className="text-lg md:text-xl font-heading text-foreground">
            The journey has already begun.
            <span className="text-primary ml-2 block md:inline">Will you be part of it?</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureSlide;
