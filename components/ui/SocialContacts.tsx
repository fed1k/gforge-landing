const SocialContacts = () => {
    return (
        <div className="grid grid-cols-2 gap-2.5">
            <a href="https://t.me/Gifted_Forge" className="rounded-full bg-white flex items-center justify-center w-10 h-10"><img className="w-6 h-6" src="/telega.svg" alt="" /></a>
            <a href="" className="rounded-full bg-white flex items-center justify-center w-10 h-10"><img className="w-4.5 h-4.5" src="/x.svg" alt="" /></a>
            <a href="" className="rounded-full bg-white flex items-center justify-center w-10 h-10"><img className="w-5.5 h-4.5" src="/discord.svg" alt="" /></a>
            <a href="https://www.linkedin.com/company/giftedforge/?viewAsMember=true" className="rounded-full bg-white flex items-center justify-center w-10 h-10"><img className="w-6 h-6" src="/linkedin.svg" alt="" /></a>
        </div>
    )
}

export default SocialContacts