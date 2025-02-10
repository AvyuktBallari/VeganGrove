"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What type of food does VeganGrove serve?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        VeganGrove offers a delicious selection of 100% plant-based dishes, including fresh salads, hearty bowls, flavorful burgers, and handcrafted desserts. Everything is made with organic and sustainably sourced ingredients.
      </div>
    ),
  },
  {
    question: "Is all the food at VeganGrove organic?",
    answer: (
      <p>
        Yes! We use farm-to-table techniques to ensure the freshest and most organic ingredients in all of our meals. Our produce is sourced from trusted local farmers who prioritize sustainability.
      </p>
    ),
  },
  {
    question: "Does VeganGrove offer gluten-free options?",
    answer: (
      <p>
        Absolutely! Many of our dishes are gluten-free, and we clearly label them on our menu. If you have any dietary restrictions, just let us know, and we’ll be happy to accommodate you.
      </p>
    ),
  },
  {
    question: "Do you use artificial ingredients or lab-grown meat?",
    answer: (
      <p>
        No, VeganGrove is committed to serving only real, natural food. Unlike some large companies that rely on artificial meat and lab-grown ingredients, we focus on wholesome, plant-based foods made from fresh vegetables, grains, and legumes.
      </p>
    ),
  },
  {
    question: "Does VeganGrove offer takeout and delivery?",
    answer: (
      <p>
        Yes! We offer both takeout and delivery options. You can place an order online through our website or through popular delivery platforms.
      </p>
    ),
  },
  {
    question: "Is VeganGrove kid-friendly?",
    answer: (
      <p>
        Of course! We have a dedicated kids’ menu with tasty, nutritious plant-based options that children love.
      </p>
    ),
  },
  {
    question: "Do you offer catering for events?",
    answer: (
      <p>
        Yes, we provide catering services for events of all sizes! Whether it’s a small gathering or a large celebration, our plant-based catering menu will impress your guests.
      </p>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="font-cute">
      <button
        className="relative flex gap-2 items-center w-full py-5 text-black font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 cursor-pointer transition-colors duration-200 ${
            isOpen ? "text-[#06402B]" : "text-black"
          }`}
        >

          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen ? "rotate-180" : ""}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen ? "rotate-180 hidden" : ""}`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion.current?.scrollHeight || 0, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed text-gray-400">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="font-cute bg-[#e2e8f0]" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-black mb-4">FAQ</p>
          <p className="sm:text-4xl font-cute text-black text-3xl font-extrabold">
            Common Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
