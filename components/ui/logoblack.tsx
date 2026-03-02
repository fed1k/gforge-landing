import Image from "next/image";

export default function BlackLogo({mode = "black"}) {
  return (
    <div className={`flex gap-2 items-center ${mode === "black" && "md:gap-4"} `}>
      <Image className={`${mode === "black" && "md:w-6 md:h-12"}`} width={16} height={32} alt="Logo" src={mode === "black" ? "/blacklogo.svg" : "/whitelogo.svg"} />
      <p className={`text-2xl font-semibold ${mode === "black" ? "text-[#0E0636] md:text-[36px]" : "text-white"}  `}>GiftedForge</p>
    </div>
  );
}
