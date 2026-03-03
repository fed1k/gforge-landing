import { Poppins } from "next/font/google";
import { TiStarFullOutline } from "react-icons/ti";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins', // optional but recommended
    display: 'swap',
})

const HeroOthers = ({ isAbout = true, subtextWidth = "lg:max-w-[690px] max-w-[345px]", title = "About GiftedForge", subtext = "Welcome to the future of freelancing. GiftedForge combines advanced AI protection, instant payments, and a modern, futuristic design to create a secure and seamless experience for freelancers and clients worldwide." }) => {
    return (
        <section className="mx-3 h-[688px] lg:h-[606px] relative flex items-center flex-col justify-center lg:mx-6 relative overflow-hidden mb-3 bg-[#6B6AFD] px-3 rounded-3xl">
            {isAbout &&

                <>
                    <div className="w-[68px]  h-[64px] z-10 absolute top-[76px] lg:top-[125px] lg:right-[91px] right-[45px] text-white  rounded-xl py-2.5 px-3 bg-[#6B6AFD] border border-white">
                        <p className="text-sm lg:text-xl font-semibold">1M+</p>
                        <p className="text-[8px] lg:text-[10px] pt-1 font-medium">Projects</p>
                    </div>

                    <div className="w-15.5  lg:w-[79px] lg:h-[64px] z-10 absolute top-[128px] left-[37px] lg:top-[157px] lg:left-[89px] text-white h-15.5 rounded-xl py-3 px-[11.5px] lg:pt-2 bg-[#6B6AFD] border border-white">
                        <p className="text-sm lg:text-xl flex items-center gap-0.5 font-semibold">4.8 <TiStarFullOutline className="w-3.5 h-3.5 lg:w-5 lg:h-5" /></p>
                        <p className="text-[8px] lg:text-[10px] pt-1 font-medium">Rating</p>
                    </div>

                    <div className="w-[88px]  h-[64px] lg:w-[128px] lg:h-[68px] z-10 absolute bottom-[134px] lg:bottom-[198px] lg:right-[48px] right-[45px] text-white  rounded-xl pb-3 pt-2.5 px-[8.5px] lg:px-[17px] lg:pb-3 bg-[#6B6AFD] border border-white">
                        <p className="text-lg lg:text-2xl font-semibold">$100M+</p>
                        <p className="text-[10px] lg:text-[12px] font-medium">Paid</p>
                    </div>

                    <div className="w-[90px]  h-[64px] lg:h-[68px] lg:w-[110px] z-10 absolute  bottom-12 left-[25px] lg:left-[66px] lg:bottom-[130px] text-white  rounded-xl pb-3 pt-2.5 px-[21px] lg:px-6 lg:pb-3  bg-[#6B6AFD] border border-white">
                        <p className="text-lg lg:text-2xl font-semibold">50K+</p>
                        <p className="text-[10px] lg:text-xs font-medium">Freelancer</p>
                    </div>
                </>
            }

            {/* Background logos start here */}
            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:top-[40%] lg:left-[4%] top-[33px] -left-[5%] animate-float" src="/heroimgdif.svg" alt="" />
            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:top-[80%] lg:-left-[5%] top-0 left-[130px] animate-sway " src="/heroimgdif.svg" alt="" />

            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:top-[8%] lg:left-[15%] top-0 -right-[12%] animate-float-reverse animation-delay-400" src="/heroimgdif.svg" alt="" />
            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:top-[40%] lg:left-[22%] top-[112px] left-[50%] animate-drift animation-delay-200" src="/heroimgdif.svg" alt="" />
            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:top-[80%] lg:left-[32%] top-[40%] -left-[13%] animate-sway animation-delay-600" src="/heroimgdif.svg" alt="" />

            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:-top-[16%] lg:left-[30%] top-[55%] left-[40%] animate-drift" src="/heroimgdif.svg" alt="" />
            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:top-[90%] lg:left-[55%] top-[50%] -right-[15%] animate-pulse-glow animation-delay-400" src="/heroimgdif.svg" alt="" />

            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:-top-[7%] lg:left-[55%] bottom-[75px] left-[42px] animate-sway animation-delay-800" src="/heroimgdif.svg" alt="" />
            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:top-[33%] lg:left-[65%] -bottom-10 -left-[5%] animate-pulse-glow animation-delay-200" src="/heroimgdif.svg" alt="" />
            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:top-[70%] lg:left-[72%] -bottom-10 left-[111px] animate-drift animation-delay-1000" src="/heroimgdif.svg" alt="" />

            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:-top-4 lg:left-[94%] hidden lg:block animate-float-slow animation-delay-600" src="/heroimgdif.svg" alt="" />
            <img className="absolute w-[104px] h-[124px] lg:w-[146px] lg:h-[178px] lg:top-[28%] lg:left-[83%] hidden lg:block animate-float-slow animation-delay-600" src="/heroimgdif.svg" alt="" />
            {/* Background logos end here */}

            <h2 className={`text-2xl font-semibold ${poppins.className} lg:text-[48px] text-white text-center`}>{title}</h2>
            <p className={`text-sm ${subtextWidth} font-medium text-white text-center pt-4 lg:text-base  leading-[24px]`}>{subtext}</p>

        </section>
    )
}

export default HeroOthers