import { Card } from "@/components/ui/card";
import React from "react";

const cardsData = [
  {
    title: "Professional Expertise",
    description:
      "Our team delivers solutions that make a difference with the perfect blend of elegance and ease of usage.",
    key: 1,
  },
  {
    title: "Tailored Solutions",
    description:
      "We provide intelligent solutions designed to turbo-charge your growth and solve complex challenges.",
    key: 2,
  },
  {
    title: "Trusted Partnership",
    description:
      "With 100+ clients collaborating with us, we pride ourselves on being a devoted guide and loyal partner.",
    key: 3,
  },
];

const AboutLucid = () => {
  return (
    <>
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            About Lucid
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Lucid Infosystems is the leader in cloud-based Enterprise
              Implementations with our suite of tailored applications and
              services. Our solutions improve strategic alignment and
              profitability through seamless management of the compliance and
              innovation pipeline, create transparency and enhance operational
              excellence through effective process automation.
            </p>
            <p className="text-lg">
              We help you with critical and complex Salesforce & Cloud solutions
              QTC implementations. We deliver professional expertise through
              solutions that make a difference. No matter what the need, we are
              sure to have an intelligent solution.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Lucid */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Why Choose Lucid
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl leading-relaxed">
            {`Our products carry the perfect blend of elegance and ease of usage.
            By partnering with us, you get access to a gamut of choices designed
            to turbo-charge your growth. From complex Salesforce implementation
            problems to tomorrow's cloud computing challenges, we make
            everything Lucid.`}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {cardsData?.map((data) => (
              <Card
                key={data.key}
                className="relative overflow-hidden p-6 border shadow-none border-gray-100 rounded-none"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="text-xl font-bold mb-3 text-blue-600 ">
                  {data.title}
                </h3>
                <p className="text-gray-700">{data.description}</p>
              </Card>
            ))}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            The philosophy at Lucid has always been to make technology simple
            and affordable. Our technology-integrated solutions focus on closing
            the gap between where you are now and where you want to be. For an
            unparalleled user experience, for professional expertise to fulfill
            your ever-changing needs, for an inherent willingness to learn, and
            for the patience to innovate — these are some of the reasons why our
            100+ clients collaborate with us.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutLucid;
