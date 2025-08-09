import ListComp from "../ContentComponents/ListComponent";
import RemainingSupplyComp from "../ContentComponents/RemainingSupplyComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

const DexAllocation = () => {
    return (
        <WrapperComp>
            <RemainingSupplyComp address="0x24b07bbdab11179b07e961b8f429df93a9ea7b57"></RemainingSupplyComp>
            <TitleComp>DEX Allocation</TitleComp>
            <ListComp>
                <li>Universal DEX: 10billion</li>
                <li>TanoshiiSwap: 50billion </li>
                <li>Other zeta supported DEX: 40billion</li>
                <li>Target price: Community dependant.</li>
                <li>Estimated Circulating Supply: 250 billion</li>
            </ListComp>
        </WrapperComp>
    )
}

export default DexAllocation;