import Navbar from "./components/Navbar";
import BackToTopButton from "./components/BacktoTop/BacktotopBtn";

import HeroImage from "./landingpage-images/Hero-image.png";
import Image from "next/image";
import info from "./landingpage-images/info.png";
import options from "./landingpage-images/options.png";
import schedule from "./landingpage-images/schedule.png";
import wrap from "./landingpage-images/wrap.png";
import guarantee from "./landingpage-images/guarantee.png";
import sadan from "./landingpage-images/sadan.png";
import commercial from "./landingpage-images/commercal-wraps.png";
import compact from "./landingpage-images/compact-van.png";

import image1 from "./landingpage-images/carousel-2-image-1.png";
import image2 from "./landingpage-images/carousel-2-image-2.png";
import image3 from "./landingpage-images/carousel-2-image-3.png";
import image4 from "./landingpage-images/carousel-2-image-4.png";
import image5 from "./landingpage-images/carousel-2-image-5.png";

import wrapCarImage from "./landingpage-images/wrap-section-image.png";
import confetti from "./landingpage-images/confetti.png";

import formImage from "./landingpage-images/form-bg-image.png";
import newsLetterImage from "./landingpage-images/news-letter-image.png";
import location from "./landingpage-images/location.png";
import gmail from "./landingpage-images/gmail.png";

import { MoveRight, Phone } from "lucide-react";

export default function Home() {
  return (
    <>

      {/* Header Section + Brand Logo's */}
      <div className="bg-[#222222] text-center text-balance font-[400] text-white py-2 cursor-pointer text-sm md:text-xl">Visit our other businesses Quarry Tex Signs and Quarry Tex Design</div>
      <header className="relative w-full min-h-svh">
        <Navbar />
        <Image
          className="w-full h-[90%] object-cover absolute -z-10"
          src={HeroImage}
          alt="Hero image"
          priority
        />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-col items-start gap-10 pl-6 md:pl-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold uppercase">
            vehicle
            <br />
            wraps
            <br />
            simplified
          </h1>

          <p className="text-white text-balance text-2xl">Professional Vehicle Wraps <br /> Any Business. Any Vehicle.</p>

          <button className="py-3 px-7 text-white bg-[#339933] cursor-pointer">Get a Free Quote</button>
        </div>

        <div className="w-full md:w-[90%] py-3 px-0 md:px-3 absolute bottom-7 md:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white/60 rounded-none md:rounded-2xl backdrop-blur shadow-xl">
          <div className="w-full max-w-6xl flex items-center justify-center mx-auto">

            <div className="w-full md:w-3/22">
              <Image
                className="w-full object-cover"
                src={info}
                alt="Information image"
              />
            </div>

            <div className="w-full md:w-3/22">
              <Image
                className="w-full object-cover"
                src={options}
                alt="options image"
              />
            </div>

            <div className="w-full md:w-3/22">
              <Image
                className="w-full object-cover"
                src={schedule}
                alt="schedule image"
              />
            </div>

            <div className="w-full md:w-3/22">
              <Image
                className="w-full object-cover"
                src={wrap}
                alt="wrap image"
              />
            </div>

            <div className="w-full md:w-3/22">
              <Image
                className="w-full object-cover"
                src={guarantee}
                alt="guarantee image"
              />
            </div>

          </div>
        </div>
      </header>

      <main>



        {/* Cars Section */}
        <section className="mt-10 md:mt-20 mb-10">
          <div className="flex flex-col items-center gap-5 px-10 md:px-20">
            <h3 className="text-xl text-[#339933] uppercase font-bold text-center">Fast Smart & Cost Effective</h3>
            <h1 className="text-3xl font-bold text-center">Any Business and Any Vehicle</h1>
            <p className="w-full text-xl text-balance text-[#222222]/80 text-center mx-auto">Our Work is streamlined to make commercial wrapping faster, smarter and more cost-effective.</p>

            <a href="#" className="flex items-center gap-6 font-semibold">View More <MoveRight /></a>
          </div>

          <div className="w-full mx-auto overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory flex p-4">

            <div className="snap-center shrink-0 w-[90%] sm:w-[60%] md:w-[45%] lg:w-[33%] flex flex-col items-center justify-center text-white font-bold text-2xl p-5">
              <Image
                className="w-full h-full object-cover rounded-2xl"
                src={sadan}
                alt="sadan van"
              />
            </div>


            <div className="snap-center shrink-0 w-[90%] sm:w-[60%] md:w-[45%] lg:w-[33%] rounded-2xl overflow-hidden flex flex-col items-center justify-center text-white font-bold text-2xl border-8 border-green-600">
              <Image
                className="w-full h-full object-cover"
                src={commercial}
                alt="commercial van"
              />
            </div>


            <div className="snap-center shrink-0 w-[90%] sm:w-[60%] md:w-[45%] lg:w-[33%] flex flex-col items-center justify-center text-white font-bold text-2xl p-5">
              <Image
                className="w-full h-full object-cover rounded-2xl"
                src={compact}
                alt="compact van"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}

        <section className="mt-20">
          <div className="px-5 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between">

            <div className="flex flex-col items-start gap-3">
              <h1 className="text-3xl md:text-5xl font-bold">Featured Wraps & Projects</h1>
              <p>Quarry Tex makes sure your wrap isn’t just graphics, but a moving billboard that works 24/7.</p>
            </div>

            <a href="#" className="flex items-center gap-5 font-semibold">View More <MoveRight /></a>
          </div>

          <div className="my-10 w-full h-[30vh] mx-auto overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory flex space-x-8">

            <div className=" snap-center shrink-0 w-[90%] sm:w-[60%] md:w-[45%] lg:w-[33%] flex flex-col items-center justify-center text-white font-bold text-2xl">
              <Image
                className="w-full h-full object-cover"
                src={image1}
                alt="sadan van"
              />
            </div>


            <div className="snap-center shrink-0 w-[90%] sm:w-[60%] md:w-[45%] lg:w-[33%] overflow-hidden flex flex-col items-center justify-center text-white font-bold text-2xl">
              <Image
                className="w-full h-full object-cover"
                src={image2}
                alt="commercial van"
              />
            </div>


            <div className="snap-center shrink-0 w-[90%] sm:w-[60%] md:w-[45%] lg:w-[33%] flex flex-col items-center justify-center text-white font-bold text-2xl">
              <Image
                className="w-full h-full object-cover"
                src={image3}
                alt="compact van"
              />
            </div>

            <div className="snap-center shrink-0 w-[90%] sm:w-[60%] md:w-[45%] lg:w-[33%] flex flex-col items-center justify-center text-white font-bold text-2xl">
              <Image
                className="w-full h-full object-cover"
                src={image4}
                alt="compact van"
              />
            </div>

            <div className="snap-center shrink-0 w-[90%] sm:w-[60%] md:w-[45%] lg:w-[33%] flex flex-col items-center justify-center text-white font-bold text-2xl">
              <Image
                className="w-full h-full object-cover"
                src={image5}
                alt="compact van"
              />
            </div>
          </div>
        </section>

        {/* Wrap section */}
        <section className="py-15 md:py-5 px-5 md:px-10 flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-0">
          <div className="w-full md:w-[40%] text-balance flex flex-col items-start gap-5">
            <h1 className="text-left text-4xl md:text-5xl font-semibold">
              NJ&apos;s Vehicle Wrap Hub
            </h1>
            <p className="text-xl">
              At Quarry Tex, we specialize in wraps for trades, Fleets, and local businesses across New Jersey. From simple lettering to full coverage designs, we deliver rock-solid branding that works as hard as you do. Whether you’re a start-up, contractor, or established company, our team makes the process simple, professional, and built to last.
            </p>
            <button className="py-2 px-7 text-white bg-[#339933] cursor-pointer">Price your Wrap</button>
          </div>
          <div className="w-full md:w-[60%]">
            <div className="w-full relative">
              <Image
                className="w-full h-full object-cover"
                src={wrapCarImage}
                alt="Wrap Car image"
              />
              <Image
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/2 w-3/4 h-1/2 object-cover"
                src={confetti}
                alt="confetti image"
              />
            </div>
          </div>
        </section>

        {/* Call section */}
        <section className="font-semibold text-3xl text-balance md:text-5xl text-white bg-[#339933] text-center py-6 my-6">
          Request a Quote Call Us Direct: (908) 322-8488
        </section>

        {/* CTA - Section */}
        <section className="py-10 my-10 mx-5">
          <h1 className="text-4xl text-center font-bold mb-10">Ready for your Wrap Estimate?</h1>

          <div className="w-[100%] py-10 md:py-20 px-5 md:px-20 mx-auto flex flex-direction gap-5 md:gap-0 text-white rounded-2xl bg-[#222222]/80 bg-blend-multiply" style={{ backgroundImage: `url(${formImage.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="mb-5 change-width">
              <h1 className="text-4xl md:text-6xl font-semibold mb-2">Find the Right Wrap Solution.</h1>
              <p className="text-lg md:text-2xl text-balance">Answer a few questions about your car and get your estimated budget!</p>
            </div>
            <div className="change-width">
              <div className="w-full h-full flex flex-col gap-6 items-start">
                <form className="w-full border border-[#6d6f6c] rounded-2xl p-5 flex flex-col md:flex-row gap-4 backdrop-blur-xs">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="make" className="font-semibold">Make</label>
                    <input type="text" className="placeholder:text-[#a2a4a6] border border-b-white border-t-0 border-r-0 border-l-0 py-2 w-full outline-none" placeholder="Select Make" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="model" className="font-semibold">Model</label>
                    <input type="text" className="placeholder:text-[#a2a4a6] border border-b-white border-t-0 border-r-0 border-l-0 py-2 w-full outline-none" placeholder="Select Make" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="year" className="font-semibold">Year</label>
                    <input type="text" className="border border-b-white border-t-0 border-r-0 border-l-0 py-2 w-full outline-none" placeholder="Select Make" value="2025" readOnly />
                  </div>
                </form>
                <button className="text-xl text-white bg-[#339933] py-2 px-15 md:px-20">Next</button>
              </div>
            </div>
          </div>
        </section>

        {/* News letter section */}
        <section className="relative w-full flex flex-direction items-center justify-center pb-10 md:pb-0">
          <div className="absolute bottom-0 w-full h-full md:h-[85%] bg-[#222222] -z-10"></div>
          <div className="absolute top-0 w-full h-0 md:h-[15%] bg-white -z-10"></div>

          {/* Left Side */}
          <div className="w-full md:w-[50%] width-change-1043 px-6 md:px-12 pb-2 text-white">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              Start Your Creative Trade <br /> Career Here
            </h1>

            <p className="text-lg font-semibold mt-4">
              First Cohort Begins: <span className="text-gray-300">January 2026 start date</span>
            </p>

            <p className="text-gray-400 mt-3 text-base leading-relaxed max-w-md">
              Hands-on training in vehicle wrap design & installation—built for recent high
              school and college graduates ready to jump into the trade.
            </p>

            <button className="mt-6 bg-[#339933] hover:bg-[#16A34A] text-white font-semibold px-6 py-3 rounded">
              Explore Careers
            </button>
          </div>

          {/* Right Side */}
          <div className="display-none w-[30%] relative h-[300px] md:h-[500px]">
            <Image
              src={newsLetterImage}
              alt="Formula 1 pit crew"
              fill
              className="object-cover rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-tr-[2rem] md:rounded-tr-[3rem]"
              priority
            />
          </div>
        </section>

      </main>

      <footer className="bg-[#339933] text-white px-5 md:px-20 pt-15 pb-10">
        <div className="flex flex-direction justify-between gap-10">

          {/* Left */}
          <div className="width-change flex flex-col gap-7">
            <h1 className="text-4xl font-bold">Quarry Tex Vehicle Wraps</h1>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-3"><Phone fill="white" /><span>908-322-8488</span></li>
              <li className="flex items-center gap-3"><Image src={location} alt="location pin logo" /><span>1998 US HWY 22 SCOTCH PLAINS NJ 07076</span></li>
              <li className="flex items-center gap-3"><Image src={gmail} className="h-5" alt="gmail logo" /><span>info@quarrytex.com</span></li>
            </ul>
          </div>

          {/* Right */}
          <div className="width-change flex justify-start md:justify-around gap-2 text-xl sm:text-3xl font-semibold">
            <ul className="w-1/2 flex flex-col gap-4">
              <li>Servies</li>
              <li>Our Work</li>
              <li>Process</li>
              <li>Careers</li>
              <li>FAQs</li>
            </ul>
            <ul className="w-1/2 flex flex-col gap-4">
              <li>Get a Quote</li>
              <li>Contact Us</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <p className="text-xl mt-10">Copyright © {new Date().getFullYear()} Quarry Tex Inc. All rights reserved.</p>

        <BackToTopButton />
      </footer>
    </>
  );
}
