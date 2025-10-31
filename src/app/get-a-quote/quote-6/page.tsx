import Image from "next/image"

import man from "../images/man.png"
export default function Qoute_6() {

  return (
    <>
      <main className="bg-[#eee] py-5 md:py-15 px-3">
        <div className="p-5 md:p-10 max-w-4xl mx-auto bg-white rounded-3xl flex flex-col md:flex-row md:justify-between items-center md:items-stretch gap-5">

          <div className="flex flex-col items-stretch justify-between gap-5">
            <div>
              <h1 className="text-xl md:text-3xl text-black font-bold text-pretty text-center mx-auto">
                John, Here’s is your estimated budget
              </h1>

              <p>
                One of our representatives will be contacting you shortly
              </p>
            </div>

            <div className="text-center border-2 border-green-600/40 bg-green-600/20 text-[#339933] py-15 rounded-xl">
              <p className="text-2xl ">Your Estimated Budget</p>
              <p className="font-bold text-3xl">$100 - $1400</p>
            </div>

            <button className="w-full py-3 bg-green-600 text-white font-semibold">908-322-8488</button>
          </div>

          <Image
            className=""
            src={man}
            alt="worker"
            width={220}
            height={220}
          />
        </div>
      </main>
    </>
  )
}