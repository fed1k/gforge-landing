const AboutTrustCard = ({ progress = "w-[67px] md:w-[142px]", title = "", text = "" }) => {



    return (
        <div className="p-6 md:p-12 md:max-h-[483px] bg-[#F5F7FB] rounded-4xl  max-w-[284px] md:min-w-[596px]">
            <h2 className="font-semibold text-xl md:leading-[124%] md:text-[40px] text-[#0E0636] pb-10 md:pb-30">{title.trim().split(/\s+/)[0]} <br /> {title.trim().split(/\s+/)[1]}</h2>
            <p className="text-xs max-w-59 md:text-2xl md:max-w-[500px] leading-[148%] text-[#0E0636]">{text}</p>
            <div className="w-full mt-4 h-1 md:h-1.5 rounded-4xl bg-[#0E06361A]">
                <div className={` ${progress} h-full rounded-4xl bg-[#0E0636]`}></div>
            </div>
        </div>
    )
}

export default AboutTrustCard