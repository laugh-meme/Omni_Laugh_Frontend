import { ReactNode } from "react";


type ParagraphP = {
    children: ReactNode;
};


const ParagraphComp = ({ children }: ParagraphP)  => {
    return <p className="text-lg sm:text-xl mt-5">{children}</p>
}

export default ParagraphComp;