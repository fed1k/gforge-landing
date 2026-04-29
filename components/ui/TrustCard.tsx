import Image from "next/image";

interface TrustCardProps {
  title: string;
  text: string;
  src: string;
  index: number;
  className?: string;
}

const TrustCard = ({ title, text, src, index, className = "" }: TrustCardProps) => {
  return (
    <div
      tabIndex={0} // allows focus
      className={`px-4 cardonic-${index} group py-6 flex flex-col justify-between 
        hover:bg-[#6B6AFD] focus:bg-[#6B6AFD] rounded-3xl 
      bg-white mx-7.5 md:mx-3 ${className}`}
    >
      <div>
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-2xl 
            group-hover:bg-white group-focus:bg-white 
            bg-[#0E0636]`}
        >
          <Image className={`${index === 0 ? "brightness-0 invert" : ""} group-hover:filter-none group-focus:filter-none`} alt="" src={src} width={24} height={24} />
        </div>
        <h2
          className={`pt-6 pb-26 text-[22px] md:text-2xl leading-5.5 font-semibold 
            group-hover:text-white group-focus:text-white 
            text-[#2C2C2C]`}
        >
          {title}
        </h2>
      </div>
      <p
        className={`leading-5.5 md:text-lg group-hover:text-white group-focus:text-white 
          text-[#2C2C2C]`}
      >
        {text}
      </p>
    </div>
  );
};

export default TrustCard;
