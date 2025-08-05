
type DrawnerInputP = {
    text: string;
    style?: React.CSSProperties;
    className?: string;
    onChangeFn?: (...params: any) => void;
}

const DrawnerInputComp = ({    
    text,
    style = {},
    className = '',
    onChangeFn = () => {},
}: DrawnerInputP) => {

    return (
        <input  
            onChange={onChangeFn}
            style={style}
            className={`${className} w-full text-xs sm:text-sm lg:text-lg xl:text-xl border rounded-lg px-1 py-1 transition duration-300 hover:text-brand-color-secondary focus:outline-none focus:text-brand-color-secondary text-center`}
            placeholder={text}
        />  
    );
}

export default DrawnerInputComp;
