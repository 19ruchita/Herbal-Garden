import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HerbCard = ({ name, image, benefits, usage }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-8">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover rounded-lg shadow-md" 
        />
      </div>
      <div className="md:w-3/4">
        <h2 className="text-2xl font-serif text-green-800 mb-4">{name}</h2>
        <div className="prose max-w-none text-gray-600">
          <p className="mb-4">{benefits[0]}</p>
          <p className="mb-4">{benefits[1]}</p>
          <p className="text-sm italic">{usage}</p>
        </div>
      </div>
    </div>
  </div>
);

const DIYRecipe = ({ title, ingredients, instructions, image, index }) => (
  <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 mb-12 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
    <div className="w-1/3">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
    </div>
    <div className="w-2/3 p-8 flex flex-col justify-center">
      <h3 className="text-2xl font-serif text-green-800 mb-4">{title}</h3>
      <div className="mb-4">
        <h4 className="font-semibold mb-2">You'll Need:</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          {ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Instructions:</h4>
        <p className="text-gray-600">{instructions}</p>
      </div>
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



const SectionDivider = () => (
  <div className="flex items-center justify-center my-12">
    <div className="h-px bg-green-200 w-1/3"></div>
    <img src="/herb-divider.png" alt="divider" className="mx-4 h-8" />
    <div className="h-px bg-green-200 w-1/3"></div>
  </div>
);

const SkinCarePage = () => {
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
    },
    {
      name: "Tea Tree",
      image: "/tea-tree.jpg",
      benefits: [
        "Natural antiseptic properties",
        "Fights acne and blemishes",
        "Reduces skin inflammation",
        "Helps with dandruff",
        "Controls excess oil production",
        "Promotes wound healing"
      ],
      usage: "Use diluted tea tree oil in skincare products or mix with a carrier oil. Never apply pure tea tree oil directly to skin. Best used as a spot treatment for acne or in cleansers."
    },
    {
      name: "Rose",
      image: "/rose.jpg",
      benefits: [
        "Natural moisturizer",
        "Balances skin pH",
        "Anti-aging properties",
        "Reduces redness and inflammation",
        "Tightens pores",
        "Soothes sensitive skin"
      ],
      usage: "Use rose water as a toner, or apply rose oil mixed with a carrier oil. Can also be used in face masks and moisturizers for added benefits."
    },
    {
      name: "Neem",
      image: "/neem.jpg",
      benefits: [
        "Powerful antibacterial properties",
        "Treats acne and pimples",
        "Reduces hyperpigmentation",
        "Controls excess oil",
        "Anti-aging benefits",
        "Improves skin elasticity"
      ],
      usage: "Use neem-based face washes, or make a paste with neem powder and water. Can also be used in face packs mixed with other natural ingredients like turmeric and honey."
    },
    {
      name: "Lemon",
      image: "/lemon.jpg",
      benefits: [
        "Natural bleaching properties",
        "Rich in Vitamin C",
        "Promotes collagen production",
        "Exfoliates dead skin cells",
        "Reduces melanin production",
        "Anti-bacterial properties"
      ],
      usage: "Mix lemon juice with yoghurt and honey to make a mask. Apply this mixture twice or thrice a week at night to reverse tanning."
    },
    {
      name: "Honey",
      image: "/honey.jpg",
      benefits: [
        "Natural bleaching agent",
        "Moisturizing properties",
        "Antibacterial effects",
        "Helps even skin tone",
        "Prevents acne",
        "Natural humectant"
      ],
      usage: "Apply raw honey directly onto the face or mix it in masks to get clear, glowing skin."
    },
    {
      name: "Papaya",
      image: "/papaya.jpg",
      benefits: [
        "Contains papain enzyme",
        "Increases cell turnover",
        "Rich in alpha-hydroxy acids",
        "Reduces pimple marks",
        "Natural exfoliant",
        "Brightens skin"
      ],
      usage: "Mash a few pieces into a smooth paste and apply where needed. Leave for 20 minutes before washing with lukewarm water."
    },
    {
      name: "Yogurt",
      image: "/yogurt.jpg",
      benefits: [
        "Contains Lactic Acid",
        "Gentle exfoliation",
        "Suitable for sensitive skin",
        "Melanin suppressor",
        "Reduces blemishes",
        "Enhances skin tone"
      ],
      usage: "Apply directly or mixed in a mask for softness and glow."
    },
    {
      name: "Licorice",
      image: "/licorice.jpg",
      benefits: [
        "Contains glabridin",
        "Inhibits tyrosinase",
        "Breaks melanin",
        "Removes pigmentation",
        "Great for acne scars",
        "Soothes irritated skin"
      ],
      usage: "Use licorice-infused products or make a paste with honey and rose water."
    },
    {
      name: "Turmeric",
      image: "/turmeric.jpg",
      benefits: [
        "Antibacterial properties",
        "Anti-inflammatory effects",
        "Rich in antioxidants",
        "Suppresses melanin production",
        "Lightens skin tone",
        "Treats various skin issues"
      ],
      usage: "Mix half a teaspoon of turmeric in any mask to get the glow."
    },
    {
      name: "Potato",
      image: "/potato.jpg",
      benefits: [
        "Rich in Vitamin B6",
        "Natural exfoliant",
        "Lightens skin tone",
        "Removes dark spots",
        "Reduces dark circles",
        "Brightening properties"
      ],
      usage: "Make a potato paste or extract juice and mix with honey, lemon, or rose water to make a mask."
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
    <div className="flex min-h-screen">
      {/* Left Side Navigation */}
      <div className="w-64 h-screen sticky top-20 p-6 bg-white shadow-md">
        <h2 className="text-xl font-bold mb-6">On This Page</h2>
        <ul className="space-y-4">
          <li>
            <a href="#herbal-remedies" className="text-green-800 hover:text-green-600 transition-colors">
              Ingredients That Can Make Your Skin Glow
            </a>
          </li>
          <li>
            <a href="#skin-care-tips" className="text-green-800 hover:text-green-600 transition-colors">
              Skin Care Tips
            </a>
          </li>
          <li>
            <a href="#diy-recipes" className="text-green-800 hover:text-green-600 transition-colors">
              DIY Recipes
            </a>
          </li>
          <li>
            <a href="#interesting-facts" className="text-green-800 hover:text-green-600 transition-colors">
              Interesting Facts
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[60vh] mb-16">
          <div className="absolute inset-0">
            <img 
              src="/skin_care.jpg"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl px-6">
              <h1 className="text-5xl font-serif text-white mb-4">Natural Skincare Solutions</h1>
              <p className="text-xl text-white/90">Discover the power of nature's remedies for healthy, glowing skin</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
           {/* Herbal Remedies Section */}
           <section id="herbal-remedies" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-serif text-green-800 mb-8">INGREDIENTS THAT CAN MAKE YOUR SKIN GLOW NATURALLY</h2>
            <div className="space-y-6">
              {herbs.map((herb, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <HerbCard {...herb} />
                </motion.div>
              ))}
            </div>
          </section>
          {/* Skin Care Tips Section */}
          <section id="skin-care-tips" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-serif text-green-800 mb-8">Skin Care Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skinCareTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkinCareTip {...tip} />
                </motion.div>
              ))}
            </div>
          </section>

         {/* DIY Recipes Section */}
<section id="diy-recipes" className="mb-16 scroll-mt-20">
  <h2 className="text-3xl font-serif text-green-800 mb-8">DIY Recipes</h2>
  <div className="space-y-8">
    {[
      {
        title: "Hydrating Chocolate Face Mask",
        ingredients: [
          "1 tablespoon cocoa powder",
          "1 tablespoon sour cream",
          "1 tablespoon honey",
          "1 egg white"
        ],
        instructions: "Mix all ingredients together until well combined. Apply to face and let dry completely. Rinse with lukewarm water. The sour cream gently exfoliates while honey and egg white firm and tighten the skin.",
        image: "/s1.avif"
      },
      {
        title: "Nourishing Milk Hand Soak",
        ingredients: [
          "2-3 cups whole milk",
          "Bowl for soaking"
        ],
        instructions: "Heat milk until warm. Pour into a bowl and soak hands for 5-10 minutes. The milk's fat will hydrate while vitamins A and E nourish dry skin.",
        image: "/s2.avif"
      },
      {
        title: "Sweet Lip Scrub",
        ingredients: [
          "1 teaspoon coconut oil",
          "1 teaspoon raw honey",
          "2 tablespoons raw sugar",
          "Dash of lemon juice",
          "Clean toothbrush for application"
        ],
        instructions: "Mix all ingredients in a small bowl. Apply mixture with a new toothbrush using gentle circular motions. Rinse off and apply your favorite lip balm.",
        image: "/s3.avif"
      }
    ].map((recipe, index) => (
      <DIYRecipe key={index} {...recipe} index={index} />
    ))}
  </div>
</section>

          {/* Interesting Facts Section */}
          <section id="interesting-facts" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-serif text-green-800 mb-8">Interesting Facts</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <ul className="space-y-4">
                {interestingFacts.map((fact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-green-600 mr-2">•</span>
                    {fact}
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkinCarePage;
