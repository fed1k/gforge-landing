interface AboutProfileCardType {
    img: string;
    name: string;
    position: string
}

const AboutProfileCard = ({ img, position, name }: AboutProfileCardType) => {
    return (
        <div
            className="z-20  flex flex-col items-start  border-2 border-white"
        >
            {/* Background Image */}
           <img src={img} className="w-[294px] h-[334px] mb-4 rounded-lg object-cover" alt="" />

            {/* Content */}
            <div className="relative h-[91px] flex-1 z-10 flex flex-col  justify-center ">
                <p className="text-[#0E0636] font-medium text-xl">{name}</p>
                <p className="text-[#0E0636] text-xs lg:text-sm pt-2">{position}</p>
            </div>
        </div>  
    )
}

export default AboutProfileCard