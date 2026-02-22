"use client";

import { useRef, useEffect } from "react";
import ProjectCard from "../ui/ProjectCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Demand = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollContainerRef.current) {
            const isMd = window.innerWidth >= 768;
            const cardWidth = isMd ? 479 : 345;
            const gap = 16;
            const paddingLeft = isMd ? 48 : 24; // px-6 = 24px, md:px-12 = 48px
            const containerWidth = scrollContainerRef.current.clientWidth;
            // Calculate scroll position to center the second card
            const secondCardStart = paddingLeft + cardWidth + gap;
            const scrollPosition = secondCardStart - (containerWidth - cardWidth) / 2;
            scrollContainerRef.current.scrollLeft = Math.max(0, scrollPosition);
        }
    }, []);

    const scroll = (direction: "left" | "right", scrollAmount = 496) => {
        if (scrollContainerRef.current) {
            // const scrollAmount = 496; // card width (480px) + gap (16px)
            const newScrollLeft = scrollContainerRef.current.scrollLeft +
                (direction === "left" ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="mt-17 md:mt-37">
            <h2 className="px-6 md:px-12 text-[#0E0636] text-2xl md:text-5xl leading-11 md:leading-15 font-semibold">Most <img className="w-9.5 h-9.5 md:h-12 md:w-12 inline" src="/arrowrightillus.svg" alt="" /> In-Demand <br /> Projects here</h2>
            <div className="px-6 md:px-12 flex items-center justify-between">
                <p className="text-[#0E0636] pt-2 mb-12 md:mb-25 text-[8px] md:text-sm font-medium">Explore your perfect project now</p>
                <div className="hidden md:flex gap-6 mb-25">
                    <button
                        onClick={() => scroll("left")}
                        className="w-11 h-11 cursor-pointer rounded-full border border-[#0E0636] flex items-center justify-center hover:bg-[#0E0636] hover:text-white transition-colors"
                        aria-label="Previous projects"
                    >
                        <GoArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-11 h-11 cursor-pointer rounded-full border border-[#0E0636] flex items-center justify-center hover:bg-[#0E0636] hover:text-white transition-colors"
                        aria-label="Next projects"
                    >
                        <GoArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto pb-17 md:pb-37 px-6 md:px-12 scrollbar-hide md:overflow-x-scroll md:[&::-webkit-scrollbar]:hidden md:[-ms-overflow-style:none] md:[scrollbar-width:none]"
            >
                <div className="w-[345px] md:w-[479px] md:h-[465px] h-[402] shrink-0">
                    <ProjectCard img="/tablet.jpg" title={
                        <>
                            Develop Our E-Learning website with <br /> a
                            Front End coding skills
                        </>
                    } location="United States" />
                </div>
                <div className="w-[345px] md:w-[479px] md:h-[465px] h-[402] shrink-0">
                    <ProjectCard img="/collabteam.jpg" title={<>Revamp Our E-commerce website with <br /> a Fresh and Clean UI Design</>} location="Hong Kong" />
                </div>
                <div className="w-[345px] md:w-[479px] md:h-[465px] h-[402] shrink-0">
                    <ProjectCard img="/translator.jpg" title="Certified Translator for Business & Technical Documents" location="Germany" />
                </div>
            </div>
        </section>
    )
}

export default Demand;