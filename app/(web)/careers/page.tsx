import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail } from "lucide-react";
import Image from "next/image";

const reasons = [
  "Be part of an amazing team in a fast-growing organization",
  "People-first culture — our employees are our biggest strength",
  "Open, boundary-less work environment where ideas are heard and innovation thrives",
  "Ownership mindset — take charge of your work and contribute to key decisions",
  "Grow without limits and unlock your full potential",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-[#1B9AD5] hover:bg-blue-200">
            CAREERS
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
            Careers at Lucid Infosystems
          </h1>
        </div>
      </section>

      {/* What We're Building Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8 sm:mb-12">
            What we are building
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We’re always excited to connect with passionate professionals
                who can help us deliver exceptional results for our clients. As
                we continue to grow, we’re looking for smart, driven individuals
                who want to make an impact.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                By bringing structure, access, and efficiency to teamwork.
                Backed by Atomico, Salesforce Ventures, and Mosaic, {`we're`} on
                a mission to unlock the collective potential of teams and would
                love for you to join us!
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80">
              <Image
                src="/careers/team-collaboration-working-on-laptop.jpg"
                alt="Team collaboration"
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80">
              <Image
                src="/careers/developers-working-together-at-desk.jpg"
                alt="Developers working"
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80">
              <Image
                src="/careers/team-discussing-in-office-hallway.jpg"
                alt="Team discussion"
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-64 sm:h-72 lg:h-80">
              <Image
                src="/careers/woman-working-at-computer-desk.jpg"
                alt="Woman working"
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Lucid Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Why Join Lucid?
          </h2>
          <p className="text-gray-600 mb-12 text-sm sm:text-base">
            Top 5 Reasons to Work With Us
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-brand-primary text-white font-bold">
                    {index + 1}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-black text-sm sm:text-base">
                    {reason}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Benefits
          </h2>
          <p className="text-gray-600 mb-12">We help our employees thrive</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Health Package */}
            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">♥</span>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Inclusive Health Package
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We care for your well-being, no health expense stress.
                  </p>
                </div>
              </div>
            </Card>

            {/* Gym */}
            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Free Gym Membership
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enjoy a complimentary gym membership for your fitness.
                  </p>
                </div>
              </div>
            </Card>

            {/* Health Package 2 */}
            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🔥</span>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Inclusive Health Package
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We care for your well-being, no health expense stress.
                  </p>
                </div>
              </div>
            </Card>

            {/* Balanced Life */}
            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Balanced Working Life
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enjoy flexible 4-week vacations. Recharge as needed.
                  </p>
                </div>
              </div>
            </Card>

            {/* Diversity */}
            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🌈</span>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Diversity and Inclusion
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Enjoy a complimentary gym membership for your fitness.
                  </p>
                </div>
              </div>
            </Card>

            {/* Perks */}
            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🎁</span>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Generous Perks Program
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We offer stipends for home office, learning, and wellness
                    perks.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">
            Open roles
          </h2>

          {/* Engineering */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">
              Engineering
            </h3>
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-bold text-black mb-2">
                    Full-Stack Engineer
                  </h4>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>US, Mexico, Canada</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-brand-primary/10 text-brand-primary whitespace-nowrap">
                    Remote
                  </Badge>
                  <Badge className="bg-brand-primary/10 text-brand-primary whitespace-nowrap">
                    Full time
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Design */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">
              Design
            </h3>
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="font-bold text-black mb-2">
                    Staff Product Designer
                  </h4>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>US, Mexico, Canada</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-brand-primary/10 text-brand-primary  whitespace-nowrap">
                    Remote
                  </Badge>
                  <Badge className="bg-brand-primary/10 text-brand-primary whitespace-nowrap">
                    Full time
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-6 sm:p-8 bg-white border border-brand-secondary rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <p className="text-gray-700 text-sm sm:text-base">
                  {`Can't find the right role?`}{" "}
                  <span className="font-semibold">Email your CV to</span>{" "}
                  <a
                    href="mailto:solstice@jobs.com"
                    className="text-brand-primary hover:text-brand-primary/90 font-semibold"
                  >
                    solstice@jobs.com
                  </a>{" "}
                  to be considered for new positions in the future.
                </p>
              </div>
              <Button className="bg-brand-primary hover:bg-brand-primary/90 cursor-pointer text-white whitespace-nowrap">
                <Mail className="w-4 h-4 mr-2" />
                Email my resume
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
