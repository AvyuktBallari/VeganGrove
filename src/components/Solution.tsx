
function Solution() {
  return (
    <div className="mt-12 p-12 mx-auto">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          <div className="text-[black] font-cute lg:w-1/2">
          <span className="font-cute border p-2 rounded-xl mb-5">THE SOLUTION</span>
            <h2 className="text-3xl mt-5 font-bold mb-6">
              We need to change ASAP.
            </h2>
            <p className="mb-6 max-w-xl mx-auto lg:mx-0">
                Big companies are increasingly turning to artificial meat and innovative ingredients to meet the growing demand for food while reducing their environmental impact. Lab-grown meats, plant-based alternatives, and precision fermentation are changing the way we produce protein-packed meals, all without traditional animal farming.
            </p>
            <p className="mb-6 max-w-xl mx-auto lg:mx-0">
                While technology leads the way, we also can't forget the importance of going back to our roots. Farm-to-table methods ensure food is sustainably sourced, fresher, and more aligned with our health needs. This combination of high-tech solutions and organic practices creates a powerful approach to food.
            </p>
            <p className="mb-6 max-w-xl mx-auto lg:mx-0">
                With sustainable farming techniques, we can create a future where food production is both innovative and deeply connected to the earth. Organic methods can make the world healthier and greener for everyone.
            </p>
            <a href="/blog/the-vegan-way" className="mt-4 px-6 py-3 bg-[#06402B] text-white font-bold rounded-lg">
              Learn More
            </a>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5d96d524052c897425394aaf/7f17f583-0ec1-40a5-9ebf-2bb221ae5e1c/what-does-farm-to-table-mean.jpg"
              alt="Illustration of congestion and busyness"
              className="w-full h-auto mx-auto rounded-xl"
            />
          </div>
        </div>
      </div>
  )
}

export default Solution