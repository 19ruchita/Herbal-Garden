import React, { useState } from 'react';

const AyurvedicDietPage = () => {
  const [selectedDosha, setSelectedDosha] = useState('');
  const [activeSection, setActiveSection] = useState('introduction');
  const doshas = [
    { name: 'Vata', description: 'Creative, energetic, and lively' },
    { name: 'Pitta', description: 'Intelligent, hard-working, and decisive' },
    { name: 'Kapha', description: 'Naturally calm, grounded, and loyal' },
  ];

  const foodsByDosha = {
    Vata: ['Warm foods', 'Cooked vegetables', 'Fruits (ripe, sweet, and heavy)', 'Nuts and seeds', 'Dairy'],
    Pitta: ['Cool foods', 'Sweet fruits', 'Vegetables (except hot peppers)', 'Grains', 'Dairy (except sour)'],
    Kapha: ['Warm, light foods', 'Fruits (light and astringent)', 'Vegetables (except sweet/juicy)', 'Legumes', 'Spices'],
  };

  const weeklyDiet = {
    Monday: { breakfast: 'Warm oatmeal with fruits', lunch: 'Cooked lentils with steamed vegetables', dinner: 'Quinoa with sautéed greens' },
    Tuesday: { breakfast: 'Rice porridge with nuts and seeds', lunch: 'Mung bean soup with basmati rice', dinner: 'Steamed vegetables with herbal tea' },
    Wednesday: { breakfast: 'Warm almond milk with cinnamon and cardamom', lunch: 'Curry made with root vegetables', dinner: 'Light soup with whole grains' },
    Thursday: { breakfast: 'Spiced chai with whole wheat toast', lunch: 'Steamed vegetables with quinoa', dinner: 'Mung dal soup with cumin and coriander' },
    Friday: { breakfast: 'Ghee with warm rice and fruit', lunch: 'Chickpea salad with fresh herbs', dinner: 'Vegetable stew with barley' },
    Saturday: { breakfast: 'Warm spiced milk with dates', lunch: 'Rice pilaf with cooked vegetables', dinner: 'Light grain soup with seasonal vegetables' },
    Sunday: { breakfast: 'Warm quinoa porridge with fresh berries', lunch: 'Vegetable kitchari with ghee', dinner: 'Steamed greens with millet and herbal tea' },
  };

  const dietTips = [
    { tip: 'Eat seasonal fruits and vegetables.', image: '/seasonal vegetables.jpg' },
    { tip: 'Incorporate warming spices like turmeric, cumin, and coriander.', image: '/warm spices.jpg' },
    { tip: 'Stay hydrated with warm herbal teas.', image: '/herbal teas.jpg' },
    { tip: 'Favor freshly prepared meals over processed foods.', image: '/ayurvedic meal.jpg' },
  ];

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'doshas', title: 'Doshas' },
    { id: 'weeklyPlan', title: 'Weekly Plan' },
    { id: 'gallery', title: 'Food Gallery' },
    { id: 'tips', title: 'Diet Tips' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-amber-50">
      {/* Header */}
      <header className="bg-orange-600 text-white py-6 rounded-lg shadow-md mb-8">
        <h1 className="text-4xl font-bold text-center">Ayurvedic Diet: Balance Your Body and Mind</h1>
      </header>

      {/* Interactive Navigation */}
      <nav className="mb-8">
        <ul className="flex flex-wrap justify-center gap-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                }`}
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Introductory Section */}
        {activeSection === 'introduction' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
            <div>
              <img 
                src="/diet.jpeg" 
                alt="Ayurvedic diet foods" 
                className="rounded-lg shadow-md w-full h-full object-cover" 
              />
            </div>
            <div>
              <p className="text-lg mb-4">
                The Ayurvedic diet is based on the principles of balancing energies within your body 
                to improve health. Discover how this ancient wisdom can help you lead a balanced and harmonious life.
              </p>
              <p className="text-lg">
                This personalized diet offers recommendations based on your dosha type (body type) 
                and incorporates natural and wholesome foods.
              </p>
            </div>
          </div>
        )}

        {/* Dosha Information */}
        {activeSection === 'doshas' && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Foods to Eat Based on Your Dosha</h3>
            <p className="mb-4 text-gray-600">Select your dosha to see recommended foods:</p>
            <div className="flex flex-wrap gap-4 mb-6">
              {doshas.map((dosha) => (
                <button
                  key={dosha.name}
                  onClick={() => setSelectedDosha(dosha.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDosha === dosha.name
                      ? 'bg-orange-500 text-white'
                      : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                  }`}
                >
                  {dosha.name}
                </button>
              ))}
            </div>
            {selectedDosha && (
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-orange-800">{selectedDosha} Foods:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  {foodsByDosha[selectedDosha].map((food, index) => (
                    <li key={index}>{food}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Weekly Diet Plan (Calendar Style) */}
        {activeSection === 'weeklyPlan' && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Weekly Ayurvedic Diet Plan</h3>
            <div className="grid grid-cols-7 gap-4">
              {Object.entries(weeklyDiet).map(([day, meals]) => (
                <div key={day} className="bg-orange-50 p-4 rounded-lg shadow">
                  <h4 className="text-lg font-semibold mb-2 text-orange-800">{day}</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>B:</strong> {meals.breakfast}</li>
                    <li><strong>L:</strong> {meals.lunch}</li>
                    <li><strong>D:</strong> {meals.dinner}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image Gallery of Ayurvedic Foods */}
        {activeSection === 'gallery' && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ayurvedic Food Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src="/spices.jpg" alt="Spices" className="rounded-lg shadow-md object-cover w-full h-48" />
              <img src="/herbs.jpg" alt="Herbs" className="rounded-lg shadow-md object-cover w-full h-48" />
              <img src="/seasonal vegetables.jpg" alt="Fresh Vegetables" className="rounded-lg shadow-md object-cover w-full h-48" />
              <img src="/grains.jpg" alt="Grains and Legumes" className="rounded-lg shadow-md object-cover w-full h-48" />
            </div>
          </div>
        )}

        {/* Ayurvedic Diet Tips */}
        {activeSection === 'tips' && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Ayurvedic Diet Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dietTips.map((tip, index) => (
                <div key={index} className="flex space-x-4 items-center bg-orange-50 p-4 rounded-lg">
                  <img src={tip.image} alt={tip.tip} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                  <p className="text-gray-700">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AyurvedicDietPage;