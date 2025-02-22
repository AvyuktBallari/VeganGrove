import broc from '../assets/broc.png'

function Hero() {
  return (
    <div className="relative mt-10 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-4xl mx-auto font-cute">
        <h1 className="lg:text-8xl text-4xl text-center font-[500] leading-tighter">
          Say goodbye to inorganic foods.
        </h1>
        <p className="mt-5 mb-5 text-lg">
          Tailored <strong>Organic</strong> foods made just for you.<br /> 
          No more artificial flavoring, no more preservatives.
        </p>

        <a 
          href='/menu' 
          className="inline-block rounded-full shadow-sm px-4 py-2 w-max bg-[#06402B] text-white hover:bg-[#085438] transition-colors"
        >
          Our Menu Today
        </a>
      </div>

      <div className="flex justify-center mt-8 w-full">
        <div className="w-full max-w-lg">
          <img 
            src={broc}
            alt="Fresh broccoli" 
            className="w-full h-auto object-contain max-h-96"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
