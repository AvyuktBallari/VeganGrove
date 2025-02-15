import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/favicon.svg";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleKeyDown = async (event) => {
    if (event.key === "Enter" && mood.trim() !== "") {
      setLoading(true);
      try {
        const response = await fetch(
          `https://webmaster.zayaan.adiavi.com/search/${encodeURIComponent(mood)}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        const formattedMenuItem = data.menu_item
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        navigate(`/menu/${formattedMenuItem}`, { state: { reason: data.reason } });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="bg-[#f1f5f9] font-cute">
      <nav className="relative flex flex-wrap items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="inline-flex items-center space-x-2">
            <img src={logo} alt="VeganGrove" className="w-8 h-8 md:w-9 md:h-9 rounded-2xl" />
            <a href="/" className="text-lg md:text-xl font-bold text-[#06402B] shrink-0">
              VeganGrove
            </a>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              className="p-2 mr-2 text-gray-600 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Search bar - visible on mobile only when search icon is clicked */}
        <div className={`w-full md:flex-1 md:max-w-2xl md:mx-8 md:block ${isSearchVisible ? 'block' : 'hidden'} mt-3 md:mt-0`}>
          <div className="relative">
            <input
              type="text"
              placeholder="Feeling hungry? Type in your current mood..."
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 placeholder-gray-500 text-gray-700 text-sm md:text-base"
            />
            {loading && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg
                  className="animate-spin w-5 h-5 text-[#06402B]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Navigation links - desktop */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-[#06402B] transition-colors">Home</a>
            <a href="/process" className="text-gray-700 hover:text-[#06402B] transition-colors">Process</a>
            <a href="/menu" className="text-gray-700 hover:text-[#06402B] transition-colors">Menu</a>
            <a href="/order" className="text-gray-700 hover:text-[#06402B] transition-colors">Order</a>
            <a href="/farmers" className="text-gray-700 hover:text-[#06402B] transition-colors">Farmers</a>
            <a href="/credits" className="text-gray-700 hover:text-[#06402B] transition-colors">Reference</a>
          </div>
        </div>

        {/* Cart icon */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="w-full md:hidden mt-3">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Home</a>
              <a href="/process" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Process</a>
              <a href="/menu" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Menu</a>
              <a href="/order" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Order</a>
              <a href="/farmers" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Farmers</a>
              <a href="/credits" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Reference</a>
            </div>
            <div className="px-2 pt-4 pb-3 border-t border-gray-200">
              <a
                href="/contact"
                className="block px-3 py-2 text-sm font-medium text-center text-white bg-[#06402B] rounded-lg hover:bg-[#043020] transition-colors"
              >
                Book a Order
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
