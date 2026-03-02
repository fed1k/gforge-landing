import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
})

const ContactHero = () => {
    return (
        <div className="h-[688px] bg-[url(/bgMap.svg)] lg:bg-[url(/bgMapLg.svg)] flex items-center flex-col justify-center bg-cover overflow-hidden rounded-3xl lg:mx-6 mx-3 mb-17 bg-no-repeat relative">
            <div className="absolute inset-0 bg-[#6B6AFD] -z-10"></div>
            <div className="absolute inset-0 bg-[#0000004D] z-0"></div>
            <img className="absolute left-8 top-14 lg:hidden" src="/maplocation.svg" alt="" />
            <img className="absolute hidden lg:inline lg:top-20  lg:right-[90px]" src="/mapLocationLg.svg" alt="" />

            <h2 className={`text-2xl z-10 font-semibold ${poppins.className} lg:text-[48px] text-white text-center`}>Contact Us</h2>
            <p className={`text-sm z-10 font-medium text-white max-w-[265px] lg:max-w-[488px] text-center pt-4 lg:text-base  leading-[24px]`}>We’re here to support your <br className="lg:hidden" /> journey reach out anytime for guidance, answers, and support, <br className="lg:hidden" /> and let’s move your talent <br /> forward together.</p>

            <div className="absolute gap-6 flex flex-col bottom-6 right-3 lg:right-6">
                <div className="space-y-2">
                    <div className="w-8 h-8 lg:w-9.5 lg:h-9.5 flex items-center justify-center bg-white rounded-full"><img className="w-5 h-5 lg:w-6 lg:h-6" src="/add.svg" alt="" /></div>
                    <div className="w-8 h-8 lg:w-9.5 lg:h-9.5 flex items-center justify-center bg-white rounded-full"><img className="w-5 h-5 lg:w-6 lg:h-6" src="/minus.svg" alt="" /></div>
                </div>

                <div className="w-8 h-8 lg:w-9.5 lg:h-9.5 bg-white flex items-center justify-center rounded-full"><img className="w-4 h-4 lg:w-5 lg:h-5" src="/send.svg" alt="" /></div>
            </div>
        </div>
    )
}

export default ContactHero