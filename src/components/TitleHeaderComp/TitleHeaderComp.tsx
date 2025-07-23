import { Link } from "react-router-dom";

const TitleHeaderComp = () => {
    return <span className={`text-brand-color-secondary text-5xl sm:text-7xl font-mono font-bold z-50`}> 
                <Link to='/'>Omni Laugh</Link>
            </span>;
}

export default TitleHeaderComp;