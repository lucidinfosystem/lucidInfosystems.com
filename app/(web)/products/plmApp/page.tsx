import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function PLMPage() {
  return (
    <div className="min-h-screen bg-background mt-20">

      <main className="container mx-auto px-4 py-12 max-w-5xl">

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-balance">PLM App</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            The PLM App empowers organizations to run Agile and Waterfall methodologies side by side—all within a
            single, unified Salesforce experience. Built for speed, visibility, and control, the PLM App enables rapid
            implementation of business processes across teams and departments.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            It supports industry frameworks such as Balanced Scorecard, ISO 9001, ITIL, PMBOK, as well as custom Product
            Development Life Cycles. The app is flexible enough to support processes across Marketing, Finance, Support,
            HR, Legal, and more—making it a powerful solution for enterprise-wide process management.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Advanced Agile Console</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Kanban, Gantt, dependency, and hierarchical views in a single workspace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Works across any business process, regardless of organizational structure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Powerful Rules & Automation</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Robust Agile rules engine that automatically executes business rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>No coding required to configure workflows and logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Supports standard Salesforce objects, AppExchange apps, and custom objects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Intelligent Calculations & Logic</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Cumulative algorithms for scoring, ranking, and performance measurement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Field-to-field comparisons up to five levels deep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Advanced operators for easy range specification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Built-in support for date constants like TODAY, NOW, and LAST_N_DAYS</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Cross-Object Intelligence</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Cross-object updates to roll up changes and track downstream impacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Designed to maintain data accuracy and process alignment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Proven & Versatile</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Successfully deployed across industries, including nonprofits, higher education, and government
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>Ideal for PMOs and program management teams</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-12 bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Align IT with business goals through structured, transparent processes
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Keep teams aligned and accountable across methodologies and departments
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Reduce missed tasks with step-by-step guidance and automated reminders
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Increase execution speed and agility without sacrificing governance
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            Learn More About PLM App
          </Button>
        </div>
      </main>
    </div>
  )
}
