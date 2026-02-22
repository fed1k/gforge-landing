interface SuccessCardProps {
    img: string;
    category: string;
    title: React.ReactNode;
    date: string;
    name: string;
    link: string;
    index: number;
    isActive: boolean;
    onWatchClick?: () => void;
}

const SuccessCard = ({ img, category, title, date, name, link, index, isActive, onWatchClick }: SuccessCardProps) => {
    const indexStr = String(index).padStart(2, '0');

    return (
        <div style={{ backgroundImage: `url(${img})` }} className="rounded-3xl relative p-5 lg:p-8 pb-5.5 bg-cover bg-center bg-no-repeat h-full min-h-80 lg:min-h-0">
            <div className={`absolute inset-0 ${isActive ? "bg-[#0E063699]" : "bg-[#00000099]"}  rounded-3xl`}></div>

            {/* Mobile: always visible | Desktop: visible when active */}
            <div className={`relative flex flex-col gap-24 lg:gap-0 lg:justify-between h-full z-10 transition-opacity duration-300 ${isActive ? 'lg:opacity-100' : 'lg:opacity-0'}`}>
                <div className="flex gap-3 text-white flex-wrap">
                    <p className="px-5 font-semibold lg:text-2xl lg:px-6.5 lg:py-[7px] py-1.5 rounded-xl border bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.4)]">{indexStr}</p>
                    <p className="px-5 font-semibold lg:text-2xl lg:px-6.5 lg:py-[7px] py-1.5 rounded-xl border bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.4)]">{category}</p>
                </div>
                <div>

                    <h2 className=" font-semibold text-2xl lg:text-[32px] max-w-[305px] lg:max-w-[571px] text-white">{title}</h2>
                    <p className="pt-4 pb-6 text-white">{date} - {name}</p>
                    <button onClick={onWatchClick} className={`${isActive ? 'bg-[#6B6AFD] ' : 'bg-transparent '} border-white self-start cursor-pointer translate-y-[3px] rounded-full px-3 py-2 md:py-2.5 text-white text-sm font-semibold border transition-colors duration-300`}>Watch now <img className="w-4 h-4 lg:h-4.5 lg:w-4.5 inline ml-2" src="/video-square.svg" alt="" /></button>
                </div>
            </div>

            {/* Desktop default state: index + vertical category */}
            <div className={`hidden lg:flex absolute inset-0 z-10 p-5 flex-col justify-between ${isActive ? 'lg:hidden' : ''}`}>
                <p className="px-5 font-semibold py-3 rounded-xl border bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.4)] text-white w-fit">{indexStr}</p>
                <p
                    className="px-5 font-semibold py-3 md:text-2xl md:h-[370px] rounded-xl border bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.4)] text-white w-fit"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                    {category}
                </p>
            </div>
        </div>
    )
}

export default SuccessCard;