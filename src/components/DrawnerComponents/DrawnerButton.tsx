import { useNavigate } from "react-router-dom";

type DrawnerButtonP = {
    text: string;
    style?: React.CSSProperties;
    className?: string;
    onClickFn?: (...params: any) => void;
    to?: string;
}

const DrawnerButtonComp = ({    
    text,
    style = {},
    className = '',
    onClickFn = () => {},
    to = ''
}: DrawnerButtonP) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (to) {
            navigate(to);
        } else {
            onClickFn(e);
        }
    };

    return (
        <button  
            onClick={handleClick}
            style={style}
            className={`${className} w-full text-xs sm:text-sm lg:text-lg xl:text-xl border rounded-lg px-1 py-1 transition duration-300 hover:text-brand-color-secondary cursor-pointer`}>
            {text}
        </button>  
    );
}

export default DrawnerButtonComp;
