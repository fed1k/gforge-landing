"use client";

import AboutProfileCard from "../ui/AboutProfileCard";

const AboutTeam = () => {

    return (
        <>
            {/* w-77.25 lg:w-[386px] lg:h-[467px] */}
            <section className=" px-6 lg:px-12 lg:my-37 my-17">
                <h2 className="text-[#0E0636] text-2xl md:text-5xl  leading-10 md:leading-17 font-semibold">Meet Our <img className="w-9.5 h-9.5 md:w-14.5 md:h-14.5 inline" src="/movingstar.svg" alt="" /> Team</h2>
                <p className="text-[#666F8B] pt-6 md:pt-8  mb-17 md:mb-25 lg:text-xl">A passionate team of creators and <br className="lg:hidden" /> problem-solvers bringing ideas to <br /> life through innovation, design, and technology.</p>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-17">
                    <p className="text-[#666F8B] text-xl">Founder and <br /> Admin’s</p>
                    <div className="grid gap-y-12 justify-start grid-cols-[294px] lg:grid-cols-[294px_294px_294px] lg:gap-8">

                        <AboutProfileCard link="#" name="Alexander Nikolaevich" position="Founder & CEO of the GiftedForge" img="/ceo.jpg" />
                        <AboutProfileCard link="https://www.linkedin.com/in/muhammad-huzaifa-b7a0a5228/" name="Muhammad Huzaifa" position="UI/UX Designer of the GiftedForge" img="/muhammad.jpg" />
                        <AboutProfileCard link="https://www.linkedin.com/in/firdavs-allamurotov/" name="Firdavs Allamurotov" position="Full Stack Developer of the GiftedForge" img="/firdavs.jpg" />

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutTeam;