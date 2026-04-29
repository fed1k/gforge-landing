"use client";

import { useState } from "react";
import TrustCard from "../ui/TrustCard";

const Trust = () => {
    const [showAll, setShowAll] = useState(false);
    const trustCards = [
        {
            title: "AI-based team selection",
            text: "AI Finds the Perfect Candidate for Your Project In Seconds.",
            src: "/search-normal.svg"
        },
        {
            title: "Video communication",
            text: "Instant Video Call’s & Digital Business Card Meet, Connect & Collaborate.",
            src: "/video.svg",
            hoverSrc: "/videohov.svg"
        },
        {
            title: "Escrow payments",
            text: "Safe & Secure Payments You Pay Only When the Job’s Done.",
            src: "/wallet.svg",
            hoverSrc: "/wallethov.svg"
        },
        {
            title: "Educational content",
            text: "Upgrade Your Skills, Unlock New Opportunities, and Build a Future You’re Proud Of.",
            src: "/book.svg",
            hoverSrc: "/bookhov.svg"
        }
    ]
    return (
        <>
            <section className=" bg-[#0E0636] rounded-3xl md:px-7.5 md:mt-37 mx-3 mt-12 py-12 md:py-32 md:mx-6">
                <h2 className="text-white text-2xl md:text-5xl text-center leading-10 md:leading-17 font-semibold">Why <img className="w-9.5 h-9.5 md:w-14.5 md:h-14.5 inline" src="/trophy.svg" alt="" /> Top <br className="md:hidden" /> Professional <br className="hidden md:inline" /> Trust GiftedForge</h2>
                <p className="text-white pt-6 md:pt-8 text-center mb-12 md:mb-25 text-[8px] md:text-sm font-medium">Next-Gen Tech Advantages, Now at Your Fingertips</p>
                <div className="grid gap-y-6 xl:gap-y-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {trustCards.map((card, index) => (
                        <TrustCard
                            index={index}
                            key={index}
                            title={card.title}
                            text={card.text}
                            src={card.src}
                            className={!showAll && index >= 2 ? "hidden md:flex" : ""}
                        />
                    ))}


                    <button
                        onClick={() => setShowAll((prev) => !prev)}
                        className="border mt-6 border-white text-white mx-auto px-4 py-2 font-medium rounded-full md:hidden"
                    >
                        {showAll ? "Less" : "Load More"}
                    </button>

                </div>
            </section>
        </>
    )
}

export default Trust;