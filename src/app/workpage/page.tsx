import Navbar from "../components/Navbar";
import TopText from "../components/TopText";
import Image from "next/image";

// images
import heroImage from "./images/hero-section-image.png";

// cars images
import car1 from "../workpage/images/grid-section-images/1.jpg";
import car2 from "../workpage/images/grid-section-images/2.jpg";
import car3 from "../workpage/images/grid-section-images/3.png";
import car4 from "../workpage/images/grid-section-images/4.png";
import car5 from "../workpage/images/grid-section-images/5.jpg";
import car6 from "../workpage/images/grid-section-images/6.png";
import car7 from "../workpage/images/grid-section-images/7.png";
import car8 from "../workpage/images/grid-section-images/8.jpg";
import car9 from "../workpage/images/grid-section-images/9.jpg";
import car10 from "../workpage/images/grid-section-images/10.jpg";
import car11 from "../workpage/images/grid-section-images/11.png";
import car12 from "../workpage/images/grid-section-images/12.jpg";
import car13 from "../workpage/images/grid-section-images/13.png";
import car14 from "../workpage/images/grid-section-images/14.jpg";
import car15 from "../workpage/images/grid-section-images/15.png";
import car16 from "../workpage/images/grid-section-images/16.jpg";
import car17 from "../workpage/images/grid-section-images/17.jpg";
import car18 from "../workpage/images/grid-section-images/18.jpg";
import car19 from "../workpage/images/grid-section-images/19.png";

// palazzo section cars
import palazzoCar1 from "../workpage/images/plazzo-section-images/1.jpg";
import palazzoCar2 from "../workpage/images/plazzo-section-images/2.jpg";
import palazzoCar3 from "../workpage/images/plazzo-section-images/3.jpg";

// dawson cars images
import dawson1 from "./images/Dawson-section-images/1.jpg";
import dawson2 from "./images/Dawson-section-images/2.jpg";

// safeway contracting
import safeway1 from "../workpage/images/safeway-contracting/1.jpg";
import safeway2 from "../workpage/images/safeway-contracting/2.jpg";
import safeway3 from "../workpage/images/safeway-contracting/3.jpg";
import safeway4 from "../workpage/images/safeway-contracting/4.jpg";
import safeway5 from "../workpage/images/safeway-contracting/5.jpg";

export default function WorkPage() {

  return (
    <>
      <TopText />
      <header className="relative w-full min-h-[35rem] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${heroImage.src})` }}>
        <Navbar />

        <section className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-col items-start md:items-center gap-10 pl-6 md:pl-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold text-left md:text-center max-w-5xl leading-tight">
            Professional Vehicle Wraps Any Business Any Vehicle
          </h1>

          <p className="text-white font-light text-left md:text-center text-balance text-xl pr-10 md:pr-0 opacity-90">
            Unleash your business’s potential with professional, high-impact wraps.
          </p>
        </section>

      </header>

      <main>
        {/* Banner Text */}
        <section className="bg-[#339933] text-white text-xl md:text-3xl py-4 text-center text-balance font-semibold">
          Modular by Design. Consistent Branding. Expedited Wraps.
        </section>

        {/* Designed Cars Section */}
        <section className="grid grid-cols-2 grid-rows-[repeat(10,200px)] md:grid-rows-[repeat(10,350px)] gap-1 md:gap-3 pt-7 px-3 md:px-7">
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car1}
              alt="car 1"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car2}
              alt="car 2"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car3}
              alt="car 3"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car4}
              alt="car 4"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car5}
              alt="car 5"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car6}
              alt="car 6"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car7}
              alt="car 7"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car8}
              alt="car 8"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car9}
              alt="car 9"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car10}
              alt="car 10"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car11}
              alt="car 11"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car12}
              alt="car 12"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car13}
              alt="car 13"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car14}
              alt="car 14"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car15}
              alt="car 15"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car16}
              alt="car 16"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car17}
              alt="car 17"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={car18}
              alt="car 18"
            />
          </div>
          <div className="rounded-2xl overflow-hidden col-span-2">
            <Image
              className="w-full h-full object-cover"
              src={car19}
              alt="car 19"
            />
          </div>


        </section>

        {/* Fleets Text */}
        <section className="bg-[#339933] text-white text-xl md:text-3xl py-4 text-center text-balance font-semibold mt-10">
          Fleets
        </section>

        {/* Palazzo pool section */}
        <section className="flex flex-col justify-center gap-5 mt-20">
          <h1 className="text-left md:text-center text-3xl md:text-4xl font-bold pl-3 md:pl-0">Palazzo Pool Finishes</h1>
          <div className="grid grid-cols-4 md:grid-cols-6 grid-rows-2 md:grid-rows-1 gap-1 md:gap-5 px-3 md:px-7">
            <div className="rounded-2xl overflow-hidden col-span-2 md:col-span-2">
              <Image
                className="w-full h-full object-cover"
                src={palazzoCar1}
                alt=""
              />
            </div>
            <div className="rounded-2xl overflow-hidden col-span-2 md:col-span-2">
              <Image
                className="w-full h-full object-cover"
                src={palazzoCar2}
                alt=""
              />
            </div>
            <div className="rounded-2xl overflow-hidden col-span-4 md:col-span-2">
              <Image
                className="w-full h-full object-cover"
                src={palazzoCar3}
                alt=""
              />
            </div>
          </div>
        </section>

        {/* Dawson mechanical Contractor */}
        <section className="flex flex-col justify-center gap-5 mt-20">
          <h1 className="text-left md:text-center text-3xl md:text-4xl font-bold pl-3 md:pl-0">Palazzo Pool Finishes</h1>
          <div className="grid grid-cols-2 grid-rows-1 gap-1 md:gap-5 px-3 md:px-7">
            <div className="rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={dawson1}
                alt=""
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={dawson2}
                alt=""
              />
            </div>

          </div>
        </section>

        {/* Safeway Contracting */}
        <section className="flex flex-col gap-6 mt-10">
          <h1 className="text-left md:text-center text-3xl md:text-4xl font-bold pl-3 md:pl-0">Safeway Contracting</h1>
          <div className="grid grid-cols-6 auto-rows-[200px] md:auto-rows-[350px] gap-[6px] md:gap-4 px-2 md:px-10">
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={safeway1}
                alt="dawson car 1"
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={safeway2}
                alt="dawson car 1"
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={safeway3}
                alt="dawson car 1"
              />
            </div>
            <div className="col-span-3 rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={safeway4}
                alt="dawson car 1"
              />
            </div>
            <div className="col-span-3 rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover"
                src={safeway5}
                alt="dawson car 1"
              />
            </div>
          </div>
        </section>
      </main >
    </>
  )
}