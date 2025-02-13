import React from "react";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

const refTypes = {
  productHunt: {
    id: "product_hunt",
    ariaLabel: "See user review on Product Hunt",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.245 26.256"
        className="w-[18px] h-[18px]"
      >
        <path
          d="M26.254 13.128c0 7.253-5.875 13.128-13.128 13.128S-.003 20.382-.003 13.128 5.872 0 13.125 0s13.128 5.875 13.128 13.128"
          fill="#da552f"
        />
        <path
          d="M14.876 13.128h-3.72V9.2h3.72c1.083 0 1.97.886 1.97 1.97s-.886 1.97-1.97 1.97m0-6.564H8.53v13.128h2.626v-3.938h3.72c2.538 0 4.595-2.057 4.595-4.595s-2.057-4.595-4.595-4.595"
          fill="#fff"
        />
      </svg>
    ),
  },
  twitter: {
    id: "twitter",
    ariaLabel: "See user post on Twitter",
    svg: (
      <svg
        className="w-5 h-5 fill-[#00aCee]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
      </svg>
    ),
  },
  other: { id: "other", ariaLabel: null, svg: null },
} as const;

type TestimonialType = {
  username?: string;
  name: string;
  text: string;
  type?: (typeof refTypes)[keyof typeof refTypes];
  link?: string;
  img?: string | StaticImageData;
};

const list: TestimonialType[] = [
    {
      username: "plantlover92",
      name: "Ethan Caldwell",
      text: "VeganGrove is a dream come true! Their plant-based dishes are packed with flavor, and I never knew vegan food could be this satisfying.",
      type: refTypes.twitter,
    },
    {
      username: "green_gourmet",
      name: "Sophia Bennett",
      text: "I’ve tried many vegan spots, but nothing compares to VeganGrove. Their farm-to-table ingredients make every meal fresh and delicious!",
      type: refTypes.twitter,
      link: "https://twitter.com/green_gourmet",
    },
    {
      username: "eco_foodie",
      name: "Liam Patterson",
      text: "Eating at VeganGrove changed my perspective on plant-based food. The flavors, the quality, and the creativity in their dishes are unmatched!",
      type: refTypes.productHunt,
      link: "https://www.producthunt.com/products/vegangrove/reviews?review=123456",
    },
    {
      name: "Isabella Hughes",
      text: "VeganGrove’s chefs are geniuses! Every dish is a perfect balance of taste and nutrition, and I love knowing my meals are 100% organic.",
      type: refTypes.twitter,
      link: "https://www.producthunt.com/products/vegangrove/reviews?review=123456",
    },
    {
      username: "vegan_explorer",
      name: "Noah Richardson",
      text: "The best vegan restaurant I’ve been to! The ingredients are so fresh, and you can truly taste the difference with their farm-to-table approach.",
      type: refTypes.productHunt,
      link: "https://www.producthunt.com/posts/vegangrove?comment=789101",
    },
    {
      username: "plant_powered",
      name: "Olivia Brooks",
      text: "VeganGrove is a game-changer! Their creative menu proves that vegan food can be exciting, nutritious, and absolutely delicious.",
      type: refTypes.twitter,
      link: "https://twitter.com/plant_powered",
    },
    {
      name: "Mason Torres",
      text: "Yo, VeganGrove is awesome! Their vegan burgers are better than any meat-based ones I’ve had. Highly recommend this spot!",
      type: refTypes.productHunt,
      link: "https://twitter.com/plantfast",
    },
    {
      username: "organic_bites",
      name: "Emma Mitchell",
      text: "If you care about fresh, organic, and ethical eating, VeganGrove is the place to be. Their food is as good for the planet as it is for you!",
      type: refTypes.twitter,
    },
    {
      username: "nutri_vegan",
      name: "Aiden Cooper",
      text: "VeganGrove is a must-visit for plant-based food lovers. Their dishes are bursting with flavor, and their sustainability efforts are inspiring.",
      type: refTypes.twitter,
      link: "https://www.producthunt.com/products/vegangrove/reviews?review=123456",
    },
    {
      username: "veggie_fusion",
      name: "Charlotte Hayes",
      text: "Probably one of the best restaurant experiences I’ve had. VeganGrove’s dishes are fresh, flavorful, and completely guilt-free!",
      type: refTypes.productHunt,
      link: "https://www.producthunt.com/posts/vegangrove?comment=789102",
    },
    {
      username: "CollinEats",
      name: "Collin Thompson",
      text: "VeganGrove is a lifesaver! Their food is delicious, healthy, and sustainably sourced. I feel great after every meal!",
      type: refTypes.twitter,
    },
  ];


  

interface TestimonialProps {
  i: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative h-full text-white p-6 !font-inter bg-[#06402B] rounded-lg">
        <blockquote className="relative">
          <p className="text-sm text-base-content/80">{testimonial.text}</p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
          <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
            {testimonial.img ? (
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={typeof testimonial.img === "string" ? testimonial.img : testimonial.img.src}
                alt={`${testimonial.name}'s testimonial`}
                width={48}
                height={48}
              />
            ) : (
              <span className="w-10 h-10 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          <div className="w-full flex items-end justify-between gap-2">
            <div>
              <div className="text-sm font-medium text-base-content">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>

            {testimonial.link && testimonial.type?.svg && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
                aria-label={testimonial.type?.ariaLabel}
              >
                {testimonial.type?.svg}
              </a>
            )}
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials11: React.FC = () => {
  return (
    <section className="mt-20 font-cute" id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl  text-black text-4xl font-extrabold text-base-content">
              100+ Customers Are Satisfied
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto text-gray-400 leading-relaxed text-base text-base-content/80">
            Don&apos;t take our word for it. Here&apos;s what they have to say
            about us.
          </p>
        </div>

        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto sm:gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-4"
        >
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(3)].map((_, i) => (
                <Testimonial key={i} i={i} />
              ))}
            </ul>
          </li>

          <li className="hidden font-inter text-white md:grid order-none md:order-first lg:order-none col-span-2 grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {list.length > 0 && (
              <ul className="col-span-2">
                <li>
                  <figure className="relative h-full p-6 bg-[#06402B] rounded-lg">
                    <blockquote className="relative p-4">
                      <p className="text-lg font-medium text-base-content">
                        {list[list.length - 1].text}
                      </p>
                    </blockquote>
                    <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 border-t border-base-content/5">
                      
                      <div>
                        <div className="text-base font-medium text-base-content">
                          {list[list.length - 1].name}
                        </div>
                        {list[list.length - 1].username && (
                          <div className="mt-1 text-base text-base-content/80">
                            @{list[list.length - 1].username}
                          </div>
                        )}
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            )}
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(2)].map((_, i) => (
                <Testimonial key={i} i={i + 3} />
              ))}
            </ul>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(2)].map((_, i) => (
                <Testimonial key={i} i={i + 5} />
              ))}
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              {[...Array(3)].map((_, i) => (
                <Testimonial key={i} i={i + 7} />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Testimonials11;