"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl md:text-3xl font-bold text-primary">
            John Smith Realty
          </Link>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <ul className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-primary transition-colors text-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary transition-colors text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/market-insights"
                className="text-gray-700 hover:text-primary transition-colors text-lg"
              >
                Market Insights
              </Link>
            </li>
            <li>
              <Link
                href="/market-insights#consultation"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors text-lg font-medium"
              >
                Schedule Consultation
              </Link>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4">
            <li>
              <Link
                href="/"
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/market-insights"
                className="block text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Market Insights
              </Link>
            </li>
            <li>
              <Link
                href="/market-insights#consultation"
                className="block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Consultation
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}