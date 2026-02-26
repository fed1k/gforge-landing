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

    if (!isOpen || !mounted) return null;

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto"
            style={{ backgroundColor: "#000000CC" }}
            onClick={onClose}
        >
            <div 
                className="relative w-full max-w-5xl bg-white rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 md:p-12">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                        <div className="max-w-[80%]">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#0E0636] leading-tight mb-4">
                                {title}
                            </h3>
                        </div>
                        <button 
                            onClick={onClose}
                            className="w-12 h-12 flex items-center justify-center bg-[#F4F4F4] hover:bg-[#6B6AFD] hover:text-white rounded-full text-[#0E0636] transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* Video Container */}
                    <div 
                        className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black group cursor-pointer"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => isPlaying && setShowControls(false)}
                        onClick={togglePlay}
                    >
                        <video
                            ref={videoRef}
                            className="w-full h-full object-contain"
                            src={videoUrl}
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
                                <div className="flex items-center justify-end mb-4">
                                    {/* Time Display */}
                                    <div className="text-white text-sm font-medium tabular-nums">
                                        {formatTime(currentTime)} / {formatTime(duration)}
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer group/progress">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={progress}
                                        onChange={handleProgressChange}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                    />
                                    <div 
                                        className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-100"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Center Controls */}
                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all z-20 gap-10">
                                {/* Skip Backward */}
                                <button 
                                    onClick={skipBackward}
                                    className="text-white flex justify-center items-center cursor-pointer w-16 h-16 video-pause-design rounded-full hover:text-[#6B6AFD] transition-transform transform hover:scale-110"
                                    title="Back 10s"
                                >
                                    <img className="w-8 h-8" src="/back.svg" alt="" />
                                </button>

                                {/* Play/Pause */}
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        togglePlay();
                                    }}
                                    className="w-24 h-24 cursor-pointer video-pause-design flex items-center justify-center rounded-full text-white shadow-2xl transform transition-transform hover:scale-110"
                                >
                                    <img className="w-10 h-10" src="/Pause.svg" alt="" />
                                </button>

                                {/* Skip Forward */}
                                <button 
                                    onClick={skipForward}
                                    className="text-white flex justify-center cursor-pointer items-center w-16 h-16 video-pause-design rounded-full  hover:text-[#6B6AFD] transition-transform transform hover:scale-110"
                                    title="Forward 10s"
                                >
                                    <img className="w-8 h-6" src="/forward.svg" alt="" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Description & Action */}
                    <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-[#0E0636]/70 text-lg md:text-xl max-w-2xl leading-relaxed text-center md:text-left">
                            {description}
                        </p>
                        <button 
                            onClick={onClose}
                            className="px-10 py-4 bg-[#6B6AFD] hover:bg-[#5a59e0] text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-[#6B6AFD]/20 whitespace-nowrap"
                        >
                            Back to Stories
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
