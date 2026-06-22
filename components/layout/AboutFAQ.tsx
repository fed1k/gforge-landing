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
            <div className="bg-[#0E0636] relative mx-3 rounded-3xl lg:mx-6">
                <div className="absolute w-full h-px bg-[#DAD8FF33] top-20 "></div>
                <div className="absolute h-[286px] lg:h-[538px] w-px bg-[#DAD8FF33] left-[81px] lg:left-[251px] top-0"></div>
                <div className="absolute h-[286px] lg:h-[538px] w-px bg-[#DAD8FF33] right-[150px] top-0"></div>
                <div className="absolute h-[286px] lg:h-[538px] w-px bg-[#DAD8FF33] right-[50px] top-0"></div>
                <p className="text-white text-sm font-medium lg:text-xl pl-5 pt-12 hidden lg:block">Frequently Asked Question’s</p>
                <p className="text-white text-sm font-medium lg:text-xl pl-5 pt-12 lg:hidden">FAQ's</p>
                <div className="overflow-hidden mt-[219px]">
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

                <div className="  mx-3 mb-17 lg:mb-25 lg:mx-12 p-6 flex flex-col items-start pb-12">
                    <div className="flex flex-col items-start lg:gap-4">
                        <div className="flex justify-center translate-x-1.5">
                            {/* three images */}
                            <img className="w-12 h-12 object-cover rounded-full border border-white" src="/firdavs.jpg" alt="" />
                            <img className="w-12 -translate-x-2 h-12 object-cover rounded-full border border-white" src="/ceo.jpg" alt="" />
                            <img className="w-12 -translate-x-4 h-12 object-cover object-[center_65%] rounded-full border border-white" src="/muhammad.jpg" alt="" />
                        </div>

                        <div className="text-white lg:text-start text-start">
                            <h3 className="pt-8 pb-2 lg:p-0  font-medium">Still have questions?</h3>
                            <p className="pt-4 text-sm font-light">Can’t find the answer you’re looking <br className="lg:hidden" />  for? Please chat to our friendly team.</p>
                        </div>
                    </div>

                    <button
                        onClick={(e) => e.currentTarget.focus()}
                        className="mt-12 border-b border-white pb-1 flex items-center gap-1 text-white focus:outline-none  transition-all duration-300 cursor-pointer"
                    >
                        Get in Touch
                        <img src="/arrow-right-stick.svg" className="w-4 h-4" alt="" />
                    </button>
                </div>

            </div>
            {/*  */}
            <div className="bg-[#6B6AFD0D] rounded-3xl mx-3 mb-12 lg:mb-25 lg:mx-12 px-6 py-8 lg:py-12 flex flex-col items-center">
                <h3 className="text-xl text-[#0E0636] font-medium">Ready to get started?</h3>
                <p className="leading-7 text-[#666F8B] pt-6 lg:text-xl lg:leading-8 pb-8 w-[321px] lg:w-[856px] text-center">Join thousands of users already discovering new opportunities to work, create, and connect through GiftedForge. Whether you're looking to grow your skills, find meaningful projects, or build your digital presence, GiftedForge gives you the tools and space to turn ideas into real opportunities.</p>
                
                <button
                    onClick={(e) => e.currentTarget.focus()}
                    className="text-sm border border-[#6B6AFD] font-semibold lg:text-base text-[#6B6AFD] rounded-full h-[46px] w-[159px] lg:w-[173px] lg:h-[49px] hover:shadow-[0px_4px_24px_0px_#00000029] focus:shadow-[0px_4px_24px_0px_#00000029] focus:outline-none active:shadow-[0px_4px_24px_0px_#00000029] transition-all duration-300 cursor-pointer"
                >
                    Sign Up Now
                </button>
                <button
                    onClick={(e) => e.currentTarget.focus()}
                    className="text-sm mt-4 font-semibold lg:text-base text-white rounded-full h-[46px] w-[159px] lg:w-[173px] lg:h-[49px] bg-[#6B6AFD] hover:shadow-[0px_4px_24px_0px_#00000029] focus:shadow-[0px_4px_24px_0px_#00000029] focus:outline-none active:shadow-[0px_4px_24px_0px_#00000029] transition-all duration-300 cursor-pointer"
                >
                    Join Community
                </button>
            </div>
        </div>
    )
}

export default AboutFaq;