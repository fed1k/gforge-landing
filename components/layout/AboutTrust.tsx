"use client";

import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

type AccordionItem = {
    title: string;
    subtitle?: string;
    description: string | string[];
};

const platformsData: { label: string; buttonLabel: string; items: AccordionItem[], buttonLink: string }[] = [
    {
        label: "Platform 01",
        buttonLabel: "Explore Freelance Platform",
        buttonLink: "https://app.giftedforge.com",
        items: [
            {
                title: "01 - GiftedForge Freelance Marketplace",
                subtitle: "The Smarter Way to Work Together",
                description:
                    "A modern freelance marketplace where talented professionals and businesses connect, collaborate, and complete projects with confidence.",
            },
            {
                title: "02 - What You Can Do",
                subtitle: "",
                description: [
                    "Find quality projects",
                    "Hire skilled professionals",
                    "Secure payments with escrow protection",
                    "Receive faster payouts",
                    "Get AI-powered project recommendations"
                ],
            }
        ],
    },
    {
        label: "Platform 02",
        buttonLabel: "Explore NFT Platform",
        buttonLink: "https://t.me/Giftedforge",
        items: [
            {
                title: "01 - GiftedForge Creator Hub",
                subtitle: "Where Creators Thrive",
                description:
                    "A dedicated space for creators and digital entrepreneurs to showcase their work, grow their audience, and monetize their skills.",
            },
            {
                title: "02 - What You Can Do",
                // subtitle: "Better Together",
                description: [
                    "Create NFTs",
                    "Connect your wallet",
                    "Build your digital profile",
                    "Explore digital collections",
                    "Participate in community experiences"
                ],
            },
            {
                title: "03 - Getting Started",
                // subtitle: "Everything You Need",
                description: [
                    "Open Telegram",
                    "Connect your wallet",
                    "Create Your Profile",
                    "Start Exploring"
                ],
            },
        ],
    },
];

const AboutTrust = () => {
    const [activePlatform, setActivePlatform] = useState(0);
    const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

    const currentPlatform = platformsData[activePlatform];
    const items = currentPlatform.items;
    const allOpen = items.every((_, i) => openItems.has(i));

    const toggleItem = (i: number) => {
        setOpenItems((prev) => {
            const next = new Set(prev);
            next.has(i) ? next.delete(i) : next.add(i);
            return next;
        });
    };

    return (
        <>

            <h2 className="pl-6 text-2xl lg:text-[40px] lg:pl-12 font-semibold text-[#0E0636 pt-17">Choose <img src="/arrow-right-illus.svg" className="w-9.5 h-9.5 inline lg:w-12 lg:h-12" alt="Illustration" /> Your <br />Experience</h2>
            <section className="mt-12 md:mt-25 flex flex-col lg:flex-row justify-between mb-17 md:mb-37 px-6 md:px-12">
                {/* Platform tabs */}
                <div className="flex flex-col items-start gap-3 mb-8 md:mb-10">
                    {platformsData.map((p, i) => (
                        <button
                            key={i}
                            onClick={() => { setActivePlatform(i); setOpenItems(new Set([0])); }}
                            className={`transition-colors cursor-pointer ${activePlatform === i ? "text-[#6B6AFD] text-lg lg:text-2xl" : "text-[#666F8BCC] text-[15px] lg:text-xl"
                                }`}
                        >
                            {p.label}
                        </button>
                    ))}
                </div>

                {/* Accordion */}
                <div className="flex-[0.72]">
                    {items.map((item, i) => {
                        const isOpen = openItems.has(i);
                        return (
                            <div key={i} className="">
                                <div className={`border-b rounded-xl mb-8 ${isOpen ? "bg-[#6B6AFD0D]  border-transparent  py-5 px-4 lg:p-6 " : "py-5 px-4 border-[#666F8B33]"}`}>
                                    <button
                                        onClick={() => toggleItem(i)}
                                        className="w-full flex items-start justify-between text-left gap-4"
                                    >
                                        <span className=" text-lg lg:text-2xl text-[#0E0636] leading-tight">
                                            {item.title}
                                        </span>
                                        {isOpen ? (
                                            <FiChevronUp className="w-6 h-6 text-[#6B6AFD] shrink-0 mt-0.5" />
                                        ) : (
                                            <FiChevronDown className="w-6 h-6 text-[#0E063660] shrink-0 mt-0.5" />
                                        )}
                                    </button>
                                    {isOpen && (
                                        <div className="pt-8">
                                            {item.subtitle && (
                                                <p className="text-sm md:text-base font-light text-[#0E0636] mb-4">
                                                    {item.subtitle}
                                                </p>
                                            )}
                                            {Array.isArray(item.description) ? (
                                                <ul className="list-disc list-inside space-y-2">
                                                    {item.description.map((point, j) => (
                                                        <li key={j} className="text-sm md:text-base font-light text-[#0E0636] leading-[148%]">
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-sm md:text-base font-light text-[#0E0636] leading-[148%] max-w-150">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                    {allOpen && (
                        <a target="_blank" href={currentPlatform.buttonLink} className="mt-8 px-6 py-3 rounded-full bg-transparent text-[#6B6AFD] border border-[#6B6AFD] font-semibold text-sm md:text-base cursor-pointer hover:opacity-90 transition-opacity">
                            {currentPlatform.buttonLabel}
                        </a>
                    )}
                </div>
            </section>
        </>
    );
};

export default AboutTrust;
