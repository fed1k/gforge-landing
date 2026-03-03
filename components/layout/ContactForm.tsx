const ContactForm = () => {
    return (
        <div className="bg-[#F5F7FB] rounded-3xl mb-[63px] px-4 gap-12 py-12 lg:p-12 mx-6 lg:mx-12 flex flex-col lg:items-center lg:gap-12.5 lg:flex-row">
            <div>
                <h3 className="font-semibold text-[28px] lg:text-[32px] text-[#0E0636]">Get in <span className="w-11 inline-block rounded-full -translate-y-2.5 h-0 border-2 border-[#0E0636]"></span></h3>
                <p className="font-medium text-[28px] lg:text-[32px] text-[#0E0636]">touch with us</p>
                <p className="pt-6 pb-8 text-[#0E0636] md:max-w-[396px] leading-[148%] lg:leading-[138%]">Your growth matters to us. Reach out anytime for guidance, clear answers, and dedicated support together, we’ll take your talent to the next level.</p>
                <p className="font-semibold text-sm text-[#0E0636]">Email:</p>
                <p className="pt-3 pb-6 text-sm text-[#0E0636]">GiftedForge@gmail.com</p>
                <p className="font-semibold text-sm text-[#0E0636]">Phone:</p>
                <p className="pt-3 pb-8 text-[#0E0636] text-sm">(+7) 924- 885-2888</p>
                <p className="font-semibold text-sm text-[#0E0636]">Location:</p>
                <p className="pt-3 pb-6 text-sm text-[#0E0636]">Yuzhno-Sakhalinsk, Russia <br />Mira Avenue, 267</p>
                <p className="font-semibold text-sm text-[#0E0636]">Available:</p>
                <p className="pt-3 text-sm text-[#0E0636]">Monday to Friday, <br /> 9:00 AM – 5:00 PM (MSK)</p>
            </div>


            <form className="bg-white rounded-3xl py-12 px-4 lg:flex-1 lg:px-12 lg:py-[61px]">
                <h3 className="text-center pb-8 text-[#0E0636] font-semibold text-2xl lg:text-[28px] leading-9.5">Have a question? <br className="lg:hidden" /> Send <img className="w-9.5 h-9.5 inline" src="/plane.svg" alt="" /> it our way <br /> we're always happy <br className="lg:hidden" /> to help</h3>

                <div>
                    <label className="block pb-4 font-semibold lg:text-base text-sm text-[#0E0636]" htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Name" className="py-4.5 w-full rounded-xl placeholder:font-light placeholder:text-[#0E0636] px-4 bg-[#F5F7FB]" />
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:pt-6 lg:gap-4">

                    <div className="pt-6 pb-4 lg:p-0 flex-1">
                        <label className="block pb-4 font-semibold lg:text-base text-sm text-[#0E0636]" htmlFor="Phone">Phone</label>
                        <input id="Phone" type="text" placeholder="Phone" className="py-4.5 w-full rounded-xl placeholder:font-light placeholder:text-[#0E0636] px-4 bg-[#F5F7FB]" />
                    </div>
                    <div className="flex-1">
                        <label className="block pb-4 font-semibold text-sm lg:text-base text-[#0E0636]" htmlFor="Email">Email</label>
                        <input id="Email" type="text" placeholder="Email" className="py-4.5 w-full rounded-xl placeholder:font-light placeholder:text-[#0E0636] px-4 bg-[#F5F7FB]" />
                    </div>
                </div>

                <div className="pt-6">
                    <label className="block pb-4 lg:text-base font-semibold text-sm text-[#0E0636]" htmlFor="message">Message</label>
                    <textarea className="py-4.5 resize-none w-full min-h-[150px] rounded-xl placeholder:font-light placeholder:text-[#0E0636] px-4 bg-[#F5F7FB]" name="" id="message" placeholder="Message" />
                </div>

                <button type="button" tabIndex={0} className="h-12 w-[235px] text-white cursor-pointer focus-within:shadow-[0px_4px_24px_0px_#00000029] hover:shadow-[0px_4px_24px_0px_#00000029] font-semibold mt-12 bg-[#6B6AFD] block mx-auto rounded-full">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm