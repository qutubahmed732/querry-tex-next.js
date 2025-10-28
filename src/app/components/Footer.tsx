// components
import BackToTopButton from "./BacktotopBtn";
import Image from "next/image";
import Link from "next/link";

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
                        <h1 className="text-3xl md:text-4xl font-bold">Quarry Tex Vehicle Wraps</h1>
                        <ul className="flex flex-col gap-5 md:text-xl">
                            <li className="flex items-center gap-3"><Phone fill="white" className="flex-shrink-0" /><span className="text-white/80">908-322-8488</span></li>
                            <li className="flex items-center gap-3 uppercase"><Image src={location} className="flex-shrink-0" alt="location pin logo" /><span className="text-white/80">1998 US HWY 22 SCOTCH PLAINS NJ 07076</span></li>
                            <li className="flex items-center gap-3"><Image src={gmail} className="h-5 flex-shrink-0" alt="gmail logo" /><span className="text-white/80">info@quarrytex.com</span></li>
                        </ul>
                    </div>

                    {/* Right */}
                    <div className="width-change flex justify-start md:justify-center gap-2 md:text-xl font-semibold">
                        <ul className="w-1/2 flex flex-col gap-4">
                            <li><Link href="../services">Servies</Link></li>
                            <li><Link href="../workpage">Our Work</Link></li>
                            <li><Link href="/">Home</Link></li>
                            <li>Careers</li>
                            <li><Link href="../frequentlyaskedquestions">FAQs</Link></li>
                        </ul>
                        <ul className="w-1/2 flex flex-col gap-4">
                            <li>Get a Quote</li>
                            <li><Link href="./contact-us">Contact Us</Link></li>
                            <li>Terms of Services</li>
                            <li><Link href="./privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <p className="md:text-xl mt-10">Copyright © {new Date().getFullYear()} Quarry Tex Inc. All rights reserved.</p>

                <BackToTopButton />
            </footer>
        </>
    )
}