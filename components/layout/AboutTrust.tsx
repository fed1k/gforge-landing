"use client";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import AboutTrustCard from "../ui/AboutTrustCard";
import { useRef, useState, useEffect } from "react";

const AboutTrust = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(NaN);
    const [activeMobileButton, setActiveMobileButton] = useState("")
    const totalSlides = 4;

    useEffect(() => {

        let timeout = setTimeout(() => {
            setActiveIndex(0)
        }, 100)

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % totalSlides);
        }, 10000); // 10 seconds

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        };
    }, []);

    useEffect(() => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const slide = el.children[activeIndex] as HTMLElement;
        if (!slide) return;

        const containerPadding = parseInt(window.getComputedStyle(el).paddingLeft || "0");
        
        el.scrollTo({
            left: slide.offsetLeft - containerPadding,
            behavior: "smooth",
        });
    }, [activeIndex]);

    const scroll = (direction: "left" | "right") => {
        setActiveMobileButton(direction)
        if (direction === "left") {
            setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        } else {
            setActiveIndex((prev) => (prev + 1) % totalSlides);
        }
    };

    return (
        <section className="mt-17 md:mt-37 md:mb-37">
            <h2 className="px-6 md:px-12 text-[#0E0636] text-2xl md:text-5xl leading-11 md:leading-15 font-semibold">
                Why{" "}
                <img
                    className="w-9.5 h-9.5 md:h-14.5 md:w-14.5 inline"
                    src="/arrowright.svg"
                    alt=""
                />{" "}
                Thousands <br /> Trust GiftedForge
            </h2>

            <div className="px-6 md:px-12 flex items-center justify-between">
                <p className="text-[#0E0636] pt-2 mb-12 md:mb-25 text-[10px] md:text-xl">
                    Where Talent, Technology, and Trust Meet.
                </p>

                <div className="hidden md:flex items-center gap-6 mb-25">
                    <button
                        onClick={() => scroll("left")}
                        className="w-11 h-11 rounded-full border border-[#0E0636] 
                        flex items-center justify-center 
                        hover:bg-[#0E0636] hover:text-white  cursor-pointer
                        transition-colors"
                        aria-label="Previous projects"
                    >
                        <GoArrowLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="w-12 h-12 rounded-full border border-[#0E0636] 
                        flex items-center justify-center cursor-pointer
                        hover:bg-[#0E0636] hover:text-white 
                        transition-colors"
                        aria-label="Next projects"
                    >
                        <GoArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto px-6 md:px-12 
                scrollbar-hide scroll-smooth 
                snap-x snap-mandatory
                md:[&::-webkit-scrollbar]:hidden 
                md:[-ms-overflow-style:none] 
                md:[scrollbar-width:none]"
            >
                {/* Slide 1 */}
                <div className="shrink-0 snap-end mt-4 flex flex-col gap-4 
                    md:flex-row md:gap-6
                    md:min-w-[clamp(800px,85vw,1100px)]"
                >
                    <AboutTrustCard
                        isActive={activeIndex === 0}
                        title="Our Mission"
                        text="We provide a safe, reliable space for freelancers and clients to collaborate confidently and complete projects smoothly."
                    />
                    <img
                        src="/teampc.png"
                        className="w-[345px] h-[231px]
                        sm:w-[420px] sm:h-[280px]
                        md:w-[clamp(500px,60vw,722px)]
                        md:h-[clamp(340px,40vw,483px)]
                        rounded-4xl md:rounded-[48px]"
                        alt=""
                    />
                </div>

                {/* Slide 2 */}
                <div className="shrink-0 snap-start mt-4 flex flex-col gap-4 
                    md:flex-row md:gap-6 
                    md:min-w-[clamp(800px,85vw,1100px)]"
                >
                    <AboutTrustCard
                        isActive={activeIndex === 1}
                        title="Our Values"
                        text={<>Transparency, innovation, and care <br className="hidden md:inline" /> guide everything we do, creating an open, supportive, and valued <br className="inline md:hidden" /> experience for all users.</>}
                    />
                    <img
                        src="/innovations.png"
                        className="w-[345px] h-[231px]
                        sm:w-[420px] sm:h-[280px]
                        md:w-[clamp(500px,60vw,722px)]
                        md:h-[clamp(340px,40vw,483px)]
                        rounded-4xl md:rounded-[48px]"
                        alt=""
                    />
                </div>

                {/* Slide 3 */}
                <div className="shrink-0 snap-start mt-4 flex flex-col gap-4 
                    md:flex-row md:gap-6 
                    md:min-w-[clamp(800px,85vw,1100px)]"
                >
                    <AboutTrustCard
                        isActive={activeIndex === 2}
                        title="Our Technology"
                        text={<>GiftedForge uses AI, secure blockchain escrow, and modern UI/UX to deliver <br /> a smarter, safer, and smoother experience.</>}
                    />
                    <img
                        src="/technology.png"
                        className="w-[345px] h-[231px]
                        sm:w-[420px] sm:h-[280px]
                        md:w-[clamp(500px,60vw,722px)]
                        md:h-[clamp(340px,40vw,483px)]
                        rounded-4xl md:rounded-[48px]"
                        alt=""
                    />
                </div>

                {/* Slide 4 */}
                <div className="shrink-0 snap-start mt-4 flex flex-col gap-4 
                    md:flex-row md:gap-6 
                    md:min-w-[clamp(800px,85vw,1100px)]"
                >
                    <AboutTrustCard
                        isActive={activeIndex === 3}
                        title="Why GiftedForge"
                        text={<>We don’t just connect people—we <br /> build trust, helping freelancers grow <br /> and clients achieve results with confidence.</>}
                    />
                    <img
                        src="/groupy.png"
                        className="w-[345px] h-[231px]
                        sm:w-[420px] sm:h-[280px]
                        md:w-[clamp(500px,60vw,722px)]
                        md:h-[clamp(340px,40vw,483px)]
                        rounded-4xl md:rounded-[48px]"
                        alt=""
                    />
                </div>
            </div>

            {/* Mobile Arrows */}
            <div className="flex items-center ml-6 mt-12 md:hidden gap-4 mb-17">
                <button
                    onClick={() => scroll("left")}
                    className={`w-8.5 h-8.5 rounded-full border border-[#0E0636] 
                    flex items-center justify-center
                    ${activeMobileButton === "left" && "text-white bg-[#0E0636]"}
                    focus:bg-[#0E0636] focus:text-white
                    active:bg-[#0E0636] active:text-white 
                    transition-colors`}
                    aria-label="Previous projects"
                >
                    <GoArrowLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={() => scroll("right")}
                    className={`w-9.5 h-9.5 rounded-full border border-[#0E0636] 
                    flex items-center justify-center
                    focus:bg-[#0E0636] focus:text-white
                    active:bg-[#0E0636] active:text-white 
                     ${activeMobileButton === "right" && "text-white bg-[#0E0636]"}
                    transition-colors`}
                    aria-label="Next projects"
                >
                    <GoArrowRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
};

export default AboutTrust;