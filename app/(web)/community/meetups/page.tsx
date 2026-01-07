import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function LucidMeetupsPage() {
  return (
    <main className="min-h-screen bg-white mt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Badge className="mb-4 bg-brand-primary/10 text-brand-primary hover:bg-orange-100">COMMUNITY</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">Lucid Meetups</h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              At Lucid Meetups, industry leaders come together with emerging talent to share knowledge, spark ideas, and
              drive innovation. This dynamic community platform brings together technologists, domain experts, and
              curious minds who believe in the power of open conversation.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Lucid is built on the idea that meaningful dialogue fuels meaningful innovation. Our monthly meetups
              create a space for problem-solving through collaboration — a forum where ideas flow freely and {`tomorrow's`}
              breakthroughs take shape.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">Why Join Lucid Meetups?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Reason 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-primary text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black text-base sm:text-lg mb-2">
                  A diverse community of professionals with unique backgrounds and perspectives
                </h3>
                <p className="text-gray-600 text-sm">Connect with thought leaders and innovators across industries.</p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-primary text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black text-base sm:text-lg mb-2">Flexible participation options</h3>
                <p className="text-gray-600 text-sm">Attend onsite or join online based on what works for you.</p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-primary text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black text-base sm:text-lg mb-2">
                  A collaborative environment that encourages idea-sharing
                </h3>
                <p className="text-gray-600 text-sm">
                  Engage in learning and industry-shaping discussions that matter.
                </p>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-brand-primary text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-black text-base sm:text-lg mb-2">Influence the future</h3>
                <p className="text-gray-600 text-sm">
                  Join us in conversations that influence the future of technology and the industry at large.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">Get in Touch</h2>

          <div className="grid sm:grid-cols-3 gap-8">
            {/* Phone */}
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Phone</h3>
                  <a href="tel:+1408689590" className="text-gray-600 hover:text-orange-600 text-sm">
                    408-689-2590
                  </a>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Email</h3>
                  <a href="mailto:info@lucidinfosystems.com" className="text-gray-600 hover:text-orange-600 text-sm">
                    info@lucidinfosystems.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Company */}
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Company</h3>
                  <p className="text-gray-600 text-sm">Lucid Infosystems</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
