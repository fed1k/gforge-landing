import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BlackLogo from "../ui/logoblack";
import SocialContacts from "../ui/SocialContacts";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mx-3 md:mx-6 relative overflow-hidden mb-3 grid grid-cols-1 md:gap-y-10 md:grid-cols-[1fr_1fr_1.6fr] md:justify-between bg-[#0E0636] px-6 py-17 md:py-25 rounded-3xl">
            <img className="absolute w-[146px] h-[178px] md:top-[25%] md:-left-[5%] top-[13%] -left-[7%] animate-float" src="/logoparticle.svg" alt="" />
            <img className="absolute w-[146px] h-[178px] md:top-[55%] md:left-[3%] top-[8%] left-[35%] animate-sway " src="/logoparticle.svg" alt="" />

            <img className="absolute w-[146px] h-[178px] md:top-[5%] md:left-[18%] top-[10%] -right-[15%] animate-float-reverse animation-delay-400" src="/logoparticle.svg" alt="" />
            <img className="absolute w-[146px] h-[178px] md:top-[35%] md:left-[25%] top-[23%] left-[50%] animate-drift animation-delay-200" src="/logoparticle.svg" alt="" />
            <img className="absolute w-[146px] h-[178px] md:top-[75%] md:left-[32%] top-[40%] -left-[15%] animate-sway animation-delay-600" src="/logoparticle.svg" alt="" />

            <img className="absolute w-[146px] h-[178px] md:top-[5%] md:left-[35%] top-[50%] left-[40%] animate-drift" src="/logoparticle.svg" alt="" />
            <img className="absolute w-[146px] h-[178px] md:top-[75%] md:left-[45%] top-[50%] -right-[20%] animate-pulse-glow animation-delay-400" src="/logoparticle.svg" alt="" />

            <img className="absolute w-[146px] h-[178px] z-10 md:top-[5%] md:left-[55%] top-[65%] left-[10%] animate-sway animation-delay-800" src="/logoparticle.svg" alt="" />
            <img className="absolute w-[146px] h-[178px] md:top-[35%] md:left-[65%] top-[78%] -left-[10%] animate-pulse-glow animation-delay-200" src="/logoparticle.svg" alt="" />
            <img className="absolute w-[146px] h-[178px] md:top-[75%] md:left-[70%] top-[78%] left-[30%] animate-drift animation-delay-1000" src="/logoparticle.svg" alt="" />

            <img className="absolute w-[146px] h-[178px] md:top-[10%] md:left-[83%] hidden md:block animate-float-slow animation-delay-600" src="/logoparticle.svg" alt="" />
            <img className="absolute w-[146px] h-[178px] md:top-[35%] md:left-[90%] hidden md:block animate-float-slow animation-delay-600" src="/logoparticle.svg" alt="" />

            <div>

                <BlackLogo mode="white" />
                <p className="text-[#DAD8FF] text-sm pt-8 pb-6 ">The future of freelancing is here. We bring together top talent and cutting-edge technology to build extraordinary products fast, smart, and seamless.</p>
                <Link href="/about" className="text-xs text-white border border-white hover:bg-[#6B6AFD] rounded-full px-3 inline-flex items-center gap-1 py-[5px]">Read More About Us <img className="w-3.5 h-3.5" src="/arrow-right.svg" alt="" /> </Link>
            </div>
            <div className="hidden md:block"></div>
            <div className="flex flex-col md:flex-row gap-6 text-white pt-12 md:pt-0">
                <Link className="z-20 p-1 h-fit border-b border-transparent hover:border-white" href="/about">About</Link>
                <a className="p-1 border-b h-fit z-20 border-transparent hover:border-white" href="">Projects</a>
                <Link className="z-20 p-1 h-fit border-b border-transparent hover:border-white" href="/success-stories">Success Stories</Link>
                <a className="p-1 z-20 h-fit border-b border-transparent hover:border-white" href="">For Clients</a>
                <a className="p-1 z-20 h-fit border-b border-transparent hover:border-white" href="">For Talents</a>
                <a className="md:hidden" href="">Contact Us <img className="inline w-4 h-4 rotate-90 mb-1" src="/arrow-right.svg" alt="" /></a>
                <a className="md:hidden" href="">Location <img className="inline w-4 h-4 rotate-90 mb-1" src="/arrow-right.svg" alt="" /></a>
                <a className="md:hidden" href="">Languages <img className="inline w-4 h-4 rotate-90 mb-1" src="/arrow-right.svg" alt="" /></a>
            </div>


            <div className="flex justify-between pt-12 self-end">

                <SocialContacts />
                <p className="text-[#DAD8FF] text-xs self-end">© 2026 — GiftedForge
                    <br /> All Rights reserved</p>
            </div>

            <div className="hidden md:block"></div>

            <div className="hidden md:flex md:justify-between text-white">
                <div>

                    <p className="pb-4 text-xl font-medium">Contact Us</p>
                    <p className="text-sm  text-[#DAD8FF]">(+7) 924- 885-2888 <br />GiftedForge@gmail.com</p>

                    <p className="pt-12 pb-4 text-xl font-medium">Location</p>
                    <p className="text-sm text-[#DAD8FF]">Yuzhno-Sakhalinsk, Russia <br />Mira Avenue, 267</p>
                </div>

                <div className="self-end">
                    <p className="text-xs pb-4">Languages</p>
                    <div className="flex justify-end items-center gap-4.5">
                        <p className="text-sm">En</p>
                        <p className="text-sm text-[#DAD8FF]">Ru</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;