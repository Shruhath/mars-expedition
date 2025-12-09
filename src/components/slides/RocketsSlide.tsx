import { Flame, Shield, Gauge, Cpu } from 'lucide-react';
import rocketLaunch from '@/assets/rocket-launch.jpg';

interface RocketsSlideProps {
  isActive: boolean;
}

const rocketFeatures = [
  { icon: Flame, title: 'Raptor Engines', desc: 'Most powerful rocket engines ever built' },
  { icon: Shield, title: 'Heat Shield', desc: 'Advanced ceramic tiles for re-entry protection' },
  { icon: Gauge, title: '150 Tons to LEO', desc: 'Massive payload capacity for Mars missions' },
  { icon: Cpu, title: 'Autonomous Landing', desc: 'AI-powered precision landing systems' },
];

const RocketsSlide = ({ isActive }: RocketsSlideProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Rocket Launch Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={rocketLaunch}
          alt="Rocket Launch"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="max-w-7xl w-full mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h1 
              className={`text-5xl md:text-7xl font-heading font-bold text-primary neon-text mb-4 ${
                isActive ? 'animate-slide-up' : 'opacity-0'
              }`}
            >
              Rockets &
              <br />
              Spacecraft
            </h1>
            <p 
              className={`text-xl text-muted-foreground font-body mb-12 ${
                isActive ? 'animate-slide-up-delayed' : 'opacity-0'
              }`}
            >
              Next-generation vehicles designed to carry humans to Mars and beyond
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {rocketFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`glass-card group hover:border-primary/50 transition-all duration-300 ${
                      isActive ? 'animate-slide-right opacity-0' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <Icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Rocket Visualization */}
          <div 
            className={`relative ${isActive ? 'animate-scale-in opacity-0' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            {/* Starship Card */}
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground">Starship</h3>
                  <p className="text-primary text-sm">Super Heavy + Starship Stack</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-heading">
                  Active Development
                </div>
              </div>

              {/* Rocket Illustration */}
              <div className="relative h-64 flex items-center justify-center">
                <div className="relative">
                  {/* Rocket Body */}
                  <div className="w-16 h-48 bg-gradient-to-b from-muted via-foreground/80 to-muted rounded-t-full relative">
                    {/* Windows */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/50 animate-pulse" />
                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/30" />
                    
                    {/* Fins */}
                    <div className="absolute bottom-0 -left-4 w-4 h-16 bg-muted skew-x-12 rounded-sm" />
                    <div className="absolute bottom-0 -right-4 w-4 h-16 bg-muted -skew-x-12 rounded-sm" />
                  </div>
                  
                  {/* Exhaust */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-16 bg-gradient-to-b from-secondary via-primary to-transparent rounded-b-full blur-sm animate-pulse opacity-80" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-foreground via-secondary to-transparent rounded-b-full blur-sm" />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-primary">120m</p>
                  <p className="text-xs text-muted-foreground">Height</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-secondary">5000t</p>
                  <p className="text-xs text-muted-foreground">Thrust</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-accent">100+</p>
                  <p className="text-xs text-muted-foreground">Passengers</p>
                </div>
              </div>
            </div>

            {/* NASA SLS Badge */}
            <div 
              className={`absolute -bottom-4 -left-4 glass-card p-4 ${
                isActive ? 'animate-float' : ''
              }`}
            >
              <p className="text-sm text-muted-foreground">Also in development</p>
              <p className="text-lg font-heading text-space-blue">NASA SLS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDuration: '2s' }} />
      <div className="absolute bottom-10 left-1/3 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
    </div>
  );
};

export default RocketsSlide;
