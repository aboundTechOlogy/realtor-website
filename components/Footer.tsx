import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">John Smith Realty</h3>
            <p className="text-gray-400">
              20 years of experience navigating every market condition
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/market-insights" className="text-gray-400 hover:text-white transition-colors">
                  Market Insights
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: (555) 123-4567</li>
              <li>Email: john@smithrealty.com</li>
              <li>License: DRE #01234567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get Your Free Market Reality Check</h4>
            <p className="text-gray-400 mb-4">
              Honest assessment. Strategic pricing. Proven results.
            </p>
            <Link
              href="/market-insights#consultation"
              className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} John Smith Realty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}