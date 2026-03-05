"use client";

import { useEffect, useState, useRef } from "react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string;
    title?: string;
    description?: string;
}

const VideoModal = ({
    isOpen,
    onClose,
    videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4",
    title = "Success Story",
    description = "Discover how GiftedForge empowers freelancers to achieve their goals and scale their careers."
}: VideoModalProps) => {
    const [mounted, setMounted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showControls, setShowControls] = useState(true);
    const [viddescription, setVidDescription] = useState("When Carla joined GiftedForge, she was struggling to find consistent clients for her UI/UX projects. Within three months, she landed 8 high-quality projects through the platform. With GiftedForge’s secure escrow system and AI-powered matching, she now manages multiple clients confidently, delivering projects on time and growing her monthly income by 70%.")
    const [expanded, setExpanded] = useState(false)
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setMounted(true);
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === " ") {
                e.preventDefault();
                togglePlay();
            }
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const skipBackward = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
        }
    };

    const skipForward = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 10);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (videoRef.current) {
            const newTime = (Number(e.target.value) / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
            setProgress(Number(e.target.value));
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            videoRef.current.muted = newVolume === 0;
            setIsMuted(newVolume === 0);
        }
    };

    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
        controlsTimeoutRef.current = setTimeout(() => {
            if (isPlaying) setShowControls(false);
        }, 3000);
    };

    const toggleFullscreen = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (!videoRef.current) return;
        if (!document.fullscreenElement) {
            videoRef.current.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    };

    if (!isOpen || !mounted) return null;

    return (
        <div
            className="fixed inset-0 px-6 z-[100] flex items-start justify-center bg-black/80 pt-8 pb-16 overflow-y-auto overscroll-contain"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-[1004px] bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="py-6 px-4 lg:p-20">
                    {/* Header */}
                    <div className="flex justify-center items-start mb-8">

                        <h3 className="text-2xl lg:text-[32px] text-center font-semibold text-[#0E0636] leading-tight">
                            How GiftedForge <br className="inline lg:hidden" />
                            Helped a Freelance UI/<br className="inline lg:hidden" />UX <br className="hidden lg:inline" /> Designer Scale <br className="inline lg:hidden" />
                            Their Career
                        </h3>

                    </div>

                    {/* Video Container */}
                    <div
                        className="relative w-full h-[390px] aspect-video rounded-3xl overflow-hidden bg-black group cursor-pointer"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => isPlaying && setShowControls(false)}
                        onClick={togglePlay}
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-full object-contain"
                            src={"/story.mp4"}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            autoPlay
                        />

                        {/* Controls Overlay */}
                        <div
                            className={`absolute inset-0 flex flex-col justify-end transition-opacity duration-500 bg-gradient-to-t from-black/60 via-transparent to-transparent ${showControls ? 'opacity-100' : 'opacity-0'}`}
                        >

                            <div className="p-4 md:p-8" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-white">Carla</p>
                                        <p className="text-white">Jan 26, 2026</p>
                                    </div>
                                    {/* Time Display */}
                                    <div className="text-white text-sm font-medium tabular-nums">
                                        {formatTime(currentTime)} / {formatTime(duration)}
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div
                                    className="relative w-full h-0.5 bg-white/20 rounded-full cursor-pointer group/progress"
                                >
                                    {/* Invisible range input for clicking/dragging anywhere */}
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={progress}
                                        onChange={handleProgressChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                                    />

                                    {/* Progress fill */}
                                    <div
                                        className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-150 ease-out"
                                        style={{ width: `${progress}%` }}
                                    />

                                    {/* Time label + progress dot container */}
                                    <div
                                        className="
            absolute top-1/2 -translate-y-1/2 pointer-events-none
            transition-all duration-150 ease-out
            z-30
        "
                                        style={{
                                            left: `calc(${progress}% - 8px)`, // centers on the dot (dot is w-4 = 16px wide)
                                        }}
                                    >
                                        {/* Always-visible time box */}
                                        <div
                                            className="
                absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                px-3 pt-1.5 max-w-[48px] h-[26px] text-center border border-white
                bg-[#D9D9D9] text-[#151010] text-[10px] video-player-tooltip-shadow rounded-lg
                whitespace-nowrap tabular-nums
            "
                                        >
                                            {formatTime(currentTime)}
                                        </div>

                                        {/* The rounded progress dot */}
                                        <div
                                            className={`
                w-4 h-4 bg-white rounded-full 
                border-4 border-white/90
                shadow-[0_0_10px_rgba(255,255,255,0.7)]
                transition-all duration-150 ease-out
                group-hover/progress:scale-125 group-hover/progress:shadow-lg
            `}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Controls */}
                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all z-20 gap-2.5">

                                {/* full screnn */}
                                <button
                                    onClick={toggleFullscreen}
                                    className="text-white flex top-6 right-6 absolute justify-center items-center cursor-pointer w-[35px] h-[38px] lg:w-12 lg:h-12 video-pause-design rounded-full hover:text-[#6B6AFD] transition-transform transform hover:scale-110"
                                    title="Back 10s"
                                >
                                    <img className="w-6 h-6 " src="/fullscreen.svg" alt="" />
                                </button>


                                {/* Skip Backward */}
                                <button
                                    onClick={skipBackward}
                                    className="text-white flex justify-center items-center cursor-pointer w-[39px] h-[39px] lg:w-16 lg:h-16 video-pause-design rounded-full hover:text-[#6B6AFD] transition-transform transform hover:scale-110"
                                    title="Back 10s"
                                >
                                    <img className="w-4 h-4 lg:w-8 lg:h-8" src="/back.svg" alt="" />
                                </button>

                                {/* Play/Pause */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        togglePlay();
                                    }}
                                    className="lg:w-24 lg:h-24 h-14.5 w-14.5 cursor-pointer video-pause-design flex items-center justify-center rounded-full text-white shadow-2xl transform transition-transform hover:scale-110"
                                >
                                    <img className="w-6 h-6 lg:w-10 lg:h-10" src="/Pause.svg" alt="" />
                                </button>

                                {/* Skip Forward */}
                                <button
                                    onClick={skipForward}
                                    className="text-white flex justify-center cursor-pointer items-center w-[39px] h-[39px] lg:w-16 lg:h-16 video-pause-design rounded-full  hover:text-[#6B6AFD] transition-transform transform hover:scale-110"
                                    title="Forward 10s"
                                >
                                    <img className="w-4 h-4 lg:w-8 lg:h-6" src="/forward.svg" alt="" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Description & Action */}
                    <div className="mt-8 flex flex-col items-center justify-between gap-8">
                        <p className="text-[#0E0636] text-lg leading-relaxed text-center">
                            {expanded ? viddescription : `${viddescription.slice(0, 80)}`}
                            {' '}
                            {!expanded && (
                                <button
                                    onClick={() => setExpanded(v => !v)}
                                    className="text-[#6B6AFD]"
                                >
                                    {expanded ? 'less' : 'read more...'}
                                </button>
                            )}
                        </p>
                        <button
                            onClick={onClose}
                            className="px-10 py-4 bg-[#6B6AFD] hover:shadow-[0px_4px_24px_0px_#00000029] focus:shadow-[0px_4px_24px_0px_#00000029]  active:shadow-[0px_4px_24px_0px_#00000029] text-white font-bold rounded-full transition-all cursor-pointer duration-300 whitespace-nowrap"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
