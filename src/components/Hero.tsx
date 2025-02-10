import broc from '../assets/broc.png'

function Hero() {
  return (
    <div>
      <div className="relative  mt-10 flex flex-col justify-center items-center text-center">
      <div className="max-w-4xl mx-auto font-cute">
        <h1 className="lg:text-8xl text-4xl text-center max-w-4xl font-[500] leading-tighter">
          Just say goodbye to inorganic foods.
        </h1>
        <p className="mt-5 mb-5 text-lg">
          Tailored <strong><em>Organic</em></strong> foods made just for you.<br /> No more artifical flavoring, no more preservatives.
        </p>

        <a href='/menu' className="rounded-full shadow-sm px-4 py-2 w-max bg-[#06402B] text-white">Our Menu Today</a>
      </div>
      
      <div className="flex justify-center">
        <img 
          src={broc}
          alt="Picture of a dog" 
          className="]"
        />
      </div>
    </div>

    </div>
  );
}

export default Hero;
