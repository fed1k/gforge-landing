import Image from "next/image";

const Rating = () => {
    return (
        <div className="border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] flex items-center gap-2 rounded-4xl py-2 px-3 md:py-3 md:px-8  mx-auto">
            <div className="flex items-center">

                <Image src="/star.svg" className="md:h-5 md:w-5" width={10} height={10} alt="Rating star" />
                <Image src="/star.svg" className="md:h-5 md:w-5" width={10} height={10} alt="Rating star" />
                <Image src="/star.svg" className="md:h-5 md:w-5" width={10} height={10} alt="Rating star" />
                <Image src="/star.svg" className="md:h-5 md:w-5" width={10} height={10} alt="Rating star" />
                <Image src="/star.svg" className="md:h-5 md:w-5" width={10} height={10} alt="Rating star" />
            </div>
            <p className="text-white text-[8px] md:text-base font-medium">Rated 4.9/5 from over 800 reviews</p>
        </div>
    )
}

export default Rating;