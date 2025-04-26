/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Chatbot from './components/Chatbot';
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      author: "Lao Tzu",
      image: "/q2.jpg"  // Replace with your first quote background image
    },
    {
      text: "A healthy outside starts from the inside.",
      author: "Robert Urich",
      image: "/q1.jpg"  // Replace with your second quote background image
    },
    {
      text: "He who has health has hope, and he who has hope has everything.",
      author: "Thomas Carlyle",
      image: "/q3.jpg"  // Replace with your third quote background image
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
                   <button 
                   className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300"
                   onClick={() => scrollToSection(slide.buttonText === 'Explore' ? 'discover-section' : 'ayurveda-section')}
                 >
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
     <div id="discover-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      <div id="ayurveda-section" className="relative bg-cover bg-center py-24" style={{ backgroundImage: `url('/ayurvedaaaa.jpg')` }}>
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
      <div className="relative py-16 bg-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[200px]">
            {quotes.map((quote, index) => (
              <div 
                key={index} 
                className={`absolute w-full transition-opacity duration-1000 ${
                  currentQuote === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                style={{ transform: 'none' }}
              >
                <div className={`text-center max-w-3xl mx-auto ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  <div className="mb-8">
                    <img
                      src={quote.image}
                      alt={`Quote by ${quote.author}`}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
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

     

{/* Chatbot */}
<Chatbot darkMode={darkMode} />
    </div>
  );
};

export default HealthWellnessPage;
