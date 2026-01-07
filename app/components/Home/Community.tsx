import Image from "next/image";

export function CommunitySection() {
  return (
    <section className="w-full overflow-hidden sm:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-96">
        {/* Left side - Image */}
        <div className="relative overflow-hidden">
          <Image
            width={100}
            height={100}
            src="/community.svg"
            alt="Team members joining hands together in unity"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="bg-neutral-900 flex flex-col items-center justify-center px-6 py-12 md:px-12 md:py-0 gap-6">
          <div className="text-center space-y-4 max-w-md">
            <p className="text-sm tracking-widest text-neutral-400 uppercase">
              Join Our Community
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Stay up to date on the latest opportunities
            </h2>
          </div>

          <button className="px-8 py-3 bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-colors duration-200">
            Join now
          </button>
        </div>
      </div>
    </section>
  );
}
