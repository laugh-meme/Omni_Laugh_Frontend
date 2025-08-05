import { Link } from "react-router-dom";

type TitleHeaderP = {
    to?: string
}

const TitleHeaderComp = ({to = ''}: TitleHeaderP) => {
    return <span className={`text-brand-color-secondary text-shadow-lg text-5xl sm:text-7xl font-mono font-bold`}> 
                <Link to={to}>Omni Laugh</Link>
            </span>;
}

export default TitleHeaderComp;