import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials11 from "./components/Testimonials";

function About() {
  return (
    <div className="font-cute">
      <Navbar />
      <div className="text-center mx-auto mt-20 items-center">
        <h1 className="lg:text-8xl text-4xl text-center max-w-4xl mx-auto font-[500] leading-tighter">
          The Process
        </h1>

        <p className="mt-5 mb-5 max-w-xl mx-auto text-lg">
          From farm to table - discover our <strong><em>commitment</em></strong> to quality.
          Every step carefully crafted for your dining experience.
        </p>
      </div>

      <div className="max-w-[78rem] mx-auto">
        <div className="p-6 sm:p-8 md:p-10 bg-[#06402B] text-white rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="flex flex-col gap-y-3 font-fig justify-center text-white">
            <div className="p-2 rounded-md bg-white text-[black] w-max">
                <span className="font-bold text-xl">Step 1</span>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-white font-semibold">
              Farm-Fresh Ingredients
              <span className="block opacity-70">Sourced from Local Partners</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left">
              We partner with local farms that practice sustainable agriculture, ensuring only the freshest seasonal produce and ethically-raised meats reach our kitchen.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-white">
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
            <img alt="Farm Fresh" src="https://www.2harvest.org/sites/default/files/styles/scale_1000px/public/2022-10/moses-1.jpg?itok=cOZ7URj5" className="w-full h-auto" />
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10 bg-[#06402B] text-white rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="rounded-lg overflow-hidden">
            <img alt="Artisanal Kitchen" src="https://rotom.co.uk/media/mageplaza/blog/post/import/blog/uk/2020/08/take-care-of-your-crops-learn-about-containers-carts-and-other-farming-solutions/take-care-of-your-crops-learn-about-containers-carts-and-other-farming-solutions-2.jpg" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-y-3 font-fig justify-center text-white">
            <div className="p-2 rounded-md bg-white text-[black] w-max">
                <span className="font-bold text-xl">Step 2</span>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-white font-semibold">
              Artisanal Preparation
              <span className="block opacity-70">Crafted with Care</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left">
              Our master chefs combine traditional techniques with modern innovation. Every dish is prepared fresh daily, never frozen, with no artificial additives.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-white">
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

        <div className="p-6 sm:p-8 md:p-10 bg-[#06402B] text-white rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="flex flex-col gap-y-3 font-fig justify-center text-white">
            <div className="p-2 rounded-md bg-white text-black w-max">
                <span className="font-bold text-xl">Step 3</span>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-white font-semibold">
              Efficient Distribution
              <span className="block opacity-70">Maintaining Peak Freshness</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left">
              Our temperature-controlled logistics network ensures ingredients and prepared dishes maintain optimal freshness from our kitchen to your table.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-white">
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">Refrigerated Transport</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">Local Partnerships</p>
                </div>
              </div>
              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">Daily Deliveries</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-4 h-4">
                    <path d="M237.66,85.26l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0l36.68,35.32a8,8,0,0,0,11.32,0l92.68-91.32a8,8,0,0,1,11.32,0l24,23.6A8,8,0,0,1,237.66,85.26Z"/>
                  </svg>
                  <p className="text-lg">Eco Packaging</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src="https://cdn.sanity.io/images/ec9j7ju7/production/84f30a7e86a8167b1a23f874b44134fb2883c239-1705x1137.jpg?w=3840&q=75&fit=clip&auto=format" alt="Delivery Network" className="w-full h-auto" />
          </div>
        </div>
        </div>
        <Testimonials11 />
        <FAQ />
        <Footer />
        </div>
        
    );
}

export default About;

