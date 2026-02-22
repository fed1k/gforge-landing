"use client";

import { useState, useEffect } from "react";
import SuccessCard from "../ui/SuccessCard";

const useIsLg = () => {
    const [isLg, setIsLg] = useState(false);

    useEffect(() => {
        const checkIsLg = () => setIsLg(window.innerWidth >= 1024);
        checkIsLg();
        window.addEventListener("resize", checkIsLg);
        return () => window.removeEventListener("resize", checkIsLg);
    }, []);

    return isLg;
};

const cardDataLg = [
    {
        img: "/story1.jpg", name: "Carla", date: "Jan 26, 2026", category: "Design & Creative", title: (
            <>
                How GiftedForge Helped a <br />
                Freelance UI/UX Designer Scale <br /> Their Career
            </>
        )
    },
    { img: "/story2.jpg", name: "Carla", date: "Jan 26, 2026", category: "Photography & Visual Arts", title: "How GiftedForge Helped a talent Turning Passion into Profit with Photography & Visual Arts" },
    { img: "/story3.jpg", name: "Mia", date: "Jan 26, 2026", category: "Marketing & Strategy", title: "How GiftedForge Helped a Strategic Thinkers Turned Ideas into Scalable Brands" },
    { img: "/story4.jpg", name: "Carla", date: "Jan 26, 2026", category: "Writing & Content", title: "How GiftedForge Helped Writers Turned Words into a Thriving Creative Business" },
];

const cardDataMobile = [
    { img: "/story1.jpg", name: "Carla", date: "Jan 26, 2026", category: "Design & Creative", title: "How GiftedForge Helped a Freelance UI/UX Designer Scale Their Career" },
    { img: "/alex.jpg", name: "Alex", date: "Jan 16, 2026", category: "Frontend Dev", title: "How GiftedForge Helped talent Turning Passion into Profit with Photography & Vis..." },
    { img: "/story3.jpg", name: "Mia", date: "Jan 26, 2026", category: "Marketing & Strategy", title: "How GiftedForge Helped a Strategic Thinkers Turned Ideas into Scalable Brands" },
    { img: "/emma.jpg", name: "Emma", date: "Feb 4, 2026", category: "Writing & Content", title: "How GiftedForge Helped Writers Turned Words into a Thriving Creative Business" },
];

const Stories = () => {
    const [activeCard, setActiveCard] = useState(1);
    const isLg = useIsLg();
    const cardData = isLg ? cardDataLg : cardDataMobile;

    return (
        <section className="px-6 py-17 md:px-12 md:py-37">
            <h2 className="text-2xl md:text-5xl md:leading-15 font-semibold text-[#0E0636]">Our <img className="w-9.5 h-9.5 md:h-12 md:w-12 inline" src="/success.svg" alt="" /> Success <br /> Inspiring Stories</h2>
            <div className="flex justify-between pb-12 lg:pb-25 items-end">

                <p className="pt-4 md:pt-0 text-[8px] md:text-sm font-medium text-[#0E0636] ">Inspiring Journeys, Proven Success</p>
                <button className="hidden md:block  font-medium text-[#0E0636] cursor-pointer py-2 px-7 border border-[#0E0636] rounded-full">View All</button>
            </div>
            <div
                className="flex gap-4 overflow-x-auto overflow-y-hidden -mx-6 px-6 scrollbar-hide lg:overflow-x-scroll lg:[&::-webkit-scrollbar]:hidden lg:[-ms-overflow-style:none] lg:[scrollbar-width:none]"
            >
                <div
                    className={`w-86.25 lg:max-w-[635px] h-[402px] min-h-80 lg:h-140 shrink-0 transition-all duration-300 ${activeCard === 1 ? 'lg:flex-1 lg:shrink' : 'lg:w-50'}`}
                    onMouseEnter={() => setActiveCard(1)}
                >
                    <SuccessCard index={1} img={cardData[0].img} link="" name={cardData[0].name} date={cardData[0].date} category={cardData[0].category} title={cardData[0].title} isActive={activeCard === 1} onWatchClick={() => setActiveCard(1)} />
                </div>
                <div
                    className={`w-86.25 lg:max-w-[635px] h-[402px] lg:h-140 shrink-0 transition-all duration-300 ${activeCard === 2 ? 'lg:flex-1 lg:shrink' : 'lg:w-50'}`}
                    onMouseEnter={() => setActiveCard(2)}
                >
                    <SuccessCard index={2} img={cardData[1].img} link="" name={cardData[1].name} date={cardData[1].date} category={cardData[1].category} title={cardData[1].title} isActive={activeCard === 2} onWatchClick={() => setActiveCard(2)} />
                </div>
                <div
                    className={`w-86.25 lg:max-w-[635px] h-[402px] lg:h-140 shrink-0 transition-all duration-300 ${activeCard === 3 ? 'lg:flex-1 lg:shrink' : 'lg:w-50'}`}
                    onMouseEnter={() => setActiveCard(3)}
                >
                    <SuccessCard index={3} img={cardData[2].img} link="" name={cardData[2].name} date={cardData[2].date} category={cardData[2].category} title={cardData[2].title} isActive={activeCard === 3} onWatchClick={() => setActiveCard(3)} />
                </div>
                <div
                    className={`w-86.25 lg:max-w-[635px] h-[402px] lg:h-140 shrink-0 transition-all duration-300 ${activeCard === 4 ? 'lg:flex-1 lg:shrink' : 'lg:w-50'}`}
                    onMouseEnter={() => setActiveCard(4)}
                >
                    <SuccessCard index={4} img={cardData[3].img} link="" name={cardData[3].name} date={cardData[3].date} category={cardData[3].category} title={cardData[3].title} isActive={activeCard === 4} onWatchClick={() => setActiveCard(4)} />
                </div>
            </div>

            <button className="mt-12 md:hidden  font-medium text-[#0E0636] cursor-pointer py-2 px-7 border border-[#0E0636] rounded-full">View All</button>
        </section>
    )
}

export default Stories;