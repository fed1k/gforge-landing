interface AboutProfileCardType {
    img: string;
    name: string;
    position: string
}

const AboutProfileCard = ({ img, position, name }: AboutProfileCardType) => {
    return (
        <div
            className="relative w-77.25 lg:w-[386px] lg:h-[467px] z-20 h-93.5 flex items-end rounded-3xl overflow-hidden border-2 border-white"
        >
            {/* Background Image */}
            <div
                style={{ backgroundImage: `url(${img})`, backgroundPosition: "bottom" }}
                className="absolute inset-0 bg-cover bg-no-repeat"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#6B6AFD1A]" /> 
            {/* change bg-black/40 to any color & opacity you want */}

            {/* Content */}
            <div className="relative h-[91px] flex-1 border-t-2 border-white z-10 rounded-3xl flex flex-col items-center justify-center bg-[#DAD8FF]">
                <p className="text-[#0E0636] font-bold lg:text-lg">{name}</p>
                <p className="text-[#0E0636] text-xs lg:text-sm pt-2">{position}</p>
            </div>
        </div>  
    )
}

export default AboutProfileCard