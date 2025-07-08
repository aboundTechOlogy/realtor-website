"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your submission. We'll contact you soon!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
              20 Years of Navigating Every Market Condition
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10">
              From the 2008 crash to today's shifting market, I've helped sellers succeed when others couldn't
            </p>
            <Link
              href="/market-insights#consultation"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Get Your Free Market Reality Check
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white shadow-lg rounded-lg p-10 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Market Analysis</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Data-driven insights from two decades of market cycles. I know when to hold and when to adjust.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-10 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Strategic Pricing</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Pricing ahead of the market, not behind it. I position your home to sell, not to sit.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-10 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Proven Marketing</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Targeted strategies that work in any market. Maximum exposure, qualified buyers only.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What My Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-600 italic mb-4">
                "John told us the truth about our pricing when other agents just wanted the listing. 
                We adjusted, and sold in 3 weeks. His honesty saved us months of frustration."
              </p>
              <p className="font-semibold">- Sarah & Mike Thompson</p>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-600 italic mb-4">
                "After 6 months with another agent and no offers, John repositioned our home and 
                had multiple offers in 2 weeks. Experience matters."
              </p>
              <p className="font-semibold">- Robert Chen</p>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-600 italic mb-4">
                "John navigated us through a declining market with skill. His market knowledge from 
                the 2008 downturn was invaluable. We sold for more than expected."
              </p>
              <p className="font-semibold">- Maria Rodriguez</p>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-600 italic mb-4">
                "No BS, just results. John told us exactly what needed to happen to sell our home, 
                and it worked. Refreshing to work with someone so straightforward."
              </p>
              <p className="font-semibold">- David & Lisa Park</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Your Home Didn't Sell</h2>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="text-lg text-gray-700 mb-6">
                If your home has been on the market without selling, here's the truth:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Priced for yesterday's market</strong> - Markets shift faster than most agents adjust
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Wrong marketing strategy</strong> - Generic approaches don't work in challenging markets
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Poor positioning</strong> - Your home wasn't presented to compete effectively
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Agent inexperience</strong> - They haven't navigated tough markets before
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 mt-6 font-semibold">
                I only take listings that are positioned to sell. Let's discuss if yours qualifies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-20 md:py-24" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Your Free Market Reality Check</h2>
            <p className="text-center text-lg mb-8">
              No sugar-coating. Just honest analysis and a clear path to selling your home.
            </p>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 text-gray-900">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell me about your property and situation
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Get My Free Market Analysis
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}