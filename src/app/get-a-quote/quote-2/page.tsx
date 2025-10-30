"use client";
import { useState } from "react";

import Link from "next/link"
import model from "../images/model.png";
import Image from "next/image";

export default function Quote_2() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const items = [
    { title: "Spot Wrap", desc: "(5-24%)" },
    { title: "Partial Wrap", desc: "(25-49%)" },
    { title: "Large Wrap", desc: "(50-74%)" },
    { title: "Full Wrap", desc: "(75-99%)" },
  ];

  return (

    <>
      <main className="bg-[#eee] py-5 md:py-15 px-3">
        <div className="p-5 md:p-10 max-w-4xl mx-auto bg-white rounded-3xl">

          <h1 className="md:w-2/3 text-xl md:text-3xl text-black font-bold text-balance text-center mb-8 mx-auto">
            Get a fast, personalized quote for your vehicle or Fleets wrap.
          </h1>

          <div className="flex flex-col gap-3">
            <h3 className="md:text-2xl font-semibold ">Choose Coverage</h3>
            <div className="flex flex-col md:flex-row gap-3">
              {items.map((item, index) => (
                <span
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col gap-0 w-full text-center cursor-pointer px-4 py-3 rounded-xl transition-all duration-300
            ${activeIndex === index
                      ? "bg-green-600/10 text-green-600 outline-3 outline-green-600"
                      : "bg-transparent outline-3 outline-gray-200 text-black hover:bg-gray-300"
                    }`}
                >
                  {/* Custom design Input Checkbox */}
                  <div
                    className={`ml-auto w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${activeIndex === index
                        ? "border-green-500 bg-green-500"
                        : "border-gray-300 bg-white"
                      }`}
                  >
                    {activeIndex === index && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </span>
              ))}
            </div>
          </div>

          <Image
            className="w-full h-full my-8"
            src={model}
            alt="model"
          />

          <button className="w-full py-3 bg-green-600 text-white font-semibold"><Link href="/get-a-quote/quote-3">Next</Link></button>
        </div>
      </main>
    </>
  )
}