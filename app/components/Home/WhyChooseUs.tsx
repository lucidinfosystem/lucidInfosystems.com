import { Button } from "@/components/ui/button";
import { ArrowBigLeftDash, ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Innovative Solutions",
    description:
      "Lucid Infosystems delivers intelligent solutions that simplify complex challenges. From Salesforce implementations to cloud computing, our products combine elegance and ease of use to accelerate your growth.",
  },
  {
    title: "Accessible Technology",
    description:
      "Our philosophy is to make technology simple, effective, and affordable. We bridge the gap between where you are now and where you want to be, providing solutions that truly work for your business.",
  },
  {
    title: "Trusted Partnership",
    description:
      "With over 100 clients, we focus on delivering professional expertise, continuous learning, and innovative approaches. At Lucid, you gain a devoted guide and a loyal partner committed to your success.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-16 lg:px-18">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 md:mb-12">
          Why Choose Lucid
        </h2>

        <p className="text-sm sm:text-2xl font-medium text-foreground/80 mb-10 sm:mb-12 md:mb-16  leading-[28px]  sm:leading-[43px]">
          Lucid Infosystems combines domain knowledge and technical depth to
          deliver cloud-first, end-to-end solutions. From custom product
          development and Salesforce consulting to training and managed
          services, we align technology with business goals to drive efficiency,
          agility, and impact.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col ">
              {/* Feature Title */}
              <h3 className="text-xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-5">
                {feature.title}
              </h3>

              <p className=" flex-1 text-sm sm:text-base text-foreground/70 text-justify mb-6 sm:mb-8 leading-relaxed">
                {feature.description}
              </p>

              <Button
                variant="outline"
                className="w-fit text-sm px-3.5 py-3 rounded-none border border-black sm:text-base bg-transparent"
              >
                Learn More <ArrowRight />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
