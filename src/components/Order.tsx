import type React from "react"
import { useState } from "react"
import { CreditCard } from "lucide-react"

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
}

interface OrderItems {
  [key: number]: number
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Vegan Lentil Soup",
    description: "A hearty and nutritious soup made with lentils, tomatoes, and aromatic spices.",
    price: 8.99
  },
  {
    id: 2,
    name: "Grilled Eggplant with Tahini",
    description: "Smoky grilled eggplant drizzled with creamy tahini sauce and garnished with herbs.",
    price: 10.99
  },
  {
    id: 3,
    name: "Chickpea and Spinach Stew",
    description: "A flavorful stew made with chickpeas, spinach, and a blend of Mediterranean spices.",
    price: 9.99
  },
  {
    id: 4,
    name: "Stuffed Bell Peppers with Quinoa",
    description: "Bell peppers filled with seasoned quinoa, vegetables, and herbs, baked to perfection.",
    price: 11.49
  },
  {
    id: 5,
    name: "Mushroom Risotto",
    description: "Creamy risotto cooked with wild mushrooms, garlic, and a touch of nutritional yeast.",
    price: 13.99
  },
  {
    id: 6,
    name: "Vegan Pad Thai",
    description: "A classic Thai dish with rice noodles, tofu, peanuts, and a tangy tamarind sauce.",
    price: 12.99
  },
  {
    id: 7,
    name: "Roasted Cauliflower Steak",
    description: "Thick-cut cauliflower steaks roasted with herbs and served with a zesty sauce.",
    price: 11.99
  },
  {
    id: 8,
    name: "Falafel with Hummus and Pita",
    description: "Crispy chickpea falafels served with creamy hummus, fresh veggies, and warm pita bread.",
    price: 10.49
  },
  {
    id: 9,
    name: "Sweet Potato and Black Bean Tacos",
    description: "Soft tortillas filled with roasted sweet potatoes, black beans, and avocado salsa.",
    price: 9.99
  },
  {
    id: 10,
    name: "Zucchini Noodles with Pesto",
    description: "Fresh zucchini noodles tossed in a homemade basil pesto and cherry tomatoes.",
    price: 10.99
  },
  {
    id: 11,
    name: "Vegan Sushi Rolls",
    description: "Sushi rolls filled with avocado, cucumber, and carrots, served with soy sauce and wasabi.",
    price: 12.49
  },
  {
    id: 12,
    name: "Jackfruit BBQ Sandwich",
    description: "Pulled jackfruit in a smoky BBQ sauce served on a soft bun with coleslaw.",
    price: 11.99
  },
  {
    id: 13,
    name: "Coconut Curry with Tofu",
    description: "A fragrant coconut curry with tofu, bell peppers, and jasmine rice.",
    price: 13.49
  },
  {
    id: 14,
    name: "Mediterranean Mezze Platter",
    description: "A variety of Mediterranean favorites including hummus, baba ganoush, olives, and pita.",
    price: 14.99
  },
  {
    id: 15,
    name: "Vegan Chocolate Avocado Mousse",
    description: "A rich and creamy chocolate mousse made with ripe avocados and cacao.",
    price: 7.99
  }
];

const OrderForm: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItems>({})
  const [pickupTime, setPickupTime] = useState<string>("")
  const [specialInstructions, setSpecialInstructions] = useState<string>("")
  const [diningOption, setDiningOption] = useState<string>("")
  const [toGoOption, setToGoOption] = useState<string>("")
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
  })

  const updateQuantity = (id: number, value: number): void => {
    setOrderItems((prev) => ({
      ...prev,
      [id]: Math.max(0, value),
    }))
  }

  const calculateTotal = (): number => {
    return Object.entries(orderItems).reduce((total, [id, quantity]) => {
      const item = menuItems.find((item) => item.id === Number(id))
      return total + (item?.price || 0) * quantity
    }, 0)
  }

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log("Order submitted:", {
      orderItems,
      pickupTime,
      specialInstructions,
      diningOption,
      toGoOption,
      billingInfo,
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-cute">
      <h1 className="text-3xl font-bold">Place Your Order</h1>
      <p className="text-lg mb-8">Scroll all the way down for your order details.</p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200">
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="mt-1 text-sm font-medium">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, (orderItems[item.id] || 0) - 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                >
                  -
                </button>
                <input
                  type="number"
                  min="0"
                  value={orderItems[item.id] || 0}
                  onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 0)}
                  className="w-12 text-center border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => updateQuantity(item.id, (orderItems[item.id] || 0) + 1)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <div>
            <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700">
              Pickup Time *
            </label>
            <input
              type="time"
              id="pickupTime"
              required
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700">
              Special Instructions
            </label>
            <textarea
              id="specialInstructions"
              rows={3}
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="mt-1 block w-full border p-2 focus:ring-0 border-gray-300! rounded-md"
              placeholder="Any special requests or allergies?"
            />
          </div>
        </div>

        {/* Dining Option */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Dining Option</h2>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${diningOption === "dine-in" ? "bg-black text-white" : "border border-gray-300"}`}
              onClick={() => setDiningOption("dine-in")}
            >
              Dine In
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-md ${diningOption === "to-go" ? "bg-black text-white" : "border border-gray-300"}`}
              onClick={() => setDiningOption("to-go")}
            >
              To Go
            </button>
          </div>
        </div>

        {/* To-Go Options */}
        {diningOption === "to-go" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Would you like delivery or pickup?</h2>
            <div className="flex space-x-4">
              <button
                type="button"
                className={`px-4 py-2 rounded-md ${toGoOption === "delivery" ? "bg-black text-white" : "border border-gray-300"}`}
                onClick={() => setToGoOption("delivery")}
              >
                Delivery
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-md ${toGoOption === "pickup" ? "bg-black text-white" : "border border-gray-300"}`}
                onClick={() => setToGoOption("pickup")}
              >
                Pickup
              </button>
            </div>
          </div>
        )}

        {/* Billing Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Billing Information</h2>
          {["name", "email", "phone", "address", "city", "zip"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={billingInfo[field as keyof typeof billingInfo]}
              onChange={handleBillingChange}
              className="block w-full border p-2 rounded-md"
              required
            />
          ))}
        </div>

        {/* Credit Card Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Credit Card Information</h2>
          <div className="space-y-2">
            <label htmlFor="creditCardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                id="creditCardNumber"
                name="creditCardNumber"
                placeholder="1234 5678 9012 3456"
                value={billingInfo.creditCardNumber}
                onChange={handleBillingChange}
                className="block w-full border p-2 rounded-md pl-10"
                required
                maxLength={19}
              />
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">
                Expiration Date
              </label>
              <input
                type="text"
                id="expirationDate"
                name="expirationDate"
                placeholder="MM/YY"
                value={billingInfo.expirationDate}
                onChange={handleBillingChange}
                className="block w-full border p-2 rounded-md"
                required
                maxLength={5}
              />
            </div>
            <div className="flex-1 space-y-2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                value={billingInfo.cvv}
                onChange={handleBillingChange}
                className="block w-full border p-2 rounded-md"
                required
                maxLength={4}
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-lg font-semibold mb-4">
            <span>Total Amount:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Complete Order
          </button>
        </div>
      </form>
    </div>
  )
}

export default OrderForm

