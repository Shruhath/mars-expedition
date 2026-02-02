import { Globe, Thermometer, Clock, Droplets, Mountain, Orbit } from 'lucide-react';
import marsLandscape from '@/assets/mars-landscape.jpg';

interface WhyMarsSlideProps {
  isActive: boolean;
}

const facts = [
  { icon: Globe, label: 'Diameter', earth: '12,742 km', mars: '6,779 km' },
  { icon: Thermometer, label: 'Avg Temp', earth: '15°C', mars: '-65°C' },
  { icon: Clock, label: 'Day Length', earth: '24 hours', mars: '24.6 hours' },
  { icon: Droplets, label: 'Water', earth: '71% surface', mars: 'Ice caps' },
];

const reasons = [
  { icon: Mountain, title: 'Similar Terrain', desc: 'Rocky surface ideal for exploration and construction' },
  { icon: Orbit, title: 'Closest Neighbor', desc: 'Most accessible planet for human missions' },
  { icon: Droplets, title: 'Water Ice Present', desc: 'Subsurface ice can be converted to water and fuel' },
];

const WhyMarsSlide = ({ isActive }: WhyMarsSlideProps) => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col justify-center px-6 pt-4 pb-24 md:pb-32 relative">
      <div className="max-w-7xl w-full mx-auto z-10 flex flex-col h-full max-h-[900px]">
        {/* Header - Compact */}
        <div className="text-center mb-6 shrink-0">
          <h1
            className={`text-3xl md:text-5xl font-heading font-bold text-secondary neon-text-orange mb-2 ${isActive ? 'animate-slide-up' : 'opacity-0'
              }`}
          >
            Why Mars?
          </h1>
          <p
            className={`text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto ${isActive ? 'animate-slide-up-delayed' : 'opacity-0'
              }`}
          >
            Understanding why the Red Planet is humanity's next frontier
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center flex-1 min-h-0">
          {/* Left: Mars Image with Comparison */}
          <div
            className={`relative h-full flex flex-col justify-center ${isActive ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative rounded-2xl overflow-hidden glass-panel p-3">
              <img
                src={marsLandscape}
                alt="Mars Surface"
                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-xl"
              />

              {/* Floating Stats */}
              <div className="absolute -right-4 -bottom-4 glass-card p-3 animate-float">
                <div className="text-[10px] text-muted-foreground mb-1">Distance from Sun</div>
                <div className="text-base font-heading text-primary">227.9M km</div>
              </div>
            </div>

            {/* Earth vs Mars Comparison */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {facts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className={`glass-card p-3 text-center ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <Icon className="w-4 h-4 text-primary mx-auto mb-1.5" />
                    <div className="text-[10px] text-muted-foreground mb-1">{fact.label}</div>
                    <div className="text-[10px]">
                      <span className="text-space-blue">🌍 {fact.earth}</span>
                    </div>
                    <div className="text-[10px] mt-0.5">
                      <span className="text-secondary">🔴 {fact.mars}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Reasons */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`glass-card p-4 flex items-start gap-4 group hover:border-secondary/50 transition-all duration-300 ${isActive ? 'animate-slide-left opacity-0' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                >
                  <div className="challenge-icon w-10 h-10 shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-heading font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground font-body">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Additional Points */}
            <div
              className={`glass-panel p-4 ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              <h4 className="text-sm md:text-base font-heading text-primary mb-2">Key Scientific Interest</h4>
              <ul className="space-y-1.5 text-muted-foreground font-body text-xs md:text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Evidence of ancient water flows
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Potential for past microbial life
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Resources for future colonies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Orbit */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-secondary/5 rounded-full pointer-events-none" />
    </div>
  );
};

export default WhyMarsSlide;
