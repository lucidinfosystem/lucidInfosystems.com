import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";

export default function ProfessionalServicesPage() {
  const points = [
    "Deep understanding of your business needs",
    "Matching talent competencies to your project requirements",
    "Thorough candidate screening and evaluation",
    "A wide spectrum of flexible, customizable workforce solutions",
    "A talent pool combining seasoned experts and highly trained in-house professionals",
  ];

  const cards = [
    {
      icon: Target,
      title: "Technology & Human Expertise",
      description:
        "We combine advanced recruiting tools with a personalized approach to identify and place top-tier talent from across our global network.",
    },
    {
      icon: Users,
      title: "Reliable & Compliant",
      description:
        "Reliability is at the core of our service. We leverage data-driven insights, rigorous screening, and strict compliance standards to ensure only the best make it through.",
    },
    {
      icon: Zap,
      title: "Accelerated Growth",
      description:
        "Gain continuous access to a pool of qualified professionals—ready to support your short-term needs, long-term goals, and everything in between.",
    },
  ];
  return (
    <div className="min-h-screen bg-background mt-20">
      {/* Header */}
      {/* <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-semibold">
              Lucid
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
              <Link href="/services/professional" className="text-sm font-medium">
                Services
              </Link>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="py-8 sm:py-16 bg-linear-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Professional Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl text-pretty">
            Unlock the full potential of your workforce with Lucid. Your people
            are your most valuable asset—and when supported by the right talent
            strategy, they can drive exceptional growth.
          </p>
        </div>
      </section>

      {/* Why Lucid Section */}
      <section className=" py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Why Lucid Professional Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="border-2 hover:border-brand-primary transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-brand-primary/8 dark:bg-orange-950 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-brand-primary " />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Overview</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-muted-foreground text-lg mb-6">
              At Lucid Infosystems, we curate and develop exceptional talent to
              ensure our clients always have access to the best resources—both
              in the US and internationally. Whether onsite or offshore, our
              carefully selected professionals integrate seamlessly into your
              existing environment.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              We provide ongoing workforce support, continuous monitoring, and
              optimization to ensure maximum performance and long-term success.
            </p>

            <h3 className="text-2xl font-semibold mb-6">
              Our approach includes:
            </h3>
            <ul className="space-y-3 mb-8">
              {points.map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-brand-primary/15 dark:bg-orange-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-brand-primary " />
                  </span>
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-lg">
              Hiring the right person is essential to maintaining your
              competitive edge. Our recruitment specialists go above and beyond
              to identify candidates who stand out—not just on paper, but in
              performance, mindset, and alignment with your long-term goals.
            </p>
          </div>
        </div>
      </section>

      {/* Relationships Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Relationships for Life
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your company's success depends on finding—and keeping—the right
              people. Lucid is committed to helping you do exactly that.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our staffing and in-house support solutions ensure you receive
              exceptional talent, long-term reliability, and a partner who truly
              understands your evolving needs.
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              Lucid's strategic staffing model bridges your current state with
              your future vision. Our mission is simple: help you grow stronger
              in every area of your business by empowering you with the one
              factor that drives all progress—the right people.
            </p>
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 cursor-pointer"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
