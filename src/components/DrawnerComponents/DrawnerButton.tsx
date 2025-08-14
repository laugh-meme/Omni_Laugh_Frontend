import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type DrawnerButtonP = {
    text: string;
    style?: React.CSSProperties;
    className?: string;
    onClickFn?: (...params: any) => void;
    to?: string;
    subMenu?: {text: string, to: string}[];
    scrollX?: number;
}

const DrawnerButtonComp = ({    
    text,
    scrollX,
    style = {},
    className = '',
    onClickFn = () => {},
    to = '',
    subMenu = [],
    
}: DrawnerButtonP) => {
    const navigate = useNavigate();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (to) {
            navigate(to);
        } else if (subMenu.length > 0) {
            setSubMenuOpen(!subMenuOpen);
        } else {
            onClickFn(e);
        }
    };

    const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null)
    const subMenuRef = useRef<HTMLUListElement>(null)

    // Position handler
    useEffect(() => {
        if (!buttonRef.current || !subMenuRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const containerRect = buttonRef.current.offsetParent?.getBoundingClientRect();
        if (containerRect) {
            subMenuRef.current.style.left = `${rect.left - containerRect.left}px`;
            console.log(subMenuRef.current.style.left);
        }
    }, [subMenuOpen, scrollX]);

    // Resize handler
    useEffect(() => {
        if (!buttonRef.current || !subMenuRef.current) return;

        const updateWidth = () => {
        if (buttonRef.current && subMenuRef.current) {
            const buttonWidth = buttonRef.current.getBoundingClientRect().width;
            subMenuRef.current.style.minWidth = `${buttonWidth}px`;
        }
        };

        updateWidth();
        const observer = new ResizeObserver(updateWidth);
        observer.observe(buttonRef.current);

        return () => observer.disconnect();
    }, []);

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (
            subMenuRef.current &&
            !subMenuRef.current.contains(event.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setSubMenuOpen(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("mousemove", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("mousemove", handleClickOutside);

        };
    }, []);

    return (
        <div className="w-full">
            <button  
                ref={buttonRef}
                onClick={handleClick}
                style={style}
                className={`${className} ${subMenuOpen && 'text-brand-color-secondary rounded-b-none'} w-full text-xs sm:text-sm lg:text-lg xl:text-xl border rounded-lg px-1 py-1 transition-all duration-150 hover:text-brand-color-secondary cursor-pointer`}>
                {text}
            </button>  
            {subMenu.length > 0 && (
               <ul 
                ref={subMenuRef} 
                style={{ transitionProperty: 'opacity, scale, padding' }}
                className={`
                    absolute flex flex-col gap-1 sm:gap-2 text-center cursor-pointer
                    text-sm md:text-lg text-brand-color-secondary backdrop-blur-3xl
                    border border-t-0 border-brand-color-secondary rounded-t-none rounded-xl
                    origin-top transform transition-all duration-300 ease-in overflow-hidden break-words text-wrap
                    ${subMenuOpen ? 'scale-y-100 opacity-100 py-1 ' : 'scale-y-0 py-0 opacity-0'}
                `}>
                    {subMenu.map((s, i) => (
                        <li key={i} className=""><Link to={s.to}>{s.text}</Link></li>
                    ))} 
                </ul>
            )}
    
        </div>
    );
}

export default DrawnerButtonComp;
