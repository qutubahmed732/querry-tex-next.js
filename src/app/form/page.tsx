"use client";
import Link from "next/link";
import Checkbox_Custom from "../components/checkbox-custom";
import { useState } from "react";

export default function Form() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeIndex1, setActiveIndex1] = useState<number | null>(0);
  const [activeIndex2, setActiveIndex2] = useState<number | null>(0);

  const condition = [
    { id: 1, text: "New" },
    { id: 2, text: "Used" },
    { id: 3, text: "Painted" },
    { id: 4, text: "Modified" }
  ];
  const complexity = [
    { id: 1, text: "Flat" },
    { id: 2, text: "Contour" },
    { id: 3, text: "Complex" }
  ];

  const items = [
    { title: "Spot Wrap", desc: "(5-24%)" },
    { title: "Partial Wrap", desc: "(25-49%)" },
    { title: "Large Wrap", desc: "(50-74%)" },
    { title: "Full Wrap", desc: "(75-99%)" },
  ];

  return (
    <>
      <main className="bg-[#eee] py-10 px-3 md:px-20">
        <div className="w-full md:max-w-5xl mx-auto bg-white flex flex-col gap-4 rounded-2xl py-5">
          <h1 className="hidden md:block px-5 text-2xl md:text-[40px] font-bold text-center w-full md:max-w-3xl mx-auto">Commercial Vehicle & Fleets Wrap Intake Form</h1>
          <h1 className="block md:hidden px-5 text-2xl md:text-[40px] font-bold text-center w-full md:max-w-3xl mx-auto">Get a fast, personalized quote for your vehicle or Fleets wrap.</h1>

          <div className="px-5 md:px-10">
            {/* input headings */}
            <div className="hidden md:flex flex-col gap-3">
              <h3 className="text-3xl font-semibold mt-5">Step 1: 360° Vehicle Photos & Door-Jam Labels</h3>
              <p className="text-balance text-xl">Capture exterior from all sides plus interior door-jamb VIN and specification labels. These images provide essential vehicle details for accurate wrap planning.</p>
            </div>

            <div className="flex md:hidden flex-col gap-3">
              <h3 className="text-3xl font-semibold">Vehicle Information</h3>
              <p className="text-balance text-xl">Provide business, vehicle and Fleets details.</p>
            </div>

            {/* input fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-10 py-10">

              {/* first input filed */}
              <div className="flex flex-col gap-2">
                <label htmlFor="VINNumber">VIN Number</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="number" id="VINNumber" placeholder="2HGFB2F55DH017656" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="Year">Year</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="number" id="Year" placeholder="2025" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="Make">Make</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="number" id="Make" placeholder="Ford" />
              </div>

              {/* second input filed */}
              <div className="flex flex-col gap-2">
                <label htmlFor="Model/Trim">Model/Trim</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="text" id="Trim" placeholder="E-Transit" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="Wheelbase">Wheelbase</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="password" id="Wheelbase" placeholder="****" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="Color">Color</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="text" id="Color" placeholder="Black" />
              </div>
            </div>
          </div>

          {/* Mechanical Status */}
          <div className="flex flex-col gap-6 px-5 md:px-10">

            {/* Condition */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">Condition</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {condition.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative p-2 rounded-sm font-semibold ${activeIndex === index ? "bg-[#f5f5f5] outline-3 outline-green-600 text-green-600" : "bg-transparent outline-3 outline-gray-200 text-black hover:bg-gray-300"}`}>
                    <Checkbox_Custom isActive={activeIndex === index} />
                    <h1 className="text-center py-3">{item.text}</h1>
                  </div>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">Surface Complexity</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-3">
                {complexity.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex1(index)}
                    className={`relative p-2 rounded-sm font-semibold ${activeIndex1 === index ? "bg-[#f5f5f5] outline-3 outline-green-600 text-green-600" : "bg-transparent outline-3 outline-gray-200 text-black hover:bg-gray-300"}`}>
                    <Checkbox_Custom isActive={activeIndex1 === index} />
                    <h1 className="text-center py-3">{item.text}</h1>
                  </div>
                ))}
              </div>
            </div>

            <hr className="border border-[#eee] mt-5" />
          </div>

          {/* Coverage */}
          <div className="flex flex-col gap-10 px-5 md:px-10">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold">Style, Design, Budget</h3>
              <p>Styles and design decisions to determine coverage, provide budgets and expedite quotes.</p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-2xl font-semibold">Choose Coverage</h3>
              <div className="flex flex-col md:flex-row gap-3">
                {items.map((item, index) => (
                  <span
                    key={index}
                    onClick={() => { setActiveIndex2(index) }}
                    className={`relative flex flex-col gap-0 w-full text-center cursor-pointer px-4 py-2 rounded-lg transition-all duration-300
                  ${activeIndex2 === index
                        ? "bg-[#F5F5F5] text-green-600 outline-3 outline-green-600"
                        : "bg-transparent outline-3 outline-gray-200 text-black hover:bg-gray-300"
                      }`}
                  >
                    {/* Custom design Input Checkbox */}
                    <Checkbox_Custom isActive={activeIndex2 === index} />
                    <h1 className="text-lg font-semibold pt-4">{item.title}</h1>
                    <p className="text-sm opacity-80 pb-3">{item.desc}</p>
                  </span>
                ))}
              </div>
              <hr className="border border-[#eee] mt-5" />
            </div>
          </div>

          {/* Schedule */}
          <div className="flex flex-col px-5 md:px-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">Schedule Your Wrap</h3>
              <p>Coordinating vehicle wrap service for the vehicle or Fleets to be dropped off, picked up or we can go to you.</p>
            </div>

            {/* input date fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 gap-10 py-10">

              <div className="flex flex-col gap-2">
                <label htmlFor="ServiceDate/Time" className="text-md font-medium">Service Date/Time</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="text" id="ServiceDate/Time" placeholder="10:00 AM - 12/09/2025" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="DropOffDate/Time" className="text-md font-medium">Drop Off Date/Time</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="text" id="DropOffDate/Time" placeholder="10:00 AM - 12/09/2025" />
              </div>

              {/* second input filed */}
              <div className="flex flex-col gap-2">
                <label htmlFor="PickupDate/Time" className="text-md font-medium">Pickup Date/Time</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="number" id="PickupDate/Time" placeholder="10:00 AM - 12/09/2025" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="CompletionDate/Time" className="text-md font-medium">Completion Date / Time</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="text" id="CompletionDate/Time" placeholder="10:00 AM - 12/09/2025" />
              </div>

            </div>
            <hr className="border border-[#eee] mt-5" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col px-5 md:px-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">Contact Info</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-10 py-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="Name" className="text-md font-medium">Name</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="text" id="Name" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="Phone" className="text-md font-medium">Phone</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="telephone" id="Phone" placeholder="908-322-8488" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="Email" className="text-md font-medium">Email</label>
                <input className="placeholder:text-[#222] border border-t-0 border-l-0 border-r-0 outline-none p-1" type="email" id="Email" placeholder="john@domain.com" />
              </div>
            </div>
          </div>

          <Link href="/form/Thank-you" className="bg-[#339933] text-white font-semibold w-[92%] py-3 mx-auto rounded"><button className="mx-auto block">Next</button></Link>
        </div>
      </main>
    </>
  )
}