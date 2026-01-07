import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen bg-white mt-10">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <Badge className="mb-4 bg-brand-primary/5 text-brand-primary hover:bg-brand-primary/10">SERVICES</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">Development</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Give your business a competitive edge by leveraging the power of the cloud through Lucid's smart, scalable
            solutions. Trusted by both global enterprises and growing startups, Lucid helps you move faster, innovate
            confidently, and outperform the competition.
          </p>
        </div>
      </section>

      {/* Why Choose Lucid Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Why Choose Lucid Development?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Solutions Tailored to Your Needs</h3>
                  <p className="text-gray-600 text-sm">
                    Our offerings are designed to fit your business—whether you're a small team or a large enterprise.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Cutting-Edge Technology</h3>
                  <p className="text-gray-600 text-sm">
                    We provide advanced, enterprise-grade technology solutions without the enterprise-grade cost
                    barrier.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Reinvent Your Operations</h3>
                  <p className="text-gray-600 text-sm">
                    We help you identify gaps, optimize processes, and transform weaknesses into strengths.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Overview</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                At Lucid Infosystems, we work closely with our clients to deliver high-performance, cloud-based
                solutions tailored to their business goals. Our experience across multiple industries makes us a
                reliable growth partner for organizations of all sizes.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We perform in-depth feasibility studies, requirement analyses, gap assessments, and cost evaluations to
                deliver solutions that maximize user satisfaction and operational success.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
                With our structured project management approach, you get optimal resource utilization, clear visibility
                and control, and smooth handling of change requests and escalations.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Reliability and security are at the core of everything we build. Most of our cloud solutions are built
                on platforms known for their power, scalability, and security.
              </p>
            </div>
          </div>

          <Card className="p-8 bg-brand-secondary/5 border-2 border-brand-primary/30">
            <h3 className="font-bold text-black mb-4 text-xl">Best of Both Worlds</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-4">
              At Lucid, our philosophy is simple: your needs come first. Through thorough feasibility studies,
              requirements mapping, gap analysis, and cost evaluation, we design solutions that offer exceptional
              performance and user experience.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              We've supported small businesses taking their first step into the digital world and partnered with Fortune
              500 companies driving industry transformation.
            </p>
          </Card>
        </div>
      </section>
    </main>
  )
}
