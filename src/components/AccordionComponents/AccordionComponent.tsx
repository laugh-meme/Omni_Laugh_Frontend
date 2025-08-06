import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type AccordionP = {
    children: ReactNode;
    accordionText: string;
    index: number;
    currentIndex: number;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    isTimeOut: boolean;
    height: string;
    className?: string;
};


const AccordionComp = ({ children, accordionText, index, currentIndex, setCurrentIndex, isTimeOut, className, height }: AccordionP) => {

    const [isOpened, setIsOpened] = useState(false);
    

    useEffect(() => {
        console.log(index, accordionText)
        if (currentIndex === index) {
            if (isTimeOut) {
                setTimeout(() => {
                setIsOpened(true);
                }, 400);
            } else {
                setIsOpened(true);
            }

        } else {
                setIsOpened(false);
                
        }
    }, [currentIndex])



    return (
        <div className={`${className || ''} justify-center min-h-[46px] w-full border-white/50 text-white/50`}>

            {/* Button */}
            <button 
            style={{minHeight: 'inherit'}}
            onClick={() =>  index !== undefined && index >= 0 && setCurrentIndex(index)}
            className={`text-nowrap border rounded-xl py-2 cursor-pointer sm:text-xl transition-all duration-500 ease font-bold w-full
            `}>
                {accordionText}
            </button>
            
            {/* Content */}
            <div 
            className={` absolute top-0 left-0 w-full backdrop-blur-3xl border border-brand-color-fourth rounded-xl
            'transition-all duration-400 ease overflow-y-auto max-h-[${height}]
            ${isOpened ? `px-4 py-12 min-h-[${height ? height : 'min-h-[700px]'}] opacity-100` : 'min-h-[0px] p-0 opacity-0'}
            
            `}> 
                <button onClick={() =>  setCurrentIndex(-1)} className="absolute right-3 top-3 text-3xl cursor-pointer hover:text-brand-color-fourth transition duration-300"><IoIosCloseCircleOutline /></button>
                <div className={`${!isOpened && 'hidden' }`}>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default AccordionComp;