"use client";
import BackToTopButton from "../components/BacktotopBtn";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";

import heroImage from "./heroImage.png";
import logo from "./logo.png";


export default function Form({
    children
}: {
    children: React.ReactNode;
}) {
  
  return (
    <>
      <header className="flex items-center justify-center w-full h-[550px] md:h-[400px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${heroImage.src})` }}>
        <div className="flex flex-col justify-center items-center gap-3">
          <Link href="../career" className="">
            <Image
              src={logo}
              alt="logo image"
              width={200}
              height={200}
              priority
            />
          </Link>
          <h1 className="text-5xl md:text-7xl text-white text-center px-4 font-bold leading-15 md:leading-20">Vehicle Wraps Made Simple.</h1>
        </div>
      </header>

      {children}

      <footer className="hidden md:block bg-green-600 w-full">
        <div className="flex justify-around items-center gap-3 py-5">
          <Link href="../career">
            <Image
              src={logo}
              alt="logo image"
              width={150}
              height={150}
              priority
            />
          </Link>
          <p className="text-white text-center">
            Copyright © 2025 Quarry Tex. All rights reserved.
          </p>
        </div>
      </footer>
      <Footer className="block md:hidden" />
      <BackToTopButton />
    </>
  )
}