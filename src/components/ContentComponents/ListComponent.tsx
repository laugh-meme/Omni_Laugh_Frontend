import { ReactNode } from "react";

type ListP = {
    children: ReactNode,
    ordered?: boolean,
}

const ListComp = ({ children, ordered = false }: ListP)  => {
    if (ordered) return (
        <ol className="list-decimal ml-2 text-lg xl:text-2xl mt-5 sm:mt-10 flex flex-col gap-1 sm:gap-3">
            {children}
        </ol>
    ); else return (
        <ul className="list-disc ml-2 text-lg xl:text-2xl mt-5 sm:mt-10 flex flex-col gap-1 sm:gap-3">
            {children}
        </ul>
    )
}

export default ListComp;