"use client";

import { useState } from "react";

interface SearchBarProps {
  filters: {
    saleType: string;
    propertyType: string;
    priceRange: { min: number | null; max: number | null };
    beds: number | null;
    baths: number | null;
  };
  onFilterChange: (filters: any) => void;
  onSearch: (query: string) => void;
}

export default function SearchBar({ filters, onFilterChange, onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const updateFilter = (key: string, value: any) => {
    onFilterChange({ ...filters, [key]: value });
    setActiveDropdown(null);
  };

  return (
    <div className="sticky top-0 z-40 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <form onSubmit={handleSearch} className="flex flex-wrap gap-3 items-center">
          {/* Search Input */}
          <div className="flex-1 min-w-[300px]">
            <input
              type="text"
              placeholder="Enter city, zip code, MLS #, or address"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 border border-lp3 rounded-lg text-primary focus:outline-none focus:border-accent"
            />
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {/* For Sale Filter */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('saleType')}
                className={`px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors ${
                  filters.saleType === 'forSale' 
                    ? 'bg-accent text-white' 
                    : 'bg-lp2 text-primary hover:bg-lp3'
                }`}
              >
                For Sale
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              
              {activeDropdown === 'saleType' && (
                <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-50">
                  <button
                    onClick={() => updateFilter('saleType', 'forSale')}
                    className="w-full px-4 py-2 text-left text-primary hover:bg-lp3 transition-colors"
                  >
                    For Sale
                  </button>
                  <button
                    onClick={() => updateFilter('saleType', 'forRent')}
                    className="w-full px-4 py-2 text-left text-primary hover:bg-lp3 transition-colors"
                  >
                    For Rent
                  </button>
                  <button
                    onClick={() => updateFilter('saleType', 'sold')}
                    className="w-full px-4 py-2 text-left text-primary hover:bg-lp3 transition-colors"
                  >
                    Sold
                  </button>
                </div>
              )}
            </div>
            
            {/* Property Type Filter */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('propertyType')}
                className="px-4 py-2.5 bg-lp2 text-primary rounded-lg font-medium flex items-center gap-2 hover:bg-lp3 transition-colors"
              >
                Residential
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              
              {activeDropdown === 'propertyType' && (
                <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-50">
                  <button
                    onClick={() => updateFilter('propertyType', 'all')}
                    className="w-full px-4 py-2 text-left text-primary hover:bg-lp3 transition-colors"
                  >
                    All Types
                  </button>
                  <button
                    onClick={() => updateFilter('propertyType', 'house')}
                    className="w-full px-4 py-2 text-left text-primary hover:bg-lp3 transition-colors"
                  >
                    House
                  </button>
                  <button
                    onClick={() => updateFilter('propertyType', 'condo')}
                    className="w-full px-4 py-2 text-left text-primary hover:bg-lp3 transition-colors"
                  >
                    Condo
                  </button>
                  <button
                    onClick={() => updateFilter('propertyType', 'townhouse')}
                    className="w-full px-4 py-2 text-left text-primary hover:bg-lp3 transition-colors"
                  >
                    Townhouse
                  </button>
                  <button
                    onClick={() => updateFilter('propertyType', 'land')}
                    className="w-full px-4 py-2 text-left text-primary hover:bg-lp3 transition-colors"
                  >
                    Land
                  </button>
                </div>
              )}
            </div>
            
            {/* Price Filter */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('price')}
                className="px-4 py-2.5 bg-lp2 text-primary rounded-lg font-medium flex items-center gap-2 hover:bg-lp3 transition-colors"
              >
                Price
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              
              {activeDropdown === 'price' && (
                <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg p-4 min-w-[250px] z-50">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600">Min Price</label>
                      <input
                        type="number"
                        placeholder="$0"
                        value={filters.priceRange.min || ''}
                        onChange={(e) => updateFilter('priceRange', {
                          ...filters.priceRange,
                          min: e.target.value ? parseInt(e.target.value) : null
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-primary"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Max Price</label>
                      <input
                        type="number"
                        placeholder="Any"
                        value={filters.priceRange.max || ''}
                        onChange={(e) => updateFilter('priceRange', {
                          ...filters.priceRange,
                          max: e.target.value ? parseInt(e.target.value) : null
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-primary"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Beds/Baths Filter */}
            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('bedsBaths')}
                className="px-4 py-2.5 bg-lp2 text-primary rounded-lg font-medium flex items-center gap-2 hover:bg-lp3 transition-colors"
              >
                Beds / Baths
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              
              {activeDropdown === 'bedsBaths' && (
                <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg p-4 min-w-[200px] z-50">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600 mb-2 block">Bedrooms</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <button
                            key={num}
                            onClick={() => updateFilter('beds', num)}
                            className={`px-3 py-1 rounded ${
                              filters.beds === num 
                                ? 'bg-accent text-white' 
                                : 'bg-gray-100 text-primary hover:bg-gray-200'
                            }`}
                          >
                            {num}+
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-2 block">Bathrooms</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4].map((num) => (
                          <button
                            key={num}
                            onClick={() => updateFilter('baths', num)}
                            className={`px-3 py-1 rounded ${
                              filters.baths === num 
                                ? 'bg-accent text-white' 
                                : 'bg-gray-100 text-primary hover:bg-gray-200'
                            }`}
                          >
                            {num}+
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* All Filters */}
            <button
              type="button"
              className="px-4 py-2.5 bg-lp2 text-primary rounded-lg font-medium flex items-center gap-2 hover:bg-lp3 transition-colors"
            >
              <i className="fas fa-filter"></i>
              All Filters
            </button>
          </div>
          
          {/* Ask AI Button */}
          <button
            type="submit"
            className="px-6 py-2.5 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light hover:text-primary transition-colors flex items-center gap-2"
          >
            <i className="fas fa-robot"></i>
            Ask AI
          </button>
        </form>
      </div>
    </div>
  );
}