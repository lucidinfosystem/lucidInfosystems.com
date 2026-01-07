import {
    Award,
    LucideIcon,
    Shield,
    Sparkles,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";

interface AboutItem {
    title: string;
    description: string;
    icon: LucideIcon; // since you're using icons from lucide-react
    index: number;
}

const values = [
  {
    title: "Client First",
    description: "Putting our clients at the center of everything we do",
    icon: Users,
  },
  {
    title: "Act as a Stakeholder",
    description: "Taking ownership in every interaction and decision",
    icon: Target,
  },
  {
    title: "Result Oriented",
    description: "Delivering measurable, meaningful solutions",
    icon: TrendingUp,
  },
  {
    title: "Build Timeless Relationships",
    description: "Creating lasting partnerships based on trust",
    icon: Sparkles,
  },
  {
    title: "Professional Excellence",
    description: "Maintaining the highest standards in all business practices",
    icon: Award,
  },
  {
    title: "Ethics Above All",
    description: "Operating with integrity and moral principles always",
    icon: Shield,
  },
];

const ValueCard = ({ title, description, icon: Icon, index } : AboutItem) => {
  return (
    <div
      className="group relative bg-linear-to-br from-white to-gray-50  p-8 shadow-sm rounded-xs hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500"></div>

      {/* Floating orb effect */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        <div className="mb-6 relative">
          <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

const GuidingValues = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Our Guiding Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidingValues;
