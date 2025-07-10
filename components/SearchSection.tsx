"use client";

import { useState } from "react";

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "sold", label: "Sold" },
    { id: "address", label: "Address" },
    { id: "neighborhood", label: "Neighborhood" },
    { id: "city", label: "City" },
    { id: "county", label: "County" },
    { id: "zip", label: "ZIP" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "in", activeTab);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-primary text-white"
                : "bg-lp2 text-primary hover:bg-lp3"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          placeholder={`Search for properties to ${activeTab}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light transition-colors flex items-center gap-2"
        >
          <i className="fas fa-robot"></i>
          Ask AI
        </button>
      </form>
    </div>
  );
}