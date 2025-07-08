export default function Areas() {
  const counties = [
    {
      name: "Miami-Dade",
      cities: [
        { name: "Coral Gables", description: "The City Beautiful" },
        { name: "Coconut Grove", description: "Waterfront Village" },
        { name: "Key Biscayne", description: "Island Paradise" },
        { name: "Pinecrest", description: "Family-Friendly Luxury" },
        { name: "Aventura", description: "High-Rise Living" },
        { name: "Brickell", description: "Urban Sophistication" },
      ]
    },
    {
      name: "Broward",
      cities: [
        { name: "Fort Lauderdale", description: "Venice of America" },
        { name: "Hollywood", description: "Beach & Boardwalk" },
        { name: "Weston", description: "Suburban Excellence" },
        { name: "Plantation", description: "Central Location" },
        { name: "Davie", description: "Equestrian Living" },
      ]
    },
    {
      name: "Palm Beach",
      cities: [
        { name: "Boca Raton", description: "Resort-Style Living" },
        { name: "Delray Beach", description: "Village by the Sea" },
        { name: "Wellington", description: "Equestrian Capital" },
        { name: "Jupiter", description: "Coastal Charm" },
      ]
    }
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
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Specializing in: Luxury Waterfront Properties & Family Estates
            </h2>
            <p className="text-lg text-gray-600">
              From Miami Beach to Palm Beach, I've got South Florida covered
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {counties.map((county) => (
              <div key={county.name} className="bg-white shadow-lg rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary border-b border-gray-200 pb-4">
                  {county.name}
                </h3>
                <ul className="space-y-4">
                  {county.cities.map((city) => (
                    <li key={city.name} className="group">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {city.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{city.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Why Local Knowledge Matters</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Each neighborhood has its own character, price dynamics, and buyer profile. 
              My 20 years of experience means I know exactly how to position your property 
              for success in your specific market.
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