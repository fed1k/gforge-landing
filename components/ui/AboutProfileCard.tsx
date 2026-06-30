import { useState } from "react";

interface AboutProfileCardType {
    img: string;
    name: string;
    position: string;
    link: string
}

const AboutProfileCard = ({ img, position, name, link }: AboutProfileCardType) => {
    const [isLinkedinActive, setIsLinkedinActive] = useState(false);
    return (
        <div
            className="z-20  flex flex-col items-start  border-2 border-white"
        >
            {/* Background Image */}
            <div className="relative">

                <img src={img} className="w-[294px] h-[334px] mb-4 rounded-lg object-cover" alt="" />
                <a target="_blank"
                    href={link}
                    onClick={() => setIsLinkedinActive(true)}
                    className={`group w-12 h-12 bottom-6 flex justify-center items-center right-3 absolute rounded-lg transition-colors hover:bg-[#6B6AFD] ${isLinkedinActive ? "bg-[#6B6AFD]" : "bg-white"
                        }`}
                >
                    <span
                        className={`w-5 h-5 transition-colors group-hover:bg-white ${isLinkedinActive ? "bg-white" : "bg-[#0E0636]"
                            }`}
                        style={{
                            WebkitMaskImage: "url('/linkedin-logo.svg')",
                            maskImage: "url('/linkedin-logo.svg')",
                            WebkitMaskSize: "contain",
                            maskSize: "contain",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                        }}
                    />
                </a>
            </div>

            {/* Content */}
            <div className="relative h-[91px] flex-1 z-10 flex flex-col  justify-center ">
                <p className="text-[#0E0636] font-medium text-xl">{name}</p>
                <p className="text-[#0E0636] text-xs lg:text-sm pt-2">{position}</p>
            </div>
        </div>
    )
}

export default AboutProfileCard