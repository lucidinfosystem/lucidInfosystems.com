import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
export default function EventBuddyPage() {
  return (
    <div className="min-h-screen bg-background mt-20">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-6 text-balance">
            Event Buddy App
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Event Buddy App enables teams to capture and manage event data
            in real time and seamlessly upload it to Salesforce. Designed for
            speed and accuracy, the app also generates dynamic reports that
            provide actionable campaign insights—right when you need them.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-3 mb-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-500" />
                  </div>
                  <h3 className="font-semibold">Simplified data capture</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-9">
                  Capture all event attendee data quickly and
                  efficiently—reducing training time and saving valuable
                  resources.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-3 mb-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-500" />
                  </div>
                  <h3 className="font-semibold">One-click Salesforce sync</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-9">
                  Upload attendee information directly into Salesforce with a
                  single click—no manual data entry required.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-3 mb-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-500" />
                  </div>
                  <h3 className="font-semibold">Excel-like interface</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-9">
                  An intuitive, spreadsheet-style experience allows volunteers
                  to easily manage data across multiple events.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-3 mb-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-blue-500" />
                  </div>
                  <h3 className="font-semibold">Powerful event analytics</h3>
                </div>
                <p className="text-sm text-muted-foreground pl-9">
                  Access dynamic reports and a 360-degree view of event
                  performance to measure results, optimize campaigns, and
                  accelerate growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Learn More About Event Buddy
          </Button>
        </div>
      </main>
    </div>
  );
}
