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
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-7xl w-full mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className={`text-5xl md:text-7xl font-heading font-bold text-primary neon-text mb-4 ${
              isActive ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            Robots & AI
          </h1>
          <p 
            className={`text-xl text-muted-foreground font-body max-w-2xl mx-auto ${
              isActive ? 'animate-slide-up-delayed' : 'opacity-0'
            }`}
          >
            Intelligent machines paving the way for human exploration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Rover Image with HUD */}
          <div 
            className={`relative ${isActive ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="glass-panel p-3 rounded-2xl relative overflow-hidden">
              <img 
                src={marsRover}
                alt="Mars Rover"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* HUD Overlay */}
              <div className="absolute inset-0 pointer-events-none p-6">
                {/* Top HUD */}
                <div className="flex justify-between items-start">
                  <div className="glass-card p-2 text-xs">
                    <span className="text-primary">STATUS:</span>
                    <span className="text-foreground ml-2">OPERATIONAL</span>
                  </div>
                  <div className="glass-card p-2 text-xs animate-pulse">
                    <span className="text-secondary">● REC</span>
                  </div>
                </div>

                {/* Scanning lines effect */}
                <div className="absolute inset-x-6 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse" />
                
                {/* Bottom HUD */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                  <div className="glass-card p-2 text-xs">
                    <span className="text-muted-foreground">TERRAIN:</span>
                    <span className="text-foreground ml-2">ROCKY</span>
                  </div>
                  <div className="glass-card p-2 text-xs">
                    <span className="text-muted-foreground">TEMP:</span>
                    <span className="text-secondary ml-2">-63°C</span>
                  </div>
                </div>

                {/* Targeting reticle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 border-2 border-primary/30 rounded-full" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-primary/50 rounded-full" />
                  <div className="absolute top-1/2 left-0 w-4 h-px bg-primary/50" />
                  <div className="absolute top-1/2 right-0 w-4 h-px bg-primary/50" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-primary/50" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-4 bg-primary/50" />
                </div>
              </div>

              {/* Rover Wheels Animation Indicator */}
              <div className="absolute bottom-20 left-10 flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                <div className="w-3 h-3 border-2 border-primary rounded-full animate-spin" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>

          {/* Right: Robot Types */}
          <div className="space-y-3">
            {robots.map((robot, index) => {
              const Icon = robot.icon;
              return (
                <div
                  key={robot.title}
                  className={`glass-card group flex items-center gap-4 py-4 hover:border-primary/50 transition-all duration-300 ${
                    isActive ? 'animate-slide-left opacity-0' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.08}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:animate-pulse-glow transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {robot.title}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        robot.status === 'Active on Mars' ? 'bg-green-500/20 text-green-400' :
                        robot.status === 'Proven Technology' ? 'bg-primary/20 text-primary' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {robot.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-body mt-1">
                      {robot.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <div 
          className={`mt-12 glass-panel p-6 ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-heading font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground">Rovers on Mars</p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div>
              <p className="text-3xl font-heading font-bold text-secondary">72</p>
              <p className="text-sm text-muted-foreground">Ingenuity Flights</p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div>
              <p className="text-3xl font-heading font-bold text-accent">1M+</p>
              <p className="text-sm text-muted-foreground">Images Captured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotsSlide;
