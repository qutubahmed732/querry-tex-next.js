"use client";
import { useState } from "react";
import Checkbox_Custom from "@/app/components/checkbox-custom";


import Image from "next/image"
import model from "../images/model.png"
import Link from "next/link"

export default function Quote_4() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const wrap = [
    { id: 1, text: "Basic" },
    { id: 2, text: "Custom" },
    { id: 3, text: "Complex" }
  ];

  return (
    <>
      <main className="bg-[#eee] py-5 md:py-15 px-3">
        <div className="p-5 md:p-10 max-w-4xl mx-auto bg-white rounded-3xl">

          <h1 className="md:w-2/3 text-xl md:text-3xl text-black font-bold text-pretty text-center mb-8 mx-auto">
            Get a fast, personalized quote for your vehicle or Fleets wrap.
          </h1>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl">Surface complexity</h3>

            <div className="flex flex-col md:flex-row gap-3 *:w-full md:*:w-[calc(100%/3)]">
              {
                wrap.map((item, index) => (

                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative p-2 rounded-sm font-semibold ${activeIndex === index ? "bg-green-600/30 outline-3 outline-green-600 text-green-600" : " bg-transparent outline-3 outline-gray-200 text-black hover:bg-gray-300"}`}>
                    <Checkbox_Custom isActive={activeIndex === index} />
                    <h1 className="text-center py-3">{item.text}</h1>
                  </div>
                ))
              }
            </div>
          </div>

          {/* <div className="flex flex-col gap-3 mt-10">
            <h3 className="text-2xl">Material</h3>

            <div className="flex flex-col md:flex-row gap-3 *:w-full md:*:w-[calc(100%/3)]">
              {
                material.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex1(index)}
                    className={`p-2 rounded-sm font-semibold ${activeIndex1 === index ? "bg-green-600/30 outline-3 outline-green-600" : "bg-transparent outline-3 outline-gray-200 text-black hover:bg-gray-300"}`}>
                    <div
                      className={`ml-auto w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${activeIndex1 === index
                        ? "border-green-500 bg-green-500"
                        : "border-gray-300 bg-white"
                        }`}
                    >
                      {activeIndex1 === index && (
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
                    <h1 className="text-center">{item.text}</h1>
                  </div>
                ))
              }
            </div>
          </div> */}

          <Image
            className="w-full h-full my-8"
            src={model}
            alt="model"
          />

          <button className="w-full py-3 bg-green-600 text-white font-semibold"><Link href="/get-a-quote/quote-5">Next</Link></button>
        </div>
      </main>
    </>
  )
}