import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Add Sun and Moon icons to imports
import { ChevronLeft, ChevronRight, Sun, Moon, ChevronDown} from 'lucide-react';

// Add darkMode state near other state declarations
const HealthWellnessPage = () => {
  
  const [currentQuote, setCurrentQuote] = useState(0);
  const quoteIntervalRef = useRef(null);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const slideIntervalRef = useRef(null);
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/plant-search');
  };

  const handleBrandClick = (brandName) => {
    switch(brandName.toLowerCase()) {
      case 'skin care':
        navigate('/skin-care');
        break;
      case 'hair care':
        navigate('/hair-care');
        break;
      case 'herbal practices':
        navigate('/herbal-practices');
        break;
      case 'nutrition':
        navigate('/nutrition');
        break;
      case 'fitness':
        navigate('/fitness');
        break;
      default:
        console.log(`No route defined for ${brandName}`);
    }
  };

  const handleExploreAyurveda = () => {
    navigate('/ayurveda-information');
  };

  const handleHerbalMapNavigation = () => {
    navigate('/herbal-map');  // This will navigate to the Herbal Map page
  };

  const slides = [
    {
      image: "/1st.jpg",
      title: "Your Curiosity + Our Herbal Wisdom = A Healthier You",
      description: "Explore the range of medicinal plants",
      buttonText: "Explore"
    },
    {
      image: "/2nd.jpg",
      title: "Discover the Beauty of Herbal Plants",
      description: "Dive into the world of natural remedies and wellness.",
      buttonText: "Learn More"
    },
    {
      image: "/3rd.jpg",
      title: "Align Your Body and Mind with Ancient Wisdom",
      description: "Discover yoga poses and fitness practices that complement your path to holistic health"
    },
  ];


  const brands = [
    { name: "Skin Care", logo: "/skinCare.jpg" },
    { name: "Hair Care", logo: "/hairCare.jpg" },
    { name: "Herbal Practices", logo: "/herbal.jpg" },
    { name: "Nutrition", logo: "/nutrition.jpg" },
    { name: "Fitness", logo: "/yoga.jpg" },
  ];

  const ingredients = [
    { name: "Amla", image: "amla.jpg" },
    { name: "Tulsi", image: "tulsi.jpg" },
    { name: "Neem", image: "neem.jpg" },
    { name: "Aloe Vera", image: "aloe vera.jpg" },
  ];

  const quotes = [
    {
      text: "Health is the greatest possession. Contentment is the greatest treasure. Confidence is the greatest friend.",
      author: "Lao Tzu"
    },
    {
      text: "A healthy outside starts from the inside.",
      author: "Robert Urich"
    },
    {
      text: "He who has health has hope, and he who has hope has everything.",
      author: "Thomas Carlyle"
    }
  ];
  

  const startAutoSlide = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(slideIntervalRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollDown(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startQuoteSlide = () => {
    quoteIntervalRef.current = setInterval(() => {
      setCurrentQuote((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
    }, 5000); // Change quote every 5 seconds
  };
  useEffect(() => {
    startQuoteSlide();
    return () => clearInterval(quoteIntervalRef.current);
  }, []);
  const goToSlide = (index) => {
    setCurrentSlide(index);
    clearInterval(slideIntervalRef.current);
    startAutoSlide();
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
       {/* Header */}
       <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <nav className="flex items-center space-x-4">
  <ul className="flex space-x-4 text-sm">
    <Link to="/" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Home</Link>
    <Link to="/about" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>About</Link>
    <Link to="/support" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Support</Link>
  </ul>
</nav>
        </div>
      </header>

   {/* Add floating buttons */}
<button
  onClick={() => setDarkMode(!darkMode)}
  className="fixed bottom-6 left-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
  aria-label="Toggle dark mode"
>
  {darkMode ? (
    <Sun className="w-6 h-6 text-amber-400" />
  ) : (
    <Moon className="w-6 h-6 text-gray-600" />
  )}
</button>

{showScrollDown && (
  <button
    onClick={scrollToBottom}
    className="fixed bottom-6 right-6 p-3 rounded-full bg-amber-600 text-white shadow-lg hover:bg-amber-700 transition-all duration-300 z-50"
    aria-label="Scroll to bottom"
  >
    <ChevronDown size={24} />
  </button>
)}

    
      
      {/* Slider */}
      <div className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-6">{slide.description}</p>
                  {slide.buttonText && (
                    <button className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300" onClick={handleExplore}>
                      {slide.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>


        


     {/* Brands Carousel */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-3xl font-bold text-center mb-8">Discover</h2>
  <div className="flex flex-wrap justify-center gap-12">
    {brands.map((brand, index) => (
      <div key={index} className="text-center flex flex-col items-center">
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-32 h-32 object-contain mb-4"
        />
        <button 
          className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'} text-lg font-medium transition-colors duration-300`}
          onClick={() => handleBrandClick(brand.name)}
        >
          {brand.name}
        </button>
      </div>
    ))}
  </div>
</div>

      {/* Text Section */}
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} py-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-sm uppercase tracking-wide ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
            FUTURE OF HERBAL WISDOM
          </h2>
          <h1 className="text-4xl font-bold text-amber-600 mb-8">EXPLORE THE WORLD OF HEALTH & WELLNESS</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
            In today's fast-paced world, staying healthy is a challenge. It requires eating the right foods, finding balance, and nurturing both body and mind. Our mission is to make this journey easier by offering a wealth of knowledge about medicinal plants through our Virtual Herbal Garden.
          </p>
          <p className="text-gray-700 mb-12">
            Our platform is built on a foundation of extensive research into traditional herbal practices. We bring together the best of nature's remedies, offering detailed information and interactive experiences that help you discover the healing power of plants. This is what inspires us to keep expanding our garden and sharing it with you every day.
          </p>
          <div className="text-center">
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition duration-300" onClick={handleHerbalMapNavigation}>
              Explore the Herbal Map
            </button>
          </div>
        </div>
      </div>

      {/* Ayurveda Section */}
      <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: `url('/ayurvedaaaa.jpg')` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="bg-white bg-opacity-90 p-12 max-w-2xl text-center">
            <h3 className="text-gray-600 uppercase text-sm mb-4">WHAT WE DO</h3>
            <h2 className="text-3xl font-light text-amber-600 mb-6">
              Unleashing the Secrets of Medicinal Plants and Wellness Practices
            </h2>
            <p className="text-gray-700 mb-6">
              We bridge the gap between ancient wisdom and modern health practices. By focusing on time-honored techniques and plant-based remedies, we aim to enhance your health journey. Ayurveda, an integral part of our offerings, has been at the forefront of holistic healing for centuries.
            </p>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition duration-300" onClick={handleExploreAyurveda}>
              Explore Ayurveda
            </button>
          </div>
        </div>
      </div>

     {/* Quotes Section */}
<div className="relative py-16 bg-gradient-to-b from-amber-50 to-white dark:from-gray-800 dark:to-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative">
      <div 
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentQuote * 100}%)` }}
      >
        {quotes.map((quote, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className={`text-center max-w-3xl mx-auto ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              <div className="mb-8">
                <img
                  src="/avatar-placeholder.jpg"
                  alt="Quote"
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-xl italic mb-4">{quote.text}</p>
                <p className={`text-sm font-semibold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                  {quote.author}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

     {/* Footer */}
<footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} py-12`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Logo Section */}
    <div className="mb-8">
      <img src="/logo.png" alt="Virtual Herbal Garden" className="h-12" />
    </div>

    {/* Links Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div>
        <h3 className={`font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Quick Links</h3>
        <ul className="space-y-2">
          <li><Link to="/conditions" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>Conditions and Diseases</Link></li>
          <li><Link to="/treatments" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>Treatments and Therapies</Link></li>
          <li><Link to="/wellness" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>Wellness and Prevention</Link></li>
        </ul>
      </div>
      <div>
        <h3 className={`font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Information</h3>
        <ul className="space-y-2">
          <li><Link to="/privacy" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>Privacy Statement</Link></li>
          <li><Link to="/terms" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>Terms & Conditions</Link></li>
          <li><Link to="/contact" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h3 className={`font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Connect With Us</h3>
        <div className="flex space-x-4">
          <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </a>
          <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
          </a>
          <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="pt-8 border-t border-gray-200">
      <p className={`text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        &copy; {new Date().getFullYear()} Virtual Herbal Garden. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default HealthWellnessPage;
