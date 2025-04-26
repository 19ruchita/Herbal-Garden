

import React from 'react';

const HairCarePage = () => {
  const remedies = [
    {
      title: 'Nourishing Hair Mask',
      description: 'Mix one egg with a tablespoon of olive oil for a protein-rich hair mask.',
      steps: [
        'Apply to damp hair from roots to tips',
        'Leave on for 20 minutes',
        'Rinse with cool water and mild shampoo'
      ],
      image: '/ha.jpg'
    },
    {
      title: 'Scalp Massage with Essential Oils',
      description: 'Combine a few drops of rosemary or lavender oil with a carrier oil like coconut.',
      steps: [
        'Gently massage into scalp for 5 minutes',
        'Leave overnight if possible',
        'Wash hair as usual in the morning'
      ],
      image: '/hb.jpg'
    },
    // Add more remedies here
  ];

  const tips = [
    'Eat a balanced diet rich in vitamins and minerals.',
    'Stay hydrated by drinking plenty of water.',
    'Avoid excessive heat styling.',
    'Use a silk pillowcase to reduce friction.',
    'Trim your hair regularly to prevent split ends.',
    'Avoid tight hairstyles that pull on your hair.',
    'Protect your hair from sun exposure.',
    'Use a wide-tooth comb to detangle your hair.',
    'Limit chemical treatments like coloring and perming.',
    'Get regular scalp massages to promote blood circulation.'
  ];

  return (
    <div className="bg-white min-h-screen">

      {/* Left Side Navigation */}
      <div className="flex">
        <div className="w-64 h-screen sticky top-20 p-6 bg-white shadow-md">
          <h2 className="text-xl font-bold mb-6">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              On This Page
            </span>
          </h2>
          <ul className="space-y-4">
            <li><a href="#perspective" className="text-pink-800 hover:text-pink-600 transition-colors">Ayurvedic Perspective</a></li>
            <li><a href="#hair-types" className="text-pink-800 hover:text-pink-600 transition-colors">Hair Types</a></li>
            <li><a href="#diseases" className="text-pink-800 hover:text-pink-600 transition-colors">Common Diseases</a></li>
            <li><a href="#routine" className="text-pink-800 hover:text-pink-600 transition-colors">Ayurvedic Routine</a></li>
            <li><a href="#treatments" className="text-pink-800 hover:text-pink-600 transition-colors">Ayurvedic Treatments</a></li>
          </ul>
        </div>

        {/* Main Content Wrapper */}
        <div className="flex-1">
          {/* Hero Section */}
          <div className="relative h-[70vh] mb-12">
            <div className="absolute inset-0">
              <img 
                src="/hair_care.jpg"
                alt="Natural Hair Care"
                className="w-full h-full object-cover"
              />
              {/* Darker gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/60"></div>
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-5xl font-serif text-white mb-6 font-bold drop-shadow-lg">
                Nourish Naturally. Shine Naturally.
              </h1>
              <p className="text-xl text-white mb-8 max-w-2xl drop-shadow-md">
                Discover the power of nature for beautiful, healthy hair
              </p>

            </div>
          </div>

          <main className="container mx-auto px-4 py-8">
            <section id="perspective" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-serif text-pink-800 mb-8">Ayurvedic Perspective on Hair Health</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                  <div>
                    <p className="text-lg leading-relaxed mb-4">
                      According to Ayurveda, healthy hair is a sign of overall well-being. Hair health is influenced by:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                      <li>Balance of three doshas: Vata, Pitta, and Kapha</li>
                      <li>Proper digestion and nutrient absorption</li>
                      <li>Mental and emotional well-being</li>
                      <li>Daily and seasonal routines (dinacharya and ritucharya)</li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <p className="text-lg leading-relaxed mb-4">
                      According to Ayurveda, hair health depends on harmony between the mind and body. Stress, anxiety, and health issues can manifest as lackluster locks.
                    </p>
                    <h3 className="text-xl font-semibold mb-4">To boost hair health the natural way:</h3>
                    <div className="grid gap-4">
                      <div>
                        <h4 className="font-semibold mb-3">Mind & Body Balance</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Focus on self-care</li>
                          <li>Try meditation or yoga to reduce stress</li>
                          <li>Get enough sleep for body repair</li>
                          <li>Include a balanced diet with protein, iron, and healthy fats</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Hair Care Routine</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Regular oiling with coconut or sesame oil</li>
                          <li>Gentle scalp massage to increase blood flow</li>
                          <li>Limit shampooing to 2-3 times a week</li>
                          <li>Use natural shampoos with hibiscus and soap nuts</li>
                          <li>Weekly scalp scrub with triphala</li>
                          <li>Minimize heat styling</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed mt-6 text-pink-800 italic">
                      Ayurveda teaches that beauty starts from within, so take time for self-care, and your hair will thrive.
                    </p>
                  </div>
                </div>

                <div className="relative h-full">
                  <div className="sticky top-24">
                    <img
                      src="/h3.webp"
                      alt="Ayurvedic Hair Care Ingredients"
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                    <div className="mt-4 bg-pink-50 p-4 rounded-lg">
                      <p className="text-sm text-pink-800 italic">
                        Traditional Ayurvedic ingredients like amla, brahmi, and bhringraj have been used for centuries to promote healthy hair growth and maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="hair-types" className="mb-16 scroll-mt-20">
              {/* Decorative banner */}
              <div className="h-24 mb-8 rounded-lg overflow-hidden relative">
                <img
                  src="/h4.webp"
                  alt=""
                  className="w-full h-full object-cover"
                />

              </div>

              <h2 className="text-3xl font-serif text-pink-800 mb-8">Different Types of Hair According to Ayurveda</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Vata Hair Type</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Dry and rough texture</li>
                    <li>Prone to frizz and split ends</li>
                    <li>Thin and delicate strands</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Pitta Hair Type</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Fine and straight texture</li>
                    <li>Prone to early graying</li>
                    <li>Moderate thickness</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Kapha Hair Type</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Thick and wavy texture</li>
                    <li>Oily scalp</li>
                    <li>Strong and lustrous</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="diseases" className="mb-16 scroll-mt-20 relative">
              <div className="min-h-screen relative">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-fixed"
                  style={{
                    backgroundImage: 'url("/hair.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                  }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative py-16">
                  <h2 className="text-3xl font-serif text-white mb-8 text-center">
                    Common Hair Problems & Their Ayurvedic Solutions
                  </h2>
                  <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                      {/* First three cards remain the same */}
                      <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-3">Darunaka (Dandruff)</h3>
                        <p className="text-gray-700 mb-4">A Vata-Kapha imbalance causing flaky scalp skin, manifesting as excess oiliness or dryness.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Apply coconut or neem oil to balance scalp health</li>
                          <li>Use mild shampoo 2–3 times weekly</li>
                          <li>Apply fresh neem leaf paste for natural treatment</li>
                        </ul>
                      </div>

                      {/* ... Keep the same structure for other conditions ... */}
                      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Khalitya (Hair Fall)</h3>
                        <p className="text-gray-700 mb-4">Natural to lose 50-100 strands daily. Excessive loss indicates Pitta dosha imbalance.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Observe changes over 3-6 months period</li>
                          <li>Address stress and hormonal imbalances</li>
                          <li>Use appropriate hair care products</li>
                          <li>Focus on identifying root causes</li>
                        </ul>
                      </div>

                      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Rukshata (Dryness)</h3>
                        <p className="text-gray-700 mb-4">A Vata imbalance indicating nutritional deficiencies or systemic issues.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Increase protein and essential fatty acids intake</li>
                          <li>Supplement with vitamin B5</li>
                          <li>Address underlying hormonal imbalances</li>
                          <li>Treat with extra care and nourishment</li>
                        </ul>
                      </div>

                      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md mx-auto">
                        <h3 className="text-xl font-semibold mb-4">Dwisthira Kesha (Split Ends)</h3>
                        <p className="text-gray-700 mb-4">Results from lack of proper hair oil nourishment reaching the tips.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Regular trimming following Ayurvedic calendar</li>
                          <li>Minimize heat exposure</li>
                          <li>Use protective hair oils and treatments</li>
                          <li>Maintain proper hair oiling routine</li>
                        </ul>
                      </div>

                      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-md mx-auto">
                        <h3 className="text-xl font-semibold mb-4">Palitya (Premature Graying)</h3>
                        <p className="text-gray-700 mb-4">Early graying due to Pitta imbalance affecting melanin production.</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Consume diet rich in vitamin B5, copper, and iron</li>
                          <li>Daily intake of triphala with honey and ghee</li>
                          <li>Regular nasya with Anu taila</li>
                          <li>Use rejuvenating (rasayana) treatments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="routine" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-serif text-pink-800 mb-8">Ayurvedic Routine for Hair Care</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Daily Routine (Dinacharya)</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Daily moisturizing to maintain hair health</li>
                      <li>Practice Nasya (nasal medication) for better circulation</li>
                      <li>Gentle combing with a wide-toothed comb</li>
                      <li>Maintain a balanced, nutritious diet</li>
                      <li>Ensure adequate sleep for hair repair</li>
                      <li>Include exercise or relaxation techniques</li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4">Weekly Hair Care Routine</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Trim your hair every 15 days according to Ayurvedic principles</li>
                      <li>Apply warm oils on the scalp and hair with gentle massage (2-3 times)</li>
                      <li>Wash your hair with medicated water</li>
                    </ul>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4">Monthly Hair Care Routine</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Apply rejuvenating hair masks (e.g., protein masks)</li>
                      <li>Deep cleanse with medicated water</li>
                      <li>Regular trimming to maintain hair health</li>
                    </ul>
                  </div>
                </div>

                <div className="relative h-full">
                  <div className="sticky top-24">
                    <img
                      src="/h2.jpg"
                      alt="Ayurvedic Hair Care Routine Setup"
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                    <div className="mt-4 bg-pink-50 p-4 rounded-lg">
                      <p className="text-sm text-pink-800 italic">
                        Essential Ayurvedic hair care tools: natural comb, organic oils, and pure cotton towel for a holistic hair care routine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="treatments" className="mb-16 scroll-mt-20">
              <h2 className="text-3xl font-serif text-pink-800 mb-8">Ayurvedic Treatments for Healthy Hair</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="/shiro.jpg"
                    alt="Shiro Abhyanga"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">Shiro Abhyanga (Oil Massage)</h3>
                    <p className="text-gray-700 mb-4">A therapeutic oil massage for scalp and hair that promotes growth and nourishment.</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Use warm oils like coconut, almond, or amla</li>
                      <li>Massage gently for 10-15 minutes</li>
                      <li>Leave for minimum 30 minutes</li>
                      <li>Best done before hair wash</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="/naysam.jpg"
                    alt="Nasya Treatment"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">Nasya Treatment</h3>
                    <p className="text-gray-700 mb-4">Nasal instillation therapy that benefits hair growth and overall hair health.</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Uses anu taila or medicated oils</li>
                      <li>Alternative options: ghee or sesame oil</li>
                      <li>Helps with various hair problems</li>
                      <li>Promotes circulation to scalp</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="/shirovasti.jpg"
                    alt="Shirovasti Treatment"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">Shirovasti</h3>
                    <p className="text-gray-700 mb-4">Advanced medicated treatment particularly beneficial for scalp disorders.</p>
                    <div className="bg-pink-50 p-4 rounded-md mt-2">
                      <p className="text-pink-800">Professional Treatment: Should be performed under qualified Ayurvedic practitioner guidance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="/shirolepa.jpg"
                    alt="Shirolepa Treatment"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">Shirolepa</h3>
                    <p className="text-gray-700 mb-4">Medicated paste application for scalp and hair treatment.</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Helps replenish hair strands</li>
                      <li>Prevents scalp problems</li>
                      <li>Uses natural herbs and ingredients</li>
                      <li>Can be customized for different hair types</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6">Common Herbal Treatments</h3>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Bhringraj oil for hair growth</li>
                    <li>Amla oil for strengthening</li>
                    <li>Coconut oil for nourishment</li>
                    <li>Neem oil for scalp health</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Hibiscus hair pack</li>
                    <li>Triphala hair rinse</li>
                    <li>Brahmi hair mask</li>
                    <li>Aloe vera gel application</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>

        </div>
      </div>  
    </div>  
  ); 
};

export default HairCarePage;
