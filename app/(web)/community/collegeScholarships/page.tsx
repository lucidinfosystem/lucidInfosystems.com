import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export default function ScholarshipPage() {
  return (
    <main className="min-h-screen bg-white mt-10">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <Badge className="mb-4 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/5">SCHOLARSHIP</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">Lucid Scholarship Award</h1>
          <p className="text-lg text-gray-600 max-w-2xl">For College Students</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Overview</h2>

          <div className="space-y-6 mb-12">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              The Lucid Scholarship Program is awarded annually to outstanding college students who aspire to build a
              career in Salesforce. Our goal is to support driven, future-focused learners by providing financial
              assistance, training opportunities, and hands-on exposure to the Salesforce ecosystem.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Salesforce Training</h3>
                  <p className="text-gray-600 text-sm">
                    Comprehensive training in Salesforce technologies and best practices.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Internship Opportunities</h3>
                  <p className="text-gray-600 text-sm">Hands-on experience with real-world Salesforce projects.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-sm bg-white">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-black mb-2">Certificate of Achievement</h3>
                  <p className="text-gray-600 text-sm">Recognized certification upon completion of the program.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarship Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Host Institution */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Host Institution(s)</h2>
              <Card className="p-6 border-0 shadow-sm bg-white">
                <p className="text-gray-600 text-sm sm:text-base">
                  Any accredited university within the United States.
                </p>
              </Card>
            </div>

            {/* Field of Study */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Field of Study</h2>
              <Card className="p-6 border-0 shadow-sm bg-white">
                <p className="text-gray-600 text-sm sm:text-base">
                  Undergraduate or graduate programs in Computer Science, Information Technology, or any related field.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Value */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Scholarship Value</h2>

          <Card className="p-8 border-2 border-brand-primary/30 bg-brand-primary/3">
            <div className="mb-6">
              <p className="text-brand-primary font-bold text-2xl">Up to $1,000</p>
              <p className="text-brand-primary text-sm mt-2">Covers the following benefits:</p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-brand-primary">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Salesforce Training</span>
              </li>
              <li className="flex items-center gap-3 text-brand-primary">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Internship Opportunities</span>
              </li>
              <li className="flex items-center gap-3 text-brand-primary">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Certificate of Achievement</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Eligibility Criteria</h2>

          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-l-brand-primary bg-white">
              <h3 className="font-bold text-black mb-2">Education Level</h3>
              <p className="text-gray-600 text-sm">
                Must have completed—or be close to completing—a {`bachelor's or master's`} degree from an accredited
                university (or equivalent).
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-brand-primary bg-white">
              <h3 className="font-bold text-black mb-2">Academic Performance</h3>
              <p className="text-gray-600 text-sm">
                Must have a minimum cumulative GPA of 3.0 or higher on a 4.0 scale (or equivalent).
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Instructions */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Application Instructions</h2>

          <div className="mb-8">
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Before applying, ensure that you meet all eligibility criteria for the Lucid Scholarship Award.
            </p>

            <Card className="p-8 bg-white border border-gray-200">
              <h3 className="font-bold text-black mb-6 text-lg">Required Information</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Please submit a cover letter that includes:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">Full Name</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">College/University Information</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">Graduation Year</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">Your key strengths</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    Brief summary explaining why you should be selected
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-6 sm:p-8 bg-white border border-brand-primary/50 rounded-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <p className="text-gray-700 text-sm sm:text-base">
                  Email your application to:{" "}
                  <a
                    href="mailto:info@lucidinfosystems.com"
                    className="text-brand-primary hover:text-brand-primary font-semibold"
                  >
                    info@lucidinfosystems.com
                  </a>
                </p>
              </div>
              <Button className="bg-brand-primary hover:bg-brand-primary text-white whitespace-nowrap">
                <Mail className="w-4 h-4 mr-2" />
                Send Application
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
