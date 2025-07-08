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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Experience Through Every Market</h2>
                <p className="text-gray-700 mb-4">
                  I started my real estate career in 2004, just before the market peaked. I've navigated:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-2">2004-2006:</span>
                    The boom years - learned what drives irrational exuberance
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-2">2008-2012:</span>
                    The crash and recovery - mastered distressed sales and tough negotiations
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-2">2013-2019:</span>
                    The steady climb - perfected multiple offer strategies
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-primary mr-2">2020-Present:</span>
                    Pandemic boom to rate shock - adapted to rapid market shifts
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">By The Numbers</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-gray-600">Homes Sold</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">$250M+</p>
                    <p className="text-gray-600">In Sales Volume</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">20</p>
                    <p className="text-gray-600">Years of Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">28</p>
                    <p className="text-gray-600">Average Days on Market</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">No BS Approach</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4">What I Do</h3>
                  <ul className="space-y-3 text-gray-700">
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
                  <ul className="space-y-3 text-gray-700">
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