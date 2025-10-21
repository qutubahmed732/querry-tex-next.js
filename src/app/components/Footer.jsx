// components
import BackToTopButton from "../components/BacktotopBtn";
import Image from "next/image";

// small icons
import { Phone } from "lucide-react";
import location from "../landingpage-images/location.png";
import gmail from "../landingpage-images/gmail.png";

export default function Footer() {

    return (
        <>
            <footer className="bg-[#339933] text-white px-5 md:px-15 pt-15 pb-10">
                <div className="flex flex-direction justify-between gap-10">

                    {/* Left */}
                    <div className="width-change flex flex-col gap-7">
                        <h1 className="text-4xl font-bold">Quarry Tex Vehicle Wraps</h1>
                        <ul className="flex flex-col gap-5 text-xl">
                            <li className="flex items-center gap-3"><Phone fill="white" /><span className="text-white/80">908-322-8488</span></li>
                            <li className="flex items-center gap-3 uppercase"><Image src={location} alt="location pin logo" /><span className="text-white/80">1998 US HWY 22 SCOTCH PLAINS NJ 07076</span></li>
                            <li className="flex items-center gap-3"><Image src={gmail} className="h-5" alt="gmail logo" /><span className="text-white/80">info@quarrytex.com</span></li>
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="width-change flex justify-start md:justify-center gap-2 text-xl sm:text-3xl font-semibold">
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
    )
}