import { ReactNode, useState } from "react";

type DrawnerProps = {
    children: ReactNode;
    className: string;
    btnText: string;
};

const DrawnerComp = ({ children, className = '', btnText }: DrawnerProps) => {
    const [openDrawner, setOpenDrawner] = useState(false);

    return (
        <div className={`flex justify-center min-h-[46px] border-white/50 text-white/50 ${className || ''}`}>
            <button onClick={() => setOpenDrawner(!openDrawner)} 
            className={`text-nowrap border rounded-xl py-2 cursor-pointer sm:text-xl transition-all duration-500 ease font-bold ${openDrawner && 'border-brand-color-secondary text-brand-color-secondary rounded-r-none text-xs'}`}
            style={{minHeight: 'inherit', height: 'inherit', width: openDrawner ? '33.3333%' : '100%',transition: 'width 0.5s ease-in-out',}}> {btnText}</button>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden origin-left ${openDrawner ? 'opacity-100 pl-0' : 'opacity-0 pl-0'}`}
            style={{minHeight: 'inherit', height: 'inherit', width: openDrawner ? '66.6666%' : '0px', transition: 'width 0.5s ease-in-out, opacity 0.5s ease-in-out'}}>

                <div 
                style={{ minHeight: 'inherit', height: 'inherit' }} 
                className="w-full text-nowrap flex items-center gap-2 px-2 lg:px-5 py-2 overflow-x-auto border border-l-0 border-brand-color-secondary rounded-xl rounded-l-none">
                        {children}
                </div>

            </div>
        </div>
    )
}

export default DrawnerComp;