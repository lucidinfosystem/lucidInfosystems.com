import Link from "next/link"
import { Check } from "lucide-react"
export default function DonorAppPage() {
  return (
    <div className="min-h-screen bg-background mt-20">

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-balance">Donor App</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Donor App helps nonprofit organizations build and manage meaningful donor relationships—all within
            Salesforce. Designed with a familiar, user-friendly interface, the app enables teams and volunteers to
            capture and manage donor information instantly, with little to no training required.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Whether engaging new donors or nurturing existing relationships, the Donor App simplifies donor management
            and helps nonprofits focus on what matters most—their mission.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="bg-muted/50 rounded-lg p-8">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Bulk data migration from legacy systems into Salesforce</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Donation tracking to monitor contributions and donor activity
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Volunteer-friendly design for fast, accurate data capture</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Interactive dashboards to visualize donation trends and performance
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Short learning curve with intuitive navigation</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Offline functionality for uninterrupted data collection</span>
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-muted-foreground">Fast and easy setup for immediate use</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
