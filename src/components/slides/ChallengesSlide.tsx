import { Clock, Radiation, Activity, Wifi, Brain, Shield } from 'lucide-react';
import spaceCapsule from '@/assets/space-capsule.jpg';

interface ChallengesSlideProps {
  isActive: boolean;
}

const challenges = [
  { 
    icon: Clock, 
    title: 'Travel Time', 
    desc: '6-9 months journey through deep space',
    color: 'primary'
  },
  { 
    icon: Radiation, 
    title: 'Radiation Exposure', 
    desc: 'Cosmic rays and solar radiation threats',
    color: 'secondary'
  },
  { 
    icon: Activity, 
    title: 'Microgravity Effects', 
    desc: 'Bone and muscle deterioration',
    color: 'accent'
  },
  { 
    icon: Wifi, 
    title: 'Communication Delay', 
    desc: '4-24 minute signal delay each way',
    color: 'primary'
  },
  { 
    icon: Brain, 
    title: 'Psychological Stress', 
    desc: 'Isolation and confinement challenges',
    color: 'secondary'
  },
  { 
    icon: Shield, 
    title: 'Life Support', 
    desc: 'Maintaining breathable air and water',
    color: 'accent'
  },
];

const ChallengesSlide = ({ isActive }: ChallengesSlideProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-7xl w-full mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 
            className={`text-5xl md:text-7xl font-heading font-bold text-accent neon-text-magenta mb-4 ${
              isActive ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            Challenges
          </h1>
          <p 
            className={`text-xl text-muted-foreground font-body max-w-2xl mx-auto ${
              isActive ? 'animate-slide-up-delayed' : 'opacity-0'
            }`}
          >
            The journey to Mars presents unprecedented challenges for humanity
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Challenges */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.title}
                  className={`glass-card group hover:scale-[1.02] transition-all duration-300 ${
                    isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className={`challenge-icon mb-4 group-hover:animate-pulse-glow`}>
                    <Icon className={`w-7 h-7 ${
                      challenge.color === 'primary' ? 'text-primary' :
                      challenge.color === 'secondary' ? 'text-secondary' :
                      'text-accent'
                    }`} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {challenge.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Capsule Image */}
          <div 
            className={`relative ${isActive ? 'animate-scale-in opacity-0' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="glass-panel p-3 rounded-2xl">
              <img 
                src={spaceCapsule}
                alt="Space Capsule Interior"
                className="w-full h-80 lg:h-[450px] object-cover rounded-xl"
              />
              
              {/* Vibration effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl pointer-events-none" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-muted-foreground">Distance</span>
                      <p className="text-primary font-heading font-bold">225M km</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div>
                      <span className="text-muted-foreground">Duration</span>
                      <p className="text-secondary font-heading font-bold">7 months</p>
                    </div>
                    <div className="h-8 w-px bg-border" />
                    <div>
                      <span className="text-muted-foreground">Speed</span>
                      <p className="text-accent font-heading font-bold">24km/s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning indicator */}
            <div className="absolute -top-3 -right-3 w-6 h-6 bg-secondary rounded-full animate-pulse flex items-center justify-center">
              <span className="text-xs">!</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div 
          className={`mt-12 glass-panel p-6 ${isActive ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
          style={{ animationDelay: '0.7s' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-heading font-bold text-primary">480</p>
              <p className="text-sm text-muted-foreground">Days minimum mission</p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div>
              <p className="text-3xl font-heading font-bold text-secondary">300+</p>
              <p className="text-sm text-muted-foreground">mSv radiation exposure</p>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div>
              <p className="text-3xl font-heading font-bold text-accent">22</p>
              <p className="text-sm text-muted-foreground">Minutes avg signal delay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesSlide;
