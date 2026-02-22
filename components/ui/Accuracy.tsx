const Accuracy = () => {
    return (
        <div className="bg-[#0E0636] rounded-t-3xl rounded-b-4xl pt-4 max-w-[256px] custom-shadow">
            <div className="flex justify-center items-center pb-4 gap-3">
                <div className="w-3.5 h-3.5 rounded-full bg-[#6B6AFD]"></div>
                <p className="text-white">Accuracy</p>
            </div>

            <div className="bg-white rounded-3xl py-5 border border-[#DAD8FF] pl-6 pr-7">
                <p className="text-8xl text-[#0E0636] font-medium">98%</p>
                <p className="text-[#2C2C2C] pt-6">Smart matching based on skills, communication style, time zone, and niche experience</p>
            </div>
        </div>
    )
}

export default Accuracy;