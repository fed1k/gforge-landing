import Image from "next/image";

const companies = [
    { logo: "githublogo.svg", name: "GitHub" },
    { logo: "stripelogo.svg", name: "Stripe" },
    { logo: "gitlablogo.svg", name: "GitLab" },
    { logo: "paypallogo.svg", name: "PayPal" },
    { logo: "wiselogo.svg", name: "Wise" },
];

const TrustedComps = () => {
    return (
        <div className="w-full">
            {/* Desktop: static layout */}
            <div className="hidden md:flex gap-8 justify-center">
                {companies.map((company) => (
                    <div key={company.name} className="flex gap-3 items-center">
                        <Image width={38} height={38} alt={`${company.name} logo`} src={company.logo} />
                        <p className="text-[#00000066] font-medium text-2xl">{company.name}</p>
                    </div>
                ))}
            </div>

            {/* Mobile: infinite scroll */}
            <div className="md:hidden overflow-hidden">
                <div className="flex gap-8 animate-scroll w-max">
                    {/* First set */}
                    {companies.map((company) => (
                        <div key={company.name} className="flex gap-3 items-center shrink-0">
                            <Image width={38} height={38} alt={`${company.name} logo`} src={company.logo} />
                            <p className="text-[#00000066] font-medium text-2xl whitespace-nowrap">{company.name}</p>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {companies.map((company) => (
                        <div key={`${company.name}-dup`} className="flex gap-3 items-center shrink-0">
                            <Image width={38} height={38} alt={`${company.name} logo`} src={company.logo} />
                            <p className="text-[#00000066] font-medium text-2xl whitespace-nowrap">{company.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrustedComps;