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
          Sustainable Practices
        </h1>
        <p className="mt-5 mb-5 max-w-sm mx-auto text-lg">
          From soil to plate - exploring the <strong><em>science</em></strong> behind ethical food production.
        </p>
      </div>

      <div className="max-w-[78rem] mx-auto">
        <div className="p-6 items-center sm:p-8 md:p-10 bg-[#e2e8f0] text-black rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="flex flex-col gap-y-3 font-fig justify-center text-black">
            <div className="p-2 rounded-md bg-[#06402B] text-[white] w-max">
              <span className="font-bold text-xl">Step 1</span>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-black font-semibold">
              Farm-to-Table Science
              <span className="block opacity-70">Maximizing Nutrient Retention</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left text-black">
              Our farm-to-table system ensures that produce is harvested at peak ripeness, minimizing nutrient degradation through optimized post-harvest handling. Studies show that fresh-picked organic produce retains up to 30% more antioxidants compared to conventionally stored alternatives.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-black">
              <p className="text-lg">✓ Soil microbiome preservation</p>
              <p className="text-lg">✓ Non-GMO, heirloom varieties</p>
              <p className="text-lg">✓ Closed-loop composting systems</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden items-center justify-center">
            <img alt="Farm Science" src="https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFybSUyMHRvJTIwdGFibGV8ZW58MHx8MHx8fDA%3D" className="w-full h-auto" />
          </div>
        </div>

        <div className="p-6 items-center sm:p-8 md:p-9 bg-[#e2e8f0] text-black rounded-lg gap-8 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="rounded-lg overflow-hidden">
            <img alt="Vegan Nutrition" src="https://lifestylemedicine.org/wp-content/uploads/2023/03/shutterstock_408989071-scaled.jpg-1024x683.webp" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-y-3 font-fig justify-center text-black">
            <div className="p-2 rounded-md bg-[#06402B] text-[white] w-max">
              <span className="font-bold text-xl">Step 2</span>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-black font-semibold">
              Organic Vegan Nutrition
              <span className="block opacity-70">Backed Benefits</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left text-black">
              Plant-based diets are scientifically proven to reduce inflammation, support cardiovascular health, and promote longevity. Our organic menu is rich in essential nutrients, including B12-fortified foods and omega-3s from algae sources.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-black">
              <p className="text-lg">✓ High bioavailability of vitamins</p>
              <p className="text-lg">✓ Sustainable plant proteins</p>
              <p className="text-lg">✓ Zero artificial additives</p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10 items-center bg-[#e2e8f0] text-black rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md mt-10 mx-4 sm:mx-6 md:mx-8">
          <div className="flex flex-col gap-y-3 font-fig justify-center text-black">
            <div className="p-2 rounded-md bg-[#06402B] text-[white] w-max">
              <span className="font-bold text-xl">Step 3</span>
            </div>
            <h1 className="text-3xl lg:text-5xl text-left text-black font-semibold">
              Sustainable Packaging
              <span className="block opacity-70">Minimizing Environmental Impact</span>
            </h1>
            <p className="text-lg tracking-wide w-full text-left text-black">
              Our commitment to sustainability extends beyond food. We use biodegradable packaging and eco-friendly logistics to reduce carbon footprint and waste pollution.
            </p>
            <div className="flex flex-col gap-y-2 tracking-wide text-black">
              <p className="text-lg">✓ 100% Compostable Materials</p>
              <p className="text-lg">✓ Zero-Waste Initiatives</p>
              <p className="text-lg">✓ Reduced Carbon Footprint</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img alt="Sustainable Packaging" src="https://static.vecteezy.com/system/resources/thumbnails/039/001/619/small_2x/an-arrangement-of-beige-eco-friendly-packaging-and-utensils-on-a-wooden-table-video.jpg" className="w-full h-auto" />
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
