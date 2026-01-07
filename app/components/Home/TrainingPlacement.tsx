import Link from "next/link";

export function TrainingPlacements() {
    return (
      <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-5xl font-bold mb-12 text-black">Training & Placements</h2>
  
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Training Programs */}
            <div className="flex flex-col justify-start">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Our Comprehensive Training Programs</h3>
              <p className="flex-1 text-base text-gray-700 mb-6 leading-relaxed">
                Lucid Infosystems offers project-based training in information technology, tailored for fresh computer
                science graduates. Our programs focus on cloud-based Salesforce solutions, product development, and IT
                services, ensuring that trainees gain hands-on experience and industry-relevant skills.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border-2 border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition-colors w-fit"
              >
                Learn More
                <span className="text-lg">→</span>
              </Link>
            </div>
  
            {/* Right Column - Internships & Scholarships */}
            <div className="flex flex-col justify-start">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Internships and Scholarships</h3>
              <p className="flex-1 text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                We provide internship opportunities that include in-house training, allowing individuals to apply their
                learning in real-world scenarios. Additionally, Lucid offers scholarships worth up to $1,000, covering
                training, internships, and certificates of achievement, to support the professional growth of college
                students.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 border-2 border-black px-6 py-3 text-black font-semibold hover:bg-black hover:text-white transition-colors w-fit"
              >
                Explore Scholarships
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
  