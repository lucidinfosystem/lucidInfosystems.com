"use client"

import Image from "next/image"

const logos = [
  { name: "Honor App", url: "/ProductLogoMarquee/DA.png" },
  { name: "PLM App", url: "/ProductLogoMarquee/Plm.png" },
  { name: "Event Buddy", url: "/ProductLogoMarquee/EB.png" },
  { name: "Case Manager", url: "/ProductLogoMarquee/QT.png" },
  { name: "Quality Track", url: "/ProductLogoMarquee/CM.png" },
]

export function LogoMarquee() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-foreground">Products</h2>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-8 md:gap-12">
            {logos.map((logo) => (
              <div key={logo.name} className="shrink-0 flex items-center justify-center">
                <Image
                  src={logo.url || "/placeholder.svg"}
                  alt={logo.name}
                  width={150}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain filter hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate logos for seamless loop */}
            {logos.map((logo) => (
              <div key={`${logo.name}-duplicate`} className="shrink-0 flex items-center justify-center">
                <Image
                  src={logo.url || "/placeholder.svg"}
                  alt={logo.name}
                  width={150}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain filter  hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 bg-linear-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-linear-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
