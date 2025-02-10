import React from 'react';
import { StatsGrid } from './Stats';

const veganMeals = [
  {
    title: "Vegan Salad Bowl",
    description: "A refreshing mix of greens, nuts, and seeds.",
    imageSrc: "https://ohsheglows.com/wp-content/uploads/2014/01/065A4546.jpg"
  },
  {
    title: "Quinoa Veggie Burger",
    description: "A hearty plant-based burger with quinoa and veggies.",
    imageSrc: "https://somethingnutritiousblog.com/wp-content/uploads/2021/09/3EB2C636-D90C-4CE7-8959-AB42D6BE050E-scaled-1.jpeg"
  },
  {
    title: "Tofu Stir Fry",
    description: "Tofu, fresh vegetables, and a tangy sauce stir-fried to perfection.",
    imageSrc: "https://www.wellplated.com/wp-content/uploads/2019/03/How-to-Make-Tofu-Stir-Fry.jpg"
  }
];

function FeaturedMeals() {
  return (
    <div className="relative w-full font-cute">
    {/* Stats Section */}
    <div className="relative z-10">
      <StatsGrid />
    </div>

    <div className="w-full bg-[#e2e8f0] py-16 -mt-24 relative z-0">
      <div className="container max-w-7xl mx-auto px-4">
        <h1 className="text-left mt-26 text-4xl lg:text-5xl">Featured Meals</h1>
        <p className="text-lg text-left mt-5">
          Try out our more popular + tastiest food selections for this week.
          <br />
          Our fan favorite right now is the Vegan Salad Bowl.
        </p>
        
        {/* Vegan Meals Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {veganMeals.map((meal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img 
                src={meal.imageSrc} 
                alt={meal.title} 
                className="w-full h-56 object-cover transition-transform duration-1000 hover:scale-105" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{meal.title}</h3>
                <p className="text-gray-700">{meal.description}</p>
              </div>
            </div>
          ))}
          
          {/* Order Now Button positioned relative to grid container */}
          <div className="relative lg:absolute lg:right-0 lg:-top-15">
            <button 
              className="bg-[#006400] text-white py-2 px-6 rounded-full hover:bg-[#004d00] transition duration-300 shadow-lg"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default FeaturedMeals;
