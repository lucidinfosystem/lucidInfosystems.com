import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function SalesProTrackerPage() {
  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 py-12 max-w-5xl mt-20">

        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">SalesPRO Tracker</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            SalesPRO Tracker empowers sales teams to build stronger, data-driven relationships by leveraging Salesforce
            Einstein AI to anticipate customer needs and emerging market trends. Designed for modern sales
            organizations, the application helps you stay ahead of the competition by transforming insights into
            action—anytime, anywhere.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Built with a robust HTML5 mobile experience and seamless Java-based integrations, SalesPRO Tracker adapts
            easily to your existing ecosystem. The platform also supports third-party tool integrations, enabling
            enhanced functionality tailored to your business requirements.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
          <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Intelligent outreach to identify and engage new prospects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    AI-driven market trend analysis to shortlist high-potential clients and customers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Mobile-first experience with offline access for field sales teams
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Cloud-native architecture—eliminate dependency on local storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Predictive intelligence to understand customer expectations and buying behavior
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Role-based experiences for sales operations, representatives, managers, and directors
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Ideal for small to mid-sized organizations looking to scale efficiently
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Key Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Align sales goals with organizational vision through actionable insights
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Reduce manual effort and paperwork, enabling sales teams to focus on selling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Gain deeper visibility with integrated data and analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    End-to-end process guidance with always-accessible sales playbooks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Strengthen customer relationships and never miss a critical touchpoint
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
