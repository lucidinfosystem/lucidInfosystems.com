import { Eye, Target } from "lucide-react";

const visionMisionData = [
  {
    title: "Our Mission",
    icon: Target,
    description:
      "Provide unique and inventive solutions and services that deliver superior, measurable values to all stakeholders.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    description:
      "Be the company of choice for the global market to deliver a world-class customer experience through great software, great values, and great people.",
  },
];

const VisionMission = () => {
  return (
    <div className=" py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {visionMisionData.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-slate-100/20 backdrop-blur-sm border border-gray-100/50 p-8 h-full hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-black">
                    {item.title}
                  </h2>
                </div>
                <p className="text-lg text-black leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
