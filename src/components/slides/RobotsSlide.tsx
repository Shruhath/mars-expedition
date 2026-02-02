import { Bot, Cpu, Heart, Plane, Wrench, Eye } from 'lucide-react';
import marsRover from '@/assets/mars-rover.jpg';

interface RobotsSlideProps {
  isActive: boolean;
}

const robots = [
  {
    icon: Eye,
    title: 'Exploration Rovers',
    desc: 'Mapping terrain and analyzing soil samples',
    status: 'Active on Mars'
  },
  {
    icon: Wrench,
    title: 'Construction Bots',
    desc: 'Autonomous builders for habitats and infrastructure',
    status: 'In Development'
  },
  {
    icon: Cpu,
    title: 'AI Mission Control',
    desc: 'Real-time decision making without Earth delay',
    status: 'Testing Phase'
  },
  {
    icon: Heart,
    title: 'Medical AI',
    desc: 'Health monitoring and emergency response',
    status: 'Prototype'
  },
  {
    icon: Plane,
    title: 'Drone Scouts',
    desc: 'Aerial reconnaissance like Ingenuity',
    status: 'Proven Technology'
  },
  {
    icon: Bot,
    title: 'Companion Robots',
    desc: 'Psychological support and task assistance',
    status: 'Conceptual'
  },
];

const RobotsSlide = ({ isActive }: RobotsSlideProps) => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col justify-center px-6 pt-4 pb-24 md:pb-32 relative">
      <div className="max-w-7xl w-full mx-auto z-10 flex flex-col h-full max-h-[900px]">
        {/* Header - Compact */}
        <div className="text-center mb-4 md:mb-6 shrink-0">
          <h1
            className={`text-3xl md:text-5xl font-heading font-bold text-primary neon-text mb-2 ${isActive ? 'animate-slide-up' : 'opacity-0'
              }`}
          >
            Robots & AI
          </h1>
          <p
            className={`text-base md:text-lg text-muted-foreground font-body max-w-2xl mx-auto ${isActive ? 'animate-slide-up-delayed' : 'opacity-0'
              }`}
          >
            Intelligent machines paving the way for human exploration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start flex-1 min-h-0">
          {/* Left: Rover Image with HUD */}
          <div
            className={`relative ${isActive ? 'animate-scale-in' : 'opacity-0'} h-full flex flex-col justify-center`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="glass-panel p-2 md:p-3 rounded-2xl relative overflow-hidden">
              <img
                src={marsRover}
                alt="Mars Rover"
                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-xl"
              />

              {/* HUD Overlay - Compact */}
              <div className="absolute inset-0 pointer-events-none p-4 md:p-6">
                {/* Top HUD */}
                <div className="flex justify-between items-start">
                  <div className="glass-card p-1.5 md:p-2 text-[10px] md:text-xs">
                    <span className="text-primary">STATUS:</span>
                    <span className="text-foreground ml-2">OPERATIONAL</span>
                  </div>
                  <div className="glass-card p-1.5 md:p-2 text-[10px] md:text-xs animate-pulse">
                    <span className="text-secondary">● REC</span>
                  </div>
                </div>

                {/* Scanning lines effect */}
                <div className="absolute inset-x-6 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />

                {/* Bottom HUD */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex justify-between">
                  <div className="glass-card p-1.5 md:p-2 text-[10px] md:text-xs">
                    <span className="text-muted-foreground">TERRAIN:</span>
                    <span className="text-foreground ml-2">ROCKY</span>
                  </div>
                  <div className="glass-card p-1.5 md:p-2 text-[10px] md:text-xs">
                    <span className="text-muted-foreground">TEMP:</span>
                    <span className="text-secondary ml-2">-63°C</span>
                  </div>
                </div>

                {/* Targeting reticle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-primary/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Robot Types */}
          <div className="space-y-2 md:space-y-3 overflow-y-auto max-h-full pr-2">
            {robots.map((robot, index) => {
              const Icon = robot.icon;
              return (
                <div
                  key={robot.title}
                  className={`glass-card group flex items-center gap-3 md:gap-4 py-2 md:py-3 hover:border-primary/50 transition-all duration-300 ${isActive ? 'animate-slide-left opacity-0' : 'opacity-0'
                    }`}
                  style={{ animationDelay: `${0.3 + index * 0.08}s` }}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:animate-pulse-glow transition-all">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm md:text-base font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {robot.title}
                      </h3>
                      <span className={`text-[10px] md:text-xs px-1.5 py-0.5 rounded-full ${robot.status === 'Active on Mars' ? 'bg-green-500/20 text-green-400' :
                          robot.status === 'Proven Technology' ? 'bg-primary/20 text-primary' :
                            'bg-muted text-muted-foreground'
                        }`}>
                        {robot.status}
                      </span>
                    </div>
                    <p className="text-[10px] md:text-xs text-muted-foreground font-body mt-0.5">
                      {robot.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar - Compact */}
        <div
          className={`mt-4 md:mt-6 glass-panel p-3 md:p-4 shrink-0 ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
            <div>
              <p className="text-xl md:text-2xl font-heading font-bold text-primary">6</p>
              <p className="text-xs text-muted-foreground">Rovers on Mars</p>
            </div>
            <div className="h-6 w-px bg-border hidden md:block" />
            <div>
              <p className="text-xl md:text-2xl font-heading font-bold text-secondary">72</p>
              <p className="text-xs text-muted-foreground">Ingenuity Flights</p>
            </div>
            <div className="h-6 w-px bg-border hidden md:block" />
            <div>
              <p className="text-xl md:text-2xl font-heading font-bold text-accent">1M+</p>
              <p className="text-xs text-muted-foreground">Images Captured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotsSlide;
