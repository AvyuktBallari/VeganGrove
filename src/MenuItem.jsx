import React from "react";
import { useParams, useLocation } from "react-router-dom";
import menuData from "./menuItem.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials11 from "./components/Testimonials";
import FAQ from "./components/FAQ";

function MenuItem() {
  const { menu_item } = useParams();
  const { state } = useLocation();
  const item = menuData[menu_item];

  if (!item) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="!max-w-7xl flex flex-col items-center justify-center !text-center lg:text-left">
            <div className="text-black font-cute">
              <span className="font-cute border p-2 rounded-xl mb-5 inline-block">
                MENU ITEM NOT FOUND
              </span>
              <h2 className="text-3xl mt-5 font-bold mb-6">Item Not Found</h2>
              <p className="mb-6 max-w-xl mx-auto lg:mx-0">
                Sorry, the menu item you're looking for does not exist.
              </p>
              <a
                href="/menu"
                className="mt-4 px-6 py-3 bg-[#06402B] text-white font-bold rounded-lg inline-block"
              >
                Back to Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto">
      <Navbar />
      <div className="max-w-7xl mt-7 mx-auto flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">

        <div className="lg:w-1/2">
          <img
            src={item.image}
            alt={item.name}
            className="w-full max-w-[600px] h-auto max-h-[500px] object-cover mx-auto rounded-xl"
          />
        </div>

        <div className="text-black font-cute lg:w-1/2">
        {state?.reason && (
          <div className="bg-[#06402B] text-white mt-10 p-3 rounded-xl w-full mb-5">
            {state.reason}
          </div>
        )}
          <h2 className="text-3xl mt-5 font-bold mb-6">{item.name}</h2>
          <p className="mb-6 max-w-sm lg:max-w-xl mx-auto lg:mx-0">{item.description}</p>
          <div className="mb-6 max-w-xl mx-auto lg:mx-0">
            <h3 className="text-xl font-semibold mb-3">Ingredients</h3>
            <ul className="list-disc list-inside">
              {item.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <a
            href="/order"
            className="mt-4 px-6 py-3 bg-[#06402B] text-white font-bold rounded-lg inline-block"
          >
            Order Now
          </a>
        </div>
      </div>
      <Testimonials11 />
      <FAQ />
      <Footer />
    </div>
  );
}

export default MenuItem;
