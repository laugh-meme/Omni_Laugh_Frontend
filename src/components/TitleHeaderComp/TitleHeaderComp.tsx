import { Link } from "react-router-dom";

const TitleHeaderComp = () => {
    return <h1 className={`text-brand-color-secondary text-5xl sm:text-7xl font-mono font-bold z-50`}> 
                <Link to='/'>Omni Laugh</Link>
            </h1>;
}

export default TitleHeaderComp;