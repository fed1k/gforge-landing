"use client"

import FaqCard from "../ui/FaqCard";

const questions = [
    {
        question: <>How are payments protected?</>,
        answer: "Funds are held securely in escrow and are only released to the freelancer once the project has been completed and officially approved client."
    },
    {
        question: <>Who can use GiftedForge?</>,
        answer: "Anyone can use it—from freelancers and clients to creators and digital entrepreneurs looking to collaborate and grow."
    },
    {
        question: <>Is GiftedForge one product?</>,
        answer: "GiftedForge is an ecosystem that currently includes a freelance marketplace and a Telegram-based digital ownership platform."
    },
    {
        question: <>How are payments protected?</>,
        answer: "Funds are held securely in escrow and are only released to the freelancer once the project has been completed and officially approved client."
    },
    {
        question: <>Who can use GiftedForge?</>,
        answer: "Anyone can use it—from freelancers and clients to creators and digital entrepreneurs looking to collaborate and grow."
    },
    {
        question: <>Is GiftedForge one product?</>,
        answer: "GiftedForge is an ecosystem that currently includes a freelance marketplace and a Telegram-based digital ownership platform."
    },
]

const questionsNext = [
    {
        question: <>Is the marketplace free to join?</>,
        answer: "Yes. Users can create a free account and immediately start exploring opportunities, connecting with others, and finding projects that match their skills."
    },
    {
        question: <>Do I need experience with crypto?</>,
        answer: <>No. The Telegram platform is designed to make digital ownership simple, accessible, and easy to understand, allowing users to engage with it without needing prior crypto experience.</>
    },
    {
        question: <>Is the marketplace free to join?</>,
        answer: "Yes. Users can create a free account and immediately start exploring opportunities, connecting with others, and finding projects that match their skills."
    },
]

const AboutFaq = () => {
    return (
        <div>
            <div className="bg-[#0E0636] relative mx-3 rounded-3xl lg:mx-6">
                <div className="absolute w-full h-px bg-[#DAD8FF33] top-20 lg:top-[142px]"></div>
                <div className="absolute h-[286px] lg:h-[346px] w-px bg-[#DAD8FF33] left-[81px] lg:left-[380px] top-0"></div>
                <div className="absolute h-[286px] lg:h-[346px] w-px bg-[#DAD8FF33] right-[150px] lg:right-[446px] top-0"></div>
                <div className="absolute h-[286px] lg:h-[346px] w-px bg-[#DAD8FF33] right-[50px] lg:right-[92px] top-0"></div>
                <p className="text-white text-sm font-medium lg:text-xl pl-5 pt-12 lg:pt-25 hidden lg:block lg:pl-10.5">Frequently Asked Question’s</p>
                <p className="text-white text-sm font-medium lg:text-xl pl-5 pt-12 lg:hidden">FAQ's</p>
                <div className="overflow-hidden mt-[219px]">
                    <div className="flex gap-[23px] animate-scroll-right w-max lg:pb-1">
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

                <div className="   mb-17 lg:mb-25 p-6 pl-5 lg:pl-10.5 flex flex-col items-start pb-12">
                    <div className="flex flex-col items-start lg:gap-4">
                        <div className="flex justify-center">
                            {/* three images */}
                            <img className="w-12 h-12 lg:w-14.5 lg:h-14.5 object-cover rounded-full border border-white" src="/firdavs.jpg" alt="" />
                            <img className="w-12 lg:w-14.5 lg:h-14.5 -translate-x-2 h-12 object-cover rounded-full border border-white" src="/ceo.jpg" alt="" />
                            <img className="w-12 lg:w-14.5 lg:h-14.5 -translate-x-4 h-12 object-cover object-[center_65%] rounded-full border border-white" src="/muhammad.jpg" alt="" />
                        </div>

                        <div className="text-white lg:text-start text-start">
                            <h3 className="pt-8 lg:p-0  font-medium lg:text-xl">Still have questions?</h3>
                            <p className="pt-4 text-sm font-light lg:text-base">Can’t find the answer you’re looking for? <br className="lg:hidden" /> Please chat <br className="hidden lg:inline" /> to our friendly team.</p>
                        </div>
                    </div>

                    <button
                        onClick={(e) => e.currentTarget.focus()}
                        className="group mt-12 hover:text-[#DAD8FF] hover:border-[#DAD8FF] focus:text-[#DAD8FF] focus:border-[#DAD8FF] border-b border-white pb-1 flex items-center gap-1 text-white focus:outline-none transition-all duration-300 cursor-pointer"
                    >
                        Get in Touch
                        <span
                            className="w-4 h-4 bg-white transition-colors duration-300 group-hover:bg-[#DAD8FF] group-focus:bg-[#DAD8FF]"
                            style={{
                                WebkitMaskImage: "url('/arrow-right-stick.svg')",
                                maskImage: "url('/arrow-right-stick.svg')",
                                WebkitMaskSize: "contain",
                                maskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                maskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                                maskPosition: "center",
                            }}
                        />
                    </button>
                </div>

            </div>
            {/*  */}
            <div className="bg-[#6B6AFD0D] rounded-3xl mx-3 mb-12 lg:mb-25 lg:mx-12 px-6 py-8 lg:py-12 flex flex-col items-center">
                <h3 className="text-xl text-[#0E0636] font-medium">Ready to get started?</h3>
                <p className="leading-7 text-[#666F8B] pt-6 lg:leading-8 pb-8 text-center">Join thousands of users already discovering new opportunities to work, create, and connect through GiftedForge. <br className="hidden lg:inline" /> Whether you're looking to grow your skills, find meaningful projects, or build your digital presence, GiftedForge gives <br className="hidden lg:inline" /> you the tools and space to turn ideas into real opportunities.</p>
                <div className="flex flex-col lg:flex-row items-center lg:gap-4">

                    <button
                        onClick={(e) => e.currentTarget.focus()}
                        className="text-sm border border-[#6B6AFD] font-semibold lg:text-base text-[#6B6AFD] rounded-full h-[46px] w-[159px] lg:w-[173px] lg:h-[49px] hover:shadow-[0px_4px_24px_0px_#00000029] focus:shadow-[0px_4px_24px_0px_#00000029] focus:outline-none active:shadow-[0px_4px_24px_0px_#00000029] transition-all duration-300 cursor-pointer"
                    >
                        Sign Up Now
                    </button>
                    <button
                        onClick={(e) => e.currentTarget.focus()}
                        className="text-sm mt-4 lg:mt-0 font-semibold lg:text-base text-white rounded-full h-[46px] w-[159px] lg:w-[173px] lg:h-[49px] bg-[#6B6AFD] hover:shadow-[0px_4px_24px_0px_#00000029] focus:shadow-[0px_4px_24px_0px_#00000029] focus:outline-none active:shadow-[0px_4px_24px_0px_#00000029] transition-all duration-300 cursor-pointer"
                    >
                        Join Community
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutFaq;