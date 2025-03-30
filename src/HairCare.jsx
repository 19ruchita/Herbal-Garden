

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
      image: '/ha.jpg' // Add your image path
    },
    {
      title: 'Scalp Massage with Essential Oils',
      description: 'Combine a few drops of rosemary or lavender oil with a carrier oil like coconut.',
      steps: [
        'Gently massage into scalp for 5 minutes',
        'Leave overnight if possible',
        'Wash hair as usual in the morning'
      ],
      image: '/hb.jpg' // Add your image path
    },
    // Add 8 more remedies here
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
    <div className="bg-pink-50 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-pink-600">HealthyHair</h1>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-pink-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600">Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-600">Remedies</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Natural Remedies for Healthy Hair</h2>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Common Causes of Hair Loss</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Stress and anxiety</li>
            <li>Nutritional deficiencies</li>
            <li>Hormonal imbalances</li>
            <li>Environmental factors</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Home Remedies</h3>
          <div className="space-y-6">
            {remedies.map((remedy, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img src={remedy.image} alt={remedy.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h4 className="font-semibold text-lg mb-2">{remedy.title}</h4>
                <p className="mb-2">{remedy.description}</p>
                <ul className="list-disc pl-5">
                  {remedy.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Healthy Hair Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-lg">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2024 HealthyHair. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HairCarePage;
