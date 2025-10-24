// components
import Toptext from "../components/TopText";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

// images
import heroImage from "./images/bg-image.png";
import truck from "./images/truck.png";

export default function FAQSection() {

    return (
        <>
            <Toptext />
            <header className="relative w-full min-h-[25rem] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${heroImage.src})` }}>
                <Navbar />

                <section className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-col items-start md:items-center gap-10 pl-6 md:pl-6">
                    <h1 className="text-white text-5xl md:text-6xl font-bold text-left md:text-center max-w-5xl leading-tight">
                        Quarry Tex Vehicle Wraps – FAQ
                    </h1>

                </section>

            </header>

            <main className="relative bg-[#eee] px-3 md:px-0 pb-20">
                <div className="max-w-5xl w-full mx-auto pt-10">
                    <div className="w-full py-4 px-2 bg-white rounded-2xl">

                        <div className="px-2 md:px-10 flex flex-col gap-3">
                            <details open className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    Do I need to provide my own artwork?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="text-black/70 pt-5">Not necessarily. If you already have a logo or brand assets, we’ll incorporate them into the design. If not, our team can create a wrap design that reflects your business branding.</p>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    Do I own the wrap artwork once it’s created?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    Can I get a proof of the design before installation?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    What if I want to change the design later?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    Can you match my company’s colors?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    How long will the wrap last?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    Will a wrap damage my vehicle’s paint?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    Can you wrap leased or financed vehicles?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    How do I care for my wrapped vehicle?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    What is the Budget Analyzer?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    Is the price shown my final cost?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3 border-2 border-b-[#e2e8f0] border-t-0 border-r-0 border-l-0">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    Why might my final price differ from the estimate?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>

                            <details className="group py-5 px-3">
                                <summary className="list-none font-semibold text-xl flex items-center justify-between">
                                    How do I get an exact quote?
                                    <span className="[&::-webkit-details-marker]:hidden">

                                        <svg className="h-5 w-5 transition-transform group-open:rotate-90 not-[group-open]:-rotate-90" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </summary>
                            </details>
                        </div>

                    </div>
                    <div className="bg-green-600 text-white rounded-2xl mt-10 py-10 pl-10">
                        <div className="w-full md:w-2/3 text-balance flex flex-col gap-3 items-start">
                            <h1 className="text-2xl md:text-4xl font-semibold">
                                Affordable Visual Impact That Drives Results
                            </h1>
                            <p>
                                Join hundreds of happy business owners who’ve trusted us to transform their vehicles into powerful marketing tools. We deliver value you can see — and feel.
                            </p>
                            <button className="bg-white text-green-600 py-2 px-6 font-semibold">Price Your Wrap</button>
                        </div>
                    </div>
                </div>

                <Image
                    className="absolute right-0 bottom-0 w-[var(--img-width)]"
                    src={truck}
                    alt="truck image"
                    width={600}
                    height={600}
                />
            </main>

            <Footer />
        </>
    )
}