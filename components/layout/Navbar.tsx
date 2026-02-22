"use client"

import BlackLogo from "../ui/logoblack"
import LoginBtn from "../ui/Login"
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";
import NavLink from "../ui/NavLink";

const Navbar = () => {

    const searchRef = useRef<HTMLInputElement>(null)

    const [active, setActive] = useState("En")
    const [open, setOpen] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const handleSelect = () => {
        setActive((prev) => prev === "En" ? "Ru" : "En")
        setOpen(false)
    }

    const handleSearch = () => {
        setShowSearch(true)
        searchRef.current?.focus()
    }

    return (
        <div className="p-6 md:px-12 md:py-8 flex justify-between">
            <BlackLogo />
            <div className="flex items-center">
                <div className="hidden xl:flex pr-6 items-center">
                    <NavLink classNames="px-4 pb-[3px] border-b text-[#2C2C2C] font-medium" href="/">Home</NavLink>
                    <NavLink classNames="px-4 pb-[3px] border-b text-[#2C2C2C] font-medium" href="/about">About</NavLink>
                    <NavLink classNames="px-4 pb-[3px] border-b text-[#2C2C2C] font-medium" href="/success">Success Stories</NavLink>
                    <NavLink classNames="pl-4 pb-[3px] border-b pr-12 text-[#2C2C2C] font-medium" href="/contact">Contact Us</NavLink>
                    
                    
                
                    <div className="flex items-center px-6 max-h-[17px] border-x border-[#0E0636]">
                        <img
                            src="/searchbar.svg"
                            onClick={handleSearch}
                            className={`${showSearch ? "hidden" : "block"} mr-6 w-6 h-6 text-[#0E0636] cursor-pointer ml-3`}
                        />
                        <div className={`relative flex items-center gap-2 transition-all duration-300 ease-in-out ${showSearch ? 'w-56 mr-6' : 'w-0'}`}>
                            <img src="/activesearch.svg"
                                className={`absolute left-5.5 w-6 h-6 text-[#6B6AFD] ${showSearch ? "block" : "hidden"}`}
                            />
                            <input
                                type="text"
                                ref={searchRef}
                                onBlur={() => setShowSearch(false)}
                                placeholder="Search..."
                                className={`pl-15 pr-3 w-56 placeholder:font-medium placeholder:text-[#6B6AFD66] h-13 outline-0 border border-[#6B6AFD] rounded-full transition-all duration-300 ease-in-out ${showSearch ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            />
                        </div>


                        <div className="relative">
                            <button onClick={() => setOpen((prev) => !prev)} className="flex cursor-pointer items-center gap-1">
                                <img className="w-6 h-6" src={active === "En" ? "/us.png" : "/russia.png"} alt="" />
                                <p className="text-[#6B6AFD] font-medium">{active}</p>
                                <img className="w-4 h-4" src="/arrow-up.svg" alt="" />
                            </button>
                            <button onClick={handleSelect} className={`${open ? "flex" : "hidden"} absolute px-2 py-1 top-6 shadow cursor-pointer items-center gap-1`}>
                                <img className="w-6 h-6" src={active === "En" ? "/russia.png" : `/us.png`} alt="" />
                                <p className="font-medium">{active === "En" ? "Ru" : "En"}</p>
                            </button>
                        </div>
                    </div>
                </div>
                <LoginBtn />
            </div>
        </div>
    )
}

export default Navbar;