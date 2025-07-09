import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            I've Seen It All
          </h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            20 years in real estate. Multiple market cycles. Thousands of successful transactions.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-gray-300 rounded-lg aspect-[3/4] mb-6 flex items-center justify-center">
                    <p className="text-gray-500 text-center px-4">Professional Headshot</p>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                    <div className="space-y-3 text-sm">
                      <a href="tel:305-XXX-XXXX" className="flex items-center text-gray-700 hover:text-primary">
                        <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        (305) XXX-XXXX
                      </a>
                      <a href="mailto:john@smithrealty.com" className="flex items-center text-gray-700 hover:text-primary">
                        <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        john@smithrealty.com
                      </a>
                      <div className="pt-3 border-t">
                        <p className="text-gray-600">License #: XX-XXXXXXX</p>
                        <p className="text-gray-600">[Brokerage Name]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Experience Through Every Market</h2>
                <div className="prose prose-lg text-gray-700 mb-8">
                  <p className="mb-4">
                    I began my real estate career in 2004, riding the wave of one of the hottest 
                    markets in history. But it was the crash of 2008 and the difficult years that 
                    followed that truly shaped me as an agent.
                  </p>
                  <p className="mb-4">
                    <strong>While others left the industry, I stayed and learned.</strong> From 2008 
                    to 2012, I specialized in short sales, foreclosures, and helping families navigate 
                    the worst housing crisis in generations. I negotiated with banks, fought for my 
                    clients, and found creative solutions when traditional methods failed.
                  </p>
                  <p className="mb-4">
                    Those challenging years taught me invaluable lessons: how to price aggressively 
                    in a declining market, how to market properties when nothing was selling, and most 
                    importantly, how to tell clients the truth they needed to hear, not what they 
                    wanted to hear.
                  </p>
                  <p>
                    Today's market is shifting again. Interest rates have reset buyer expectations. 
                    Inventory is building. The agents who will succeed are those who've navigated 
                    tough markets before. That's exactly what I bring to every listing.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-gray-600">Homes Sold</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">$250M+</p>
                    <p className="text-gray-600">Sales Volume</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">20</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">100+</p>
                    <p className="text-gray-600">Short Sales Closed</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-4">What Sets Me Apart</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>Crisis-Tested:</strong> Successfully closed deals through the 2008 crash, COVID-19, and today's rate shock</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>Data-Driven:</strong> I analyze comparable sales, market trends, and buyer behavior to price accurately</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>Straight Shooter:</strong> I'll tell you what your home will actually sell for, not what you want to hear</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>Full Service:</strong> From pricing strategy to closing, I handle every detail personally</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">No BS Approach</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4">What I Do</h3>
                  <ul className="space-y-5 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Give you honest market assessments
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Price strategically for current conditions
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Execute proven marketing strategies
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Negotiate aggressively on your behalf
                    </li>
                  </ul>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4">What I Don't Do</h3>
                  <ul className="space-y-5 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Sugarcoat market realities
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Take overpriced listings
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Promise unrealistic timelines
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Waste your time or mine
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">The Truth About Today's Market</h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <p className="text-lg text-gray-700 mb-6">
                  We're in a transitional market. Interest rates have reset buyer expectations. 
                  Inventory is building. The easy money days are over.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  <strong>The homes that sell quickly today share three characteristics:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>They're priced at or slightly below market value</li>
                  <li>They show better than the competition</li>
                  <li>They're marketed to reach active buyers, not tire kickers</li>
                </ol>
                <p className="text-lg text-gray-700 mb-6">
                  If you're not willing to do all three, you're not ready to sell. And that's okay - 
                  sometimes holding is the right move. But if you need to sell, we need to position 
                  your home to win.
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  I only work with sellers who are serious about results, not wishes.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/market-insights"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Get Current Market Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}