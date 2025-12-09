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
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-7xl w-full mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className={`text-5xl md:text-7xl font-heading font-bold text-secondary neon-text-orange mb-4 ${
              isActive ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            Why Mars?
          </h1>
          <p 
            className={`text-xl text-muted-foreground font-body max-w-2xl mx-auto ${
              isActive ? 'animate-slide-up-delayed' : 'opacity-0'
            }`}
          >
            Understanding why the Red Planet is humanity's next frontier
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Mars Image with Comparison */}
          <div 
            className={`relative ${isActive ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative rounded-2xl overflow-hidden glass-panel p-4">
              <img 
                src={marsLandscape} 
                alt="Mars Surface" 
                className="w-full h-64 md:h-80 object-cover rounded-xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -right-4 -bottom-4 glass-card p-4 animate-float">
                <div className="text-xs text-muted-foreground mb-1">Distance from Sun</div>
                <div className="text-lg font-heading text-primary">227.9M km</div>
              </div>
            </div>

            {/* Earth vs Mars Comparison */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {facts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div 
                    key={fact.label}
                    className={`glass-card text-center ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-xs text-muted-foreground mb-2">{fact.label}</div>
                    <div className="text-xs">
                      <span className="text-space-blue">🌍 {fact.earth}</span>
                    </div>
                    <div className="text-xs mt-1">
                      <span className="text-secondary">🔴 {fact.mars}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`glass-card flex items-start gap-4 group hover:border-secondary/50 transition-all duration-300 ${
                    isActive ? 'animate-slide-left opacity-0' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                >
                  <div className="challenge-icon shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Additional Points */}
            <div 
              className={`glass-panel p-6 ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              <h4 className="text-lg font-heading text-primary mb-4">Key Scientific Interest</h4>
              <ul className="space-y-2 text-muted-foreground font-body">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Evidence of ancient water flows
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Potential for past microbial life
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Resources for future colonies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Orbit */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-secondary/5 rounded-full pointer-events-none" />
    </div>
  );
};

export default WhyMarsSlide;
