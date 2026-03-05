"use client";

import { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Link from "next/link";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const LoginBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const dropdownRef = useRef(null);
    const pathname = usePathname()

    const menuItems = [
        { label: "Home", href: "/", classes: "xl:hidden" },
        { label: "About", href: "/about", classes: "xl:hidden" },
        { label: "Success Stories", href: "/success-stories", classes: "xl:hidden" },
        { label: "Contact Us", href: "/contact", classes: "xl:hidden border-b border-[#DAD8FF]" },
        { label: "For Client", href: "/client", classes: "" },
        { label: "For Talent", href: "/talent", classes: "" },
        { label: "Discover", href: "/discover", classes: "" },
        { label: "Feed", href: "/feed", classes: "" },
        { label: "Project's", href: "/projects", classes: "" },
        { label: "Marketplace", href: "/marketplace", classes: "" },
        { label: "Education", href: "/education", classes: "" },
    ];

    const languages = [
        { label: "English", code: "en" },
        { label: "Russian", code: "ru" },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setLanguageOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (isOpen) setLanguageOpen(false);
    };

    const toggleLanguage = (e) => {
        e.preventDefault();
        setLanguageOpen(!languageOpen);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="relative flex py-1 px-1 items-center gap-2 md:gap-3 border border-[#0E0636] rounded-full overflow-hidden">
                <button
                    onClick={toggleDropdown}
                    className={`relative z-10 px-3 py-[7px] md:py-2.5 md:px-5 rounded-full focus:outline-none cursor-pointer transition-colors duration-300 ${isOpen ? "text-white" : "text-[#0E0636]"
                        }`}
                    aria-label="Menu"
                >
                    <RxHamburgerMenu className={`w-5 translate-x-0.5 md:translate-0 h-5 md:w-6 md:h-6 transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`} />
                </button>
                <a
                    className={`relative z-10 font-medium text-xs md:text-base py-2.5 md:py-3 px-3 md:px-4 rounded-full transition-colors duration-300 ${isOpen ? "text-[#0E0636]" : "text-white"
                        }`}
                    href="/"
                >
                    Login
                </a>
                <div
                    className={`absolute px-3 py-[7px] md:py-2.5 md:px-5 top-1 bottom-1 bg-[#0E0636] rounded-full transition-all duration-300 ease-in-out ${isOpen
                        ? "left-1 w-12 md:w-16"
                        : "right-1 left-auto w-16 md:w-20"
                        }`}
                />
            </div>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 md:w-45.5 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {menuItems.map((item, index) => (
                        <NavLink
                            key={index}
                            href={item.href}
                            // onClick={() => setIsOpen(false)}
                            tabIndex={0}
                            classNames={`block ${item.classes} focus:text-[#6B6AFD] focus:bg-[#6B6AFD1A] px-4 py-2 active:text-[#6B6AFD] active:bg-[#6B6AFD1A] text-sm md:text-base md:font-medium text-[#2C2C2C] hover:text-[#6B6AFD] hover:bg-[#6B6AFD1A] transition-colors`}
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    <div className="relative xl:hidden border-t border-[#DAD8FF]">
                        <button
                            onClick={toggleLanguage}
                            className="w-full flex items-center gap-1 px-4 py-2.5 text-sm md:text-base text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            <span>Languages</span>
                            {languageOpen ? (
                                <IoChevronUp className="w-4 h-4" />
                            ) : (
                                <IoChevronDown className="w-4 h-4" />
                            )}
                        </button>

                        {languageOpen && (
                            <div className="bg-gray-50  py-1">
                                {languages.map((lang, index) => (
                                    <button
                                        key={index}
                                        tabIndex={0}
                                        onClick={() => console.log(`Selected: ${lang.code}`)}
                                        className="block focus:text-[#6B6AFD] font-light w-full text-left px-8 py-2 text-xs text-gray-600 active:text-[#6B6AFD] transition-colors cursor-pointer"
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginBtn;
