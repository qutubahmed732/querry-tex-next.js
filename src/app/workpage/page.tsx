import Navbar from "../components/Navbar";
import TopText from "../components/TopText";
import Image from "next/image";
import Footer from "../components/Footer";

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

// starcom images
import starcom1 from "../workpage/images/starcom-images/1.jpg";
import starcom2 from "../workpage/images/starcom-images/2.jpg";
import starcom3 from "../workpage/images/starcom-images/3.jpg";
import starcom4 from "../workpage/images/starcom-images/4.jpg";
import starcom5 from "../workpage/images/starcom-images/5.jpg";

// naturescape images
import naturescape1 from "../workpage/images/nature-escape-images/1.jpg";
import naturescape2 from "../workpage/images/nature-escape-images/2.jpg";

// Mazilli Mason Contractor
import mazilliImage1 from "../workpage/images/Mazilli-Mason-Contractor/1.jpg";
import mazilliImage2 from "../workpage/images/Mazilli-Mason-Contractor/2.jpg";
import mazilliImage3 from "../workpage/images/Mazilli-Mason-Contractor/3.jpg";
import mazilliImage4 from "../workpage/images/Mazilli-Mason-Contractor/4.jpg";
import mazilliImage5 from "../workpage/images/Mazilli-Mason-Contractor/5.jpg";
import mazilliImage6 from "../workpage/images/Mazilli-Mason-Contractor/6.jpg";
import mazilliImage7 from "../workpage/images/Mazilli-Mason-Contractor/7.jpg";
import mazilliImage8 from "../workpage/images/Mazilli-Mason-Contractor/8.jpg";
import mazilliImage9 from "../workpage/images/Mazilli-Mason-Contractor/9.jpg";
import mazilliImage10 from "../workpage/images/Mazilli-Mason-Contractor/10.jpg";

// form image
import formImage from "../landingpage-images/form-bg-image.png";

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
              priority
              placeholder="blur"
              className="w-full h-full object-cover"
              src={car1}
              alt="car 1"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              priority
              placeholder="blur"
              className="w-full h-full object-cover"
              src={car2}
              alt="car 2"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car3}
              alt="car 3"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car4}
              alt="car 4"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car5}
              alt="car 5"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car6}
              alt="car 6"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car7}
              alt="car 7"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car8}
              alt="car 8"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car9}
              alt="car 9"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car10}
              alt="car 10"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car11}
              alt="car 11"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car12}
              alt="car 12"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              priority
              placeholder="blur"
              className="w-full h-full object-cover"
              src={car13}
              alt="car 13"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car14}
              alt="car 14"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car15}
              alt="car 15"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car16}
              alt="car 16"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car17}
              alt="car 17"
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              placeholder="blur"
              priority
              className="w-full h-full object-cover"
              src={car18}
              alt="car 18"
            />
          </div>
          <div className="rounded-2xl overflow-hidden col-span-2">
            <Image
              placeholder="blur"
              priority
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
              placeholder="blur"
                priority
                className="w-full h-full object-cover"
                src={palazzoCar1}
                alt=""
              />
            </div>
            <div className="rounded-2xl overflow-hidden col-span-2 md:col-span-2">
              <Image
              placeholder="blur"
                priority
                className="w-full h-full object-cover"
                src={palazzoCar2}
                alt=""
              />
            </div>
            <div className="rounded-2xl overflow-hidden col-span-4 md:col-span-2">
              <Image
              placeholder="blur"
                priority
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
              placeholder="blur"
                priority
                className="w-full h-full object-cover"
                src={dawson1}
                alt=""
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                priority
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
              placeholder="blur"
                className="w-full h-full object-cover"
                src={safeway1}
                alt="dawson car 1"
                priority
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={safeway2}
                alt="dawson car 1"
                priority
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={safeway3}
                alt="dawson car 1"
                priority
              />
            </div>
            <div className="col-span-3 rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={safeway4}
                alt="dawson car 1"
                priority
              />
            </div>
            <div className="col-span-3 rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={safeway5}
                alt="dawson car 1"
                priority
              />
            </div>
          </div>
        </section>

        {/* Safeway Contracting */}
        <section className="flex flex-col gap-6 mt-10">
          <h1 className="text-left md:text-center text-3xl md:text-4xl font-bold pl-3 md:pl-0">Star Com Fiber</h1>
          <div className="grid grid-cols-6 auto-rows-[200px] md:auto-rows-[350px] gap-[6px] md:gap-4 px-2 md:px-10">
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={starcom1}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={starcom2}
                alt="starcom car 2"
                priority
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={starcom3}
                alt="starcom car 3"
                priority
              />
            </div>
            <div className="col-span-3 rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={starcom4}
                alt="starcom car 4"
                priority
              />
            </div>
            <div className="col-span-3 rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={starcom5}
                alt="starcom car 5"
                priority
              />
            </div>
          </div>
        </section>

        {/* Naturescape lighting and audio */}
        <section className="flex flex-col gap-5 mt-10">
          <h1 className="text-left md:text-center text-3xl md:text-4xl font-bold pl-3 md:pl-0">NatureScape Lighting & Audio</h1>
          <div className="grid grid-cols-2 auto-rows-[250px] md:auto-rows-[350px] gap-[6px] md:gap-4 px-2 md:px-10">
            <div className="rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={naturescape1}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={naturescape2}
                alt="starcom car 1"
                priority
              />
            </div>
          </div>
        </section>

        {/* Mazilli Mason Contractors */}
        <section className="flex flex-col gap-5 mt-10">
          <h1 className="text-left md:text-center text-3xl md:text-4xl font-bold pl-3 md:pl-0">Mazzilli Mason Contractors</h1>
          <div className="px-2 md:px-10 grid grid-cols-12 grid-rows-[repeat(3,_250px)] md:grid-rows-[repeat(3,_300px)] gap-1 md:gap-5">
            <div className="overflow-hidden rounded-2xl col-span-4">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage1}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-4">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage2}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-4">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage3}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-3">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage4}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-3">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage5}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-3">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage6}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-3">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage7}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-4">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage8}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-4">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage9}
                alt="starcom car 1"
                priority
              />
            </div>
            <div className="overflow-hidden rounded-2xl col-span-4">
              <Image
              placeholder="blur"
                className="w-full h-full object-cover"
                src={mazilliImage10}
                alt="starcom car 1"
                priority
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 my-10 mx-5">

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
      </main >

      <Footer />
    </>
  )
}