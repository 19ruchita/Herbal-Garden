/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
const TimelineCard = ({ year, title, description, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72 transform transition-transform duration-300 hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-amber-600 font-bold">{year}</span>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

const PracticeCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transform transition hover:-translate-y-1 duration-300">
    <div className="text-amber-600 text-2xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const DoshaCard = ({ title, description, characteristics }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-amber-500">
    <h4 className="text-xl font-semibold text-amber-800 mb-2">{title}</h4>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {characteristics.map((char, index) => (
        <li key={index} className="flex items-center">
          <span className="mr-2">•</span>
          {char}
        </li>
      ))}
    </ul>
  </div>
);

// Add these new components at the top with other components

const QuizQuestion = ({ question, options, selectedAnswer, onSelect }) => (
  <div className="p-4 border rounded-lg hover:border-amber-500 transition-colors">
    <h4 className="font-semibold mb-4">{question}</h4>
    <div className="space-y-3">
      {options.map((option, index) => (
        <label key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-amber-50 cursor-pointer">
          <input
            type="radio"
            name={question}
            value={option.type}
            checked={selectedAnswer === option.type}
            onChange={() => onSelect(option.type)}
            className="text-amber-600"
          />
          <span>{option.text}</span>
        </label>
      ))}
    </div>
  </div>
);

const ProgressBar = ({ current, total }) => (
  <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
    <div 
      className="bg-amber-600 h-2 rounded-full transition-all duration-300"
      style={{ width: `${(current / total) * 100}%` }}
    ></div>
  </div>
);

const ResultCard = ({ doshaType, traits, tips }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
    <h3 className="text-2xl font-serif font-bold text-amber-800 mb-4">{doshaType}</h3>
    <div className="mb-4">
      <h4 className="font-semibold mb-2">Key Traits:</h4>
      <p className="text-gray-600">{traits}</p>
    </div>
    <div>
      <h4 className="font-semibold mb-2">Health Tips:</h4>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-amber-600 mr-2">✓</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Update the AyurvedaPage component to include the quiz logic
const AyurvedaPage = () => {
  const [quizStep, setQuizStep] = useState(0); // 0 for start screen, 1-7 for questions, 8 for results
  const [answers, setAnswers] = useState({});

  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content');
    contentSection.scrollIntoView({ behavior: 'smooth' });
  };

  const quizQuestions = [
    {
      question: "What best describes your body type?",
      options: [
        { text: "Lean, thin, light build", type: "vata" },
        { text: "Medium, muscular, well-proportioned", type: "pitta" },
        { text: "Broad, sturdy, naturally strong", type: "kapha" }
      ]
    },
    {
      question: "How is your digestion?",
      options: [
        { text: "Irregular appetite, bloating, sensitive stomach", type: "vata" },
        { text: "Strong appetite, easily digest food", type: "pitta" },
        { text: "Slow digestion, feels heavy after meals", type: "kapha" }
      ]
    },
    {
      question: "What is your skin type?",
      options: [
        { text: "Dry, rough, prone to cracks", type: "vata" },
        { text: "Oily, sensitive, prone to acne", type: "pitta" },
        { text: "Thick, smooth, sometimes oily", type: "kapha" }
      ]
    },
    {
      question: "How do you handle stress?",
      options: [
        { text: "Anxious, overthinker, difficulty sleeping", type: "vata" },
        { text: "Irritable, competitive, short-tempered", type: "pitta" },
        { text: "Calm, patient, slow to react", type: "kapha" }
      ]
    },
    {
      question: "What best describes your energy levels?",
      options: [
        { text: "Energetic in bursts but tires quickly", type: "vata" },
        { text: "Consistently high energy, driven", type: "pitta" },
        { text: "Steady but slow energy levels", type: "kapha" }
      ]
    },
    {
      question: "How do you feel in cold weather?",
      options: [
        { text: "Hate it, always cold, need warmth", type: "vata" },
        { text: "Neutral, can tolerate it", type: "pitta" },
        { text: "Love it, prefer cooler temperatures", type: "kapha" }
      ]
    },
    {
      question: "What kind of sleep do you have?",
      options: [
        { text: "Light sleeper, wakes up easily", type: "vata" },
        { text: "Moderate, can sleep well but wakes up if disturbed", type: "pitta" },
        { text: "Deep, heavy sleeper, hard to wake up", type: "kapha" }
      ]
    }
  ];

  const handleAnswer = (type) => {
    setAnswers({ ...answers, [quizStep]: type });
  };

  // Add these constants at the top with other constants
  const doshaEmojis = {
    vata: "🌬️",
    pitta: "🔥",
    kapha: "🌱",
    "vata-pitta": "🌬️🔥",
    "pitta-kapha": "🔥🌱",
    "vata-kapha": "🌬️🌱",
    tridoshic: "🌀"
  };
  
  const doshaDescriptions = {
    vata: {
      traits: "Light, energetic, creative, prone to anxiety & dry skin",
      recommendations: [
        "Follow a warm, nourishing diet",
        "Maintain a stable daily routine",
        "Practice grounding activities",
        "Stay warm and avoid excess cold"
      ]
    },
    pitta: {
      traits: "Focused, ambitious, strong digestion, prone to irritation & overheating",
      recommendations: [
        "Eat cooling, balanced foods",
        "Practice stress management",
        "Balance work and relaxation",
        "Avoid excessive heat and spicy foods"
      ]
    },
    kapha: {
      traits: "Calm, strong, steady, prone to sluggishness & weight gain",
      recommendations: [
        "Favor light, warm foods",
        "Maintain regular exercise routine",
        "Stay mentally active and engaged",
        "Avoid excessive heavy foods and oversleeping"
      ]
    },
    "vata-pitta": {
      traits: "Energetic, creative, ambitious, but may face stress & digestive issues",
      recommendations: [
        "Maintain warmth and balanced meals",
        "Avoid overstimulation",
        "Practice calming activities",
        "Balance rest and activity"
      ]
    },
    "pitta-kapha": {
      traits: "Strong, resilient, but prone to sluggishness & inflammation",
      recommendations: [
        "Exercise regularly",
        "Eat light, balanced meals",
        "Avoid excess heat and dairy",
        "Practice cooling exercises"
      ]
    },
    "vata-kapha": {
      traits: "Gentle, intuitive, but struggles with irregular energy & digestion",
      recommendations: [
        "Stay active with gentle exercise",
        "Eat warm, nourishing meals",
        "Balance rest and movement",
        "Maintain regular routine"
      ]
    },
    tridoshic: {
      traits: "Adaptable, balanced health, but sensitive to seasonal changes",
      recommendations: [
        "Maintain seasonal routines",
        "Listen to body's needs",
        "Eat a variety of foods",
        "Adjust lifestyle with seasons"
      ]
    }
  };
  
  // Update the calculateDosha function
  const calculateDosha = () => {
    const counts = Object.values(answers).reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});
  
    const vata = counts.vata || 0;
    const pitta = counts.pitta || 0;
    const kapha = counts.kapha || 0;
  
    // Pure dosha types (4+ answers)
    if (vata >= 4) return "vata";
    if (pitta >= 4) return "pitta";
    if (kapha >= 4) return "kapha";
  
    // Dual dosha types
    if (vata === 3 && pitta === 3) return "vata-pitta";
    if (pitta === 3 && kapha === 3) return "pitta-kapha";
    if (vata === 3 && kapha === 3) return "vata-kapha";
  
    // Tridoshic
    if (Math.abs(vata - pitta) <= 1 && Math.abs(pitta - kapha) <= 1) return "tridoshic";
  
    // Default to the highest count
    return Object.entries(counts).reduce((a, b) => counts[a] > counts[b] ? a : b)[0];
  };
  
  // Update the ResultCard component
  const ResultCard = ({ doshaType }) => {
    const description = doshaDescriptions[doshaType];
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="text-center mb-6">
          <span className="text-4xl mb-2">{doshaEmojis[doshaType]}</span>
          <h3 className="text-2xl font-serif font-bold text-amber-800">
            {doshaType.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join('-')} Dosha
          </h3>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Key Traits:</h4>
          <p className="text-gray-600">{description.traits}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Recommendations:</h4>
          <ul className="space-y-2">
            {description.recommendations.map((tip, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <span className="text-amber-600 mr-2">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const renderQuizContent = () => {
    if (quizStep === 0) {
      return (
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold mb-6">Discover Your Dosha Type</h3>
          <p className="text-gray-600 mb-8">Take this quiz to understand your unique constitution and receive personalized wellness recommendations.</p>
          <button 
            onClick={() => setQuizStep(1)}
            className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors"
          >
            Start Quiz
          </button>
        </div>
      );
    }

    if (quizStep > 7) {
      const dominantDosha = calculateDosha();
      return (
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6">
            Your Dosha Type: {dominantDosha.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join('-')}
          </h3>
          <ResultCard doshaType={dominantDosha} />
          <button
            onClick={() => {
              setQuizStep(0);
              setAnswers({});
            }}
            className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      );
    }

    return (
      <div>
        <ProgressBar current={quizStep} total={7} />
        <QuizQuestion
          question={quizQuestions[quizStep - 1].question}
          options={quizQuestions[quizStep - 1].options}
          selectedAnswer={answers[quizStep]}
          onSelect={handleAnswer}
        />
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setQuizStep(step => step - 1)}
            className="px-6 py-2 text-amber-600 hover:text-amber-700"
            disabled={quizStep === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setQuizStep(step => step + 1)}
            className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors"
            disabled={!answers[quizStep]}
          >
            {quizStep === 7 ? 'See Results' : 'Next'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://via.placeholder.com/1920x1080")',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in font-serif">
            Explore Ayurveda: The Ancient Science of Life
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 animate-fade-in-delay">
            Unveiling the timeless wisdom of Ayurveda – A journey through its origins, principles, and impact on modern wellness.
          </p>
          <button 
            onClick={scrollToContent}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full 
              transition duration-300 transform hover:scale-105 animate-bounce"
          >
            Learn More
          </button>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Five Elements Image */}
      <div className="relative -mt-24 z-10 flex justify-center">
        <img 
          src="/five_elements.png"
          alt="Pancha Mahabhuta - The Five Elements of Ayurveda"
          className="w-full max-w-2xl h-auto object-contain"
        />
      </div>

      {/* Introduction Section */}
      <section id="main-content" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-gray-800">
                What is Ayurveda?
              </h2>
              <p className="text-lg text-gray-600">
                A 5,000-year-old Indian system of natural healing that emphasizes balance in body, mind, and spirit. Rooted in the Vedas, it uses herbs, diet, and lifestyle practices for holistic health.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <DoshaCard 
                  title="Vata (Air & Space)"
                  description="Governs movement and change"
                  characteristics={["Light & Quick", "Creative", "Flexible"]}
                />
                <DoshaCard 
                  title="Pitta (Fire & Water)"
                  description="Controls transformation and metabolism"
                  characteristics={["Sharp & Focused", "Leadership", "Determined"]}
                />
                <DoshaCard 
                  title="Kapha (Earth & Water)"
                  description="Maintains structure and stability"
                  characteristics={["Strong & Calm", "Nurturing", "Stable"]}
                />
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://via.placeholder.com/600x800" 
                alt="Ayurvedic Principles"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-100 p-6 rounded-lg shadow-lg">
                <h4 className="font-serif text-amber-800 text-lg font-semibold mb-3">
                  Five Elements
                </h4>
                <ul className="space-y-2">
                  {["Earth", "Water", "Fire", "Air", "Space"].map((element) => (
                    <li key={element} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span>{element}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">History & Origin of Ayurveda</h2>
          <div className="overflow-x-auto pb-8">
            <div className="flex space-x-8 min-w-max px-4">
              <TimelineCard 
                year="3000 BCE"
                title="Origins"
                description="Roots in the Atharva Veda, one of the four sacred texts of ancient India"
                image="https://via.placeholder.com/400x300"
              />
              <TimelineCard 
                year="600 BCE"
                title="Charaka Samhita"
                description="First major Ayurvedic text, focusing on internal medicine and healing principles"
                image="https://via.placeholder.com/400x300"
              />
              <TimelineCard 
                year="500 BCE"
                title="Sushruta Samhita"
                description="Foundation of Ayurvedic surgery, documenting over 300 surgical procedures"
                image="https://via.placeholder.com/400x300"
              />
              <TimelineCard 
                year="Present"
                title="Modern Ayurveda"
                description="Integration with modern healthcare, recognized globally for holistic wellness"
                image="https://via.placeholder.com/400x300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Impact Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Impact & Modern Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <PracticeCard 
              title="Herbal Remedies"
              description="Traditional herbs like Turmeric and Ashwagandha integrated into modern wellness"
              icon="🌿"
            />
            <PracticeCard 
              title="Panchakarma Detox"
              description="Ancient cleansing practices adapted for modern wellness programs"
              icon="✨"
            />
            <PracticeCard 
              title="Ayurvedic Diet"
              description="Sattvic food principles for balanced nutrition and health"
              icon="🥗"
            />
            <PracticeCard 
              title="Yoga & Meditation"
              description="Mind-body practices for holistic wellness"
              icon="🧘‍♀️"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">WHO Recognition</h3>
            <p className="text-gray-600">Recognized by the World Health Organization as a traditional medical system</p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg p-8">
            <div className="max-w-2xl mx-auto">
              {renderQuizContent()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyurvedaPage;
