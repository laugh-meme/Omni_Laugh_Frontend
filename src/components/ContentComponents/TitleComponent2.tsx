import { ReactNode } from "react";

type Title2P = {
    children: ReactNode;
};

const TitleComp2 = ({ children } : Title2P)  => {
    return <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-5">{children}</h2>

}

export default TitleComp2;