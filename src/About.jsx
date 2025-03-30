

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <nav className="mb-4">
        <a href="/" className="text-green-600 hover:underline">Home</a> &gt; About
      </nav>
      
      <h1 className="text-4xl font-bold mb-6 text-green-800">About Virtual Herbal Garden</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Cultivating Knowledge, Growing Wellness</h2>
      
      <p className="mb-4">
        Welcome to Virtual Herbal Garden, your digital sanctuary for exploring the world of medicinal and culinary herbs. Our mission is to provide a comprehensive, interactive resource for herb enthusiasts, from novice gardeners to experienced herbalists.
      </p>
      
      <h3 className="text-xl font-semibold mb-2">What We Offer:</h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Detailed profiles of hundreds of herbs</li>
        <li>Virtual garden planning tools</li>
        <li>Seasonal growing guides</li>
        <li>Recipes and preparation methods</li>
        <li>Community forums for sharing knowledge</li>
      </ul>
      
      <p className="mb-4">
        Whether youre looking to start your own herb garden, learn about traditional herbal remedies, or simply expand your culinary horizons, Virtual Herbal Garden is your trusted companion on this aromatic journey.
      </p>
      
      <p className="text-sm text-gray-600 mt-8">
        Note: While we strive to provide accurate information, Virtual Herbal Garden is for educational purposes only. Always consult with a qualified healthcare professional before using herbs for medicinal purposes.
      </p>
    </div>
  );
};

export default AboutPage;