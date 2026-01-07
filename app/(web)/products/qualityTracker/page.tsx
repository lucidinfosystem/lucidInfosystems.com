import Link from "next/link"
import { Check } from "lucide-react"

export default function QualityTrackerPage() {
  return (
    <div className="min-h-screen bg-background mt-20">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-balance">Quality Tracker</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Quality Tracker application provides a structured framework for managing project requirements, test
            plans, test scenarios, test cases, and defects across any project or product. Designed to streamline
            collaboration between QA and development teams, it ensures full traceability throughout the entire project
            lifecycle.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            By centralizing quality processes and reporting, Quality Tracker helps teams improve delivery speed, reduce
            defects, and maintain high product standards.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="bg-muted/50 rounded-lg p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Project creation and requirement management using Excel-based inputs for quick setup
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Test plan creation with clearly defined test scenarios mapped to each requirement
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Test case authoring and defect logging directly from Excel
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Comprehensive reporting with dashboards and printable reports for audits and reviews
                </span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
