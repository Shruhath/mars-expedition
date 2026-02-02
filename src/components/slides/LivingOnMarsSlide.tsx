import { Home, Wind, Droplets, Leaf, Sun, Mountain } from 'lucide-react';
import marsBase from '@/assets/mars-base.jpg';

interface LivingOnMarsSlideProps {
  isActive: boolean;
}

const habitats = [
  {
    icon: Home,
    title: 'Dome Habitats',
    desc: 'Pressurized living spaces with radiation shielding',
    detail: '3D-printed structures using Martian regolith'
  },
  {
    icon: Mountain,
    title: 'Underground Bases',
    desc: 'Natural protection from radiation and temperature extremes',
    detail: 'Lava tubes provide ready-made shelters'
  },
  {
    icon: Wind,
    title: 'Oxygen Generation',
    desc: 'MOXIE technology extracts O2 from CO2 atmosphere',
    detail: '95% CO2 Martian atmosphere as source'
  },
  {
    icon: Droplets,
    title: 'Water Extraction',
    desc: 'Mining subsurface ice deposits',
    detail: 'Essential for drinking, farming, and fuel'
  },
  {
    icon: Leaf,
    title: 'Greenhouse Farming',
    desc: 'Hydroponic and aeroponic food production',
    detail: 'LED-lit growing facilities'
  },
  {
    icon: Sun,
    title: 'Solar Power',
    desc: 'Large solar arrays for energy needs',
    detail: 'Supplemented by nuclear reactors'
  },
];

const LivingOnMarsSlide = ({ isActive }: LivingOnMarsSlideProps) => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col justify-center px-6 pt-4 pb-24 md:pb-32 relative">
      <div className="max-w-7xl w-full mx-auto z-10 flex flex-col h-full max-h-[900px]">
        {/* Header - Compact */}
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <h1
            className={`text-3xl md:text-5xl font-heading font-bold text-secondary neon-text-orange mb-2 ${isActive ? 'animate-slide-up' : 'opacity-0'
              }`}
          >
            Living on Mars
          </h1>
          <p
            className={`text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto ${isActive ? 'animate-slide-up-delayed' : 'opacity-0'
              }`}
          >
            Building humanity's first permanent settlement on another planet
          </p>
        </div>

        {/* Mars Base Image - Reduced Height */}
        <div
          className={`mb-4 md:mb-6 shrink-0 ${isActive ? 'animate-scale-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="glass-panel p-2 md:p-3 rounded-2xl relative overflow-hidden">
            <img
              src={marsBase}
              alt="Mars Base Concept"
              className="w-full h-40 md:h-52 lg:h-60 object-cover rounded-xl"
            />

            {/* Glowing Base Lights Effect */}
            <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-primary rounded-full blur-sm animate-pulse" />
            <div className="absolute bottom-24 left-1/3 w-3 h-3 bg-primary rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-22 right-1/3 w-4 h-4 bg-secondary rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-xl" />

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4">
              <p className="text-[10px] text-primary font-heading">Concept Art</p>
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">Mars Colony Alpha</h3>
            </div>
          </div>
        </div>

        {/* Habitat Features Grid - Expanded to fill space but compact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 min-h-0 content-start">
          {habitats.map((habitat, index) => {
            const Icon = habitat.icon;
            return (
              <div
                key={habitat.title}
                className={`glass-card p-3 group relative overflow-hidden hover:border-secondary/50 transition-all duration-300 flex flex-col ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-heading font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                      {habitat.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-body mb-1.5 leading-tight">
                      {habitat.desc}
                    </p>
                  </div>
                </div>

                {/* Tooltip on hover/Reveal */}
                <div className="mt-auto pt-2 border-t border-border/50">
                  <p className="text-[10px] md:text-xs text-primary font-body">
                    {habitat.detail}
                  </p>
                </div>

                {/* Animated plant for greenhouse card */}
                {habitat.title === 'Greenhouse Farming' && (
                  <div className="absolute top-2 right-2 text-lg animate-float" style={{ animationDuration: '4s' }}>
                    🌱
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Info - Compact */}
        <div
          className={`mt-4 text-center shrink-0 ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          style={{ animationDelay: '0.9s' }}
        >
          <p className="text-xs md:text-sm text-muted-foreground font-body">
            First permanent settlement estimated by <span className="text-primary font-heading">2040</span>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-48 h-48 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
    </div>
  );
};

export default LivingOnMarsSlide;
