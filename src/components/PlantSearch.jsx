import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PlantSearch = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'all',
    benefits: 'all',
  });

  const categories = [
    'Skin Care',
    'Hair Care',
    'Herbal Remedies',
    'Ayurvedic',
    'General Health',
    'Brain Health',
    'Respiratory Health',
    'Digestive Health'
  ];

  const benefits = [
    'Healing',
    'Anti-inflammatory',
    'Digestive',
    'Immunity',
    'Stress Relief',
    'Sleep Aid',
    'Skin Health',
    'Hair Growth',
    'Memory Enhancement',
    'Respiratory Relief'
  ];

  const plantDatabase = [
    {
      name: "Tulsi",
      scientificName: "Ocimum sanctum",
      categories: ["Herbal Remedies", "Immunity", "Respiratory Health"],
      benefits: ["Immunity", "Stress Relief", "Anti-inflammatory", "Respiratory Health"],
      description: "Sacred basil with powerful healing and adaptogenic properties",
      image: "/images/plants/tulsi.jpg",
      usedIn: ["Cold & Cough", "Immunity Boosters", "Stress Relief"]
    },
    {
      name: "Aloe Vera",
      scientificName: "Aloe barbadensis miller",
      categories: ["Skin Care", "Hair Care", "Healing"],
      benefits: ["Skin Health", "Hair Growth", "Healing", "Anti-inflammatory"],
      description: "Succulent plant known for its healing and moisturizing properties",
      image: "/images/plants/aloe-vera.jpg",
      usedIn: ["Skin Care", "Hair Care", "Minor Cuts & Wounds"]
    },
    {
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      categories: ["Ayurvedic", "Stress Relief", "General Health"],
      benefits: ["Stress Relief", "Sleep Aid", "Immunity", "Energy"],
      description: "Adaptogenic herb that helps body manage stress",
      image: "/images/plants/ashwagandha.jpg",
      usedIn: ["Stress Relief", "Sleep Remedies"]
    },
    {
      name: "Neem",
      scientificName: "Azadirachta indica",
      categories: ["Skin Care", "Hair Care", "Healing"],
      benefits: ["Skin Health", "Anti-bacterial", "Blood Purification"],
      description: "Traditional medicinal herb with antibacterial properties",
      image: "/images/plants/neem.jpg",
      usedIn: ["Skin Care", "Hair Care", "Minor Cuts & Wounds"]
    },
    {
      name: "Brahmi",
      scientificName: "Bacopa monnieri",
      categories: ["Brain Health", "Hair Care", "Stress Relief"],
      benefits: ["Memory Enhancement", "Hair Growth", "Stress Relief"],
      description: "Herb known for cognitive enhancement and hair health",
      image: "/images/plants/brahmi.jpg",
      usedIn: ["Hair Care", "Stress Relief"]
    },
    {
      name: "Amla",
      scientificName: "Phyllanthus emblica",
      categories: ["Hair Care", "Immunity", "Skin Care"],
      benefits: ["Hair Growth", "Vitamin C", "Antioxidant"],
      description: "Rich source of Vitamin C with multiple health benefits",
      image: "/images/plants/amla.jpg",
      usedIn: ["Hair Care", "Immunity Boosters"]
    },
    {
      name: "Giloy",
      scientificName: "Tinospora cordifolia",
      categories: ["Immunity", "General Health"],
      benefits: ["Immunity", "Anti-inflammatory", "Fever Relief"],
      description: "Powerful immunomodulator herb",
      image: "/images/plants/giloy.jpg",
      usedIn: ["Immunity Boosters"]
    },
    {
      name: "Mulethi",
      scientificName: "Glycyrrhiza glabra",
      categories: ["Respiratory Health", "Digestive Health"],
      benefits: ["Respiratory Relief", "Digestive Aid", "Anti-inflammatory"],
      description: "Sweet root with multiple therapeutic properties",
      image: "/images/plants/mulethi.jpg",
      usedIn: ["Cold & Cough", "Digestive Health"]
    },
    {
      name: "Shankhpushpi",
      scientificName: "Convolvulus pluricaulis",
      categories: ["Brain Health", "Sleep Aid"],
      benefits: ["Memory Enhancement", "Sleep Aid", "Stress Relief"],
      description: "Brain tonic herb that promotes mental health",
      image: "/images/plants/shankhpushpi.jpg",
      usedIn: ["Sleep Remedies"]
    },
    {
      name: "Triphala",
      scientificName: "Three fruit combination",
      categories: ["Digestive Health", "Detoxification"],
      benefits: ["Digestive Aid", "Detoxification", "Anti-inflammatory"],
      description: "Traditional ayurvedic formula for digestive health",
      image: "/images/plants/triphala.jpg",
      usedIn: ["Digestive Health"]
    }
  ];

  const filterPlants = () => {
    return plantDatabase.filter(plant => {
      const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filters.category === 'all' || plant.categories.includes(filters.category);
      const matchesBenefit = filters.benefits === 'all' || plant.benefits.includes(filters.benefits);
      
      return matchesSearch && matchesCategory && matchesBenefit;
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <div className="bg-green-600 dark:bg-green-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Herbal Plant Directory
          </h1>
          <p className="text-green-100 text-center text-lg">
            Discover the healing power of natural herbs
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search plants by name..."
            className={`w-full p-4 rounded-lg border ${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-4">
            <select
              className={`p-3 rounded-lg border ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="all">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              className={`p-3 rounded-lg border ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
              value={filters.benefits}
              onChange={(e) => setFilters({...filters, benefits: e.target.value})}
            >
              <option value="all">All Benefits</option>
              {benefits.map(benefit => (
                <option key={benefit} value={benefit}>{benefit}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterPlants().map((plant, index) => (
            <div 
              key={index} 
              className={`rounded-lg shadow-lg overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={plant.image} 
                  alt={plant.name} 
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                <p className="text-sm italic mb-2 text-gray-500 dark:text-gray-400">
                  {plant.scientificName}
                </p>
                <p className="text-sm mb-4">{plant.description}</p>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {plant.categories.map((cat, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {plant.benefits.map((benefit, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantSearch;