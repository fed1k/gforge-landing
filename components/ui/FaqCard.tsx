import { ReactNode } from "react"

interface FaqCardType {
    question: string | ReactNode;
    answer: string | ReactNode;
    isLong?: boolean
    
}

const FaqCard = ({question, answer, isLong = false}: FaqCardType) => {
    return (
        <div className={`bg-[#F5F7FB] rounded-3xl p-6 h-full ${isLong && "w-[657px]"}`}>
            <h2 className="font-semibold text-xl text-[#0E0636]">{question}</h2>

            <div className={`h-px mt-4  mb-5.5 ${isLong ? "w-[609px]" : "w-full max-w-[384px]"}  bg-[#DAD8FF]`}></div>

            <p className={`text-[#0E0636] leading-[148%] `}>{answer}</p>
        </div>
    )
}

export default FaqCard