import { link } from "framer-motion/client";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Testimonials11 from "./components/Testimonials";

function Menu() {
  const menuItems = [
    {
      name: "Vegan Lentil Soup",
      description: "Hearty and warming, made with fresh vegetables and aromatic spices",
      image: "https://simple-veganista.com/wp-content/uploads/2019/10/vegan-lentil-soup-recipe-5.jpg",
      link: "/menu/vegan-lentil-soup"
    },
    {
      name: "Grilled Eggplant with Tahini",
      description: "Perfectly charred eggplant with creamy tahini sauce",
      image: "https://www.justspices.com/media/recipe/20230609080836-grilled-eggplant.png",
      link: "/menu/grilled-eggplant-with-tahini"
    },
    {
      name: "Chickpea and Spinach Stew",
      description: "Rich and flavorful Mediterranean-style stew",
      image: "https://www.eatingwell.com/thmb/PqRN1f14fA3zdvpFMGi7I19FCPU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hearty-chickpea-spinach-stew-270568-1x1-b27d319be4504a39ba4d4184d1a3b2cb.jpg",
      link: "/menu/vegan-sushi-rolls"
    },
    {
      name: "Stuffed Bell Peppers with Quinoa",
      description: "Colorful peppers filled with protein-rich quinoa",
      image: "https://www.makingthymeforhealth.com/wp-content/uploads/2014/08/Mediterranean-Stuffed-Peppers-100.jpg",
      link: "/menu/stuffed-bell-peppers-with-quinoa"
    },
    {
      name: "Mushroom Risotto",
      description: "Creamy Italian rice with wild mushrooms",
      image: "https://www.afamilyfeast.com/wp-content/uploads/2012/11/Mushroom-Risotto-3.jpg",
      link: "/menu/mushroom-risotto"
    },
    {
      name: "Vegan Pad Thai",
      description: "Classic Thai noodles with a plant-based twist",
      image: "https://fullofplants.com/wp-content/uploads/2022/03/easy-vegan-pad-thai-noodle-dish-with-bean-sprouts-thumb.jpg",
      link: "/menu/vegan-pad-thai"
    },
    {
      name: "Roasted Cauliflower Steak",
      description: "Tender cauliflower with herbs and spices",
      image: "https://www.crowdedkitchen.com/wp-content/uploads/2020/09/roasted-cauliflower-steaks-15.jpg",
      link: "/menu/roasted-cauliflower-steak"
    },
    {
      name: "Falafel with Hummus and Pita",
      description: "Traditional Middle Eastern combo",
      image: "https://simplyceecee.co/wp-content/uploads/2022/06/falafelfeature.jpg",
      link: "/menu/falafel-with-hummus-and-pita"
    },
    {
      name: "Sweet Potato and Black Bean Tacos",
      description: "Mexican-inspired tacos with fresh toppings",
      image: "https://www.thechunkychef.com/wp-content/uploads/2023/04/Sweet-Potato-and-Black-Bean-Tacos-5.jpg",
      link: "/menu/sweet-potato-and-black-bean-tacos"
    },
    {
      name: "Zucchini Noodles with Pesto",
      description: "Light and fresh vegetable pasta alternative",
      image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2013/08/Zucchini-Noodles-with-Pesto-8.jpg",
      link: "/menu/zucchini-noodles-with-pesto"
    },
    {
      name: "Vegan Sushi Rolls",
      description: "Creative plant-based sushi combinations",
      image: "https://www.justonecookbook.com/wp-content/uploads/2023/05/Vegetarian-Sushi-Rolls-9707-I-1.jpg",
      link: "/menu/chickpea-and-spinach-stew"
    },
    {
      name: "Jackfruit BBQ Sandwich",
      description: "Pulled jackfruit in tangy BBQ sauce",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2018/08/bbq-jackfruit.jpg",
      link: "/menu/jackfruit-bbq-sandwich"
    },
    {
      name: "Coconut Curry with Tofu",
      description: "Rich curry with crispy tofu pieces",
      image: "https://choosingchia.com/jessh-jessh/uploads/2020/03/thai-coconut-curry-tofu-6.jpg",
      link: "/menu/coconut-curry-with-tofu"
    },
    {
      name: "Mediterranean Mezze Platter",
      description: "Selection of classic Mediterranean appetizers",
      image: "https://www.simplyrecipes.com/thmb/qf6TaQLIC6hjm97QGhO3yuS5iZ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__12__Mezze-Platter-LEAD-04-5850a1457fd845cc97d47b87cffe09bd.jpg",
      link: "/menu/mediterranean-mezze-platter"
    },
    {
      name: "Vegan Chocolate Avocado Mousse",
      description: "Decadent dessert with a healthy twist",
      image: "https://th.bing.com/th/id/R.bf7c3d04af6bea6cc2555aa8df1bb0ba?rik=19AiVMpTy%2braBg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-7GLJg9xuVO4%2fVqgrRZK9ZgI%2fAAAAAAABNW0%2fqLQytGSvOws%2fs1105-Ic42%2f2016_01_11_jan-11_9999_36chocolate-pudding-vegan1313820.png&ehk=Snasj%2bGc%2fsQBz%2bqy3h4zyFJmZyUmDOsbokRnCd8dZ8Q%3d&risl=&pid=ImgRaw&r=0",
      link: "/menu/vegan-chocolate-avocado-mousse"
    }
  ];

  return (
    <div className="font-cute mx-auto">
        <Navbar />
      

      <div className="text-center mx-auto mt-20 max-w-4xl">
        <h1 className="lg:text-7xl text-3xl font-bold leading-tight">
          EXPERIENCE RECIPES OF REAL TASTE
        </h1>
        <p className="mt-5 mb-8 text-lg max-w-sm lg:max-w-xl mx-auto">
          But our menu doesn't stop at breakfast and lunch. We also offer intuitive menu options for Brunches and Fine Dining.
        </p>
        <a href="/order" className="mt-4 px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition">
          ORDER NOW
        </a>
      </div>

      <div className="max-w-6xl mx-auto mt-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">OUR CATEGORIES</h2>
        <p className="text-center text-gray-500 mb-6">
          All grilled to perfection over an open flame
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={item.image || `/api/placeholder/400/300`}
                alt={item.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = `/api/placeholder/400/300`;
                }}
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 flex-1">{item.description}</p>
                <a 
                  href={item.link} 
                  className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition text-center"
                >
                  View Details
                </a>
              </div>
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