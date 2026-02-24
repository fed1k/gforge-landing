"use client";

import AboutProfileCard from "../ui/AboutProfileCard";

const AboutTeam = () => {
   
    return (
        <>
        {/* w-77.25 lg:w-[386px] lg:h-[467px] */}
            <section className=" bg-[#0E0636] rounded-3xl lg:px-[85px] md:my-37 mx-3 mb-17 mt-12 py-12 md:py-32 md:mx-6">
                <h2 className="text-white text-2xl md:text-5xl text-center leading-10 md:leading-17 font-semibold">Meet Our <img className="w-9.5 h-9.5 md:w-14.5 md:h-14.5 inline" src="/movingstar.svg" alt="" /> Talented <br className="" /> Team Specialists</h2>
                <p className="text-white pt-6 md:pt-8 text-center mb-17 md:mb-25 text-[8px] md:text-sm font-medium">Get to know the talented minds behind GiftedForge.</p>
                <div className="grid gap-y-8 justify-center lg:grid-cols-[386px_386px] xl:grid-cols-[386px_386px_386px] lg:gap-8">

                    <AboutProfileCard name="Alexander Nikolaevich" position="Founder & CEO of the GiftedForge" img="/ceo.jpg" />
                    <AboutProfileCard name="Muhammad Huzaifa" position="UI/UX Designer of the GiftedForge" img="/muhammad.jpg" />
                    <AboutProfileCard name="Firdavs Allamurotov" position="Full Stack Developer of the GiftedForge" img="/firdavs.jpg" />
                   
                </div>
            </section>
        </>
    )
}

export default AboutTeam;