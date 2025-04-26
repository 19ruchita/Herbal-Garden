import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { Search, Filter, X } from 'lucide-react';
import { Tooltip } from 'react-tooltip';


const HerbalMap = ({ darkMode }) => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    type: 'all',
    medicinalUse: 'all',
    climate: 'all'
  });
  
  const getCountryFromCoordinates = (lon, lat) => {
    const countries = {
      'United States of America': [[-125, -67], [25, 49]],
    'India': [[68, 97], [8, 37]],
    'China': [[73, 135], [18, 53]],
    'Russian Federation': [[27, 180], [41, 77]],
    'Republic of Korea': [[126, 129], [34, 38]],
    'Germany': [[5, 15], [47, 55]],
    'France': [[-5, 8], [41, 51]],
    'Thailand': [[97, 105], [5, 20]],
    'Libya': [[9, 25], [19, 33]],
    'Japan': [[129, 146], [31, 45]],
    'Australia': [[113, 153], [-43, -10]],
    'Peru': [[-81, -68], [-18, 0]],
    'Nigeria': [[2, 14], [4, 14]],
    'South Africa': [[16, 32], [-34, -22]],
    'Italy': [[6, 18], [36, 47]],
    'Iran': [[44, 63], [25, 40]],
    'Israel': [[34, 35], [29, 33]],
    'Argentina': [[-73, -53], [-55, -21]],
    'Fiji': [[176, 180], [-19, -16]],
    'United Kingdom': [[-8, 2], [49, 61]],
    'Mexico': [[-117, -86], [14, 33]],
    'Brazil': [[-74, -34], [-34, 5]],
    'Indonesia': [[95, 141], [-11, 6]],
    'Pakistan': [[60, 77], [24, 37]],
    'Vietnam': [[102, 110], [8, 23]],
    'Turkey': [[26, 45], [36, 42]],
    'Nepal': [[80, 89], [26, 31]],
    'Sri Lanka': [[79, 82], [5, 10]],
    'Bangladesh': [[88, 92], [20, 27]],
    'Philippines': [[117, 126], [5, 20]],
    'Malaysia': [[100, 120], [1, 7]],
    'Ethiopia': [[33, 48], [3, 15]],
    'Kenya': [[34, 42], [-5, 5]],
    'Tanzania': [[29, 41], [-12, 0]],
    'Morocco': [[-13, -1], [27, 36]],
    'Egypt': [[25, 35], [22, 32]],
    'Colombia': [[-79, -67], [-4, 13]],
    'Bolivia': [[-69, -57], [-22, -9]],
    'Chile': [[-75, -66], [-56, -17]],
    'Venezuela': [[-73, -59], [0, 12]],
    'Saudi Arabia': [[34, 56], [16, 32]],
    'Iraq': [[38, 49], [29, 38]],
    'Uzbekistan': [[56, 74], [37, 46]],
    'Afghanistan': [[60, 75], [29, 38]]

    };
    
    for (const [country, [[minLon, maxLon], [minLat, maxLat]]] of Object.entries(countries)) {
      if (lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat) {
        return country;
      }
    }
    return null;
  };
  const getRegionColor = (countryId) => {
    const herbCount = herbLocations.filter(herb => {
      const [lon, lat] = herb.coordinates;
      const country = getCountryFromCoordinates(lon, lat);
      return countryId === country;
    }).length;
  
    if (herbCount >= 3) return "#2E7D32";
    if (herbCount === 2) return "#4CAF50";
    if (herbCount === 1) return "#81C784";
    return "#E8F5E9";
  };
  const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

  const herbLocations = [
    {
      id: 1,
      name: "Tulsi",
      coordinates: [78.9629, 20.5937], // India
      type: "Herb",
      medicinalUse: "Immunity",
      climate: "Tropical",
      description: "Sacred basil with immune-boosting properties",
      image: "/tulsi.jpg",
      scientificName: "Ocimum sanctum",
      funFact: "Known as the Queen of Herbs"
    },
    {
      id: 2,
      name: "Ginseng",
      coordinates: [126.9780, 37.5665], // South Korea
      type: "Root",
      medicinalUse: "Energy",
      climate: "Temperate",
      description: "Adaptogenic herb known for boosting energy and reducing stress",
      image: "/ginseng.jpg",
      scientificName: "Panax ginseng",
      funFact: "Takes at least 6 years to mature"
    },
    {
      id: 3,
      name: "Echinacea",
      coordinates: [-95.7129, 37.0902], // USA
      type: "Herb",
      medicinalUse: "Immunity",
      climate: "Temperate",
      description: "Native American herb used for immune support",
      image: "/echinacea.jpg",
      scientificName: "Echinacea purpurea",
      funFact: "Also known as coneflower"
    },
    {
      id: 4,
      name: "Chamomile",
      coordinates: [10.4515, 51.1657], // Germany
      type: "Herb",
      medicinalUse: "Relaxation",
      climate: "Temperate",
      description: "Calming herb used for sleep and relaxation",
      image: "/chamomile.jpg",
      scientificName: "Matricaria chamomilla",
      funFact: "Name means 'ground apple' in Greek"
    },
    {
      id: 5,
      name: "Lavender",
      coordinates: [2.2137, 43.9043], // France
      type: "Shrub",
      medicinalUse: "Relaxation",
      climate: "Mediterranean",
      description: "Aromatic herb known for its calming properties",
      image: "/lavender.jpg",
      scientificName: "Lavandula angustifolia",
      funFact: "Romans used it to scent their baths"
    },
    {
      id: 6,
      name: "Ginger",
      coordinates: [100.9925, 15.8700], // Thailand
      type: "Root",
      medicinalUse: "Digestive",
      climate: "Tropical",
      description: "Spicy root used for digestion and inflammation",
      image: "/ginger.jpg",
      scientificName: "Zingiber officinale",
      funFact: "Part of the same family as turmeric"
    },
    {
      id: 7,
      name: "Aloe Vera",
      coordinates: [23.4241, 25.6242], // Libya
      type: "Succulent",
      medicinalUse: "Skin Care",
      climate: "Arid",
      description: "Succulent plant used for skin healing",
      image: "/aloe.jpg",
      scientificName: "Aloe barbadensis miller",
      funFact: "Known as the 'plant of immortality' in Egypt"
    },
    {
      id: 8,
      name: "Green Tea",
      coordinates: [138.2529, 36.2048], // Japan
      type: "Tree",
      medicinalUse: "Antioxidant",
      climate: "Temperate",
      description: "Tea leaves rich in antioxidants",
      image: "/greentea.jpg",
      scientificName: "Camellia sinensis",
      funFact: "Contains L-theanine for mental alertness"
    },
    {
      id: 9,
      name: "Eucalyptus",
      coordinates: [133.7751, -25.2744], // Australia
      type: "Tree",
      medicinalUse: "Respiratory",
      climate: "Mediterranean",
      description: "Aromatic tree used for respiratory health",
      image: "/eucalyptus.jpg",
      scientificName: "Eucalyptus globulus",
      funFact: "Koalas' main food source"
    },
    {
      id: 10,
      name: "Maca",
      coordinates: [-75.2329, -9.1900], // Peru
      type: "Root",
      medicinalUse: "Energy",
      climate: "Highland",
      description: "Root vegetable used for energy and vitality",
      image: "/maca.jpg",
      scientificName: "Lepidium meyenii",
      funFact: "Grows at altitudes over 13,000 feet"
    },
    {
      id: 11,
      name: "Moringa",
      coordinates: [8.6753, 9.0820], // Nigeria
      type: "Tree",
      medicinalUse: "Nutrition",
      climate: "Tropical",
      description: "Nutrient-rich tree known as the 'miracle tree'",
      image: "/moringa.jpg",
      scientificName: "Moringa oleifera",
      funFact: "Every part of the tree is edible"
    },
    {
      id: 12,
      name: "Rooibos",
      coordinates: [19.4391, -32.8287], // South Africa
      type: "Shrub",
      medicinalUse: "Antioxidant",
      climate: "Mediterranean",
      description: "Red bush tea with antioxidant properties",
      image: "/rooibos.jpg",
      scientificName: "Aspalathus linearis",
      funFact: "Naturally caffeine-free"
    },
    {
      id: 13,
      name: "Rosemary",
      coordinates: [12.4964, 41.9028], // Italy
      type: "Shrub",
      medicinalUse: "Memory",
      climate: "Mediterranean",
      description: "Aromatic herb known for memory enhancement",
      image: "/rosemary.jpg",
      scientificName: "Rosmarinus officinalis",
      funFact: "Symbol of remembrance and fidelity"
    },
    {
      id: 14,
      name: "Saffron",
      coordinates: [53.6880, 32.4279], // Iran
      type: "Herb",
      medicinalUse: "Mood",
      climate: "Semi-arid",
      description: "Precious spice used for mood enhancement",
      image: "/saffron.jpg",
      scientificName: "Crocus sativus",
      funFact: "Most expensive spice in the world"
    },
    {
      id: 15,
      name: "Ashwagandha",
      coordinates: [78.9629, 20.5937], // India
      type: "Shrub",
      medicinalUse: "Stress",
      climate: "Arid",
      description: "Adaptogenic herb for stress relief",
      image: "/ashwagandha.jpg",
      scientificName: "Withania somnifera",
      funFact: "Name means 'smell of horse' in Sanskrit"
    },
    {
      id: 16,
      name: "Rhodiola",
      coordinates: [105.3188, 61.5240], // Russia
      type: "Herb",
      medicinalUse: "Adaptation",
      climate: "Arctic",
      description: "Arctic root used for stress adaptation",
      image: "/rhodiola.jpg",
      scientificName: "Rhodiola rosea",
      funFact: "Vikings used it for strength"
    },
    {
      id: 17,
      name: "Yerba Mate",
      coordinates: [-63.6167, -38.4161], // Argentina
      type: "Tree",
      medicinalUse: "Energy",
      climate: "Subtropical",
      description: "Energizing tea leaves rich in nutrients",
      image: "/yerba-mate.jpg",
      scientificName: "Ilex paraguariensis",
      funFact: "Traditionally shared from a gourd"
    },
    {
      id: 18,
      name: "Kava",
      coordinates: [178.0650, -17.7134], // Fiji
      type: "Shrub",
      medicinalUse: "Relaxation",
      climate: "Tropical",
      description: "Root used for relaxation and ceremony",
      image: "/kava.jpg",
      scientificName: "Piper methysticum",
      funFact: "Central to Pacific Island culture"
    },
    {
      id: 19,
      name: "Dong Quai",
      coordinates: [104.1954, 35.8617], // China
      type: "Herb",
      medicinalUse: "Women's Health",
      climate: "Temperate",
      description: "Female ginseng for women's health",
      image: "/dong-quai.jpg",
      scientificName: "Angelica sinensis",
      funFact: "Called 'female ginseng' in Chinese medicine"
    },
    {
      id: 20,
      name: "Cannabis",
      coordinates: [34.8516, 31.0461], // Israel
      type: "Herb",
      medicinalUse: "Pain Relief",
      climate: "Varied",
      description: "Medicinal plant with various therapeutic uses",
      image: "/cannabis.jpg",
      scientificName: "Cannabis sativa",
      funFact: "Has over 100 different cannabinoids"
    },
    {
      id: 21,
      name: "St. John's Wort",
      coordinates: [-3.4359, 55.3781], // Scotland
      type: "Herb",
      medicinalUse: "Mood",
      climate: "Temperate",
      description: "Herb traditionally used for mood support",
      image: "/stjohnswort.jpg",
      scientificName: "Hypericum perforatum",
      funFact: "Blooms around St. John's Day"
    }
  ];

  const handleZoom = (zoom) => {
    setPosition(pos => ({ ...pos, zoom }));
  };

  const filteredHerbs = herbLocations.filter(herb => {
    return (
      herb.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeFilters.type === 'all' || herb.type === activeFilters.type) &&
      (activeFilters.medicinalUse === 'all' || herb.medicinalUse === activeFilters.medicinalUse) &&
      (activeFilters.climate === 'all' || herb.climate === activeFilters.climate)
    );
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Search and Filters */}
      <div className="p-4 border-b">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search herbs..."
              className="w-full px-4 py-2 pl-10 rounded-lg border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          {/* Filter Controls */}
          <select
            className="px-4 py-2 rounded-lg border"
            value={activeFilters.type}
            onChange={(e) => setActiveFilters({...activeFilters, type: e.target.value})}
          >
            <option value="all">All Types</option>
            <option value="Herb">Herbs</option>
            <option value="Tree">Trees</option>
            <option value="Shrub">Shrubs</option>
          </select>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-[70vh] border rounded-lg m-4">
        <ComposableMap projection="geoMercator" data-tip="">
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={setPosition}
          >

<Geographies geography={geoUrl}>
  {({ geographies }) =>
    geographies.map((geo) => {
      const countryName = geo.properties.name; // Updated to match world-atlas format
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          fill={getRegionColor(countryName)}
          stroke={darkMode ? "#4B5563" : "#9CA3AF"}
          strokeWidth={0.5}
          style={{
            default: { outline: 'none' },
            hover: { 
              fill: getRegionColor(countryName),
              opacity: 0.8,
              outline: 'none' 
            },
            pressed: { outline: 'none' },
          }}
        />
      );
    })
  }
</Geographies>
            
            {filteredHerbs.map((herb) => (
              <Marker key={herb.id} coordinates={herb.coordinates}>
                <circle
                  r={5}
                  fill="#F59E0B"
                  stroke="#fff"
                  strokeWidth={2}
                  className="cursor-pointer hover:r-6 transition-all"
                  onClick={() => setSelectedPlant(herb)}
                  data-tooltip-id="herb-tooltip"
                  data-tooltip-content={herb.name}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>

        {/* Add the legend here */}
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow">
          <div className="text-sm font-semibold mb-2">Herbal Density</div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-4 h-4 bg-[#2E7D32]"></div>
            <span>High (3+ herbs)</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-4 h-4 bg-[#4CAF50]"></div>
            <span>Medium (2 herbs)</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-4 h-4 bg-[#81C784]"></div>
            <span>Low (1 herb)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#E8F5E9]"></div>
            <span>None</span>
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={() => handleZoom(position.zoom * 1.2)}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            +
          </button>
          <button
            onClick={() => handleZoom(position.zoom / 1.2)}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            -
          </button>
        </div>
      </div>

      {/* Plant Details Modal */}
      {selectedPlant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className={`max-w-lg w-full rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">{selectedPlant.name}</h2>
                <p className="text-sm italic">{selectedPlant.scientificName || ''}</p>
              </div>
              <button
                onClick={() => setSelectedPlant(null)}
                className="p-1 rounded-full hover:bg-gray-200"
              >
                <X size={24} />
              </button>
            </div>
            <img
              src={selectedPlant.image}
              alt={selectedPlant.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="mb-4">{selectedPlant.description}</p>
            <div className="bg-amber-100 p-4 rounded-lg">
              <p className="font-bold">Fun Fact:</p>
              <p>{selectedPlant.funFact}</p>
            </div>
          </div>
        </div>
      )}

      <Tooltip id="herb-tooltip" />
    </div>
  );
};

export default HerbalMap;

