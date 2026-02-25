const SocialContacts = () => {
    return (
        <div className="grid grid-cols-2 gap-2.5">
            <a href="https://t.me/Gifted_Forge" className="rounded-full bg-white flex items-center justify-center w-10 h-10"><img src="/telega.svg" alt="" /></a>
            <div className="rounded-full bg-white flex items-center justify-center w-10 h-10"><img src="/insta.svg" alt="" /></div>
            <div className="rounded-full bg-white flex items-center justify-center w-10 h-10"><img src="/youtube.svg" alt="" /></div>
            <a href="https://www.linkedin.com/company/giftedforge/?viewAsMember=true" className="rounded-full bg-white flex items-center justify-center w-10 h-10"><img src="/linkedin.svg" alt="" /></a>
        </div>
    )
}

export default SocialContacts