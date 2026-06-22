import { ReactNode } from "react"

interface FaqCardType {
    question: string | ReactNode;
    answer: string | ReactNode;
    isLong?: boolean
    
}

const FaqCard = ({question, answer, isLong = false}: FaqCardType) => {
    return (
        <div className={`bg-transparent rounded-3xl border border-[#DAD8FF] p-6 h-full ${isLong && "w-[657px]"}`}>
            <h2 className="font-medium  text-[#DAD8FF] lg:text-xl">{question}</h2>

            <p className={`text-[#DAD8FF] pt-5.5 leading-[148%] font-light text-sm lg:text-base`}>{answer}</p>
        </div>
    )
}

export default FaqCard