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
        icon: <BsShieldCheck className="w-5 h-5 text-[#6B6AFD]" />,
        title: "Built Around Trust",
        description: "Security, transparency, and reliability are at the core of every product we create.",
    },
    {
        number: "02",
        icon: <BsGrid1X2 className="w-5 h-5 text-[#6B6AFD]" />,
        title: "Simply Designed",
        description: "Technology should be simple, intuitive, and easy for everyone.",
    },
    {
        number: "03",
        icon: <BsPeopleFill className="w-5 h-5 text-[#6B6AFD]" />,
        title: "Community Driven",
        description: "Built for creators, freelancers, and communities to grow, collaborate, and thrive.",
    },
    {
        number: "04",
        icon: <BsGlobe2 className="w-5 h-5 text-[#6B6AFD]" />,
        title: "Future Focused",
        description: "Building AI and Web3 solutions for the future of digital experiences.",
    },
];

const AboutChoose = () => {
    return (
        <section className="px-5 relative pt-12 mb-17 pb-12 bg-[#0E0636] mx-3 rounded-3xl">
            <div className="absolute w-full h-px bg-[#DAD8FF33] top-20 -translate-x-4"></div>
            <div className="absolute h-[286px] w-px bg-[#DAD8FF33] right-[215px] top-0"></div>
            <div className="absolute h-[286px] w-px bg-[#DAD8FF33] right-[72px] top-0"></div>
            <div className="absolute h-[286px] w-px bg-[#DAD8FF33] right-[112px] top-0"></div>
            <p className="text-white text-sm font-medium">Why Choose Us</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[220px]">
                {cards.map((card) => (
                    <div key={card.number} className={`py-7 px-4 mx-2.5 rounded-3xl border ${card.number === "03" ? "border-white bg-[#FFFFFF0D]" : "border-[#DAD8FF33]"} `}>
                        <p className="text-2xl font-medium text-[#F2D406]">{card.number}</p>
                        <div className="pt-14">
                            <div className="w-11 h-11 bg-[#EDEDFF] rounded-xl flex items-center justify-center mb-4">
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
