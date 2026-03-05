import AboutFaq from "@/components/layout/AboutFAQ"
import AboutTeam from "@/components/layout/AboutTeam"
import AboutTrust from "@/components/layout/AboutTrust"
import HeroOthers from "@/components/layout/HeroOthers"


import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',  // or whatever
    description: "Welcome to the future of freelancing. GiftedForge combines advanced AI protection, instant payments, and a modern, futuristic design to create a secure and seamless experience for freelancers and clients worldwide.",
    alternates: {
        canonical: '/about',  // relative path — Next.js auto-completes to full URL using metadataBase
        // If you prefer absolute (also fine):
        // canonical: 'https://yourdomain.com/about',
    },
    // add description, openGraph, etc. here too for better SEO
};

const About = () => {
    return (
        <div>
            <HeroOthers />
            <AboutTrust />
            <AboutTeam />
            <AboutFaq />
        </div>
    )
}

export default About