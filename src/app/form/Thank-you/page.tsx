import { Phone } from "lucide-react";
import Image from "next/image";

import bigScreenImage from "./big-screen-image.png";

export default function ThankYouForm() {

    return (
        <>
            <main className="bg-[#eee] py-10 px-3 md:px-20">
                <div className="rounded-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-5 bg-white w-fit pt-5 pb-0 md:py-5 px-10">
                    <div className="flex flex-col items-start">
                        <h1 className="text-3xl font-bold mb-1">John, Thank you for sending us your details.</h1>
                        <p className="text-gray-600 text-pretty">One of our representatives will be contacting you shortly</p>
                        <button className="mt-5 p-3 flex items-center justify-center gap-4 self-stretch text-white bg-[#339933]"><Phone fill="white" /> 908-322-8488</button>
                    </div>
                    <Image
                        className="w-70 h-80"
                        src={bigScreenImage}
                        alt=""
                    />
                </div>
            </main>
        </>
    )
}