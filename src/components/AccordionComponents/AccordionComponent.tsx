import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

type AccordionP = {
    children: ReactNode;
    accordionText: string;
    index?: number;
    currentIndex?: number;
    setCurrentIndex?: Dispatch<SetStateAction<number>>;
    className?: string;
    height?: string;
};


const AccordionComp = ({ children, accordionText, index, currentIndex, setCurrentIndex, className, height }: AccordionP) => {

    const [isOpened, setIsOpened] = useState(false);
    
    // useEffect(() => {
    //     if (isOpened && setTitle) {
    //         setTitle(accordionText);
    //     } 
    //     else if (!isOpened && setTitle) {
    //         setTitle('');
    //     }
    // }, [isOpened]);

    useEffect(() => {
        console.log(index, accordionText)
        if (currentIndex === index) {
            setIsOpened(true);
        } else {
            setIsOpened(false);
        }
    }, [currentIndex])



    return (
        <div className={`${className || ''} justify-center min-h-[46px] w-full border-white/50 text-white/50`}>
            <button 
            style={{minHeight: 'inherit'}}
            onClick={() => setCurrentIndex && index !== undefined && index >= 0 && setCurrentIndex(index)}
            className={`text-nowrap border rounded-xl py-2 cursor-pointer sm:text-xl transition-all duration-500 ease font-bold w-full
            `}>
                {accordionText}
            </button>

            <div 
            className={` absolute top-0 left-0 w-full backdrop-blur-3xl rounded-xl z-1
            transition-all duration-400 ease overflow-hidden
            ${isOpened ? `p-4 h-[${height ? height : 'h-[200px]'}] ` : 'h-[0px] p-0'}
            
            `}> 
                <button onClick={() => setCurrentIndex && setCurrentIndex(-1)} className="absolute right-3 top-3 text-3xl"><IoIosCloseCircleOutline /></button>
                {children}
            </div>

        </div>
    )
}

export default AccordionComp;