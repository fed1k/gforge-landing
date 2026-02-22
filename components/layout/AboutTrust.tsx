"use client";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import AboutTrustCard from "../ui/AboutTrustCard";
import { useRef } from "react";

const AboutTrust = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        const el = scrollContainerRef.current;
        if (!el) return;

        const firstSlide = el.children[0] as HTMLElement;
        if (!firstSlide) return;

        const styles = window.getComputedStyle(el);
        const gap = parseInt(styles.columnGap || styles.gap || "0");

        const scrollAmount = firstSlide.offsetWidth + gap;

        el.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <section className="mt-17 md:mt-37 md:mb-37">
            <h2 className="px-6 md:px-12 text-[#0E0636] text-2xl md:text-5xl leading-11 md:leading-15 font-semibold">
                Why{" "}
                <img
                    className="w-9.5 h-9.5 md:h-12 md:w-12 inline"
                    src="/arrowright.svg"
                    alt=""
                />{" "}
                Thousands <br /> Trust GiftedForge
            </h2>

            <div className="px-6 md:px-12 flex items-center justify-between">
                <p className="text-[#0E0636] pt-2 mb-12 md:mb-25 text-[10px] md:text-xl">
                    Where Talent, Technology, and Trust Meet.
                </p>

                <div className="hidden md:flex gap-6 mb-25">
                    <button
                        onClick={() => scroll("left")}
                        className="w-11 h-11 rounded-full border border-[#0E0636] 
                        flex items-center justify-center 
                        hover:bg-[#0E0636] hover:text-white 
                        transition-colors"
                        aria-label="Previous projects"
                    >
                        <GoArrowLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className="w-11 h-11 rounded-full border border-[#0E0636] 
                        flex items-center justify-center 
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
                        title="Our Mission"
                        text="We provide a safe, reliable space for freelancers and clients to collaborate confidently and complete projects smoothly."
                    />
                    <img
                        src="/teampc.png"
                        className="w-[345px] h-[231px]
                        sm:w-[420px] sm:h-[280px]
                        md:w-[clamp(500px,60vw,722px)]
                        md:h-[clamp(340px,40vw,483px)]
                        rounded-4xl"
                        alt=""
                    />
                </div>

                {/* Slide 2 */}
                <div className="shrink-0 snap-start mt-4 flex flex-col gap-4 
                    md:flex-row md:gap-6 
                    md:min-w-[clamp(800px,85vw,1100px)]"
                >
                    <AboutTrustCard
                        progress="w-[120px] md:w-[242px]"
                        title="Our Values"
                        text="Transparency, innovation, and care guide everything we do, creating an open, supportive, and valued experience for all users."
                    />
                    <img
                        src="/innovations.png"
                        className="w-[345px] h-[231px]
                        sm:w-[420px] sm:h-[280px]
                        md:w-[clamp(500px,60vw,722px)]
                        md:h-[clamp(340px,40vw,483px)]
                        rounded-4xl"
                        alt=""
                    />
                </div>

                {/* Slide 3 */}
                <div className="shrink-0 snap-start mt-4 flex flex-col gap-4 
                    md:flex-row md:gap-6 
                    md:min-w-[clamp(800px,85vw,1100px)]"
                >
                    <AboutTrustCard
                        progress="w-[178px] md:w-[342px]"
                        title="Our Technology"
                        text="GiftedForge uses AI, secure blockchain escrow, and modern UI/UX to deliver a smarter, safer, and smoother experience."
                    />
                    <img
                        src="/technology.png"
                        className="w-[345px] h-[231px]
                        sm:w-[420px] sm:h-[280px]
                        md:w-[clamp(500px,60vw,722px)]
                        md:h-[clamp(340px,40vw,483px)]
                        rounded-4xl"
                        alt=""
                    />
                </div>

                {/* Slide 4 */}
                <div className="shrink-0 snap-start mt-4 flex flex-col gap-4 
                    md:flex-row md:gap-6 
                    md:min-w-[clamp(800px,85vw,1100px)]"
                >
                    <AboutTrustCard
                        title="Why GiftedForge"
                        text="We don’t just connect people—we build trust, helping freelancers grow and clients achieve results with confidence."
                        progress="w-full"
                    />
                    <img
                        src="/groupy.png"
                        className="w-[345px] h-[231px]
                        sm:w-[420px] sm:h-[280px]
                        md:w-[clamp(500px,60vw,722px)]
                        md:h-[clamp(340px,40vw,483px)]
                        rounded-4xl"
                        alt=""
                    />
                </div>
            </div>

            {/* Mobile Arrows */}
            <div className="flex ml-6 mt-12 md:hidden gap-4 mb-17">
                <button
                    onClick={() => scroll("left")}
                    className="w-8.5 h-8.5 rounded-full border border-[#0E0636] 
                    flex items-center justify-center 
                    hover:bg-[#0E0636] hover:text-white 
                    transition-colors"
                    aria-label="Previous projects"
                >
                    <GoArrowLeft className="w-6 h-6" />
                </button>

                <button
                    onClick={() => scroll("right")}
                    className="w-9.5 h-9.5 rounded-full border border-[#0E0636] 
                    flex items-center justify-center 
                    hover:bg-[#0E0636] hover:text-white 
                    transition-colors"
                    aria-label="Next projects"
                >
                    <GoArrowRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
};

export default AboutTrust;