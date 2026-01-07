import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PartnershipPage() {
  return (
    <main className="min-h-screen bg-white mt-20">
      {/* Breadcrumb and Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* <p className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>{" "}
            / Partner With Lucid
          </p> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">Partner With Lucid</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              At Lucid, our partners gain the advantage of a truly multi-disciplinary team. What sets us apart is the
              deep expertise our specialists bring across the full lifecycle of cloud-based solution delivery — from
              strategy and development to deployment and optimization.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Powered by {`Salesforce's`} proven capabilities in transforming enterprise operations, Lucid enables partners
              to maximize the value of their existing assets while unlocking new possibilities for growth.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">Partnership Opportunities</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Partner for Growth */}
            <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-black mb-6">Partner for Growth</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Leverage {`Lucid's`} cloud expertise to build, deploy, and scale powerful cloud-based solutions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Grow with our certified Salesforce and domain experts, backed by innovative products and best
                    practices.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Transform into an industry-leading organization with guidance that elevates your standards and
                    capabilities.
                  </span>
                </li>
              </ul>
            </Card>

            {/* Partner for Outsourcing */}
            <Card className="p-8 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-black mb-6">Partner for Outsourcing</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">Experience hassle-free project execution from start to finish.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Eliminate quality concerns, delays, and cost overruns with a trusted delivery partner.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Maintain complete visibility and control over your resource and project requirements.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Why Partner With Lucid</h2>

          <div className="">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border border-brand-primary/50">
              <h3 className="text-xl font-bold text-black mb-4">Fully Customized Partnership Model</h3>
              <p className="text-gray-700 mb-6">
                Lucid delivers a fully customized partnership model supported by a proven track record of quality and
                performance.
              </p>

              <div className="mb-6 pb-6 border-b border-brand-primary/50">
                <h4 className="font-bold text-black mb-3">Exclusive Recognition</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-brand-primary font-bold">→</span>
                    <span>
                      Receive the Lucid Badge of Excellence, displayable on partner websites for added credibility
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-brand-primary font-bold">→</span>
                    <span>Get recognition on the Lucid website and across all collaborative projects</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Models Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">What Partners Receive</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Support",
                description: "Access to Lucid's team of certified Salesforce specialists and domain experts",
              },
              {
                title: "Innovative Solutions",
                description: "Leverage cutting-edge products and proven best practices for your projects",
              },
              {
                title: "Credibility Badge",
                description: "Display the Lucid Badge of Excellence on your website and marketing materials",
              },
              {
                title: "Website Recognition",
                description: "Featured recognition on Lucid's website and collaborative project listings",
              },
              {
                title: "Quality Assurance",
                description: "Benefit from our proven track record of quality and performance delivery",
              },
              {
                title: "Growth Opportunities",
                description: "Access new markets and expand your service offerings with our solutions",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-white border border-gray-200 hover:border-brand-primary/50 transition-colors"
              >
                <h3 className="font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-blue-50 to-white border-2 border-brand-primary/60">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Start the Conversation</h2>
              <p className="text-gray-700 text-lg mb-2">
                Ready to explore our Partner Program and the opportunities it can open for your organization?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
              <a
                href="mailto:info@lucidinfosystems.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email us
              </a>
            </div>

            <p className="text-center text-gray-600 text-sm mt-6">
              Send inquiries to:{" "}
              <a
                href="mailto:info@lucidinfosystems.com"
                className="font-semibold text-brand-primary hover:text-brand-primary/90"
              >
                info@lucidinfosystems.com
              </a>
            </p>
          </Card>
        </div>
      </section>
    </main>
  )
}
