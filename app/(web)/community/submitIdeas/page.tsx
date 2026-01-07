import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const termsList = [
  "Lucid Infosystems will select the top 10 ideas from all submissions each month/quarter.",
  "You may submit as many ideas as you'd like between the first and last working day of each month.",
  "Selected ideas will be presented to our directors on the first working day of the following month, along with contributor names.",
  "The top 3 ideas will be chosen through an internal popular vote.",
  "Winners will be announced across Lucid's social media platforms.",
  "Lucid Infosystems reserves the right to modify or withdraw the contest at any time without prior notice.",
  "All decisions made by Lucid Infosystems regarding selection and awards are final and binding.",
  "By participating in this contest, you acknowledge that you have read, understood, and agree to comply with all the Terms and Conditions listed above.",
];

export default function SubmitIdeasPage() {
  return (
    <main className="min-h-screen bg-white mt-20">
      {/* Breadcrumb and Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Badge className="mb-4 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary/10">
            COMMUNITY
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
            Lucid Idea Bounty
          </h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              At Lucid, we believe powerful ideas spark powerful innovation.
              Cloud solutions can be built for virtually any purpose—and
              customized for every need—and it all starts with creative
              thinking. Through your ideas and contributions, we aim to shape
              next-generation Salesforce products, features, and solutions that
              will drive the future of enterprise technology.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              Your submissions {`don't`} just help Lucid—they help elevate your
              career. Standout contributors receive recognition, rewards, and
              the opportunity to see their ideas come to life.
            </p>
          </div>
        </div>
      </section>

      {/* Share Your Idea CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-brand-primary/5 border-t border-brand-primary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Share Your Idea
          </h2>
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-brand-primary/30">
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Have a suggestion for a new Salesforce product, feature, or an
              improvement to an existing one? {`We'd`} love to hear it.
            </p>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Simply write a short summary of your idea and email it to:
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="mailto:info@lucidinfosystems.com"
                className="text-brand-primary font-bold text-lg hover:text-brand-primary"
              >
                info@lucidinfosystems.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Rewards */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">
            Monthly Rewards
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Reward 1 */}
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex gap-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Top 10 Ideas Selected
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Every month, our expert panel reviews and selects the top 10
                    ideas submitted.
                  </p>
                </div>
              </div>
            </Card>

            {/* Reward 2 */}
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex gap-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="font-bold text-black mb-2">Cash Prizes</h3>
                  <p className="text-gray-600 text-sm">
                    Top 3 ideas win exciting cash prizes from Lucid.
                  </p>
                </div>
              </div>
            </Card>

            {/* Reward 3 */}
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Implementation Opportunity
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Winners get a chance to have their idea implemented.
                  </p>
                </div>
              </div>
            </Card>

            {/* Reward 4 */}
            <Card className="p-6 bg-white border border-gray-200">
              <div className="flex gap-4">
                <div className="text-3xl">📢</div>
                <div>
                  <h3 className="font-bold text-black mb-2">
                    Social Recognition
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Recognition will be given across {`Lucid's`} social media
                    channels.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-brand-primary/5 rounded-xl border border-brand-primary/30">
            <p className="text-black text-lg sm:text-xl font-bold">
              Get creative, think big, and send in your best ideas!
            </p>
          </div>
        </div>
      </section>

      {/* Contest Rules */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-12">
            Contest Rules
          </h2>

          <div className="space-y-4 text-gray-700">
            {termsList.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <span className="text-brand-primary font-bold flex-shrink-0 mt-1">
                  ✓
                </span>
                <p className="text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-brand-primary/5 to-white border border-brand-primary/30 rounded-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Ready to Submit Your Idea?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-8">
              Share your innovation with us and be part of shaping the future of
              enterprise technology.
            </p>
            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Submit Your Idea
            </Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
