import React from 'react';
import { Link } from 'react-router-dom';

const AyurvedaPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8 bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg">
        <nav className="mb-4">
          <ul className="flex space-x-4 text-sm text-white">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/health-wellness" className="hover:underline">Explore</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/support" className="hover:underline">Support</Link>
          </ul>
        </nav>
        <h1 className="text-4xl font-bold text-white">Ayurveda</h1>
      </header>

      {/* Hero Section */}
      <div className="mb-8 relative h-96 bg-gray-200 rounded-lg overflow-hidden">
        <img src="/explore ayurveda.jpg" alt="Ayurvedic herbs and treatments" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h2 className="text-3xl font-bold text-white">Discover the Ancient Wisdom of Ayurveda</h2>
          <p className="text-lg text-gray-200">A holistic approach to health and well-being</p>
        </div>
      </div>

      {/* Main Content with Sidebar on the Left */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar moved to left */}
        <aside className="lg:col-span-1">
          <div className="mb-8 p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Interesting Facts about Ayurveda and Modern Science</h3>
            <div className="space-y-4">
              <article className="border-b pb-4">
                <p className="text-gray-700">Ayurvedic practices like herbal remedies are now being studied for their potential to support modern health treatments.</p>
              </article>
              <article className="border-b pb-4">
                <p className="text-gray-700">Turmeric, a staple in Ayurveda, has gained global recognition for its anti-inflammatory and antioxidant properties.</p>
              </article>
              <article className="border-b pb-4">
                <p className="text-gray-700">Yoga and meditation, integral to Ayurveda, are proven to reduce stress and improve overall mental health.</p>
              </article>
              <article className="border-b pb-4">
                <p className="text-gray-700">Ayurvedic principles of personalized nutrition are reflected in modern dietary approaches like functional medicine.</p>
              </article>
              <article>
                <p className="text-gray-700">Research into Ayurvedic botanicals, like Ashwagandha, shows promise in managing stress and enhancing vitality.</p>
              </article>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="lg:col-span-2">
          <div className="mb-8 p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">What is Ayurveda?</h3>
            <div className="flex flex-col md:flex-row items-center mb-4">
              <img src="/ayurveda2.jpg" alt="Ayurvedic principles" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
              <p>Ayurveda is a whole-body (holistic) system of medicine that began in India more than 3,000 years ago. Ayurveda means the study of life. It takes a natural approach to all aspects of health and well-being, focusing on the balance between body, mind, and spirit.</p>
            </div>
            <p>Ayurveda is based on the idea that each person has certain life forces (doshas) and everything in the universe is connected. An imbalance in one area can affect another. When the imbalance is not fixed, disease and illness can occur.</p>
          </div>

          <div className="mb-8 p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ayurvedic Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src="/herbal2.jpg" alt="Herbal remedies" className="w-full h-40 object-cover rounded-lg mb-2" />
                <h4 className="font-semibold text-blue-600">Herbal Remedies</h4>
                <p>Natural plant-based treatments for various ailments.</p>
              </div>
              <div>
                <img src="/yoga.jpg" alt="Yoga and meditation" className="w-full h-40 object-cover rounded-lg mb-2" />
                <h4 className="font-semibold text-blue-600">Yoga and Meditation</h4>
                <p>Practices for physical and mental well-being.</p>
              </div>
              <div>
                <img src="/ayurvedic diet.jpg" alt="Ayurvedic diet" className="w-full h-40 object-cover rounded-lg mb-2" />
                <h4 className="font-semibold text-blue-600">Dietary Guidelines</h4>
                <p>Personalized nutrition based on individual constitution.</p>
              </div>
              <div>
                <img src="/massage.jpg" alt="Ayurvedic massage" className="w-full h-40 object-cover rounded-lg mb-2" />
                <h4 className="font-semibold text-blue-600">Massage Therapy</h4>
                <p>Therapeutic touch to promote healing and relaxation.</p>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Modern Perspectives on Ayurveda</h3>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/modern ayurveda.jpg" alt="Modern Ayurveda" className="w-full md:w-1/2 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
              <div>
                <p className="mb-4">While Ayurveda has a rich history, it's important to approach it with a balanced perspective in the context of modern healthcare:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ongoing research to validate traditional practices</li>
                  <li>Integration with conventional medicine varies by country</li>
                  <li>Consult qualified practitioners for personalized advice</li>
                  <li>Inform your primary healthcare provider about any Ayurvedic treatments</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>123 Health Street, Wellness City</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@healthwellness.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>Ayurvedic Practices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="text-blue-500 hover:text-white">
                  {/* Facebook Icon */}
                </a>
                <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-white">
                  {/* Twitter Icon */}
                </a>
                <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-white">
                  {/* Instagram Icon */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AyurvedaPage;
