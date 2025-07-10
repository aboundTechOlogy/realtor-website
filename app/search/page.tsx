"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import PropertyMap from "@/components/PropertyMap";
import { searchProperties } from "@/services/propertyService";

function SearchContent() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  
  const [filters, setFilters] = useState({
    saleType: 'forSale',
    propertyType: 'all',
    priceRange: { min: null, max: null },
    beds: null,
    baths: null,
    sortBy: 'highestPrice'
  });

  useEffect(() => {
    loadProperties();
  }, [filters]);

  const loadProperties = async () => {
    setIsLoading(true);
    try {
      const results = await searchProperties(filters);
      setProperties(results);
    } catch (error) {
      console.error('Error loading properties:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // TODO: Implement search functionality
  };

  const handleSortChange = (sortBy: string) => {
    setFilters({ ...filters, sortBy });
  };

  const handlePropertySelect = (property: any) => {
    setSelectedProperty(property);
    if (window.innerWidth < 768) {
      setViewMode('map');
    }
  };

  return (
    <div className="flex flex-col h-screen">
        <SearchBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
        />
        
        {/* Mobile View Toggle */}
        <div className="md:hidden flex bg-white border-b">
          <button
            onClick={() => setViewMode('list')}
            className={`flex-1 py-3 text-center font-medium transition-colors ${
              viewMode === 'list' 
                ? 'text-accent border-b-2 border-accent' 
                : 'text-primary'
            }`}
          >
            <i className="fas fa-list mr-2"></i>
            List View
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`flex-1 py-3 text-center font-medium transition-colors ${
              viewMode === 'map' 
                ? 'text-accent border-b-2 border-accent' 
                : 'text-primary'
            }`}
          >
            <i className="fas fa-map mr-2"></i>
            Map View
          </button>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden md:flex w-full">
            {/* Search Results - 60% */}
            <div className="w-3/5 border-r">
              <SearchResults
                properties={properties}
                totalCount={properties.length}
                sortBy={filters.sortBy}
                onSortChange={handleSortChange}
                onPropertySelect={handlePropertySelect}
                isLoading={isLoading}
              />
            </div>
            
            {/* Map - 40% */}
            <div className="w-2/5">
              <PropertyMap
                properties={properties}
                selectedProperty={selectedProperty}
                onPropertySelect={handlePropertySelect}
              />
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="md:hidden w-full h-full">
            {viewMode === 'list' ? (
              <SearchResults
                properties={properties}
                totalCount={properties.length}
                sortBy={filters.sortBy}
                onSortChange={handleSortChange}
                onPropertySelect={handlePropertySelect}
                isLoading={isLoading}
              />
            ) : (
              <PropertyMap
                properties={properties}
                selectedProperty={selectedProperty}
                onPropertySelect={handlePropertySelect}
              />
            )}
          </div>
        </div>
      </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-accent mb-4"></i>
          <p className="text-lg text-gray-600">Loading properties...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}