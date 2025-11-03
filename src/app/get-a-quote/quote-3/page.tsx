"use client";
import { useState } from "react";
import Checkbox_Custom from "@/app/components/checkbox-custom";


import Image from "next/image"
import model from "../images/model.png"
import Link from "next/link"

export default function Quote_3() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeIndex1, setActiveIndex1] = useState<number | null>(0);

  const complexity = [
    { id: 1, text: "Flat" },
    { id: 2, text: "Contour" },
    { id: 3, text: "Complex" }
  ];

  const material = [
    { id: 1, text: "Standard" },
    { id: 2, text: "Print" },
    { id: 3, text: "Speciality" }
  ]

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
                complexity.map((item, index) => (

                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative p-2 rounded-sm font-semibold ${activeIndex === index ? "bg-green-600/30 outline-3 outline-green-600 text-green-600" : "bg-transparent outline-3 outline-gray-200 text-black hover:bg-gray-300"}`}>
                    <Checkbox_Custom isActive={activeIndex === index} />
                    <h1 className="text-center py-3">{item.text}</h1>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-10">
            <h3 className="text-2xl">Material</h3>

            <div className="flex flex-col md:flex-row gap-3 *:w-full md:*:w-[calc(100%/3)]">
              {
                material.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex1(index)}
                    className={`relative p-2 rounded-sm font-semibold ${activeIndex1 === index ? "bg-green-600/30 outline-3 outline-green-600 text-green-600" : "bg-transparent outline-3 outline-gray-200 text-black hover:bg-gray-300"}`}>
                  <Checkbox_Custom isActive={activeIndex1 === index} />
                    <h1 className="text-center py-4">{item.text}</h1>
                  </div>
                ))
              }
            </div>
          </div>

          <Image
            className="w-full h-full my-8"
            src={model}
            alt="model"
          />

          <button className="w-full py-3 bg-green-600 text-white font-semibold"><Link href="/get-a-quote/quote-4">Next</Link></button>
        </div>
      </main>
    </>
  )
}