import { Poppins } from "next/font/google";
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins', // optional but recommended
    display: 'swap',
})

const Contact = () => {
    return (
        <div style={{ backgroundImage: "url(/bgMap.svg)" }} className="h-[688px] flex items-center flex-col justify-center bg-cover overflow-hidden rounded-3xl mx-3 bg-no-repeat relative">
            <div className="absolute inset-0 bg-[#6B6AFD] -z-10"></div>
            <img className="absolute top-14 sm left-8" src="/maplocation.svg" alt="" />

            <h2 className={`text-2xl font-semibold ${poppins.className} lg:text-[48px] text-white text-center`}>Contact Us</h2>
            <p className={`text-sm font-medium text-white text-center pt-4 lg:text-base  leading-[24px]`}>We’re here to support your journey reach out anytime for guidance, answers, and support, and let’s move your talent forward together.</p>
        </div>
    )
}

export default Contact;