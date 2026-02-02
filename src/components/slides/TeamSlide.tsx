import { Rocket, Star, Globe, Satellite, Telescope, Orbit } from 'lucide-react';

const teamMembers = [
  { id: 'CB.SC.U4CSE24111', name: 'Samith', icon: Rocket },
  { id: 'CB.SC.U4CSE24114', name: 'Prudhvi', icon: Star },
  { id: 'CB.SC.U4CSE24116', name: 'Dhaurshand', icon: Globe },
  { id: 'CB.SC.U4CSE24123', name: 'Hasini', icon: Satellite },
  { id: 'CB.SC.U4CSE24124', name: 'Shruhath', icon: Telescope },
  { id: 'CB.SC.U4CSE24135', name: 'Likhith', icon: Orbit },
];

interface TeamSlideProps {
  isActive: boolean;
}

const TeamSlide = ({ isActive }: TeamSlideProps) => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center px-6 pt-4 pb-24 md:pb-32 relative">
      {/* Slide Content */}
      <div className="max-w-6xl w-full mx-auto text-center z-10 flex flex-col h-full max-h-[900px] justify-center">
        <h1
          className={`text-4xl md:text-6xl font-heading font-bold text-primary neon-text mb-2 ${isActive ? 'animate-slide-up' : 'opacity-0'
            }`}
        >
          Team Members
        </h1>
        <p
          className={`text-lg md:text-xl text-muted-foreground font-body mb-8 md:mb-12 ${isActive ? 'animate-slide-up-delayed' : 'opacity-0'
            }`}
        >
          Creators of the Journey
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={member.id}
                className={`team-card p-4 group ${isActive ? 'animate-scale-in' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-500">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>

                {/* Name */}
                <h3 className="text-lg md:text-2xl font-heading font-semibold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>

                {/* Student ID */}
                <p className="text-xs md:text-sm text-muted-foreground font-mono tracking-wider">
                  {member.id}
                </p>

                {/* Decorative Line */}
                <div className="mt-2 md:mt-4 h-px w-12 md:w-16 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 group-hover:w-24 md:group-hover:w-32 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-float-slow pointer-events-none" />
    </div>
  );
};

export default TeamSlide;
