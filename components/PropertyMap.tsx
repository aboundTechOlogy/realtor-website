"use client";

import { useEffect, useRef } from "react";

interface PropertyMapProps {
  properties: any[];
  selectedProperty: any;
  onPropertySelect: (property: any) => void;
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function PropertyMap({ 
  properties, 
  selectedProperty, 
  onPropertySelect,
  center = { lat: 25.7617, lng: -80.1918 },
  zoom = 12
}: PropertyMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    // Initialize map placeholder
    if (mapRef.current && !mapInstanceRef.current) {
      // For now, create a placeholder map
      // TODO: Replace with actual Google Maps or Leaflet implementation
      mapInstanceRef.current = createPlaceholderMap();
    }

    // Update markers
    updateMarkers();
  }, [properties, selectedProperty]);

  const createPlaceholderMap = () => {
    // Placeholder implementation
    if (mapRef.current) {
      mapRef.current.style.background = '#e5e7eb';
      mapRef.current.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100%; flex-direction: column; color: #6b7280;">
          <i class="fas fa-map-marked-alt" style="font-size: 48px; margin-bottom: 16px;"></i>
          <p style="font-size: 18px; font-weight: 500;">Map View</p>
          <p style="font-size: 14px;">Property locations will appear here</p>
        </div>
      `;
    }
  };

  const updateMarkers = () => {
    // Clear existing markers
    if (mapRef.current && properties.length > 0) {
      const markerContainer = document.createElement('div');
      markerContainer.style.position = 'absolute';
      markerContainer.style.top = '0';
      markerContainer.style.left = '0';
      markerContainer.style.width = '100%';
      markerContainer.style.height = '100%';
      markerContainer.style.pointerEvents = 'none';
      
      // Add sample markers
      properties.slice(0, 5).forEach((property, index) => {
        const marker = document.createElement('div');
        marker.style.position = 'absolute';
        marker.style.left = `${20 + (index * 15)}%`;
        marker.style.top = `${20 + (index * 10)}%`;
        marker.style.transform = 'translate(-50%, -50%)';
        marker.style.background = property.id === selectedProperty?.id ? '#3300ff' : '#171325';
        marker.style.color = 'white';
        marker.style.padding = '8px 12px';
        marker.style.borderRadius = '8px';
        marker.style.fontSize = '14px';
        marker.style.fontWeight = '600';
        marker.style.cursor = 'pointer';
        marker.style.pointerEvents = 'auto';
        marker.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
        marker.innerHTML = `$${Math.floor(property.price / 1000)}K`;
        
        marker.onclick = () => onPropertySelect(property);
        
        markerContainer.appendChild(marker);
      });
      
      // Clear and add new markers
      const existingMarkers = mapRef.current.querySelector('[data-markers]');
      if (existingMarkers) {
        existingMarkers.remove();
      }
      markerContainer.setAttribute('data-markers', 'true');
      mapRef.current.appendChild(markerContainer);
    }
  };

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${Math.floor(price / 1000)}K`;
  };

  return (
    <div className="relative h-full">
      <div ref={mapRef} className="w-full h-full relative" />
      
      {/* AI Property Search Button */}
      <button className="absolute bottom-6 right-6 bg-primary text-white px-4 py-3 rounded-lg shadow-lg hover:bg-primary-dark transition-colors flex items-center gap-2">
        <i className="fas fa-robot"></i>
        AI Property Search
      </button>
      
      {/* Map Controls */}
      <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg">
        <button className="p-3 hover:bg-gray-100 rounded-t-lg border-b">
          <i className="fas fa-plus text-primary"></i>
        </button>
        <button className="p-3 hover:bg-gray-100 rounded-b-lg">
          <i className="fas fa-minus text-primary"></i>
        </button>
      </div>
      
      {/* Map Type Toggle */}
      <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg flex">
        <button className="px-4 py-2 text-sm font-medium text-primary border-r hover:bg-gray-100 rounded-l-lg">
          Map
        </button>
        <button className="px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100 rounded-r-lg">
          Satellite
        </button>
      </div>
    </div>
  );
}