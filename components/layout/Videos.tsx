"use client";

import { useState } from "react";
import Thumbnail from "../ui/SuccessCardThumbnail";
import VideoModal from "../ui/VideoModal";

const Videos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                    title="How GiftedForge Helped a Freelance UI/UX Designer Scale Their Career" 
                    isActive={false} 
                    name="Carla" 
                    date="2020" 
                    link="" 
                    index={1} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/alex.jpg" 
                    category="Development & Tech" 
                    title="How GiftedForge Helped a Front-End Developer Build a Global Client Base" 
                    isActive={false} 
                    name="Carla" 
                    date="2020" 
                    link="" 
                    index={2} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/story3.jpg" 
                    category="Marketing & Strategy" 
                    title="How GiftedForge Helped a Digital Marketer Achieve Financial Freedom" 
                    isActive={false} 
                    name="Carla" 
                    date="2020" 
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
                    title="How GiftedForge Helped a Freelance Copywriter Secure Steady Work" 
                    isActive={false} 
                    name="Carla" 
                    date="2020" 
                    link="" 
                    index={4} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/glasses.jpg" 
                    category="Video & Animation" 
                    title="How GiftedForge Helped a Video Editor Land International Clients" 
                    isActive={false} 
                    name="Carla" 
                    date="2020" 
                    link="" 
                    index={5} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/smileguy.jpg" 
                    category="AI & Machine Learning" 
                    title="How GiftedForge Helped a Machine Learning Engineer Tackle Projects" 
                    isActive={false} 
                    name="Carla" 
                    date="2020" 
                    link="" 
                    index={6} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 xl:grid-cols-[432px_317px_545px] gap-6 xl:justify-center">
                <Thumbnail 
                    img="/story2.jpg" 
                    category="Photography & Visual Arts" 
                    title="How GiftedForge Helped a Freelance Photographer Gain High-Profile Clients" 
                    isActive={false} 
                    name="Carla" 
                    date="2020" 
                    link="" 
                    index={7} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/curlygirl.jpg" 
                    category="Voice & Audio" 
                    title="How GiftedForge Helped a Voiceover Artist Land High-Paying Clients" 
                    isActive={false} 
                    name="Carla" 
                    date="2020" 
                    link="" 
                    index={8} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
                <Thumbnail 
                    img="/blacksmile.jpg" 
                    category="Illustration & Art" 
                    title="How GiftedForge Helped an Illustrator Turn Passion into Profit" 
                    isActive={false} 
                    name="Carla" 
                    date="2020" 
                    link="" 
                    index={9} 
                    onWatchClick={() => handleWatchClick("https://www.w3schools.com/html/mov_bbb.mp4")}
                />
            </div>

            <button className="mt-17 mx-auto text-white bg-[#6B6AFD] rounded-full w-[153px] h-[49px]">Load more</button>

            <VideoModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                videoUrl={activeVideo}
            />
        </div>
    )
}

export default Videos;