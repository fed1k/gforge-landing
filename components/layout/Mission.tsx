import Image from "next/image";
import Accuracy from "../ui/Accuracy";

const Mission = () => {
    return (
        <section className="pt-17">
            <div className="px-6 md:px-12">
                <h2 className="text-2xl md:text-5xl md:leading-16 text-[#0E0636] font-semibold">Who we <img className="w-9.5 h-9.5 md:w-12 md:h-12 inline" src="/arrowright.svg" alt="Team logo" /> are <br /> Our mission</h2>
                <p className="pt-4 pb-12 md:pt-8 text-[8px] md:text-sm font-medium text-[#0E0636]">Connecting Talent with Opportunity</p>
            </div>

            <div className="lg:flex lg:justify-between items-center md:gap-6 lg:gap-0 border-y border-[#DAD8FF] p-6 lg:px-12 md:py-7">
                <Image alt="Collaboration Picture" width={207} height={223} src="/collab.png" />
                <div className="hidden lg:block w-px self-stretch bg-[#DAD8FF]"></div>
                <p className="text-[#2C2C2C] lg:w-[70%] xl:max-w-[975px] lg:leading-13 pt-12 lg:py-6 text-2xl lg:text-4xl font-medium leading-9.5">We create a dynamic ecosystem where talent meets opportunity. <span className=" opacity-50">Over 1,000 users are powering 500+ innovative projects collaborating, creating, and succeeding together.</span></p>
            </div>

            <div className="px-6 lg:px-12 pt-12 md:flex md:items-center md:justify-between">
                <Image alt="Illustration" src="/illus.svg" width={187} height={69} />
                <div></div>
                <div className="pt-12 md:grid relative md:grid-cols-2 xl:grid-cols-3 md:gap-4 xl:gap-6 md:items-end">
                    <Accuracy />
                    <div className="group  max-h-[310px] max-w-[256px]">
                        {/* Tooltip */}
                        <div
                            className="
                               /* Mobile (default) */
                                 hidden
                                 relative
                                 mt-4
                                 h-20 w-full
                                 rounded-3xl bg-[#0E0636]
                                 pt-4 justify-center gap-3 pb-4

                                /* Show on tap (mobile) */
                                 group-focus-within:flex

                               /* Desktop */
                              md:absolute
                              md:flex
                               md:top-12
                               md:left-68
                               xl:left-70
                               md:w-[256px]
                               md:items-center
                               md:pt-0
                               md:mt-0
                               md:rounded-t-3xl
                               rounded-b-none
                               md:opacity-0
                               md:-z-10
                               md:transition-opacity md:duration-300
                              md:group-hover:opacity-100">
                            <div className="h-3.5 w-3.5 mt-[5px] md:mt-0 rounded-full bg-[#6B6AFD]" />
                            <p className="text-white">Instant selection</p>
                        </div>

                        {/* Card */}
                        <div
                            tabIndex={0}
                            role="button"
                            aria-label="Show skills test info"
                            className="mt-6 focus:shadow-[0px_4px_24px_0px_#00000029] hover:shadow-[0px_4px_24px_0px_#00000029] rounded-3xl xl:h-auto border border-[#DAD8FF] bg-white md:focus:translate-0 py-5 pl-6 pr-7 focus:-translate-y-12 md:h-64 focus:outline-none cursor-pointer">
                            <p className="text-8xl text-[#0E0636] font-medium flex">30 <span className="text-4xl self-end -translate-y-1.5">Sec</span></p>
                            <p className="pt-6 text-[#2C2C2C]">
                                Get a list of top 3 candidates within 30 seconds of posting a task.
                            </p>
                        </div>
                    </div>
                    <div className="group max-h-[294px] max-w-[256px]">
                        {/* Tooltip */}
                        <div
                            className="
                               /* Mobile (default) */
                                 hidden
                                 relative
                                 mt-4
                                 h-20 w-full
                                 rounded-3xl bg-[#0E0636]
                                 pt-4 justify-center gap-3 pb-4

                                /* Show on tap (mobile) */
                                 group-focus-within:flex

                               /* Desktop */
                              md:absolute
                              md:flex
                               xl:left-140
                               xl:top-12
                               
                               md:w-[256px]
                               md:items-center
                               md:pt-0
                               md:mt-0
                               md:rounded-t-3xl
                               rounded-b-none
                               md:opacity-0
                               md:-z-10
                               md:transition-opacity md:duration-300
                              md:group-hover:opacity-100">
                            <div className="h-3.5 w-3.5 mt-[5px] md:mt-0 rounded-full bg-[#6B6AFD]" />
                            <p className="text-white">Skills test</p>
                        </div>

                        {/* Card */}
                        <div
                            tabIndex={0}
                            role="button"
                            aria-label="Show skills test info"
                            className="mt-6 hover:shadow-[0px_4px_24px_0px_#00000029] focus:shadow-[0px_4px_24px_0px_#00000029] rounded-3xl md:translate-y-8  xl:h-[257px] xl:translate-y-0 border border-[#DAD8FF] bg-white md:focus:translate-0 py-5 pl-6 pr-7 focus:-translate-y-12 md:h-64 focus:outline-none cursor-pointer">
                            <p className="text-8xl font-medium text-[#0E0636]">AI</p>
                            <p className="pt-6 text-[#2C2C2C]">
                                AI automatically verifies portfolios and conducts technical interviews.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Mission;