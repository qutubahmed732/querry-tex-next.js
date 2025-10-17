"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../landingpage-images/logo.png";
import { Phone, Facebook, Instagram, MenuSquare, X } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // jab menubar open ho
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  return (
    <>
      <nav className="absolute w-full py-4">
        <div className="max-w-[90%] mx-auto flex items-center justify-between">

          <div className="logo-small-size md:w-45 h-20 content-center">
            <Image
              className="w-full md:w-[90%] object-cover"
              src={logo}
              alt="Company Logo"
              priority
            />
          </div>

          <ul className="hidden md:flex items-center gap-10 text-white text-xl font-semibold nav-font-small">
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Our Work</li>
            <li className="cursor-pointer">Process</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Get a Quote</li>
          </ul>

          <div className="social hidden md:flex items-center gap-5 text-white font-semibold nav-font-small">
            <span className="cursor-pointer">Contact &nbsp;| </span>
            <span className="flex gap-4">
              <Phone className="fill-white text-white size-5 cursor-pointer" />
              <Facebook className="fill-white text-white bg-green-500 size-5 rounded-sm cursor-pointer" />
              <Instagram className="text-white size-5 rounded-sm cursor-pointer" />
            </span>
          </div>

          <span className="menu_bar block md:hidden">
            <MenuSquare className="text-white" size={30} onClick={() => setActive(!active)} />
          </span>
        </div>

        <aside className={`fixed top-0 right-0 z-20 bg-white w-[80%] md:w-1/2 min-h-svh ${active ? "block" : "hidden"}`}>

          <div className="top-side flex items-center justify-between py-3 px-5 mt-5">
            <div className="w-25 content-center">
              <Image
                className="w-full md:w-[90%] object-cover"
                src={logo}
                alt="Company Logo"
                priority
              />
            </div>
            <div className="border-3 border-[#012C12] p-1 rounded-3xl cursor-pointer">
              <X className="text-[#012C12]" onClick={() => setActive(!active)} />
            </div>
          </div>

          <div className="middle-side mt-5">
            <ul className="flex flex-col items-center gap-5 text-xl font-semibold p-3">
              <li className="cursor-pointer py-4 bg-[#012C12] text-[#039d67] w-full text-center rounded-2xl">Services</li>
              <li className="cursor-pointer py-4 bg-[#012C12] text-[#039d67] w-full text-center rounded-2xl">Our Work</li>
              <li className="cursor-pointer py-4 bg-[#012C12] text-[#039d67] w-full text-center rounded-2xl">Process</li>
              <li className="cursor-pointer py-4 bg-[#012C12] text-[#039d67] w-full text-center rounded-2xl">Careers</li>
              <li className="cursor-pointer py-4 bg-[#012C12] text-[#039d67] w-full text-center rounded-2xl">Contact</li>
              <li className="cursor-pointer py-4 bg-[#012C12] text-[#039d67] w-full text-center rounded-2xl">Get a Quote</li>
            </ul>
          </div>

          <div className="flex items-center justify-center gap-8 font-semibold mt-5">
              <Phone className="size-10 cursor-pointer" />
              <Facebook className="size-10 rounded-sm cursor-pointer" />
              <Instagram className="size-10 rounded-sm cursor-pointer" />
          </div>
        </aside>
      </nav>
    </>
  )
}
