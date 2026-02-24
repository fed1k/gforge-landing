import AboutFaq from "@/components/layout/AboutFAQ"
import AboutTeam from "@/components/layout/AboutTeam"
import AboutTrust from "@/components/layout/AboutTrust"
import HeroOthers from "@/components/layout/HeroOthers"

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