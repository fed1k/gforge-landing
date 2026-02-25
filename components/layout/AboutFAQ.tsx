"use client"

import FaqCard from "../ui/FaqCard";

const questions = [
    {
        question: <>How to start working on <br /> the platform?</>,
        answer: "Register, complete your profile, and add your skills and portfolio. After verification, you can apply for projects or create your own."
    },
    {
        question: <>How does the escrow <br /> system work?</>,
        answer: "The client funds the project upfront. Payment is held securely in escrow and released to you once the work is approved."
    },
    {
        question: <>How does AI matching <br /> work?</>,
        answer: "The platform analyzes your skills, experience, and portfolio to automatically connect you with the most relevant projects and clients."
    },
    {
        question: <>How to start working on <br /> the platform?</>,
        answer: "Register, complete your profile, and add your skills and portfolio. After verification, you can apply for projects or create your own."
    },
    {
        question: <>How does the escrow <br /> system work?</>,
        answer: "The client funds the project upfront. Payment is held securely in escrow and released to you once the work is approved."
    },
    {
        question: <>How does AI matching <br /> work?</>,
        answer: "The platform analyzes your skills, experience, and portfolio to automatically connect you with the most relevant projects and clients."
    },
]

const questionsNext = [
    {
        question: <>How fast do freelancers get paid?</>,
        answer: <>Payments are released immediately after client approval and typically <br /> arrive based on your chosen payout method’s processing time.</>
    },
    {
        question: <>Is GiftedForge free to join?</>,
        answer: "Yes — creating an account and browsing projects is free; fees only apply when you complete paid work."
    },
]

const AboutFaq = () => {
    return (
        <div>
            <h2 className="px-6 md:px-12 text-[#0E0636] text-2xl md:text-5xl leading-11 md:leading-15 font-semibold">Frequently <img className="w-9.5 h-9.5 md:h-12 md:w-12 inline" src="/crown.svg" alt="" /> Asked <br /> Questions</h2>
            <p className="px-6 md:px-12 text-[#0E0636] pt-4 lg:pt-6 mb-12 md:mb-25 text-[10px] lg:text-xl">Common GiftedForge questions—answered fast.</p>

            <div className="overflow-hidden">
                <div className="flex gap-[23px] animate-scroll-right w-max">
                    {
                        questions.map((question, index) => (
                            <div key={`q1-${index}`} className="shrink-0 w-[432px]">
                                <FaqCard question={question.question} answer={question.answer} />
                            </div>
                        ))
                    }
                    {/* Duplicate for seamless loop */}
                    {
                        questions.map((question, index) => (
                            <div key={`q1-dup-${index}`} className="shrink-0 w-[432px]">
                                <FaqCard question={question.question} answer={question.answer} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="pt-6 overflow-hidden pb-12 lg:pb-25">
                <div className="flex gap-[23px] animate-scroll w-max">
                    {
                        [...questionsNext, ...questionsNext, ...questionsNext].map((question, index) => (
                            <div key={`q2-${index}`} className="shrink-0 w-[657px] ">
                                <FaqCard isLong={true} question={question.question} answer={question.answer} />
                            </div>
                        ))
                    }
                    {/* Duplicate for seamless loop */}
                    {
                        [...questionsNext, ...questionsNext, ...questionsNext].map((question, index) => (
                            <div key={`q2-dup-${index}`} className="shrink-0 w-[657px]">
                                <FaqCard isLong={true} question={question.question} answer={question.answer} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="bg-[#6B6AFD] rounded-3xl mx-3 mb-17 lg:mb-25 lg:mx-12 p-6 flex flex-col lg:flex-row lg:justify-between items-center">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
                    <div className="flex justify-center translate-x-1.5">
                        {/* three images */}
                        <img className="w-17.25 h-17.25 object-cover rounded-full border border-white" src="/firdavs.jpg" alt="" />
                        <img className="w-17.25 -translate-x-2 h-17.25 object-cover rounded-full border border-white" src="/ceo.jpg" alt="" />
                        <img className="w-17.25 -translate-x-4 h-17.25 object-cover object-[center_65%] rounded-full border border-white" src="/muhammad.jpg" alt="" />
                    </div>

                    <div className="text-white lg:text-start text-center">
                        <h3 className="pt-6 pb-2 lg:p-0 text-xl font-medium">Still have questions?</h3>
                        <p className="lg:whitespace-nowrap lg:pt-2">Can’t find the answer you’re looking <br className="lg:hidden" />  for? Please chat to our friendly team.</p>
                    </div>
                </div>

                <button 
                    onClick={(e) => e.currentTarget.focus()}
                    className="mt-8 lg:mt-0 text-[#6B6AFD] bg-white focus:bg-[#0E0636] focus:text-white focus:outline-none hover:bg-[#0E0636] hover:text-white active:bg-[#0E0636] active:text-white transition-all duration-300 cursor-pointer rounded-full w-[159px] h-[46px] font-semibold"
                >
                    Get in Touch
                </button>
            </div>

                    {/*  */}
            <div className="bg-[#6B6AFD1A] rounded-3xl mx-3 mb-12 lg:mb-25 lg:mx-12 px-6 py-8 lg:py-12 flex flex-col items-center">
                <h3 className="text-2xl text-[#0E0636] font-semibold lg:font-bold lg:text-[32px]">Ready to get started?</h3>
                <p className="leading-7 text-[#0E0636] pt-6 lg:text-xl lg:leading-8 pb-8 w-[321px] lg:w-[856px] text-center">Join the platform of the future today and unlock smarter opportunities, <br className="lg:hidden" /> faster growth, <br className="hidden lg:inline" /> and a seamless experience designed to help you succeed from day one.</p>
                <button 
                    onClick={(e) => e.currentTarget.focus()}
                    className="text-sm font-semibold lg:text-base text-white rounded-full h-[46px] w-[159px] lg:w-[173px] lg:h-[49px] bg-[#6B6AFD] hover:shadow-[0px_4px_24px_0px_#00000029] focus:shadow-[0px_4px_24px_0px_#00000029] focus:outline-none active:shadow-[0px_4px_24px_0px_#00000029] transition-all duration-300 cursor-pointer"
                >
                    Sign Up Now
                </button>
            </div>
        </div>
    )
}

export default AboutFaq;