"use client";
import { useState } from "react";
import Image from "next/image";

type VideoItem = { poster: string; href?: string; title?: string };
type VideoGridProps = { items: VideoItem[]; className?: string };

export default function VideoGrid({ items, className = "" }: VideoGridProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    if (!items?.length) return null;

    const isYouTube = (url: string) => /youtube\.com|youtu\.be/.test(url);
    const isVimeo = (url: string) => /vimeo\.com/.test(url);

    return (
        <section
            className={`w-full max-w-[1920px] mx-auto grid gap-[10px] md:gap-[5px] xl:gap-[15px] grid-cols-1 md:grid-cols-3 ${className}`}
        >
            {items.map((v, i) => {
                const isActive = activeIndex === i;
                const videoUrl = v.href ?? "";
                const embedUrl = isYouTube(videoUrl)
                    ? videoUrl.replace("watch?v=", "embed/")
                    : isVimeo(videoUrl)
                        ? videoUrl.replace("vimeo.com", "player.vimeo.com/video")
                        : videoUrl;

                return (
                    <div key={i} className="relative overflow-hidden group rounded bg-black h-[312px] md:h-[360px] lg:h-[410px] xl:h-[480px] 2xl:h-[692px]">
                        {isActive ? (
                            videoUrl.endsWith(".mp4") ? (
                                <video src={embedUrl} controls autoPlay className="w-full h-full object-cover" />
                            ) : (
                                <iframe
                                    src={embedUrl}
                                    className="w-full h-full"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                />
                            )
                        ) : (
                            <>
                                <Image
                                    src={v.poster}
                                    alt={v.title || "Video poster"}
                                    fill
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                    sizes="100vw"
                                />

                                <button
                                    onClick={() => setActiveIndex(i)}
                                    className="absolute inset-0 grid place-items-center focus:outline-none"
                                >
                                    <div className="relative w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] 2xl:w-[200px] 2xl:h-[200px] rounded-full bg-[#131313]/25">
                                        <div className="absolute inset-0 grid place-items-center">
                                            <div className="w-[70.64px] h-[70.64px] lg:w-[113px] lg:h-[113px] 2xl:w-[141.27px] 2xl:h-[141.27px]  2xl:pl-3 flex justify-center items-center rounded-full bg-[#131313]">
                                                <svg width="48" height="48" className="w-[23.6px] h-[23.6px] lg:w-[37.76px] lg:h-[37.76px] xl:w-[48px] 2xl:h-[48px]"viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_50_2865)">
                                                        <path d="M42.964 21.0573L7.1719 0.39393C6.72582 0.136036 6.21969 0.000169959 5.70442 1.59351e-07C5.18916 -0.00016964 4.68293 0.135363 4.23668 0.392963C3.79043 0.650563 3.41989 1.02114 3.16234 1.46742C2.90478 1.9137 2.76931 2.41994 2.76953 2.93521V44.2659C2.76914 44.6515 2.84479 45.0333 2.99214 45.3895C3.1395 45.7458 3.35567 46.0695 3.62828 46.3421C3.90089 46.6147 4.22458 46.8309 4.58084 46.9782C4.9371 47.1256 5.31892 47.2012 5.70445 47.2008C6.21111 47.2008 6.71778 47.069 7.1719 46.8072L42.964 26.1438C43.4098 25.8856 43.78 25.5148 44.0373 25.0684C44.2947 24.622 44.4301 24.1158 44.4301 23.6006C44.4301 23.0853 44.2947 22.5791 44.0373 22.1328C43.78 21.6864 43.4098 21.3155 42.964 21.0573Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_50_2865">
                                                            <rect width="47.2005" height="47.2005" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>


                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </>
                        )}
                    </div>
                );
            })}
        </section>
    );
}
