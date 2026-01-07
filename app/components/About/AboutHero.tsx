import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
  return (
    <section className="relative flex items-center justify-center text-center h-[60vh] sm:h-[90vh] sm:m-2 rounded-xl bg-transparent text-white py-16 md:py-24 px-4">
        <div className="absolute top-0 right-0 bottom-0 left-0  z-[-1]">
          <Image
            src="/HeroBg.svg"
            alt="Office professionals discussing cloud solutions"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className=" text-3xl sm:text-4xl md:text-7xl font-bold mb-6 text-balance">
            LUCID
            <br />
            <span className="text-2xl  sm:text-3xl md:text-5xl">INFOSYSTEMS</span>
          </h1>
          <p className="text-lg md:text-xl text-white font-medium max-w-2xl text-balance">
            Driving Business Excellence through Cloud Innovation.
          </p>
        </div>
      </section>
  )
}

export default AboutHero
