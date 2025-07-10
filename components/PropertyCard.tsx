"use client";

import { useState } from "react";
import Image from "next/image";

interface PropertyCardProps {
  property: {
    id: string;
    price: number;
    address: string;
    city: string;
    state: string;
    zip: string;
    beds: number;
    baths: number;
    sqft: number;
    images: string[];
    isNewListing: boolean;
    propertyType: string;
  };
  onSelect: (property: any) => void;
}

export default function PropertyCard({ property, onSelect }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
      onClick={() => onSelect(property)}
    >
      {/* Image Carousel */}
      <div className="relative h-48 md:h-56 bg-gray-200">
        {property.isNewListing && (
          <span className="absolute top-4 left-4 z-10 bg-accent text-white px-3 py-1 rounded text-sm font-semibold">
            NEW LISTING
          </span>
        )}
        
        {/* Image */}
        <div className="relative h-full">
          <Image
            src={property.images[currentImageIndex]}
            alt={property.address}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-property.jpg';
            }}
          />
        </div>
        
        {/* Navigation Arrows */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 transition-colors"
            >
              <i className="fas fa-chevron-left text-primary text-sm"></i>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 transition-colors"
            >
              <i className="fas fa-chevron-right text-primary text-sm"></i>
            </button>
          </>
        )}
        
        {/* Image Dots */}
        {property.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {property.images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Property Details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-primary">
            {formatPrice(property.price)}
          </h3>
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(!isFavorite);
              }}
              className="text-primary hover:text-accent-light transition-colors"
            >
              <i className={`${isFavorite ? 'fas' : 'far'} fa-heart`}></i>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // Share functionality
              }}
              className="text-primary hover:text-accent-light transition-colors"
            >
              <i className="fas fa-share-alt"></i>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                // More options
              }}
              className="text-primary hover:text-accent-light transition-colors"
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        
        <p className="text-primary font-medium mb-1">
          {property.address}
        </p>
        <p className="text-gray-600 text-sm mb-3">
          {property.city}, {property.state} {property.zip}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-primary">
          <span className="flex items-center gap-1">
            <i className="fas fa-bed"></i>
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-bath"></i>
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <i className="fas fa-ruler-combined"></i>
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
        
        <p className="text-xs text-gray-500 mt-3">
          MLS # {property.id}
        </p>
      </div>
    </div>
  );
}