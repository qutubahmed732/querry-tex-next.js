// components
import Navbar from "../components/Navbar"
import Toptext from "../components/TopText"
import Footer from "../components/Footer";

// image hook
import Image from "next/image";

// lucide-react
import { Check } from "lucide-react";

// bg-image
import heroImage from "../ServicesPage-images/hero-image.png";
import bgImage from "../ServicesPage-images/bg-image.png";

// vehicle images
import sedan from "../ServicesPage-images/Sedan.png";
import boxTruck from "../ServicesPage-images/Box-Truck.png";
import utilityTrailer from "../ServicesPage-images/Utility-Trailer.png";
import trailer from "../ServicesPage-images/Trailer.png";
import crane from "../ServicesPage-images/Crane.png";
import topVan from "../ServicesPage-images/Hi-Top-Van.png";
import pickupTruck from "../ServicesPage-images/Pickup-Truck.png";
import utilityPickup from "../ServicesPage-images/Utility-Pickup.png";
import utilityTruck from "../ServicesPage-images/Utility-Truck.png";
import suv from "../ServicesPage-images/SUV.png";
import compactVan from "../ServicesPage-images/Compact-Van.png";
import cargoVan from "../ServicesPage-images/Cargo-Van.png";

// All services section images
import graphicDesignImage from "../ServicesPage-images/graphic-design-image.png";
import commercialImage from "../ServicesPage-images/commercial-fleet-vehicle.png";
import cocoTruck from "../ServicesPage-images/coco-truck.png";
import partialVehicle from "../ServicesPage-images/partial-vehicle.png";
import lettringVehicle from "../ServicesPage-images/lettering-vehicle.png";
import spotGraphics from "../ServicesPage-images/spot-graphics.png";
import accidentRepair from "../ServicesPage-images/accident-repair.png";
import seasonalVehicle from "../ServicesPage-images/seasonal-vehicle.png";

// additional branding service image
import additionalBrandImage from "../ServicesPage-images/serviec-brandingsection-image.png";

import wrapCarImage from "../landingpage-images/wrap-section-image.png";
import confetti from "../landingpage-images/confetti.png";

export default function Services() {

  return (
    <>
      <Toptext />
      <header className="relative w-full min-h-svh bg-gradient-to-b from-black/80 to-black/30">
        <Navbar />
        <Image
          className="w-full h-full object-cover absolute -z-10"
          src={heroImage}
          alt="Hero image"
          priority
        />

        <section className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-col items-start md:items-center gap-10 pl-6 md:pl-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold text-left md:text-center max-w-4xl leading-tight">
            Services that take your brand to the next level
          </h1>

          <p className="text-white font-light text-left md:text-center text-balance text-xl pr-10 md:pr-0">In today’s market, average design won’t cut it. A professional vehicle wrap turns your Fleets into moving billboards that demand attention, build trust, and win higher-margin sales. At Quarry Tex, we make sure your wrap works as hard as you do.</p>
        </section>
      </header>

      <main>
        {/*Vehicle's Section  */}
        <section className="relative bg-gradient-to-b from-white/80 to-white/80 bg-blend-multiply flex flex-col gap-15 items-stretch">
          <div className="absolute w-full h-full -z-10" style={{ backgroundImage: `url(${bgImage.src})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
          <div className="px-5 md:px-0 text-center flex flex-col gap-4 pt-20">
            <p className="text-[#339933] text-md md:text-xl font-bold uppercase">We wrap any industry, startup, or business — and every type of vehicle</p>
            <h1 className="text-4xl md:text-6xl font-bold">Popular Vehicles for Lettering & Wraps</h1>
          </div>

          <div className="no-scrollbar w-full max-w-7xl mx-auto flex md:grid grid-cols-4 grid-rows-3 justify-items-center gap-12 overflow-scroll md:overflow-auto py-5 md:py-0 px-10 md:px-5">
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={sedan}
              alt="sedan vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={boxTruck}
              alt="boxTruck vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={utilityTrailer}
              alt="utilityTrailer vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={trailer}
              alt="trailer vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={crane}
              alt="crane vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={topVan}
              alt="topVan vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={pickupTruck}
              alt="pickupTruck vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={utilityPickup}
              alt="utilityPickup vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={utilityTruck}
              alt="utilityTruck vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={suv}
              alt="suv vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={compactVan}
              alt="compactVan vehicles"
            />
            <Image
              className="w-1/3 flex-shrink-0 md:w-2/3"
              src={cargoVan}
              alt="cargoVan vehicles"
            />
          </div>
          <button className="block mx-auto text-white rounded-xl bg-[#339933] cursor-pointer font-semibold text-xl px-10 py-3 mb-20">
            Get a Free Quote
          </button>
        </section>

        {/* All Services Section */}
        <section className="text-black bg-white py-0 md:py-15">
          <div className="py-20 max-w-6xl flex flex-col items-start gap-5 px-5 md:px-10">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="text-md md:text-xl text-[#222222]/80">At Quarry Tex, we handle every step of the Work — from design to installation — to make sure your vehicle wrap works as hard as you do. Whether you’re branding a single work van or managing a fleet, our services are built around your business goals, budget, and timeline.</p>
          </div>


          <div className="flex flex-col gap-10 md:gap-20">

            <div className="flex flex-direction-reverse items-center md:items-stretch px-5">

              <div className="change-width h-full flex-shrink-0 border border-gray-300 rounded-2xl">
                <Image
                  className="w-full h-full flex-shrink-0 object-cover"
                  src={graphicDesignImage}
                  alt="Graphic Design Image"
                />
              </div>

              <div className="change-width flex flex-col justify-center gap-8 p-5">
                <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933]">Graphic Design</h1>
                <p className="text-[#222222]/60 w-full">
                  Keep your entire Fleets consistent, professional, and built to last. At Quarry Tex, we specialize in branding for businesses with multiple vehicles — from small service Fleetss to large-scale contractors and delivery companies.
                </p>
                <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-md">
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Custom graphics tailored to your business</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Logo placement & color matching</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Modern, bold, and legible layouts</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Proofs provided for approval before production</li>
                </ul>
              </div>


            </div>


            <div className="flex flex-direction items-center md:items-stretch px-5">

              <div className="change-width flex flex-col justify-center gap-8 p-5">

                <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933] leading-tight">Commercial Fleets Vehicles</h1>

                <p className="text-[#222222]/60 w-full">
                  Keep your entire Fleets consistent, professional, and built to last. At Quarry Tex, we specialize in branding for businesses with multiple vehicles — from small service Fleetss to large-scale contractors and delivery companies.
                </p>

                <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-md">
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Consistent Branding Across All Vehicles – Match colors, logos, and layouts for a unified look.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Fleets Discounts – Cost-effective pricing for multi-vehicle projects.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Quick Turnaround – Coordinated scheduling to minimize downtime.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Durability Guaranteed – Premium vinyls and expert installation built for daily use.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Full, Partial, or Lettering – Flexible solutions based on your budget and needs.</li>
                </ul>

              </div>

              <div className="change-width h-full flex-shrink-0">
                <Image
                  className="block rounded-2xl w-full md:w-[80%] h-full md:h-[80%] m-auto flex-shrink-0 object-cover"
                  src={commercialImage}
                  alt="Graphic Design Image"
                />
              </div>

            </div>


            <div className="flex flex-direction-reverse items-center md:items-stretch px-5">

              <div className="change-width h-full flex-shrink-0">
                <Image
                  className="block mx-auto w-full h-full md:w-[80%] m:h-[80%] flex-shrink-0 object-cover rounded-2xl"
                  src={cocoTruck}
                  alt="Graphic Design Image"
                />
              </div>

              <div className="change-width flex flex-col justify-center gap-8 p-5">
                <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933] leading-tight">Full / Large Vehicle Wraps</h1>
                <p className="text-[#222222]/60 w-full">
                  Keep your entire Fleets consistent, professional, and built to last. At Quarry Tex, we specialize in branding for businesses with multiple vehicles — from small service Fleetss to large-scale contractors and delivery companies.
                </p>
                <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-md">
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Maximum vehicle coverage</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> High visibility and brand impact</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Premium vinyl films and Printing</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Perfect for Fleetss and high-traffic advertising.c</li>
                </ul>
              </div>


            </div>

            <div className="flex flex-direction items-center md:items-stretch px-5">

              <div className="change-width flex flex-col justify-center gap-8 p-5">

                <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933] leading-tight">Partial Vehicle Wraps</h1>

                <p className="text-[#222222]/60 w-full">
                  Keep your entire Fleets consistent, professional, and built to last. At Quarry Tex, we specialize in branding for businesses with multiple vehicles — from small service Fleetss to large-scale contractors and delivery companies.
                </p>

                <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-md">
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> High-impact designs with strategic coverage.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Panels targeted for maximum visibility (hood, doors, sides, rear)</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Strong balance between exposure and budget</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Durability Guaranteed – Premium vinyls and expert installation built for daily use.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Perfect for contractors and service businesses</li>
                </ul>

              </div>

              <div className="change-width h-full flex-shrink-0">
                <Image
                  className="block rounded-2xl w-full md:w-[80%] h-full md:h-[80%] m-auto flex-shrink-0 object-cover"
                  src={partialVehicle}
                  alt="Graphic Design Image"
                />
              </div>

            </div>

            <div className="flex flex-direction-reverse items-center md:items-stretch px-5">

              <div className="change-width h-full flex-shrink-0">
                <Image
                  className="block mx-auto w-full h-full md:w-[80%] m:h-[80%] flex-shrink-0 object-cover rounded-2xl"
                  src={lettringVehicle}
                  alt="Graphic Design Image"
                />
              </div>

              <div className="change-width flex flex-col justify-center gap-8 p-5">
                <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933] leading-tight">Vehicle Lettering</h1>
                <p className="text-[#222222]/60 w-full">
                  Keep your entire Fleets consistent, professional, and built to last. At Quarry Tex, we specialize in branding for businesses with multiple vehicles — from small service Fleetss to large-scale contractors and delivery companies.
                </p>
                <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-md">
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Professional, precise, and highly effective.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Installed with attention to detail and durability</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Can be updated or expanded as your business grows</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> A smart solution for contractors, service vehicles, and small Fleetss.</li>
                </ul>
              </div>


            </div>

            <div className="flex flex-direction items-center md:items-stretch px-5">

              <div className="change-width flex flex-col justify-center gap-8 p-5">

                <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933] leading-tight">Spot Graphics</h1>

                <p className="text-[#222222]/60 w-full">
                  Keep your entire Fleets consistent, professional, and built to last. At Quarry Tex, we specialize in branding for businesses with multiple vehicles — from small service Fleetss to large-scale contractors and delivery companies.
                </p>

                <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-md">
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Professional, precise, and highly effective.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Installed with attention to detail and durability</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Can be updated or expanded as your business grows</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> A smart solution for contractors, service vehicles, and small Fleetss.</li>
                </ul>

              </div>

              <div className="change-width h-full flex-shrink-0">
                <Image
                  className="block rounded-2xl w-full md:w-[80%] h-full md:h-[80%] m-auto flex-shrink-0 object-cover"
                  src={spotGraphics}
                  alt="Graphic Design Image"
                />
              </div>

            </div>

            <div className="flex flex-direction-reverse items-center md:items-stretch px-5">

              <div className="change-width h-full flex-shrink-0">
                <Image
                  className="block mx-auto w-full h-full md:w-[80%] m:h-[80%] flex-shrink-0 object-cover rounded-2xl"
                  src={accidentRepair}
                  alt="Graphic Design Image"
                />
              </div>

              <div className="change-width flex flex-col justify-center gap-8 p-5">
                <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933] leading-tight">Accident Wrap Repair & Insurance Quotes</h1>
                <p className="text-[#222222]/60 w-full">
                  When accidents happen, your vehicle’s branding doesn’t have to stay damaged. At Quarry Tex, we provide fast, professional wrap repair to restore your vehicle to its original look.
                </p>
                <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-md">
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Accident Damage Repair – Replace or rewrap damaged panels without redoing the entire vehicle.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Insurance Quotes – Detailed, professional estimates provided directly for insurance claims.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Seamless Matching – We ensure colors, logos, and graphics align perfectly with your existing wrap.</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Quick Turnaround – Get your vehicle back on the road and looking sharp with minimal downtime.</li>
                </ul>
              </div>


            </div>

            <div className="flex flex-direction items-center md:items-stretch px-5">

              <div className="change-width flex flex-col justify-center gap-8 p-5">

                <h1 className="font-semibold underline text-4xl underline-offset-10 decoration-4 decoration-[#339933] leading-tight">Seasonal & Promotional Graphics</h1>

                <p className="text-[#222222]/60 w-full">
                  Keep your entire Fleets consistent, professional, and built to last. At Quarry Tex, we specialize in branding for businesses with multiple vehicles — from small service Fleetss to large-scale contractors and delivery companies.
                </p>

                <ul className="flex flex-col gap-3 text-[#222222]/60 text-sm md:text-md">
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Holiday-Themed Graphics & Messages</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Patriotic & Event Graphics</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> QR Code Integration for Easy Scanning</li>
                  <li className="flex items-center gap-2"><Check className="flex-shrink-0 bg-[#339933] rounded-full text-white p-1" /> Social Media Callout Prints & Tags.</li>
                </ul>

              </div>

              <div className="change-width h-full flex-shrink-0">
                <Image
                  className="block rounded-2xl w-full md:w-[80%] h-full md:h-[80%] m-auto flex-shrink-0 object-cover"
                  src={seasonalVehicle}
                  alt="Graphic Design Image"
                />
              </div>

            </div>

          </div>


        </section>

        {/* Branding Service Section */}
        <section className="w-full text-white bg-[#339933] p-8 md:p-20 mt-10">
          <div className=" flex flex-direction items-center justify-between gap-20">
            <div className="change-width flex flex-col gap-10">
              <h1 className="text-4xl font-bold">Additional Branding Services.</h1>
              <p>At Quarry Tex, we offer more than vehicle wraps. Our additional branding services help your business stay visible everywhere—on job sites, at events, and in the hands of your customers. From signs and cards to labels and tradeshow displays, we provide professional solutions that extend your brand beyond the vehicle.</p>

              <div className="flex flex-direction items-start gap-5">

                <ul className="w-1/2 flex flex-col gap-4">
                  <li className="flex gap-2"><Check className="text-[#339933] bg-white rounded-full flex-shrink-0 p-1" />Magnet Signs</li>
                  <li className="flex gap-2"><Check className="text-[#339933] bg-white rounded-full flex-shrink-0 p-1" />Lawn Signs</li>
                  <li className="flex gap-2"><Check className="text-[#339933] bg-white rounded-full flex-shrink-0 p-1" />Jobsite Metal Signs</li>
                  <li className="flex gap-2"><Check className="text-[#339933] bg-white rounded-full flex-shrink-0 p-1" />Business Cards</li>
                </ul>

                <ul className="w-1/2 flex flex-col gap-4">
                  <li className="flex gap-2"><Check className="text-[#339933] bg-white rounded-full flex-shrink-0 p-1" />Forms & Invoice Printing</li>
                  <li className="flex gap-2"><Check className="text-[#339933] bg-white rounded-full flex-shrink-0 p-1" />Stickers & Labels</li>
                  <li className="flex gap-2"><Check className="text-[#339933] bg-white rounded-full flex-shrink-0 p-1" />Tradeshow Signage</li>
                </ul>

              </div>
            </div>

            <div className="change-width rounded-2xl overflow-hidden align-items-stretch">
              <Image
                className="w-full h-3/4 object-cover"
                src={additionalBrandImage}
                alt="additional branding service"
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
            <p className="text-xl text-[#222222]/80">
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
      </main>

      <Footer />
    </>
  )
}