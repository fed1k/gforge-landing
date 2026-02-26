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

const Thumbnail = ({ img, category, title, date, name, link, index, isActive, onWatchClick }: SuccessCardProps) => {
    const indexStr = String(index).padStart(2, '0');

    return (
        <div style={{ backgroundImage: `url(${img})` }} className="rounded-3xl group relative p-5 lg:p-6 bg-cover bg-center bg-no-repeat h-[311px] lg:h-[319px]">
            <div className={`absolute inset-0 group-hover:bg-[#0E063699] bg-[#00000099]  rounded-3xl`}></div>
            <div className={`relative flex flex-col gap-13 lg:gap-0 lg:justify-between h-full  `}>
                <div className="flex gap-3 text-white flex-wrap">
                    <p className="px-[14px] text-sm font-semibold   lg:py-[7px] py-1.5 rounded-xl border bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.4)]">{indexStr}</p>
                    <p className="px-5.5 text-sm font-semibold  lg:py-[7px] py-1.5 rounded-xl border bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.4)]">{category}</p>
                </div>
                <div>

                    <h2 className=" font-semibold text-xl max-w-[305px] lg:max-w-[571px] text-white">{title}</h2>
                    <p className="pt-4 pb-6 text-white text-sm">{date} - {name}</p>
                    <button onClick={onWatchClick} className={`group-hover:bg-[#6B6AFD] bg-transparent border-white self-start h-[38px] cursor-pointer translate-y-[3px] rounded-full px-3 py-2 lg:py-2.5 text-white text-xs font-semibold border transition-colors duration-300`}>Watch now <img className="w-4 h-4 lg:h-4.5 lg:w-4.5 inline ml-2" src="/video-square.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Thumbnail;