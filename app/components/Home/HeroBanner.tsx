import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className=" w-full ">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-end pb-10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/HeroBg.svg"
            alt="Office professionals discussing cloud solutions"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 w-full ">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-light text-white leading-tight mb-8 ">
            {/* Transforming Ideas into Cloud-Powered <br className="hidden sm:block"></br> Enterprise Success */}
            We deliver superior, measurable value to customers by implementing
            cloud-based solutions.
          </h1>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-semibold rounded-none py-3 px-4 sm:p-6 h-auto text-base "
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
