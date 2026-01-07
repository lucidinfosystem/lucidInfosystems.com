import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function QuickTurnPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Quick Turn Solutions</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Quick Turn Solutions deliver rapid, custom Salesforce and cloud-based applications designed to get you to
            market faster—without compromising quality or scalability. Built for speed and precision, our solutions
            address immediate business needs while significantly reducing both development time and overall cost.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            By combining deep Salesforce expertise with proven delivery frameworks, Lucid helps you turn ideas into
            production-ready solutions—fast.
          </p>
        </section>

        {/* Key Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
          <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Accelerated speed-to-market with ready-to-deploy custom Salesforce solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Lower total cost of ownership through optimized development and reduced rework
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Business-focused execution that solves real, immediate client challenges
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Lucid Smart Solutions advantage—pre-engineered intelligence built for scale
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Trusted by industry leaders across multiple domains</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
