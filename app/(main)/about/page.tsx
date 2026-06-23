import AboutChoose from "@/components/layout/AboutChoose";
import AboutFaq from "@/components/layout/AboutFAQ"
import AboutTeam from "@/components/layout/AboutTeam"
import AboutTrust from "@/components/layout/AboutTrust"
import HeroOthers from "@/components/layout/HeroOthers"

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: "Welcome to the future of freelancing. GiftedForge combines advanced AI protection, instant payments, and a modern, futuristic design to create a secure and seamless experience for freelancers and clients worldwide.",
    alternates: {
        canonical: '/about',
    },
};

const About = () => {
    return (
        <div>
            <HeroOthers />
            <AboutTrust />
            <AboutChoose />
            <AboutTeam />
            <AboutFaq />
        </div>
    )
}

export default About
