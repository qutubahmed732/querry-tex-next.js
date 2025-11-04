import Link from "next/link"


export default function Qoute_5() {

  return (
    <>
      <main className="bg-[#eee] py-5 md:py-15 px-3">
        <div className="p-5 md:p-10 max-w-4xl mx-auto bg-white rounded-3xl">
          
          <h1 className="md:w-[80%] text-xl md:text-3xl text-black font-bold text-pretty text-center mb-8 mx-auto">
            Enter details to get personalized budget analysis
          </h1>

          <form className="flex flex-col gap-4">

            <div className="flex flex-col md:flex-row gap-4"> {/* first input div */}
              <div className="md:w-1/2 flex flex-col gap-2">
                <label htmlFor="make" className="font-semibold">First Name</label>
                <input
                  type="text"
                  className="placeholder:text-black border border-t-0 border-r-0 border-l-0 border-b-1 p-1"
                  placeholder="John"
                />
              </div>
              <div className="md:w-1/2 flex flex-col gap-2">
                <label htmlFor="model" className="font-semibold">Last Name</label>
                <input
                  type="text"
                  className="placeholder:text-black border border-t-0 border-r-0 border-l-0 border-b-1 p-1"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4"> {/* second input div */}
              <div className="md:w-1/2 flex flex-col gap-2">
                <label htmlFor="year" className="font-semibold">Phone Number</label>
                <input
                  type="text"
                  className="placeholder:text-black border border-t-0 border-r-0 border-l-0 border-b-1 p-1"
                  placeholder="+1 (123) 467 8901"
                />
              </div>
              <div className="md:w-1/2 flex flex-col gap-2">
                <label htmlFor="number" className="font-semibold">Email Address</label>
                <input
                  type="text"
                  className="placeholder:text-black border border-t-0 border-r-0 border-l-0 border-b-1 p-1"
                  placeholder="username@domain.com"
                />
              </div>
            </div>

          </form>

          <button className="w-full py-3 bg-green-600 text-white font-semibold mt-10"><Link href="/get-a-quote/quote-6">Get Budget</Link></button>
        </div>
      </main>
    </>
  )
}