import { ReactNode } from "react";

type WrappereP = {
    children: ReactNode;
};


const WrapperComp = ({ children } : WrappereP)  => {
    return <section className="text-white sm:px-30 lg:px-50">{children}</section>
}

export default WrapperComp;