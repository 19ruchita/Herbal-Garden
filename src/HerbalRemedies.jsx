import React from 'react';
import { useNavigate } from 'react-router-dom';

const HerbalRemediesPage = ({ darkMode }) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const commonRemedies = [
    {
      condition: "Cold & Cough",
      treatment: "Traditional remedies that help soothe respiratory issues and boost immunity",
      herbs: ["Tulsi tea", "Ginger-honey mix", "Mulethi kadha"]
    },
    {
      condition: "Digestive Health",
      treatment: "Natural solutions for better digestion and gut health",
      herbs: ["Fennel seeds", "Triphala", "Jeera water"]
    },
    {
      condition: "Immunity Boosters",
      treatment: "Strengthen your body's natural defense system",
      herbs: ["Chyawanprash", "Amla juice", "Giloy decoction"]
    },
    {
      condition: "Stress Relief",
      treatment: "Calming herbs to help manage stress and anxiety",
      herbs: ["Ashwagandha", "Brahmi tea", "Aromatherapy oils"]
    },
    {
      condition: "Minor Cuts & Wounds",
      treatment: "Natural antiseptic and healing applications",
      herbs: ["Turmeric paste", "Aloe Vera gel", "Neem oil"]
    },
    {
      condition: "Sleep Remedies",
      treatment: "Gentle herbs to promote better sleep quality",
      herbs: ["Chamomile tea", "Warm turmeric milk", "Shankhpushpi"]
    }
  ];
  
  const guidelines = [
    {
      title: "Understand the Purpose",
      description: "Research each herb's traditional uses and benefits. For example, peppermint aids digestion, while ashwagandha reduces stress. Consult professionals for personalized guidance."
    },
    {
      title: "Choose the Right Form",
      description: "Herbs come in various forms: teas for relaxation, capsules for measured doses, tinctures for fast action, and topical applications for external use. Select based on your needs."
    },
    {
      title: "Follow Proper Dosage",
      description: "Natural doesn't mean risk-free. Always follow recommended dosages, use proper measuring tools, and consult healthcare providers, especially if you have existing conditions."
    },
    {
      title: "Check for Interactions",
      description: "Some herbs can interact with medications. For example, St. John's Wort affects antidepressants. Always inform your healthcare provider about herbal supplements you're taking."
    },
    {
      title: "Start Gradually",
      description: "Begin with small doses and monitor your body's response. Keep a journal to track effects and any improvements or reactions."
    },
    {
      title: "Proper Storage",
      description: "Store herbs in cool, dry places away from sunlight. Check expiration dates and avoid using herbs that show signs of degradation."
    },
    {
      title: "Quality Matters",
      description: "Choose products from reputable brands with quality certifications like GMP. Third-party testing ensures purity and potency."
    },
    {
      title: "Complementary Approach",
      description: "Use herbal remedies as part of a holistic health strategy, alongside proper medical care, balanced diet, and regular exercise."
    }
  ];
  
  const dailyPractices = [
    {
      icon: "🫖",
      title: "Herbal Teas",
      description: "Daily consumption of beneficial herbs through teas"
    },
    // Add more practices...
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: 'url("/herbs-hero.jpg")' }}>
          <img 
              src="/r1.jpg"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Herbal Remedies: A Natural Way to Heal</h1>
            <p className="text-xl mb-8">
              Ancient wisdom meets modern wellness through natural healing practices
            </p>
          </div>
        </div>
      </div>

      {/* Left Navigation Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-white/95 dark:bg-gray-800/95 shadow-lg z-20 overflow-y-auto">
        <div className="p-6 pt-24 sticky top-0">
          <h3 className="font-semibold mb-6 text-green-600 dark:text-green-400 border-b pb-2">ON THIS PAGE</h3>
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => scrollToSection('introduction')}
                className="text-left w-full text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                What Are Herbal Remedies and Why Should You Care?
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-left w-full text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Why Herbal Remedies Are a Safer Choice
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('remedies')}
                className="text-left w-full text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Herbal Remedies for Common Issues
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('guidelines')}
                className="text-left w-full text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                How to Use Herbal Remedies the Right Way
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('benefits-long-term')}
                className="text-left w-full text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Nature as Your Long-Term Health Partner
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main content wrapper */}
      <div className="lg:pl-64 min-h-screen flex flex-col">
        {/* Update section IDs */}
        <section id="introduction" className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              What Are Herbal Remedies and Why Should You Care?
            </h2>
            <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
              <p className="text-lg mb-6">
                Herbal remedies are natural treatments made from plants, herbs, and spices that help the body heal and stay balanced. Unlike chemical medicines, they usually don't cause side effects when used properly. Many herbs work slowly but effectively, treating not just the symptoms but the root cause of the problem.
              </p>
              <div className="bg-green-50 p-6 rounded-lg dark:bg-green-900">
                <p className="italic">
                  "If you've ever had ginger tea for a cold or used turmeric for a cut, you've already experienced herbal healing."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-green-50'}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              Why Herbal Remedies Are a Safer Choice
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Are gentle on the body
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Are made from natural ingredients
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Can be used regularly without harmful effects
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Help the body heal itself
                  </li>
                </ul>
              </div>
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <img src="/r2.jpg" alt="Natural Herbs" className="rounded-lg w-full h-48 object-cover mb-4" />
                <p className="text-sm italic">
                  Example: Instead of taking a sleeping pill, using Brahmi or Jatamansi tea can improve sleep naturally over time without addiction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Remedies Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              Herbal Remedies for Common Issues
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commonRemedies.map((remedy, index) => (
                <div 
                  key={index} 
                  className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">{remedy.condition}</h3>
                    <p className="mb-6 text-sm opacity-90">{remedy.treatment}</p>
                    <div className="space-y-3">
                      {remedy.herbs.map((herb, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center p-3 rounded-lg transition-colors ${
                            darkMode 
                              ? 'bg-gray-700 hover:bg-gray-600' 
                              : 'bg-green-50 hover:bg-green-100'
                          }`}
                        >
                          <span className="text-green-500 mr-3">•</span>
                          <span className="text-sm">{herb}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`absolute inset-x-0 bottom-0 h-1 transition-all duration-300 ${
                    darkMode ? 'bg-[#E6A57E]' : 'bg-[#A3B18A]'
                  } group-hover:h-2`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-green-50'}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              How to Use Herbal Remedies the Right Way
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {guidelines.map((guideline, index) => (
                <div key={index} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <h3 className="text-xl font-semibold mb-4">{guideline.title}</h3>
                  <p>{guideline.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Long-term Benefits Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              Nature as Your Long-Term Health Partner
            </h2>
            <p className="text-lg mb-8">
              Herbs are not just for treating illness—they help keep you healthy every day. They promote balance between the body and mind, helping you feel more energetic, focused, and peaceful.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {dailyPractices.map((practice, index) => (
                <div key={index} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                  <span className="text-4xl mb-4 block">{practice.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                  <p>{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>  // Closing div for min-h-screen
  );  // Closing parenthesis for return
}; // Closing for const HerbalRemediesPage


export default HerbalRemediesPage;