"use client";

import { useState } from "react";
import PropertyCard from "./PropertyCard";

interface SearchResultsProps {
  properties: any[];
  totalCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onPropertySelect: (property: any) => void;
  isLoading?: boolean;
}

export default function SearchResults({ 
  properties, 
  totalCount, 
  sortBy, 
  onSortChange, 
  onPropertySelect,
  isLoading 
}: SearchResultsProps) {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [savedSearchName, setSavedSearchName] = useState("");
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const sortOptions = [
    { value: 'highestPrice', label: 'Highest Price' },
    { value: 'lowestPrice', label: 'Lowest Price' },
    { value: 'newest', label: 'Newest' },
    { value: 'beds', label: 'Bedrooms' },
    { value: 'sqft', label: 'Square Feet' },
  ];

  const handleSaveSearch = () => {
    // TODO: Implement save search functionality
    console.log('Saving search:', savedSearchName);
    setShowSaveDialog(false);
    setSavedSearchName("");
  };

  return (
    <div className="flex-1 h-full flex flex-col">
      {/* Results Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className="text-xl font-semibold text-primary">
              Over {totalCount} places in this area
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 text-primary hover:text-accent-light transition-colors"
              >
                Sort By: {sortOptions.find(opt => opt.value === sortBy)?.label}
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              
              {showSortDropdown && (
                <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        onSortChange(option.value);
                        setShowSortDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-primary hover:bg-lp3 transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <button className="px-4 py-2 bg-white text-primary border border-primary rounded-lg hover:bg-lp2 transition-colors flex items-center gap-2">
              <i className="fas fa-map"></i>
              Full Map
            </button>
            
            <button 
              onClick={() => setShowSaveDialog(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Save Search
            </button>
            
            <button className="px-4 py-2 bg-white text-primary border border-gray-300 rounded-lg hover:bg-lp2 transition-colors">
              Draw On Map
            </button>
          </div>
        </div>
      </div>
      
      {/* Property Grid */}
      <div className="flex-1 overflow-y-auto p-4">
        {isLoading ? (
          <div className="grid gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-lp3 rounded-lg h-64 animate-pulse"></div>
            ))}
          </div>
        ) : properties.length > 0 ? (
          <div className="grid gap-4">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onPropertySelect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="fas fa-home text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No properties found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or search in a different area
            </p>
          </div>
        )}
      </div>
      
      {/* Save Search Dialog */}
      {showSaveDialog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Save This Search
            </h3>
            <p className="text-gray-600 mb-4">
              Get notified when new properties matching your criteria become available.
            </p>
            <input
              type="text"
              placeholder="Name your search"
              value={savedSearchName}
              onChange={(e) => setSavedSearchName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 text-primary"
            />
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowSaveDialog(false)}
                className="px-4 py-2 text-primary hover:text-accent-light transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSearch}
                className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-light hover:text-primary transition-colors"
              >
                Save Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}