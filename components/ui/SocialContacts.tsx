const SocialContacts = () => {
    return (
        <div className="grid grid-cols-2 gap-2.5">
            <a onClick={(e)=> e.currentTarget.focus()} href="https://t.me/Giftedforge" className="rounded-full focus:bg-[#6B6AFD] outline-none group hover:bg-[#6B6AFD] relative cursor-pointer bg-white flex items-center justify-center w-10 h-10"><img className="w-6 h-6 group-hover:brightness-0 group-hover:invert " src="/telega.svg" alt="" /></a>
            <a onClick={(e)=> e.currentTarget.focus()} href="https://www.x.com/giftedforge" className="rounded-full  cursor-pointer focus:bg-[#6B6AFD] outline-none hover:bg-[#6B6AFD] bg-white relative flex items-center group justify-center w-10 h-10"><img className="w-4.5 h-4.5 group-focus:brightness-0 group-focus:invert group-hover:brightness-0 group-hover:invert " src="/x.svg" alt="" /></a>
            <a  onClick={(e)=> e.currentTarget.focus()} href="" className="rounded-full bg-white focus:bg-[#6B6AFD] hover:bg-[#6B6AFD] outline-none cursor-pointer flex relative items-center group justify-center w-10 h-10"><img className="w-5.5 h-4.5 group-hover:brightness-0 group-hover:invert  group-focus:brightness-0 group-focus:invert" src="/discord.svg" alt="" /></a>
            <a  onClick={(e)=> e.currentTarget.focus()} href="https://www.linkedin.com/company/giftedforge/?viewAsMember=true" className="rounded-full outline-none focus:bg-[#6B6AFD] hover:bg-[#6B6AFD] group relative cursor-pointer bg-white flex items-center justify-center w-10 h-10"><img className="w-6 h-6 group-hover:brightness-0 group-hover:invert  group-focus:brightness-0 group-focus:invert" src="/linkedin.svg" alt="" /></a>
        </div>
    )
}

export default SocialContacts