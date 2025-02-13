import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icon.svg";
import { FaShoppingCart } from "react-icons/fa"; // Add this for the cart icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]); // Cart state to track added items
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
    setCart((prevCart) => [...prevCart, item]); // Adds the item to the cart
  };

  return (
    <div className="bg-[#f1f5f9] font-cute">
      <nav className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto gap-4">
        <div className="inline-flex items-center space-x-2">
          <img src={logo} alt="VeganGrove" className="w-9 h-9 rounded-2xl" />
          <a href="/" className="text-xl font-bold text-[#06402B] shrink-0">
            VeganGrove
          </a>
        </div>

        <div className="flex-1 max-w-2xl mx-8 relative">
          <input
            type="text"
            placeholder="Feeling hungry? Type in your current mood..."
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 placeholder-gray-500 text-gray-700"
          />
          {loading && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg
                className="animate-spin w-6 h-6 text-[#06402B]"
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

        <div className="hidden md:flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-700 hover:text-[#06402B] transition-colors">Home</a>
            <a href="/process" className="text-gray-700 hover:text-[#06402B] transition-colors">Process</a>
            <a href="/menu" className="text-gray-700 hover:text-[#06402B] transition-colors">Menu</a>
            <a href="/order" className="text-gray-700 hover:text-[#06402B] transition-colors">Order</a>
            <a href="/farmers" className="text-gray-700 hover:text-[#06402B] transition-colors">Farmers</a>
          </div>
          
        </div>

        <div className="md:flex items-center gap-6 shrink-0">
          <a href="/order" className="relative">
            <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-[#06402B]" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
            <div className="px-4 py-3 space-y-2">
              <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Home</a>
              <a href="/process" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Process</a>
              <a href="/menu" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Menu</a>
              <a href="/order" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Order</a>
              <a href="/farmers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Farmers</a>
              <a
                href="/contact"
                className="block px-4 py-3 mt-4 text-sm font-medium text-center text-white bg-[#06402B] rounded-lg hover:bg-[#043020] transition-colors"
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
