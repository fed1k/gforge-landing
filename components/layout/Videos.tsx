"use client";

import { useState } from "react";
import Thumbnail from "../ui/SuccessCardThumbnail";
import VideoModal from "../ui/VideoModal";

const Videos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAllVides, setShowAllVideos] = useState(false)
    const [activeVideo, setActiveVideo] = useState("");
    const [activeVideoDetails, setActiveVideoDetails] = useState({
        title: "",
        name: "",
        text: ""
    })

    const handleWatchClick = (videoUrl: string) => {
        setActiveVideo(videoUrl);
        setIsModalOpen(true);
    };

    return (
        <div className="mt-17 lg:mt-37 flex flex-col px-6 lg:px-12 gap-6 pb-12">
            {/* Row 1 */}
            <div className="grid grid-cols-1 xl:grid-cols-[432px_317px_545px] gap-6 xl:justify-center">
                <Thumbnail 
                    img="/story1.jpg" 
                    category="Design & Creative" 
                    title={<>How GiftedForge Helped a <br /> Freelance UI/UX Designer Scale <br className="hidden lg:inline" /> Their Career</>} 
                    isActive={false} 
                    name="Carla" 
                    date="Jan 26, 2026" 
                    link="" 
                    index={1} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/alex.jpg" 
                    category="Development & Tech" 
                    title={<>How GiftedForge Helped <br className="inline lg:hidden" /> a Front-End Developer <br className="inline lg:hidden" /> Build a Global Client Base</>} 
                    isActive={false} 
                    name="Alex" 
                    date="Jan 15, 2026" 
                    link="" 
                    index={2} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/story3.jpg" 
                    category="Marketing & Strategy" 
                    title={<>How GiftedForge Helped a Digital <br className="hidden lg:inline" /> Marketer Achieve Financial <br className="hidden lg:inline" /> Freedom</>}
                    isActive={false} 
                    name="Mia" 
                    date="Jan 10, 2026" 
                    link="" 
                    index={3} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 xl:grid-cols-[432px_545px_318px] gap-6 xl:justify-center">
                <Thumbnail 
                    img="/emma.jpg" 
                    category="Writing & Content" 
                    title={<>How GiftedForge Helped a <br /> Freelance Copywriter Secure <br /> Steady Work</>} 
                    isActive={false} 
                    name="Emma" 
                    date="Jan 18, 2026" 
                    link="" 
                    index={4} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/glasses.jpg" 
                    category="Video & Animation" 
                    title={<>How GiftedForge Helped a <br /> Video Editor Land International <br /> Clients</>} 
                    isActive={false} 
                    name="Olivia" 
                    date="Jan 24, 2026" 
                    link="" 
                    index={5} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/smileguy.jpg" 
                    category="AI & Machine Learning" 
                    title={<>How GiftedForge Helped <br className="lg:hidden" /> a Machine Learning <br className="lg:hidden" /> Engineer Tackle Projects</>} 
                    isActive={false} 
                    name="Ryan" 
                    date="Jan 17, 2026" 
                    link="" 
                    index={6} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
            </div>

            {/* Row 3 */}
            <div className={`${showAllVides ? "grid" : "hidden"}  grid-cols-1 xl:grid-cols-[432px_317px_545px] gap-6 xl:justify-center`}>
                <Thumbnail 
                    img="/story2.jpg" 
                    category="Photography & Visual Arts" 
                    title={<>How GiftedForge Helped a <br /> Freelance Photographer Gain High-Profile Clients</>} 
                    isActive={false} 
                    name="Sam" 
                    date="Jan 7, 2026" 
                    link="" 
                    index={7} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/curlygirl.jpg" 
                    category="Voice & Audio" 
                    title="How GiftedForge Helped a Voiceover Artist Land High-Paying Clients" 
                    isActive={false} 
                    name="Nina" 
                    date="Jan 25, 2026" 
                    link="" 
                    index={8} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/blacksmile.jpg" 
                    category="Illustration & Art" 
                    title={<>How GiftedForge Helped <br /> an Illustrator Turn Passion <br /> into Profit</>} 
                    isActive={false} 
                    name="Leo" 
                    date="Jan 23, 2026" 
                    link="" 
                    index={9} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
            </div>

            <button onClick={() => setShowAllVideos(true)} className="mt-17 mx-auto text-white bg-[#6B6AFD] rounded-full w-[153px] h-[49px] hover:shadow-[0px_4px_24px_0px_#00000029] focus:shadow-[0px_4px_24px_0px_#00000029] cursor-pointer focus:outline-none active:shadow-[0px_4px_24px_0px_#00000029]">Load more</button>

            <VideoModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                videoUrl={activeVideo}
            />
        </div>
    )
}

export default Videos;