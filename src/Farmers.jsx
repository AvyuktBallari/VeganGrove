import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

const Farmers = () => {
  return (
   <div>
     <Navbar />
     <div className="font-cute flex flex-col justify-center items-center text-center px-6 py-16">
      <h1 className="lg:text-8xl text-4xl font-[500] leading-tight font-cute text-[#06402B]">
        Meet the Farmers
      </h1>
      <p className="mt-5 text-lg text-gray-700 max-w-2xl">
        The passionate hands behind your organic meals. Dedicated to sustainable farming, 
        our experts ensure that every bite is fresh, pure, and flavorful.
      </p>

      {/* Farmer Cards Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12 w-full max-w-6xl">
        {farmersData.map((farmer, index) => (
          <div
            key={index}
            className="group relative bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-[1.05]"
          >
            {/* Image */}
            <img
              src={farmer.image}
              alt={farmer.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-[#06402B] shadow-md"
            />
            {/* Name & Role */}
            <h2 className="mt-4 text-xl font-semibold text-[#06402B]">{farmer.name}</h2>
            <p className="text-gray-600">{farmer.role}</p>

            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-[#06402B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-6xl font-cute mx-auto">
        <div className="p-6 sm:p-8 md:p-10 bg-[#e2e8f0] text-black rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="flex flex-col gap-y-3 font-fig justify-center text-black">

            <h1 className="text-3xl lg:text-5xl text-left text-black font-semibold">
              Hi I'm
              <span className="block opacity-70">Christine</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left text-black">
            I've dedicated my life to organic farming because I believe that healthy soil creates healthy food and a healthier world. Every day, I work to ensure our crops are grown sustainably, without chemicals, so you can enjoy the purest, freshest flavors straight from the earth."
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-black">
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">100% Organic Practices</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">Daily Harvest</p>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">Seasonal Selection</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img alt="Farm Fresh" src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" className="w-full h-84" />
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10 bg-[#e2e8f0] text-black rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="rounded-lg overflow-hidden">
            <img alt="Artisanal Kitchen" src="https://img.freepik.com/free-photo/closeup-view-calm-young-lady-street_74855-4995.jpg" className="w-full h-84" />
          </div>
          <div className="flex flex-col gap-y-3 font-fig justify-center text-white">
            <h1 className="text-3xl lg:text-5xl text-left text-black font-semibold">
              Hello I'm
              <span className="block opacity-70">Emma</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left text-black">
            Sustainable farming isn’t just my job—it’s my passion. I strive to cultivate the land responsibly, ensuring that every harvest supports both our environment and future generations.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-black">
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">Handcrafted Techniques</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">0% Preservatives</p>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">Allergy-Friendly Options</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10 bg-[#e2e8f0] text-black rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="flex flex-col gap-y-3 font-fig justify-center text-black">
            <h1 className="text-3xl lg:text-5xl text-left text-black font-semibold">
              Hi I'm
              <span className="block opacity-70">Carlos</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left text-black">
                Soil and water are the heart of every farm, and I’m committed to protecting them. By using conservation techniques, I help ensure that our land stays fertile and our crops thrive naturally for years to come.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-black">
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">7+ Years Experience</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">40+ Clients</p>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">NYU</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">Dexterity</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Delivery Network" className="w-full h-84" />
          </div>
        </div>
        </div>

    <div className="mt-20" />

    <FAQ />

    <Footer />
   </div>
  );
};

const farmersData = [
  { name: "Christine Lange", role: "Organic Crop Specialist", image: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" },
  { name: "Emma Smith", role: "Sustainable Farming Expert", image: "https://img.freepik.com/free-photo/closeup-view-calm-young-lady-street_74855-4995.jpg" },
  { name: "Carlos Rivera", role: "Soil & Water Conservationist", image: "https://images.unsplash.com/photo-1524666041070-9d87656c25bb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZXxlbnwwfHwwfHx8MA%3D%3D" }
];

export default Farmers;
