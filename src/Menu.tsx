import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Testimonials11 from "./components/Testimonials";

function Menu() {
  const categories = [
    "Vegan Lentil Soup",
    "Grilled Eggplant with Tahini",
    "Chickpea and Spinach Stew",
    "Stuffed Bell Peppers with Quinoa",
    "Mushroom Risotto",
    "Vegan Pad Thai",
    "Roasted Cauliflower Steak",
    "Falafel with Hummus and Pita",
    "Sweet Potato and Black Bean Tacos",
    "Zucchini Noodles with Pesto",
    "Vegan Sushi Rolls",
    "Jackfruit BBQ Sandwich",
    "Coconut Curry with Tofu",
    "Mediterranean Mezze Platter",
    "Vegan Chocolate Avocado Mousse"
  ];

  return (
    <div className="font-cute mx-auto">
      <Navbar />

      <div className="text-center mx-auto mt-20 max-w-4xl">
        <h1 className="lg:text-7xl text-4xl font-bold leading-tight">
          EXPERIENCE RECIPES OF REAL TASTE
        </h1>
        <p className="mt-5 text-lg max-w-xl mx-auto">
          But our menu doesn’t stop at breakfast and lunch. We also offer intutive menu options for Brunches and Fine Dining.
        </p>
        <button className="mt-4 px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition">
          ORDER NOW
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">OUR CATEGORIES</h2>
        <p className="text-center text-gray-500 mb-6">
          All grilled to perfection over an open flame
        </p>
        <div className="border-t border-gray-300 py-6">
          {categories.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-3 border-b">
              <span className="text-lg">{item}</span>
              <span className="text-2xl">→</span>
            </div>
          ))}
        </div>
      </div>

      
      <Gallery />
      <Testimonials11 />
      <Footer />
      
    </div>
  );
}

export default Menu;
