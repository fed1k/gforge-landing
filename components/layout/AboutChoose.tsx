import { BsShieldCheck, BsGrid1X2, BsPeopleFill, BsGlobe2 } from "react-icons/bs";
import { ReactNode } from "react";

type Card = {
    number: string;
    icon: ReactNode;
    title: string;
    description: string;
};

const cards: Card[] = [
    {
        number: "01",
        icon: <img src="/security.svg" className="w-6 h-6" />,
        title: "Built Around Trust",
        description: "Security, transparency, and reliability are at the core of every product we create.",
    },
    {
        number: "02",
        icon: <img src="/mobile.svg" className="w-6 h-6" />,
        title: "Simply Designed",
        description: "Technology should be simple, intuitive, and easy for everyone.",
    },
    {
        number: "03",
        icon: <img src="/people.svg" className="w-6 h-6" />,
        title: "Community Driven",
        description: "We listen to our users and continuously improve based on real feedback.",
    },
    {
        number: "04",
        icon: <img src="/global.svg" className="w-6 h-6" />,
        title: "Future Focused",
        description: "Building AI and Web3 solutions for the future of digital experiences.",
    },
];

const AboutChoose = () => {
    return (
        <section className="px-5 relative lg:h-[922px] pt-12 mb-17 lg:pt-25 pb-10.5 bg-[#0E0636] mx-3 rounded-3xl">
            <div className="absolute w-full h-px bg-[#DAD8FF33] top-35.5 -translate-x-4"></div>
            <div className="absolute h-[286px] lg:h-[538px] w-px bg-[#DAD8FF33] right-[215px] lg:left-[251px] top-0"></div>
            <div className="absolute h-[286px] lg:h-[538px] w-px bg-[#DAD8FF33] right-[301px] top-0"></div>
            <div className="absolute h-[286px] lg:h-[538px] w-px bg-[#DAD8FF33] right-[92px] top-0"></div>
            <p className="text-white text-sm font-medium lg:text-xl lg:pl-5.5">Why Choose Us</p>
            <div className="grid grid-cols-1  lg:grid-cols-4 gap-6 pt-[220px] lg:pt-[410px] lg:px-5.5">
                {cards.map((card) => (
                    <div key={card.number} className={`py-7 px-4 mx-2.5 lg:mx-0 rounded-3xl border ${card.number === "03" ? "border-white lg:-translate-y-full bg-[#FFFFFF0D]" : "border-[#DAD8FF33]"} `}>
                        <p className="text-2xl font-medium text-[#F2D406]">{card.number}</p>
                        <div className="pt-14">
                            <div className={`w-12 h-12 bg-transparent ${card.number === "03" ? "border-white" : "border-[#DAD8FF33]"}  border rounded-2xl flex items-center justify-center mb-4`}>
                                {card.icon}
                            </div>
                            <h3 className={`text-2xl font-medium ${card.number === "03" ? "text-white" : "text-[#DAD8FF]"}  mb-3`}>{card.title}</h3>
                            <p className={`text-lg ${card.number === "03" ? "text-white" : "text-[#DAD8FF]"}  leading-relaxed`}>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutChoose;
