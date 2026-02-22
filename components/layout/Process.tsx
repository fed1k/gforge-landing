"use client";

import { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

const accordionData = [
    {
        title: "Create a profile",
        content: "Register in 2 minutes and complete your profile with a portfolio"
    },
    {
        title: "Find a project",
        content: "Let AI find projects that perfectly align with your skills and professional experience."
    },
    {
        title: "Work Safely",
        content: "Protected payments, verified quality—escrow secures your money and AI checks the work."
    },
    {
        title: "Get Paid",
        content: "Instant global withdrawals, fast, secure, and hassle-free."
    }
];

const Process = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mx-3 px-3 rounded-3xl py-12 md:py-32 md:px-12 bg-[rgba(218,216,255,0.2)]">
            <h2 className="text-2xl md:text-5xl text-center font-semibold text-[#0E0636]">How <img className="w-9.5 h-9.5 inline md:hidden md:h-12 md:w-12" src="/plane.svg" alt="" /> GiftedForge <img className="w-9.5 h-9.5 hidden md:inline md:h-14.5 md:w-14.5" src="/plane.svg" alt="" /> <br className="lg:hidden" /> Works <span className="md:hidden">for You</span></h2>
            <p className="pt-4 text-[8px] md:text-sm font-medium text-[#0E0636] text-center pb-12 md:pb-25">Connecting You with the Best Talent's in Four Simple Steps</p>
            <div className="flex flex-col items-center md:flex-row md:items-center gap-12 md:gap-6">
                <div className="h-113 w-[345px] lg:w-[524px] lg:h-[688px] flex justify-center items-end pb-7.5 rounded-3xl bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(/guidance.png)` }}>
                    <img className="w-56.75 lg:w-[324px] lg:w-[524px]  h-16" src="/guidancegroup.svg" alt="" />
                </div>

                <div className="accordion flex-1 space-y-6">
                    {accordionData.map((item, index) => (
                        <div key={index} className={`border ${openIndex === index ? "bg-[#6B6AFD] border-white" : " bg-transparent border-[#0E0636]"}  rounded-3xl overflow-hidden`}>
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full px-3.5 py-6 md:px-6 md:py-8 flex justify-between items-center ${openIndex === index ? "bg-[#6B6AFD]" : "bg-transparent"} transition-colors`}
                            >
                                <span className={`font-semibold text-xl md:text-4xl ${openIndex === index ? "text-white" : "text-[#0E0636]"}  text-left`}>{item.title}</span>
                                <div className={`w-9.5 flex items-center bg-white justify-center h-9.5 rounded-full border ${openIndex === index ? "border-transparent" : "border-[#0E0636]"} `}>
                                    {openIndex === index ? <FiMinus className="w-6 h-6" /> :
                                        <GoPlus className="w-6 h-6" />}
                                </div>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <p className={`px-3.5 md:px-6 md:pb-8 font-normal pb-6 text-sm ${openIndex === index ? "bg-[#6B6AFD] text-white" : "bg-transparent text-[#0E0636]"}`}>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process;