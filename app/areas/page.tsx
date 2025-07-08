export default function Areas() {
  const areas = [
    {
      name: "Coral Gables",
      description: "Historic charm meets modern luxury in the City Beautiful",
      highlights: ["Tree-lined streets", "Mediterranean architecture", "Top-rated schools"],
    },
    {
      name: "Coconut Grove",
      description: "Bohemian waterfront village with lush canopy and sailing culture",
      highlights: ["Waterfront dining", "Parks and marinas", "Arts and culture"],
    },
    {
      name: "Key Biscayne",
      description: "Island paradise with pristine beaches and resort lifestyle",
      highlights: ["Beach access", "Family-friendly", "Nature preserves"],
    },
    {
      name: "Brickell",
      description: "Miami's financial district with luxury high-rise living",
      highlights: ["Urban lifestyle", "Dining and nightlife", "Walkable neighborhood"],
    },
    {
      name: "South Beach",
      description: "World-famous Art Deco district and vibrant beach scene",
      highlights: ["Beach lifestyle", "Entertainment", "International cuisine"],
    },
    {
      name: "Aventura",
      description: "Upscale suburban oasis with world-class shopping",
      highlights: ["Aventura Mall", "Golf courses", "Luxury condos"],
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Areas I Serve
          </h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Deep local knowledge across South Florida's most desirable neighborhoods
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <div key={area.name} className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-3 text-primary">{area.name}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Don't see your area? I serve all of Miami-Dade and Broward counties.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Let's Discuss Your Neighborhood
            </a>
          </div>
        </div>
      </section>
    </>
  );
}