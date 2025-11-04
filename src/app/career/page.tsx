"use client";
import Toptext from "../components/TopText";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

// lucide-react
import { Check } from "lucide-react";

import HeroImage from "./images/bg-image.png";
import image1 from "./images/1.jpg";
import image2 from "./images/2.png";
import newsLetterImage from "../landingpage-images/news-letter-image.png";

export default function Career() {

  return (
    <>
      <Toptext />
      <header className="relative w-full min-h-[35rem] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage.src})` }}>

        <Navbar />
        <section className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-col items-start md:items-center gap-10 pl-6 md:pl-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold text-left md:text-center max-w-2xl leading-tight">
            Start Your Creative Trade Career Here
          </h1>
          <p className="text-white max-w-3xl md:text-center text-balance md:text-2xl">Hands-on training in vehicle wrap design & installation—built for recent high school and college graduates ready to jump into the trade.</p>
        </section>
      </header>

      <main className="text-black bg-white pt-10 md:pt-20">

        <div className="flex flex-col gap-10 md:gap-20">

          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:gap-25 px-5 md:px-15 change-height">

            <div className="flex flex-col justify-center gap-8 py-5">
              <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933]">Program Snapshot</h1>
              <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-xl">
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Length:</span> 4-6 weeks · Small cohorts</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Format:</span> 80% shop time · 20% guided lessons</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Tracks:</span> Design · Installation · Optional CNC sign-making</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Location:</span> Quarry Tex Wraps, Scotch Plains NJ</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Start Date:</span> January 2026 (Winter Cohort)</li>
              </ul>
              <button className="text-xl font-bold bg-green-600 text-white self-start rounded-xl py-2 px-6">Apply Now</button>
            </div>

            <div className="h-full flex-shrink-0 rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full flex-shrink-0 object-cover"
                src={image1}
                alt="Graphic Design Image"
                priority
                placeholder="blur"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:gap-25 px-5 md:px-15 gap-3 change-height">

            <div className="h-full flex-shrink-0 rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                className="w-full h-full flex-shrink-0 object-cover"
                src={image1}
                alt="Graphic Design Image"
                priority
                placeholder="blur"
              />
            </div>

            <div className="flex flex-col justify-center gap-8 order-1 md:order-2">
              <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933]">What You’ll Learn</h1>
              <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-xl">
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Design:</span> Layout, templates, branding basics, print setup</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Install:</span> Prep, handling, curves, seams, removals</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Tracks:</span> Design · Installation · Optional CNC sign-making</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Shop Skills:</span> Project Management</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> <span className="font-bold">Optional:</span> CNC sign-making + textured finishes</li>
              </ul>
              <button className="text-xl font-bold bg-green-600 text-white self-start rounded-xl py-3 px-6">Download Guide</button>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:gap-25 px-5 md:px-15 gap-3 change-height">

            <div className="flex flex-col justify-center gap-8 py-5">
              <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933]">Outcomes</h1>
              <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-xl">
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Portfolio with real wrap projects</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Shop reference + job-ready skills</li>
                <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Growth in the wrap industry and in related trades.</li>
              </ul>
            </div>

            <div className="h-full flex-shrink-0 rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full flex-shrink-0 object-cover"
                src={image2}
                alt="Graphic Design Image"
                priority
                placeholder="blur"
              />
            </div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 px-4 md:px-10 my-10">
          <div className="w-full md:w-fit flex items-start gap-2 border border-green-600 rounded-xl px-4 py-3">
            <Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" />
            <span className="text-gray-800 text-sm md:text-base font-medium">
              Proof of recent graduation
            </span>
          </div>

          <div className="w-full md:w-fit flex items-start gap-2 border border-green-600 rounded-xl px-4 py-3">
            <Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" />
            <span className="text-gray-800 text-sm md:text-base font-medium">
              Ability to lift 40 lbs / stand during shop work
            </span>
          </div>

          <div className="w-full md:w-fit flex items-start gap-2 border border-green-600 rounded-xl px-4 py-3">
            <Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" />
            <span className="text-gray-800 text-sm md:text-base font-medium">
              Willingness to learn, readiness to work, and proven reliability
            </span>
          </div>
        </div>

        {/* News letter section */}
        <section className="relative w-full flex flex-direction items-center justify-center pb-10 md:pb-0">
          <div className="absolute bottom-0 w-full h-full md:h-[85%] bg-black z-10"></div>
          <div className="absolute top-0 w-full h-0 md:h-[15%] bg-white z-10"></div>

          {/* Left Side */}
          <div className="z-10 w-full md:w-[50%] width-change-1043 px-6 md:px-12 pb-2 text-white">
            <h1 className="text-3xl md:text-6xl font-bold leading-tight">
              Apply Today
            </h1>

            <p className="text-lg font-semibold mt-4">
              Reserve your spot in the Fall 2025 (October) Cohort.
            </p>

            <p className="text-gray-400 mt-3 text-base leading-relaxed max-w-md">
              First Cohort Begins: October 2025 (Tentative Fall start)
            </p>

            <div className="flex flex-col md:flex-row md:items-center md:gap-5">
              <button className="mt-6 bg-[#339933] hover:bg-[#16A34A] text-white font-semibold px-6 py-3 rounded transition-colors duration-400">
                Explore Careers
              </button>
              <button className="mt-6 bg-tranparent hover:bg-[#16A34A] text-[#339933] hover:text-white border border-green-600 font-semibold px-6 py-3 rounded transition-colors duration-400">
                Schedule a Shop Visit
              </button>
              <button className="mt-6 bg-tranparent hover:bg-[#16A34A] text-[#339933] hover:text-white border border-green-600 font-semibold px-6 py-3 rounded transition-colors duration-400">
                Download Guide
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="z-10 display-none w-[30%] relative h-[300px] md:h-[500px]">
            <Image
              src={newsLetterImage}
              alt="Formula 1 pit crew"
              fill
              className="object-cover rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-tr-[2rem] md:rounded-tr-[3rem]"
              priority
              placeholder="blur"
            />
          </div>
        </section>

        <section className="bg-[#eee] py-20 px-5">
          <div className="mx-auto max-w-5xl flex flex-col items-center px-5 bg-white py-10 rounded-xl">

            <h1 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h1>

            <div className="flex flex-col gap-3 w-full">

              <details open className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                <summary className="list-none font-semibold md:text-xl flex items-center justify-between">
                  Who is this program for?
                  <span className="[&::-webkit-details-marker]:hidden">

                    <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </summary>
                <p className="text-black/70 pt-5">Recent high school or college grads (ages 18–25).</p>
              </details>

              <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                <summary className="list-none font-semibold md:text-xl flex items-center justify-between">
                  Do I need experience?
                  <span className="[&::-webkit-details-marker]:hidden">

                    <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </summary>
              </details>

              <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                <summary className="list-none font-semibold md:text-xl flex items-center justify-between">
                  Can I apply if I graduated earlier?
                  <span className="[&::-webkit-details-marker]:hidden">

                    <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </summary>
              </details>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}