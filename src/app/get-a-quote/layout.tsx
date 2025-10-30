import Toptext from "../components/TopText";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroImage from "./images/bg-image.png"

export default function Get_A_Qoute_Layout(
    { children }: {
        children: React.ReactNode;
    }
) {
    return (
        <>
            <Toptext />
            <header className="relative w-full min-h-[25rem] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${heroImage.src})` }}>
                <Navbar />
                <section className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-col items-start md:items-center gap-10 pl-6 md:pl-6">
                    <h1 className="text-white text-5xl md:text-6xl font-bold text-left md:text-center max-w-5xl leading-tight">
                        Budget Analysis
                    </h1>
                </section>
            </header>
            {children}
            <Footer />
        </>
    )
}