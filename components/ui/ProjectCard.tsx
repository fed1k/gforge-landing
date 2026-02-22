"use client";

import { useState } from "react";
import ProjectTag from "./ProjectTag";

interface ProjectCardProps {
    img: string;
    title: React.ReactNode;
    location: string;
}

const ProjectCard = ({ img, title, location }: ProjectCardProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className="group rounded-3xl h-full bg-cover bg-center bg-no-repeat relative overflow-hidden cursor-pointer"
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => setIsActive(!isActive)}
        >
            <div className={`absolute inset-0 ${isActive ? "bg-[#0E063699]" : "bg-[#00000099]"} group-hover:bg-[#0E063699] rounded-3xl`}></div>
            <div className="relative p-5 flex items-start flex-col justify-between h-full">
                <div className="flex self-end justify-end pb-11">
                    <div className="rounded-full flex items-center gap-1 border py-1 px-2.5 bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.2)]">
                        <div className="w-1 h-1 rounded-full bg-[#00F652]"></div>
                        <p className="text-[#00F652] text-[10px]">Available</p>
                    </div>
                </div>

                <div>


                    <p className="text-white inline text-[10px] rounded-full border border-[#FFFFFF] flex items-center gap-1 px-2 py-[5px]"><img className="inline w-3 h-3 md:w-3.5 md:h-3.5" src="/location.svg" alt="" /> {location}</p>
                    <h2  className="text-white leading-7 text-xl font-semibold pt-3">{title}</h2>
                    <p className="text-white text-[10px] pt-2 pb-4">Posted 23 minutes ago <span className="inline-block mx-1 mb-0.5 w-1 h-1 bg-white rounded-full"></span> Payment Verified <img className="w-3 h-3 inline mb-0.5" src="/verify.svg" alt="" /></p>
                    <div className=" gap-3 flex">

                        <ProjectTag title="Budget $2,500" />
                        <ProjectTag title="14 Days Duration" />
                        <ProjectTag title="10-15 Proposals" />
                    </div>

                    <p className={`text-white pt-4 pb-6 text-[10px] md:text-sm ${isActive ? 'block' : 'hidden'} md:hidden md:group-hover:block`}>Our ecommerce webiste is in need of a revamp and we
                        are looking for a talented UI designer to help us...</p>

                    <a className={`text-white border font-semibold border-white items-center gap-1 rounded-full px-3 py-1.75 text-xs bg-[#6B6AFD] ${isActive ? 'inline-flex' : 'hidden'} md:hidden md:group-hover:inline-flex`} href="">View now <img className="w-3.5 h-3.5 inline" src="/arrow-right.svg" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;