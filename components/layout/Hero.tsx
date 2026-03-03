import Rating from "../ui/Rating"
import { Poppins } from "next/font/google";
import TrustedComps from "../ui/TrustedComps";
import Image from "next/image";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins', // optional but recommended
    display: 'swap',
})

const Hero = () => {
    return (
        <section className="mx-3 md:mx-6 overflow-hidden relative flex flex-col justify-center bg-linear pt-25 md:pt-37 pb-14.75 rounded-[20px] ">
            {/* Center top logo */}
            <img src="/logogroup.svg" className="absolute left-[33%] -top-5 md:-top-[4%] md:left-[45%] w-[104px] h-[123px] md:w-[146px] md:h-[178px] animate-float" alt="" />

            {/* Left side logos */}
            <img src="/leftlogo.svg" className="absolute -left-2 top-0 md:-left-[4%] w-[104px] h-[123px] md:w-[146px] md:h-[178px] animate-sway" alt="" />
            <img src="/leftlogo.svg" className="absolute left-0 top-[22%] md:top-[27%] md:-left-[4%] w-[104px] h-[123px] md:w-[146px] md:h-[178px] animate-float-reverse animation-delay-400" alt="" />

            {/* Right side logos */}
            <img src="/rightlogo.svg" className="absolute right-0 top-0 md:-right-[7%] w-[104px] h-[123px] md:w-[146px] md:h-[178px] animate-drift animation-delay-200" alt="" />
            <img src="/rightlogo.svg" className="absolute right-0 top-42.5 md:top-[26%] md:-right-[7%] w-[104px] h-[123px] md:w-[146px] md:h-[178px] animate-sway animation-delay-600" alt="" />

            {/* Floating background logos (desktop only) */}
            <img src="/floatlogo.svg" className="hidden top-[14%] left-[12%] lg:block absolute w-[146px] h-[178px] animate-drift" alt="background logo illustration" />
            <img src="/floatlogo.svg" className="hidden top-0 left-[27%] lg:block absolute w-[146px] h-[178px] animate-pulse-glow animation-delay-400" alt="background logo illustration" />
            <img src="/floatlogo.svg" className="hidden top-[26%] left-[27%] lg:block absolute w-[146px] h-[178px] animate-sway animation-delay-800" alt="background logo illustration" />

            <img src="/floatlogo.svg" className="hidden top-0 left-[65%] lg:block absolute w-[146px] h-[178px] animate-pulse-glow animation-delay-200" alt="background logo illustration" />
            <img src="/floatlogo.svg" className="hidden top-[26%] left-[65%] lg:block absolute w-[146px] h-[178px] animate-drift animation-delay-1000" alt="background logo illustration" />
            <img src="/floatlogo.svg" className="hidden top-[15%] left-[81%] lg:block absolute w-[146px] h-[178px] animate-float-slow animation-delay-600" alt="background logo illustration" />



            <Rating />
            <h1 className={`text-white leading-10 md:leading-21 w-[90%] mx-auto pt-8 md:pt-12 text-center text-[22px] md:text-5xl font-semibold ${poppins.className}`}>Discover Top <img src="/badge.svg" className="inline w-9.5 h-9.5 md:w-17 md:h-17 relative" alt="" /> Talent <br className="lg:hidden" /> & Exciting <br className="hidden lg:inline" /> Projects <br className="lg:hidden" /> Effortlessly <Image alt="Collaboration illustration" className="inline -translate-y-2 absolute -translate-x-1 md:-translate-x-4 md:translate-y-0 md:w-[136px] md:h-[50px]" height={32} width={74} src="/collab.svg" /></h1>
            <p className="text-white text-[10px] md:text-base text-center pb-8 md:pb-12 pt-6 md:pt-8">Hire top talent for websites, apps, and more via AI</p>

            <div className="flex gap-3 md:gap-4 justify-center">
                <a className="flex items-center md:w-47 gap-1.5 md:gap-2 text-white bg-[#0E0636] rounded-full py-1.5 md:py-2 px-2 md:pl-3 md:pr-[15px]">
                    <div className="w-8 h-8 md:w-11 md:h-11 bg-white  flex items-center justify-center rounded-full">

                        <img className="w-5 h-5 md:w-7 md:h-7" src="/dot-arrow.svg" alt="" />
                    </div>
                    <p className="font-semibold text-xs md:text-base">Find a Talent</p>
                </a>
                <a className="text-xs bg-white font-medium p-3.5 md:px-[27px] md:w-47 md:py-[18px] md:text-base rounded-full text-[#0E0636]">Explore Projects</a>
            </div>

            <p className="pt-32 pb-8 sm:pb-12 text-center text-sm md:text-base font-medium text-[#0E0636]">Trusted by</p>

            <TrustedComps />
        </section>
    )
}

export default Hero;
