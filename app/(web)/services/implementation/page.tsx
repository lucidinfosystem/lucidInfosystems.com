import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ImplementationPage() {
  return (
    <main className="min-h-screen bg-white mt-10">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <Badge className="mb-4 bg-brand-primary/5 text-brand-primary hover:bg-brand-primary/10">SERVICES</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">Implementation</h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Bringing your ideas to life shouldn't be complicated. With Lucid's full suite of professional and project
            services, we deliver smooth, reliable, and hassle-free implementations. From development to deployment to
            workforce support, we help transform your vision into a successful, scalable reality.
          </p>
        </div>
      </section>

      {/* Why Choose Lucid Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Why Choose Lucid for Implementation?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">We Understand Your Business</h3>
                  <p className="text-gray-600 text-sm">
                    Our strong track record comes from understanding your processes, culture, and unique needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Bridge the Gap</h3>
                  <p className="text-gray-600 text-sm">
                    We act as your enabler, bridging today's challenges with tomorrow's goals through expert planning.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Increase Revenue, Reduce Costs</h3>
                  <p className="text-gray-600 text-sm">
                    Our lean delivery model helps you accelerate revenue growth while optimizing costs.
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

          <div className="mb-12">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
              Whether you're building a new product or improving an existing system, Lucid gives you the expert support
              you need to deliver successfully—every time. Have a great design but need help implementing it? Need
              workforce support, deployment assistance, outsourcing, or technical leadership? Lucid is here for all of
              it.
            </p>

            <h3 className="font-bold text-black mb-4 text-xl">What You Can Expect:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">Hands-on monitoring with rapid response to critical issues</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">24/7 standby support for early-stage problems</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">Guaranteed timelines with fast delivery</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">Full visibility over project staffing and resources</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">Immediate escalation support</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-gray-600 text-sm">Onsite or offsite options tailored to your budget</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Models Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">Our Service Models</h2>

          <div className="space-y-8">
            {/* On-Site Services */}
            <Card className="p-8 border-0 shadow-sm bg-white">
              <h3 className="font-bold text-black text-2xl mb-4">On-Site Services</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Lucid assigns skilled professionals directly to your workplace during requirement gathering,
                development, testing, and deployment. Whether you need us from the start or mid-project, we're ready to
                step in.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Direct, hands-on project monitoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Faster issue resolution with 24/7 support</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Minimal turnaround time for critical fixes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Option to retain key personnel long-term</p>
                </div>
              </div>
            </Card>

            {/* Off-Shore Services */}
            <Card className="p-8 border-0 shadow-sm bg-white">
              <h3 className="font-bold text-black text-2xl mb-4">Off-Shore Services</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Our offshore implementation model lets you maintain full control over costs, timelines, and project
                governance—while benefiting from a dedicated global workforce.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Full authority over team size and skill profiles</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Dedicated 24/7 workforce</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Faster delivery without compromising quality</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Immediate escalation support</p>
                </div>
              </div>
            </Card>

            {/* Subscription Services */}
            <Card className="p-8 border-0 shadow-sm bg-white">
              <h3 className="font-bold text-black text-2xl mb-4">Subscription Services</h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Gain dedicated support from the Lucid team throughout your daily operations. Our subscription models
                provide ongoing assistance for major AppExchange applications at low monthly rates.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Direct support for clients or administrators</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Configuration and training assistance</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Predictable monthly costs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <p className="text-gray-600 text-sm">Access to latest tools and technologies</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Salesforce Excellence Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 bg-brand-primary/2 border-2 border-brand-primary/30">
            <h3 className="font-bold text-black mb-3 text-2xl">The Right Way to Grow</h3>
            <p className="text-gray-700 text-sm sm:text-base mb-3">
              Salesforce offers unmatched potential to scale your organization, boost productivity, and enhance the
              customer experience. But implementing Salesforce correctly can be complex and costly without the right
              expertise.
            </p>
            <p className="text-gray-700 text-sm sm:text-base mb-3">
              With years of proven Salesforce Consulting and Development experience, we help organizations maximize
              their investment and execute with confidence. We maintain a strong talent pool of highly trained
              professionals ready to support your strategies.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              At Lucid, great delivery is only the beginning. We aim to build long-lasting partnerships that grow with
              you.
            </p>
          </Card>
        </div>
      </section>
    </main>
  )
}
