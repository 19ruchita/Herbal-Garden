import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HerbCard = ({ name, image, benefits, usage }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Nutritional Benefits</h3>
        <ul className="list-disc pl-5">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">How to Use</h3>
        <p>{usage}</p>
      </div>
    </div>
    <div className="bg-gray-100 p-4 text-center">
      <button className="bg-purple-600 text-white py-2 px-4 rounded">Learn More</button>
    </div>
  </div>
);

const SkinCareTip = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <p>{description}</p>
    </div>
  </div>
);

const SkinCarePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const herbs = [
    {
      name: "Aloe Vera",
      image: "/aloe vera-s.jpg",
      benefits: [
        "Moisturizes dry skin",
        "Soothes sunburn",
        "Reduces inflammation",
        "Promotes wound healing",
        "Rich in antioxidants",
        "Natural antibacterial properties"
      ],
      usage: "Apply fresh aloe vera gel directly to the skin or use products containing aloe as a key ingredient. For best results, use twice daily after cleansing."
    },
    {
      name: "Calendula",
      image: "/calendula.jpg",
      benefits: [
        "Anti-inflammatory properties",
        "Promotes collagen production",
        "Helps heal minor wounds and burns",
        "Soothes eczema and dermatitis",
        "Improves skin hydration",
        "Protects against free radical damage"
      ],
      usage: "Use calendula-infused oils, creams, or make a simple tea to use as a skin wash. For a DIY approach, steep calendula flowers in hot water, cool, and apply as a compress to affected areas."
    },
    {
      "name": "Lavender",
      "image": "/lavender.jpg",
      "benefits": [
        "Promotes relaxation and reduces stress",
        "Soothes minor burns and insect bites",
        "Improves sleep quality",
        "Has antiseptic and anti-inflammatory properties",
        "Helps with acne and oily skin",
        "Enhances skin healing"
      ],
      "usage": "Use lavender essential oil in aromatherapy or dilute it with a carrier oil for topical application. Lavender tea can also be consumed to promote relaxation. For skin use, apply lavender-infused oils or creams to affected areas."
    },    
    {
      "name": "Peppermint",
      "image": "/peppermint.jpeg",
      "benefits": [
        "Relieves headaches and muscle pain",
        "Soothes digestive issues",
        "Has antimicrobial and anti-inflammatory properties",
        "Reduces acne and oily skin",
        "Improves circulation",
        "Provides a cooling sensation"
      ],
      "usage": "Apply diluted peppermint essential oil to the skin or use it in a steam inhalation to relieve headaches. Peppermint tea can help with digestive issues. For skincare, use peppermint-infused products or oils."
    },
    {
      name: "Chamomile",
      image: "/chamomile.jpg",
      benefits: [
        "Calms irritated skin",
        "Reduces puffiness",
        "Brightens complexion",
        "Anti-aging properties",
        "Helps even skin tone",
        "Soothes sunburn and rashes"
      ],
      usage: "Apply cooled chamomile tea as a face toner or use chamomile-infused skincare products. For a soothing mask, mix chamomile tea with honey and apply for 15 minutes before rinsing."
    },
    {
      name: "Green Tea",
      image: "/green_tea.jpg",
      benefits: [
        "Powerful antioxidant",
        "Reduces skin inflammation",
        "Protects against sun damage",
        "Improves skin elasticity",
        "Helps control excess sebum",
        "Promotes cell renewal"
      ],
      usage: "Use green tea-infused products or make a DIY toner by steeping green tea and refrigerating. Apply to skin with a cotton pad after cleansing."
    }
  ];

  const skinCareTips = [
    {
      title: "Stay Hydrated",
      description: "Drink at least 8 glasses of water daily to keep your skin hydrated from within. This helps maintain skin elasticity and promotes a healthy glow.",
      image: "/hydration.jpg"
    },
    {
      title: "Sun Protection",
      description: "Use a broad-spectrum sunscreen with at least SPF 30 daily, even on cloudy days. Reapply every 2 hours when outdoors to protect your skin from harmful UV rays.",
      image: "/sun-protection.jpg"
    },
    {
      title: "Gentle Exfoliation",
      description: "Exfoliate 1-2 times a week using natural exfoliants like oatmeal or sugar to remove dead skin cells. This promotes cell turnover and reveals brighter skin.",
      image: "/gentle-exfoliation.jpg"
    },
    {
      title: "Balanced Diet",
      description: "Consume a diet rich in fruits, vegetables, lean proteins, and healthy fats. Foods high in antioxidants and omega-3 fatty acids contribute to healthier skin.",
      image: "/balanced-diet.jpg"
    }
  ];

  const interestingFacts = [
    "Many herbs used in skincare have been employed for centuries in traditional medicine.",
    "Aloe vera is known as the 'plant of immortality' in ancient Egypt.",
    "Calendula flowers are not just beautiful; they have been used for their healing properties for thousands of years.",
    "Chamomile has been used in skincare since ancient Greece and is famous for its calming effects.",
    "Green tea's antioxidants are believed to help prevent premature aging of the skin."
  ];

  return (
    <div className="container mx-auto px-4 py-8 flex">
      <div className="w-3/4 pr-8">
        <h1 className="text-3xl font-bold mb-6">Natural Skin Care with Medicinal Herbs</h1>
        <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
          <TabList className="flex mb-4">
            <Tab
              className={`px-4 py-2 cursor-pointer ${activeTab === 0 ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-800'}`}
            >
              Herbal Remedies
            </Tab>
            <Tab
              className={`px-4 py-2 cursor-pointer ${activeTab === 1 ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-800'}`}
            >
              Skin Care Tips
            </Tab>
            <Tab
              className={`px-4 py-2 cursor-pointer ${activeTab === 2 ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-800'}`}
            >
              DIY Recipes
            </Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-2xl font-bold mb-4">Herbal Remedies for Beautiful Skin</h2>
            <p className="mb-4">Discover the power of natural herbs to enhance your skin's health. Each herb has been carefully selected for its unique properties that support various skin needs, from moisturizing and soothing to healing and protecting. Explore the benefits and usage of these amazing herbs to incorporate them into your skincare routine.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {herbs.map((herb, index) => (
                <HerbCard key={index} {...herb} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {skinCareTips.map((tip, index) => (
                <SkinCareTip key={index} {...tip} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="text-2xl font-bold mb-4">DIY Natural Skin Care Recipes</h2>
            <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold mb-2">Honey and Oatmeal Face Mask</h3>
              <p className="font-semibold mb-2">Ingredients:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>2 tablespoons ground oatmeal</li>
                <li>1 tablespoon raw honey</li>
                <li>1 teaspoon lemon juice (optional)</li>
              </ul>
              <p>Instructions: Mix ingredients, apply to face, leave for 15 minutes, then rinse with warm water. This mask helps to exfoliate and hydrate your skin, leaving it soft and refreshed.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Coffee Body Scrub</h3>
              <p className="font-semibold mb-2">Ingredients:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>1/2 cup ground coffee</li>
                <li>1/2 cup brown sugar</li>
                <li>1/4 cup coconut oil</li>
              </ul>
              <p>Instructions: Mix ingredients, gently scrub on body in circular motions, rinse thoroughly. This scrub helps to exfoliate and stimulate blood flow, leaving your skin smooth and rejuvenated.</p>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <aside className="w-1/4 bg-purple-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Interesting Facts</h2>
        <ul className="list-disc pl-5">
          {interestingFacts.map((fact, index) => (
            <li key={index} className="mb-2">{fact}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default SkinCarePage;
