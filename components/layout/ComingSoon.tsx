"use client";

import { Outfit } from "next/font/google";
import { useState } from "react";
// import { sendEmailToTelegram } from "@/app/actions";

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-outfit', // optional but recommended
    display: 'swap',
})

const ComingSoon = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleNotifyMe = async () => {
        if (!email) {
            // setStatus("error");
            // setMessage("Please enter an email address.");
            return;
        }

        if (!validateEmail(email)) {
            // setStatus("error");
            // setMessage("Please enter a valid email address.");
            return;
        }

        setStatus("loading");
        setMessage("");

        try {
            // const result = await sendEmailToTelegram(email);
            // if (result.success) {
                setStatus("success");
                setMessage("Thank you! We'll notify you soon.");
                setEmail("");
            // } else {
                // setStatus("error");
                // setMessage(result.error || "Something went wrong. Please try again.");
            // }
        } catch (error) {
            // setStatus("error");
            // setMessage("An error occurred. Please try again.");
        }
    };

    return (
        <div className={`bg-[#DAD8FF] relative min-h-screen pt-[100px] xl:pt-[168px] overflow-hidden ${outfit.className}`}>

            <div className="px-6 xl:px-20 2xl:px-[116px]">

                <h1 className={`font-bold text-5xl md:text-7xl lg:text-8xl xl:text-[111px] text-[#0E0636]`}>SOMETHING AWESOME IS COMING...</h1>

                <div className="flex pt-7 flex-col lg:flex-row lg:items-center">


                    <p className="font-light text-xl md:text-2xl text-[#0E0636]">GiftedForge unifies Telegram <br className="lg:hidden" /> assets & NFTs. <br className="hidden lg:inline" />
                        Mint, trade, and <br className="lg:hidden" /> manage across chains—mobile-first.</p>

                    <div className="flex flex-col sm:flex-row lg:items-center mt-12 lg:mt-0">
                        <div className="relative">
                            <input 
                                className={`border lg:ml-10 outline-none xl:ml-[166px] border-[#666F8B] h-[52px] w-full sm:w-[345px] lg:w-[378px] rounded-full px-6 placeholder:text-[#666F8B] ${status === "error" ? "border-red-500" : ""}`} 
                                placeholder="Please enter your e-mail adress" 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === "loading"}
                            />
                            {message && (
                                <p className={`absolute top-full left-0 lg:ml-10 xl:ml-[166px] mt-1 text-sm ${status === "error" ? "text-red-600" : "text-green-600"}`}>
                                    {message}
                                </p>
                            )}
                        </div>

                        <button 
                            onClick={handleNotifyMe}
                            disabled={status === "loading"}
                            className="block mt-6 sm:mt-0 sm:ml-2.5 text-white font-medium bg-[#7B61FF] w-full sm:w-[142px] h-[52px] rounded-[40px] disabled:opacity-50"
                        >
                            {status === "loading" ? "Sending..." : "Notify Me"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFFFFF] absolute bottom-[120px] lg:bottom-[126px] w-[110%] -left-[5%] text-nowrap overflow-hidden text-xl uppercase py-2 font-medium text-[#0E0636] -rotate-[4.25deg] flex justify-center">Coming Soon  |  Coming Soon  |  Coming Soon  |    Coming Soon  |   Coming Soon  |    Coming Soon  |  Coming Soon  |  Coming Soon  |    Coming Soon  |   Coming Soon  |    Coming Soon</div>
        </div>
    )
}

export default ComingSoon;