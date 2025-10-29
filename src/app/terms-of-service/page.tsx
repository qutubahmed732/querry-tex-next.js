import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Toptext from "../components/TopText"

import heroImage from "./images/bg-image.png"


export default function TermsOfService() {

    return (
        <>
            <Toptext />
            <header className="relative w-full min-h-[25rem] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${heroImage.src})` }}>

                <Navbar />
                <section className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl flex flex-col items-start md:items-center gap-10 pl-6 md:pl-6">
                    <h1 className="text-white text-5xl md:text-6xl font-bold text-left md:text-center max-w-5xl leading-tight">
                        Terms of Service
                    </h1>
                </section>
            </header>

            <main className="px-5 mx-auto w-full max-w-3xl py-15 flex flex-col gap-5 text-[#475467] text-balance">

                <p>At Quarry Tex, we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it. If you have any questions or concerns about our policy or practices, please contact us at info@quarrytex.com</p>

                <div>
                    <h3 className="md:text-2xl font-bold text-green-600 mb-2">1. Information We Collect</h3>
                    <p>We collect personal information that you voluntarily provide to us when you register on our website, express an interest in our Store and services, participate in activities on the website, or contact us.</p>
                    <p>– Personal Information: This may include your name, email address, phone number, and other contact details.</p>
                    <p>– Usage Data: We may collect information automatically when you visit our website, such as your IP address, browser type, pages visited, and other usage data.</p>
                    <p>– Cookies and Tracking Technologies: We use cookies and similar tracking technologies to access or store information as detailed in our Cookie Policy</p>
                </div>

                <div>
                    <h3 className="md:text-2xl font-bold text-green-600 mb-2">2. How We Use Your Information</h3>
                    <p>We use personal information collected via our website for various purposes, including:</p>
                    <p>– To provide and maintain our services</p>
                    <p>– To respond to your inquiries and offer customer support</p>
                    <p>– To send you administrative information, such as updates to our terms, conditions, and policies</p>
                    <p>– To improve our website and user experience</p>
                    <p>– For marketing and promotional purposes, with your consent</p>
                </div>

                <div>
                    <h3 className="md:text-2xl font-bold text-green-600 mb-2">3. Sharing Your Information</h3>
                    <p>We may share your information with:</p>
                    <p>– Service Providers: Third-party vendors that help us provide our services.</p>
                    <p>– Business Transfers: If we are involved in a merger, acquisition, or asset sale.</p>
                    <p>– Legal Obligations: When required by law or to protect our rights.</p>
                </div>

                <div>
                    <h3 className="md:text-2xl font-bold text-green-600 mb-2">4. Data Retention</h3>
                    <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless otherwise required by law.</p>
                    <p>5. Your Privacy Rights</p>
                    <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                    <p>– Access: The right to access the personal data we hold about you</p>
                    <p>– Correction: The right to request correction of any inaccurate personal data.</p>
                    <p>– Deletion: The right to request deletion of your personal data.</p>
                    <p>– Objection and Restriction: The right to object to or restrict the Working of your personal data.</p>
                </div>

                <div>
                    <h3 className="md:text-2xl font-bold text-green-600 mb-2">6. Security of Your Information</h3>
                    <p>We use industry-standard security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </div>

                <div>
                    <h3 className="md:text-2xl font-bold text-green-600 mb-2">7. Changes to This Privacy Policy</h3>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                </div>

                <div>
                    <h3 className="md:text-2xl font-bold text-green-600 mb-2">8. Contact Us</h3>
                    <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                    <p>Quarry Tex</p>
                    <p>1998 US HWY 22 SCOTCH PLAINS NJ 07076</p>
                    <p>info@quarrytex.com</p>
                    <p>—</p>
                    <p>By using our website, you consent to our Privacy Policy</p>
                </div>
            </main>

            <Footer />
        </>
    )
}