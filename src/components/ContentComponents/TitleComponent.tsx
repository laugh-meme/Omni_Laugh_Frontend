import { ReactNode } from "react";

type TitleP = {
    children: ReactNode;
};

const TitleComp = ({ children } : TitleP)  => {
    return <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl xl:4xl"> {children}</h1>
}

export default TitleComp;