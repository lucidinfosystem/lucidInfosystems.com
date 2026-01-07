import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function SalesforceAppsPage() {
  const benefits = [
    "Thoroughly tested and production-ready applications with a smooth user experience",
    "Enterprise-grade support with built-in troubleshooting and 24/7 assistance",
    "Easy implementation across environments with high performance",
    "Secure and compliant — aligned with latest Salesforce standards",
    "Cost-effective without compromise — exceptional value",
    "Scalable by design — grows with your business",
  ]

  const keyPoints = [
    {
      title: "Apps for every business size",
      description:
        "Modern Salesforce applications designed to solve today's challenges while staying aligned with future releases",
    },
    {
      title: "Top-tier engineering",
      description: "Built by certified Salesforce developers selected from the industry's best talent",
    },
    {
      title: "Always ahead of the curve",
      description:
        "Continuous knowledge-sharing with Salesforce partners and constant upgrades aligned with Salesforce releases",
    },
  ]

  return (
    <div className="min-h-screen bg-background mt-20">
      
      
      <section className="border-b bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Salesforce Apps</h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Salesforce is the platform of choice for Lucid's product ecosystem—trusted worldwide for its flexibility,
            scalability, and enterprise-grade reliability. Our Salesforce Apps portfolio spans everything from essential
            business tools to highly specialized, custom-built applications powered by data intelligence and complex
            integrations.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mt-4 leading-relaxed">
            From lightweight AppExchange solutions to robust, out-of-the-box products customized to meet unique client
            requirements—if it can be built on Salesforce, we build it.
          </p>
        </div>
      </section>

      {/* Built for Today Section */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Built for Today. Ready for Tomorrow.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <div className="max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Recognizing the growing demand for adaptable, plug-and-play Salesforce solutions, Lucid has developed a
              robust suite of applications that can be deployed quickly and customized effortlessly. These products
              accelerate productivity, streamline operations, and deliver measurable impact at both team and enterprise
              levels.
            </p>
            <p>
              Need something more specific? Our team can enhance or extend any existing product to meet your exact
              requirements.
            </p>
            <p className="font-medium text-foreground">
              Say goodbye to long timelines, high costs, and rigid solutions. With Lucid, product development becomes
              faster, smarter, and more flexible.
            </p>
          </div>
        </div>
      </section>

      {/* Why Lucid Section */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Why Lucid Salesforce Apps?</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Fast Accurate Section */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6">Simple. Fast. Accurate.</h2>
          <div className="max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Over the years, Lucid has successfully delivered Salesforce-powered solutions across industries—from
              virtual performance platforms and e-learning systems to enterprise cloud and mobile applications.
            </p>
            <p>
              We don't believe in one-size-fits-all software. Instead, we deliver market-ready building blocks and
              proven blueprints that help you respond quickly, adapt seamlessly, and scale confidently.
            </p>
            <p className="font-medium text-foreground">
              At Lucid, there's always a plan—and it's simple, fast, and accurate.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
