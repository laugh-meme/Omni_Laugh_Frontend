import ListComp from "../ContentComponents/ListComponent";
import RemainingSupplyComp from "../ContentComponents/RemainingSupplyComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

const ProjectDevelopmentAllocation = () => {
    return (
        <WrapperComp>
            <RemainingSupplyComp address="0xcEdCA7ae1C55E249a087e481317a041E7db27915"></RemainingSupplyComp>
            <TitleComp>Project Development Allocation</TitleComp>
            <ListComp>
                <li>Core Utility pool: 500 billion. </li>
                <li>Major utility pool: 400 billion. </li>
                <li>Associate utility pool: 100 billion.</li>
            </ListComp>
        </WrapperComp>
    )
}

export default ProjectDevelopmentAllocation;