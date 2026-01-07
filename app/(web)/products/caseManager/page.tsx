import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function CaseManagerPage() {
  return (
    <div className="min-h-screen bg-white mt-20">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">CaseManager</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            CaseManager is a highly flexible and configurable Salesforce application designed to simplify case
            management and reduce operational noise. It enables administrators to visually prioritize cases, control
            field visibility, and automatically isolate duplicate cases—helping support teams work faster and smarter.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            With a single-click enable/disable option, CaseManager gives teams full control without disrupting
            day-to-day operations.
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
                  <span className="text-gray-700">
                    Visual case prioritization using custom color coding based on case type, subtype, or key fields
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    One-click UI controls to show or hide fields, sections, and related lists as needed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Automatic duplicate case detection with quarantining in a custom object for review
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Seamless conversion of quarantined duplicates into standard cases when required
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    Single-click activation/deactivation to quickly adapt to operational needs
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
