import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Users, BookOpen, Briefcase, Award, TrendingUp } from "lucide-react"

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-background mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary/10 to-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Training & Placements</h1>
          <p className="text-lg text-muted-foreground max-w-3xl text-pretty">
            Comprehensive career solutions with expert training, real-time project experience, and 100% job assurance.
            Join one of the fastest-growing IT consulting and business services organizations.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">About Lucid Infosystems</h2>
            <p className="text-muted-foreground mb-4 text-pretty">
              We specialize in technical recruitment, professional training, and workforce enablement for mid to large
              enterprises. With a proven track record in career counseling and job placements, our team consistently
              delivers exceptional results.
            </p>
            <p className="text-muted-foreground text-pretty">
              Our training programs come with <strong className="text-foreground">100% job assurance</strong> and an
              industry-leading <strong className="text-foreground">98% sustainability rate</strong> on the first
              project. We expertly place CPT, OPT, H1, L2, Green Card, Citizen, and TN professionals in both contract
              and full-time roles across the U.S.
            </p>
          </Card>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Benefits of Training at Lucid</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Expert Instructors", desc: "Real-time project experience and industry insights" },
              { icon: BookOpen, title: "Free Job Roles Training", desc: "Comprehensive skills development included" },
              { icon: Briefcase, title: "Fast-Track Placement", desc: "As early as 1 week for qualified candidates" },
              { icon: Award, title: "Professional Support", desc: "Interview prep and certification guidance" },
              { icon: TrendingUp, title: "Excellent Pay Packages", desc: "Competitive compensation for placements" },
              { icon: CheckCircle, title: "E-Verified Company", desc: "H1B, Green Card, OPT Extension support" },
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow bg-card border-border">
                <benefit.icon className="w-10 h-10 text-brand-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">What We Offer</h3>
            <ul className="space-y-3">
              {[
                "Technical Training",
                "Job Roles Training",
                "Employability & Soft Skills Development",
                "Hands-on Real-Time Projects",
                "One-on-One Customized Training",
                "Mentor Support During & After Training",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Lucid?</h3>
            <ul className="space-y-3">
              {[
                "US-based leader in training & placement",
                "Flexible: Onsite, Online, Corporate modes",
                "Regular, Weekend, Fast-track batches",
                "Strong client relationships across industries",
                "Salesforce, Microsoft, Oracle Certified Partner",
                "Bootcamp & high-quality online programs",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Special Offers</h2>
          <Card className="p-8 bg-card border-border">
            <ul className="space-y-3">
              {[
                "Group discounts & early-bird registration offers",
                "Referral benefits—invite a friend and earn additional discounts",
                "Like us on Facebook for an extra 10% discount",
                "Customized training paths based on your goals",
              ].map((promo, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-brand-primary font-bold flex-shrink-0">•</span>
                  <span className="text-muted-foreground">{promo}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Vision */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
          <p className="text-lg text-muted-foreground text-balance">
            At Lucid, we aim to be the global first choice for Training, IT Solutions, and Workforce Development. We
            don't just teach—we empower. Our focus is on building professionals equipped with real-world skills,
            industry insights, and the confidence to grow into future leaders.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-brand-primary/10 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Ready to Transform Your Career?</h2>
          <p className="text-black/90 text-lg mb-8 text-balance">
            Don't wait—our batches fill quickly. Register now for a demo class.
          </p>
          <Button size="lg" variant="secondary" className="bg-brand-primary text-white hover:bg-brand-primary/90">
            Register for Demo Class
          </Button>
        </div>
      </section>
    </div>
  )
}
