import HeroOthers from "@/components/layout/HeroOthers"
import Videos from "@/components/layout/Videos"

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Success Stories',
    description: "From the very first project to long-term growth, discover how GiftedForge empowers freelancers and clients to collaborate seamlessly and achieve more together.",
    alternates: {
        canonical: '/success-stories',
    },
};

const SucessStories = () => {
    return (
        <>
            <HeroOthers subtextWidth="lg:max-w-[616px] max-w-[301px]" isAbout={false} title="Success Stories" subtext="From the very first project to long-term growth, discover how GiftedForge empowers freelancers and clients to collaborate seamlessly and achieve more together." />
            <Videos />
        </>
    )
}

export default SucessStories
