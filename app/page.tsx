"use client";

import Link from "next/link";
import SearchSection from "@/components/SearchSection";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/market-insights", label: "MARKET INSIGHTS" },
    { href: "/areas", label: "AREAS" },
    { href: "/search", label: "PROPERTY SEARCH" },
    { href: "/listings", label: "LISTINGS" },
    { href: "/contact", label: "CONTACT" },
  ];


  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex flex-col">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/real-estate-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[rgba(23,19,37,0.7)]"></div>
        
        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Navigation in Hero */}
          <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                John Smith Realty
              </h1>
              <p className="text-xl text-gray-200">
                Your Trusted South Florida Real Estate Expert - Updated
              </p>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-center">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white font-medium hover:text-accent transition-colors relative group"
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white mx-auto block"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 bg-white rounded-lg p-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block py-2 text-primary hover:text-accent transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center px-4 pb-32">
            <div className="text-center max-w-4xl mx-auto">
              <ScrollAnimation>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  The Truth About Today's Market:
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  If Your Agent Isn't Warning You, They're Failing You
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/market-insights#consultation"
                    className="inline-block bg-accent text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-accent-light hover:text-primary transition-colors whitespace-nowrap"
                  >
                    Get Your Free Market Reality Check
                  </Link>
                  <Link
                    href="/listings"
                    className="inline-block bg-white text-primary px-12 py-4 rounded-lg text-lg font-semibold hover:bg-lp2 transition-colors whitespace-nowrap border border-primary"
                  >
                    View Office Listings
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          
          {/* Search Section at Bottom of Hero */}
          <div className="relative z-20 -mb-12 px-4 pb-8">
            <SearchSection />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              20 Years of Market Expertise
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            <ScrollAnimation delay={0.1}>
              <div className="bg-white shadow-lg rounded-lg p-10 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4 text-accent">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Market Analysis</h3>
                <p className="text-gray-700">
                  I've navigated the 2008 crash, COVID volatility, and today's rate shock. 
                  I know what works when markets shift.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="bg-white shadow-lg rounded-lg p-10 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4 text-accent">
                  <i className="fas fa-dollar-sign"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Strategic Pricing</h3>
                <p className="text-gray-700">
                  No wishful thinking. I price based on current buyer behavior, 
                  comparable sales, and market velocity.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.3}>
              <div className="bg-white shadow-lg rounded-lg p-10 text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4 text-accent">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Honest Guidance</h3>
                <p className="text-gray-700">
                  I'll tell you what others won't: whether to sell now, wait, 
                  or make improvements first.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-lp3">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              What Clients Say
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <ScrollAnimation delay={0.1}>
              <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700 mb-4 italic">
                  "John told us our price was too high when three other agents said it was fine. 
                  We listened, adjusted, and sold in 3 weeks."
                </p>
                <p className="font-semibold text-primary">- Sarah M., Coral Gables</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700 mb-4 italic">
                  "While others promised the moon, John explained the market reality. 
                  His strategy got us multiple offers."
                </p>
                <p className="font-semibold text-primary">- Michael R., Aventura</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.3}>
              <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700 mb-4 italic">
                  "John's experience through different market cycles showed. 
                  He knew exactly how to position our home."
                </p>
                <p className="font-semibold text-primary">- David L., Brickell</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.4}>
              <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700 mb-4 italic">
                  "No BS, just results. John's direct approach and market knowledge 
                  made all the difference."
                </p>
                <p className="font-semibold text-primary">- Jennifer K., Pinecrest</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Your Home Didn't Sell Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
                Why Your Home Didn't Sell
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <div className="bg-white shadow-lg rounded-lg p-10">
                <p className="text-lg text-gray-700 mb-6">
                  If your home has been on the market without selling, here's the truth:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <span className="text-accent mt-1 mr-3 flex-shrink-0">
                      <i className="fas fa-check-circle text-xl"></i>
                    </span>
                    <span className="text-gray-700">
                      <strong>Priced for yesterday's market</strong> - Markets shift faster than most agents adjust
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mt-1 mr-3 flex-shrink-0">
                      <i className="fas fa-check-circle text-xl"></i>
                    </span>
                    <span className="text-gray-700">
                      <strong>Wrong marketing strategy</strong> - Generic approaches don't work in challenging markets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mt-1 mr-3 flex-shrink-0">
                      <i className="fas fa-check-circle text-xl"></i>
                    </span>
                    <span className="text-gray-700">
                      <strong>Poor positioning</strong> - Your home wasn't presented to compete effectively
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mt-1 mr-3 flex-shrink-0">
                      <i className="fas fa-check-circle text-xl"></i>
                    </span>
                    <span className="text-gray-700">
                      <strong>Agent inexperience</strong> - They haven't navigated tough markets before
                    </span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 mt-6 font-semibold">
                  I only take listings that are positioned to sell. Let's discuss if yours qualifies.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Current Market Stats Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Current Market Stats
            </h2>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-12">
            <ScrollAnimation delay={0.1}>
              <div className="bg-white rounded-lg shadow-lg p-10 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Coral Gables</h3>
                <p className="text-3xl font-bold text-accent mb-2">$1.2M</p>
                <p className="text-sm text-gray-600 mb-4">Median Sale Price</p>
                <div className="border-t pt-4">
                  <p className="text-2xl font-bold text-primary">32</p>
                  <p className="text-sm text-gray-600">Avg Days on Market</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg p-10 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Brickell</h3>
                <p className="text-3xl font-bold text-accent mb-2">$625K</p>
                <p className="text-sm text-gray-600 mb-4">Median Sale Price</p>
                <div className="border-t pt-4">
                  <p className="text-2xl font-bold text-primary">45</p>
                  <p className="text-sm text-gray-600">Avg Days on Market</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.3}>
              <div className="bg-white rounded-lg shadow-lg p-10 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Aventura</h3>
                <p className="text-3xl font-bold text-accent mb-2">$485K</p>
                <p className="text-sm text-gray-600 mb-4">Median Sale Price</p>
                <div className="border-t pt-4">
                  <p className="text-2xl font-bold text-primary">38</p>
                  <p className="text-sm text-gray-600">Avg Days on Market</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation delay={0.4}>
            <div className="bg-lp2 rounded-lg p-10 max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">The Truth About Today's Market</h3>
              <p className="text-lg text-gray-700 mb-4">
                Homes priced right sell in <span className="font-bold text-accent">21 days</span> on average.
                Overpriced homes sit for <span className="font-bold text-red-600">90+ days</span> before price reductions.
              </p>
              <p className="text-lg text-gray-700">
                <strong>The difference?</strong> An agent who reads the market correctly from day one.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id="consultation" className="py-20 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Get Your Free Market Reality Check
              </h2>
              <p className="text-xl mb-12">
                No sugar-coating. Just honest analysis and a clear path to selling your home.
              </p>
              <div className="bg-white rounded-lg p-10 text-primary">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  />
                  <input
                    type="text"
                    placeholder="Property Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  />
                  <textarea
                    placeholder="Tell me about your situation"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-accent text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-accent-light hover:text-primary transition-colors"
                  >
                    Get My Free Analysis
                  </button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}
