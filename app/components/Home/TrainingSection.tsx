import Image from "next/image";
import Link from "next/link";

export function TrainingSection() {
  return (
    <section className="w-full ">
      {/* Desktop and tablet layout - two column */}
      <div className="hidden md:grid md:grid-cols-7 ">
        {/* Left side - Image */}
        <div className="relative w-full h-full col-span-4">
          <Image
            width={100}
            height={100}
            src="/trainingSection.svg"
            alt="Professionals collaborating in office"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="bg-neutral-900 text-white flex flex-col items-center justify-center p-8 lg:p-12 col-span-3">
          <div className="max-w-md text-center space-y-8">
            {/* Label */}
            <div className="text-sm tracking-widest font-medium">
              TRAINING AT LUCIDE INFOSYSTEMS
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-3xl leading-tight">
              Join our training program and jump-start your career at Lucide
              Infosystems
            </h2>

            {/* CTA Button */}
            <Link
              href="#"
              className="inline-block px-8 py-3 bg-white text-neutral-900 font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore →
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile layout - stacked */}
      <div className="md:hidden flex flex-col">
        {/* Image */}
        <div className="w-full h-64 sm:h-80">
          <Image
            width={100}
            height={100}
            src="/trainingSection.svg"
            alt="Professionals collaborating in office"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Content */}
        <div className="bg-neutral-900 text-white flex flex-col items-center justify-center p-6 sm:p-8 gap-6">
          {/* Label */}
          <div className="text-xs sm:text-sm tracking-widest font-medium">
            TRAINING AT LUCIDE INFOSYSTEMS
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center leading-tight">
            Join our training program and jump-start your career at Lucide
            Infosystems
          </h2>

          {/* CTA Button */}
          <Link
            href="#"
            className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-white text-neutral-900 font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore →
          </Link>
        </div>
      </div>
    </section>
  );
}
