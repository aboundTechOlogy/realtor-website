export default function Listings() {
  const featuredListings = [
    {
      id: 1,
      title: "Waterfront Estate in Coral Gables",
      price: "$3,450,000",
      beds: 5,
      baths: 4.5,
      sqft: "5,200",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "Active",
    },
    {
      id: 2,
      title: "Modern Condo in Brickell",
      price: "$1,250,000",
      beds: 3,
      baths: 3,
      sqft: "2,100",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "Active",
    },
    {
      id: 3,
      title: "Family Home in Pinecrest",
      price: "$1,875,000",
      beds: 4,
      baths: 3.5,
      sqft: "3,800",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "Under Contract",
    },
  ];

  const recentSales = [
    {
      address: "123 Ocean Drive, Miami Beach",
      soldPrice: "$2,100,000",
      daysOnMarket: 14,
    },
    {
      address: "456 Biscayne Blvd, Miami",
      soldPrice: "$950,000",
      daysOnMarket: 21,
    },
    {
      address: "789 Coral Way, Coral Gables",
      soldPrice: "$1,650,000",
      daysOnMarket: 7,
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Office Listings
          </h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Carefully selected properties positioned to sell in today's market
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <div key={listing.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-64 object-cover"
                  />
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                    listing.status === 'Active' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                  }`}>
                    {listing.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{listing.price}</p>
                  <div className="flex justify-between text-gray-600">
                    <span>{listing.beds} Beds</span>
                    <span>{listing.baths} Baths</span>
                    <span>{listing.sqft} sq ft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Recent Sales Success</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {recentSales.map((sale, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg font-semibold mb-2">{sale.address}</p>
                <p className="text-2xl font-bold text-primary mb-1">{sale.soldPrice}</p>
                <p className="text-gray-600">Sold in {sale.daysOnMarket} days</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Average days on market: <span className="font-bold text-primary">14 days</span> 
              <span className="text-gray-600 ml-2">(Market average: 42 days)</span>
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              List Your Property
            </a>
          </div>
        </div>
      </section>
    </>
  );
}