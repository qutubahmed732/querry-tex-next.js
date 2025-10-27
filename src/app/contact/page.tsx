// components
import Toptext from "../components/TopText";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// bg-image
import heroImage from "./images/bg-image.png";

import { SiPinterest, SiFacebook, SiInstagram } from "react-icons/si";
import { UploadCloud   } from "lucide-react";




export default function ContactUs() {

  return (
    <>
      <Toptext />
      <header className="relative w-full min-h-[25rem] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${heroImage.src})` }}>

        <Navbar />
        <section className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-col items-start md:items-center gap-10 pl-6 md:pl-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold text-left md:text-center max-w-5xl leading-tight">
            Contact Us
          </h1>
        </section>

      </header>

      <main className="bg-[#eee] py-10 px-5 md:px-15">
        <div className="rounded-xl bg-white py-3 px-2 flex contact-flex-direction items-stretch justify-between">

          {/* left side */}
          <div className="width-40-on-920px flex flex-col justify-between">

            <div className="flex flex-col gap-4">

              <div className="pl-10 py-5 text-white bg-green-600 font-bold text-2xl rounded-t-2xl">
                <p>Quarry Tex <br /> Your hub for vehicle wraps <br /> in NJ.</p>
              </div>

              <div className="pl-10 font-semibold flex flex-col gap-1">
                <p>info@quarrytex.com/wraps</p>
                <p>1998 US HWY 22 SCOTCH PLAINS NJ 07076</p>
                <p>908-322-8488</p>
              </div>

            </div>

            <div className="flex flex-col gap-3 pl-10 pb-8">
              <p>Follow us for wrap ideas</p>

              <span className="flex items-center gap-4">
                <SiFacebook className="fill-blue-800 bg-white size-5 rounded-sm cursor-pointer" />
                <SiPinterest className="text-[#e60023] size-5 rounded-sm cursor-pointer" />
                <SiInstagram className="fill-white bg-black rounded-full size-5 cursor-pointer" />
              </span>

            </div>

          </div>

          {/* right side */}
          <div className="width-60-on-920px py-10">
            <div className="flex flex-col gap-10">

              <div className="flex flex-col md:flex-row gap-10 *:w-full"> {/* first label div */}

                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-[#475467]">
                    First Name
                  </label>
                  <input type="text" className="outline-none border border-t-0 border-l-0 border-r-0 text-[#475467]" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="secondtName" className="text-[#475467]">
                    Last Name
                  </label>
                  <input type="text" placeholder="Doe" className="outline-none border border-t-0 border-l-0 border-r-0" />
                </div>

              </div>

              <div className="flex flex-col md:flex-row gap-10 *:w-full"> {/* second label div */}

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[#475467]">
                    Email
                  </label>
                  <input type="email" className="text-[#475467] outline-none border border-t-0 border-l-0 border-r-0" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="secondtName" className="text-[#475467]">
                    Phone Number
                  </label>
                  <input type="phone" value={"+1 012 3456 789"} readOnly className="outline-none border border-t-0 border-l-0 border-r-0" />
                </div>

              </div>

              <div className="flex flex-col items-start gap-3"> {/* Text Area */}
                <label htmlFor="message" className="text-[#475467]">Message</label>
                <textarea name="textarea" placeholder="Write your Message.." className="w-full h-40 p-3 border border-t-0 border-l-0 border-r-0 bg-[#eee] text-[#475467]" id="textarea"></textarea>
              </div>

              <div> {/* upload file section */}
                <h2>Upload Branding Material (Optional)</h2>

                <div className="bg-[#e6f5e6] flex items-center justify-center gap-3 py-10 border-4 border-dashed border-green-600 mt-3 rounded-2xl">
                  <UploadCloud className="bg-white p-2 rounded-full" size={50}  />
                  <p>Click to upload or drag and drop <br />
                    csv (max size 30MB)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}