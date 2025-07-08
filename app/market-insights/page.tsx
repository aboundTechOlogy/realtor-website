"use client";

import { useState } from "react";

export default function MarketInsights() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours to schedule your consultation.");
    setFormData({ name: "", email: "", phone: "", preferredTime: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Market Insights
          </h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Real data. Real analysis. Real talk about where the market is heading.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Current Market Conditions</h2>
              <div className="bg-white shadow-lg rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What's Happening Now</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Inventory up 35% year-over-year
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Average days on market: 42 (up from 18)
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Price reductions on 40% of listings
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Buyer demand down 25% from peak
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What This Means for Sellers</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Competition is increasing rapidly
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Pricing strategy is more critical than ever
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Presentation must be flawless
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Marketing needs to be targeted and aggressive
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t pt-8">
                  <p className="text-lg font-semibold text-gray-900">
                    Bottom Line: We're in a normalizing market. The sellers who adapt will succeed. 
                    Those who cling to 2021 expectations will sit.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Why Homes Aren't Selling</h2>
              <div className="space-y-6">
                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">1. Unrealistic Pricing</h3>
                  <p className="text-gray-700 mb-4">
                    The #1 reason homes sit on the market. Many sellers are anchored to peak 2022 
                    values, but buyers are shopping based on today's rates and economic uncertainty.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Reality: Your home is worth what a buyer will pay TODAY, not what your neighbor 
                    sold for last year.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">2. Poor Online Presentation</h3>
                  <p className="text-gray-700 mb-4">
                    95% of buyers start online. Bad photos, no virtual tour, or poor listing 
                    descriptions mean your home never makes their shortlist.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Reality: You have 3 seconds to grab attention online. Most listings fail this test.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">3. Condition Issues</h3>
                  <p className="text-gray-700 mb-4">
                    With more choices, buyers are pickier. Dated kitchens, worn carpets, or deferred 
                    maintenance that were overlooked in a hot market are now deal-breakers.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Reality: In this market, move-in ready wins. Everything else needs a price adjustment.
                  </p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">4. Passive Marketing</h3>
                  <p className="text-gray-700 mb-4">
                    Throwing it on the MLS and waiting doesn't work anymore. You need targeted 
                    digital campaigns, open houses, broker outreach, and constant promotion.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Reality: The agents getting results are working 10x harder than two years ago.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Pricing Strategy in a Declining Market</h2>
              <div className="bg-gray-50 rounded-lg p-8">
                <p className="text-lg text-gray-700 mb-6">
                  The key to selling in a shifting market is to price AHEAD of the market, not at it.
                </p>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">The 90-Day Rule</h3>
                  <p className="text-gray-700">
                    If comparable homes are taking 90 days to sell at $500,000, and the market is 
                    declining 1% per month, you need to price at $485,000 to sell in 30 days. 
                    Otherwise, you'll be chasing the market down.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4">The Competition Factor</h3>
                  <p className="text-gray-700">
                    Look at your competition, not just past sales. If there are 10 similar homes 
                    for sale and only 2 selling per month, you need to be in the top 20% on 
                    price/value to sell quickly.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">The Cost of Being Wrong</h3>
                  <p className="text-gray-700">
                    Every month on market costs you: mortgage payments, taxes, insurance, utilities, 
                    maintenance, and market depreciation. A $10,000 price reduction today often 
                    saves $20,000 in carrying costs and further price drops.
                  </p>
                </div>
              </div>
            </div>

            <div id="consultation" className="bg-primary text-white rounded-lg p-12">
              <h2 className="text-3xl font-bold text-center mb-8">Schedule Your Market Consultation</h2>
              <p className="text-center text-lg mb-8">
                Get a realistic assessment of your home's value and a strategic plan to sell it.
              </p>
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                    Preferred Contact Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
                  >
                    <option value="">Any time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 8pm)</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-primary py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Schedule My Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}