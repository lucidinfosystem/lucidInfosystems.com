interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Salesforce Consulting & Implementation",
    description:
      "We design Salesforce solutions that fit your business, not the other way around. From setup and customization to seamless integrations, we ensure your teams get the most out of Salesforce with measurable results.",
  },
  {
    title: "Cloud Strategy & Migration",
    description:
      "Our experts simplify the journey to the cloud by creating secure, scalable, and cost-efficient architectures. We handle migration with minimal disruption, so your business is ready for tomorrow.",
  },
  {
    title: "Custom Product Development",
    description:
      "We bring your ideas to life with tailored applications and platforms. From concept to launch, our development process blends creativity with engineering precision to deliver impactful digital products.",
  },
  {
    title: "Managed Services & Support",
    description:
      "Technology needs care long after it goes live. Our managed services keep your systems optimized, secure, and evolving, so you can focus on growing your business while we handle the rest.",
  },
  {
    title: "Training & Capacity Building",
    description:
      "We believe technology adoption goes hand-in-hand with knowledge. Our tailored training programs empower teams to master Salesforce, cloud platforms, and custom tools. By blending hands-on practice with real business scenarios, we ensure your people can confidently use, manage, and extend the solutions we deliver.",
  },
  {
    title: "Visa & Employment Support",
    description:
      "We provide guidance and support for eligible candidates seeking visa sponsorship, helping talented professionals join our teams and contribute to projects across geographies.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading - Left Aligned */}

        {/* Services Grid - 2 columns on desktop, 1 on mobile */}
        <div className="sm:grid grid-cols-3">
          <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              What we do
            </h2>
          </div>
          <div className="grid grid-cols-1 col-span-2 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col">
                {/* Service Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
