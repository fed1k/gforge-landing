"use client"

import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
});

const ContactHero = () => {
    const [scale, setScale] = useState(1);
    const [pinLocation, setPinLocation] = useState("lg:top-15 lg:right-[94px]")
    const [mobilePinClass, setMobilePinClass] = useState("left-8 top-14");
    const [isMobileUA, setIsMobileUA] = useState(false);

    const zoomIn = () => {
        setScale(prev => Math.min(prev + 0.15, 2.5)); // max zoom limit ~2.5× — adjust as needed

    };

    const zoomOut = () => {
        setScale(prev => Math.max(prev - 0.15, 1)); // don't go below original size
    };

    

    useEffect(() => {
        const ua = navigator.userAgent;
        setIsMobileUA(/Mobi|Android|iPhone|iPad|Tablet/i.test(ua));
    }, []);

    useEffect(() => {
        switch (scale.toFixed(1)) {
            case "1.1":
                setPinLocation("lg:top-16 lg:right-[100px]")
                break
            case "1.3":
                setPinLocation("lg:top-18 lg:right-[110px]")
                break
            case "1.4":
                setPinLocation("lg:top-20 lg:right-[120px]")
                break
            case "1.6":
                setPinLocation("lg:top-24 lg:right-[130px]")
                break
            case "1.7":
                setPinLocation("lg:top-26 lg:right-[140px]")
                break
            case "1.9":
                setPinLocation("lg:top-30 lg:right-[145px]")
                break
            case "2.0":
                setPinLocation("lg:top-34 lg:right-[155px]")
                break
            case "2.2":
                setPinLocation("lg:top-34 lg:right-[165px]")
                break
            case "2.3":
                setPinLocation("lg:top-36 lg:right-[170px]")
                break
            case "2.5":
                setPinLocation("lg:top-40 lg:right-[180px]")
                break
        }
    }, [scale])

    useEffect(() => {
        const s = Number(scale.toFixed(1));
        console.log(s)
        if (s <= 1.0) setMobilePinClass("left-8 top-14");
        else if (s <= 1.3) setMobilePinClass("left-10 top-16");
        else if (s <= 1.6) setMobilePinClass("left-10 top-20");
        else if (s <= 2.0) setMobilePinClass("left-10 top-30");
        else setMobilePinClass("left-12 top-40");
    }, [scale]);

    return (
        <div className="h-[688px] lg:mx-6 mx-3 mb-17 rounded-3xl overflow-hidden relative">
            {/* Outer container — fixed size + overflow hidden */}
            <div className="absolute inset-0 bg-[#6B6AFD]" />

            {/* Zoomable background wrapper */}
            <div
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{
                    transform: `scale(${scale})`,
                    // Pull origin toward top-right-ish — matches your pin location better
                    // Adjust these values (0–1 range) until the pin feels centered when zoomed
                    transformOrigin: isMobileUA ? "10% 10%" : "90% 20%", // tweak: e.g. "70% 25%", "80% 35%"
                }}
            >
                <div
                    className="w-full h-full bg-[url(/bgMap.svg)] lg:bg-[url(/bgMapLg.svg)] bg-cover bg-no-repeat bg-center"
                />
            </div>

            <div className="absolute inset-0 bg-[#0000004D] z-0" />

            {/* Pins — stay fixed, not affected by zoom */}
            <img
                className={`absolute ${mobilePinClass} lg:hidden z-10`}
                src="/maplocation.svg"
                alt="location pin mobile"
            />
            <img
                className={`absolute hidden lg:block  ${pinLocation}  z-10`}
                src="/mapLocationLg.svg"
                alt="location pin desktop"
            />

            {/* Content — also stays fixed / not zoomed */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h2
                    className={`text-2xl font-semibold ${poppins.className} lg:text-[48px] text-white text-center`}
                >
                    Contact Us
                </h2>
                <p
                    className={`text-sm font-medium text-white max-w-[265px] lg:max-w-[488px] text-center pt-4 lg:text-base leading-[24px]`}
                >
                    We’re here to support your <br className="lg:hidden" /> journey reach out anytime for guidance,
                    answers, and support, <br className="lg:hidden" /> and let’s move your talent <br /> forward
                    together.
                </p>
            </div>

            {/* Zoom controls — bottom right, fixed */}
            <div className="absolute bottom-6 right-3 lg:right-6 flex flex-col gap-6 z-20">
                <div className="space-y-2">
                    <button
                        onClick={zoomIn}
                        className="w-8 h-8 lg:w-9.5 lg:h-9.5 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Zoom in"
                    >
                        <img className="w-5 h-5 lg:w-6 lg:h-6" src="/add.svg" alt="+" />
                    </button>

                    <button
                        onClick={zoomOut}
                        className="w-8 h-8 lg:w-9.5 lg:h-9.5 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Zoom out"
                    >
                        <img className="w-5 h-5 lg:w-6 lg:h-6" src="/minus.svg" alt="-" />
                    </button>
                </div>

                <a
                    href="https://yandex.uz/maps/80/yuzhno-sakhalinsk/house/prospekt_mira_267a/ZU0EaABkQUEDX0JuZWJ4cn5gZwo=/inside/?ll=142.748443%2C46.932332&tab=inside&z=16"
                    target="_blank"
                    className="w-8 h-8 lg:w-9.5 lg:h-9.5 bg-white flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Send message"
                >
                    <img className="w-4 h-4 lg:w-5 lg:h-5" src="/send.svg" alt="send" />
                </a>
            </div>
        </div>
    );
};

export default ContactHero;