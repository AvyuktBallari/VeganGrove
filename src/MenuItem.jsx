import React from "react";
import { useParams, useLocation } from "react-router-dom";
import menuData from "./menuItem.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials11 from "./components/Testimonials";
import FAQ from "./components/FAQ";
import { ShoppingCart } from "lucide-react";

function MenuItem() {
  const { menu_item } = useParams();
  const { state } = useLocation();
  const item = menuData[menu_item];

  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[70vh] px-4">
          <div className="max-w-md text-center">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Item Not Found</h2>
            <p className="text-gray-600 mb-8">
              We couldn't find the menu item you're looking for.
            </p>
            <a
              href="/menu"
              className="inline-block px-6 py-3 bg-[#06402B] text-white rounded-lg hover:bg-[#053222] transition-colors"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-cute min-h-screen">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6">
        {state?.reason && (
          <div className="bg-[#06402B] text-white p-4 rounded-lg mb-12 max-w-2xl mx-auto">
            <p className="text-center text-sm">{state.reason}</p>
          </div>
        )}

        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-16">
          <div>
            <img
              src={item.image}
              alt={item.name}
              className="w-full aspect-square object-cover rounded-lg"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-medium text-gray-900 mb-4">{item.name}</h1>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {item.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">
                    • {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex gap-4">
              <a href="/order" className="flex items-center justify-center px-6 py-3 bg-[#06402B] text-white rounded-lg hover:bg-[#053222] transition-colors w-full sm:w-auto">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Now
              </a>
            </div>
          </div>
        </div>


      </main>

      <div className="mt-24">
          <Testimonials11 />
          <FAQ />
      </div>
      
      <Footer />
    </div>
  );
}

export default MenuItem;