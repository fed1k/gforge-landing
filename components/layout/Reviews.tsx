"use client";

import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const reviewsData = [
    {
        image: "/speaker.jpg",
        quote: "\"GiftedForge transformed my career 12 clients in 3 months, double the income, and total peace of mind with secure escrow.\"",
        author: "Sarah Johnson - UI/UX Designer"
    },
    {
        image: "/speaker2.jpg",
        quote: "\"Before GiftedForge, I chased clients. Now the right projects come to me. I closed 14 projects in two months, doubled my income,...\"",
        author: "Michael Chen - Full Stack Developer"
    }
];

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < reviewsData.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const currentReview = reviewsData[currentIndex];

    return (
        <section className="mx-3 md:mx-6 mb-17 md:mb-37 flex flex-col rounded-3xl px-6 py-12 md:py-32 bg-[#DAD8FF33]">
            <h2 className="text-2xl leading-9 md:text-5xl md:leading-16 text-center font-semibold text-[#0E0636]">What our <img className="w-9.5 h-9.5 inline md:hidden md:h-12 md:w-12" src="/groupo.svg" alt="" /> users <img className="w-9.5 h-9.5 hidden md:inline md:h-14.5 md:w-14.5" src="/groupo.svg" alt="" /> <br className="md:hidden" /> say about <br className="hidden md:inline" /> GiftedForge <br className="md:hidden" /> experience</h2>
            <img className="self-center pt-6 md:pt-7.5 pb-3" src="/reviewguys.svg" alt="" />
            <p className="pt-4.5 text-sm font-medium text-[#0E0636] text-center pb-12 md:pb-25">800+ User Reviews</p>

            <div className="flex flex-col items-center lg:flex-row gap-6">
                <img
                    key={currentIndex}
                    className="rounded-3xl w-[321px] h-[332px] lg:w-[434px] lg:h-[449px] object-cover transition-opacity duration-300"
                    src={currentReview.image}
                    alt=""
                />
                <div className="bg-[#6B6AFD] h-[412px] w-[321px] lg:w-auto lg:flex-1 lg:h-[449px] flex flex-col justify-between rounded-3xl p-4 lg:p-8">
                    <p className="text-white leading-9 lg:leading-[148%] text-2xl lg:text-[40px] font-medium">{currentReview.quote}</p>

                    <div>
                        <p className="text-[#FFFFFFCC] text-sm lg:text-2xl text-right pt-8.5 pb-6 xl:pb-12">{currentReview.author}</p>

                        <div className="flex justify-end gap-4 items-center md:gap-6">
                            <button
                                onClick={handlePrev}
                                className={`cursor-pointer rounded-full flex items-center justify-center transition-all duration-300 ${
                                    currentIndex === 0
                                        ? "w-8.5 h-8.5 border border-white md:h-11 md:w-11"
                                        : "w-9.5 h-9.5 bg-white md:w-12 md:h-12"
                                }`}
                                aria-label="Previous review"
                            >
                                <GoArrowLeft className={`w-6 h-6 transition-colors duration-300 ${
                                    currentIndex === 0 ? "text-white" : "text-[#0E0636]"
                                }`} />
                            </button>
                            <button
                                onClick={handleNext}
                                className={`cursor-pointer rounded-full flex items-center justify-center transition-all duration-300 ${
                                    currentIndex === reviewsData.length - 1
                                        ? "w-8.5 h-8.5 border border-white md:h-11 md:w-11"
                                        : "w-9.5 h-9.5 bg-white md:w-12 md:h-12"
                                }`}
                                aria-label="Next review"
                            >
                                <GoArrowRight className={`w-6 h-6 transition-colors duration-300 ${
                                    currentIndex === reviewsData.length - 1 ? "text-white" : "text-[#0E0636]"
                                }`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews;
