import Link from "next/link"
import { Check } from "lucide-react"

export default function CRMReportzPage() {
  return (
    <div className="min-h-screen bg-background mt-20">

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-balance">CRM Reportz</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lucid CRM Reportz delivers powerful, 360-degree visibility across your Salesforce data—helping you optimize
            sales performance, increase revenue, and elevate service quality. With centralized reporting and intuitive
            dashboards, teams gain instant access to actionable insights that drive smarter decisions.
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
                  All-in-one reporting solution for Sales, Marketing, and Service teams
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  360-degree dashboards to measure performance, identify trends, and accelerate growth
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Real-time insights to support data-driven decision-making</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  User-friendly interface designed for quick adoption and maximum impact
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Dashboard Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-8">Dashboard Examples</h2>
          <div className="grid gap-6">
            <div className="border border-border rounded-lg p-6 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Marketing Executive Dashboard</h3>
              <p className="text-muted-foreground">
                Provides comprehensive insights into lead trends, campaign performance, ROI, lead conversions, and lead
                source effectiveness.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Sales Executive Dashboard</h3>
              <p className="text-muted-foreground">
                Enables sales teams to track pipelines, monitor open and closed opportunities, and measure
                month-over-month performance.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Case Summary Dashboard</h3>
              <p className="text-muted-foreground">
                Offers clear visibility into case trends by origin, type, agent, priority, and resolution time—improving
                service efficiency and accountability.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">Sales Manager Dashboard</h3>
              <p className="text-muted-foreground">
                Helps managers track team leads, opportunities, revenue performance, top-performing leads, and key
                opportunity metrics.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
