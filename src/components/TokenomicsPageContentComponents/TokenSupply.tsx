import ListComp from "../ContentComponents/ListComponent";
import RemainingSupplyComp from "../ContentComponents/RemainingSupplyComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

const TokenSupply = () => {
    return (
        <WrapperComp>
            <RemainingSupplyComp></RemainingSupplyComp>
            <TitleComp>$LMAO Total supply</TitleComp>
            <ListComp>
                <li>Airdrop Allocation: 2 Trillion</li>
                <li>Project Development allocation: 1 Trillion</li>
                <li>ZetaChain Community Allocation: 1 Trillion</li>
                <li>SocialFi Allocation: 750billion</li>
                <li>Fan Launch Allocation: 150billion</li>
                <li>TanoshiiSwap Allocation: 100billion</li>
            </ListComp>
        </WrapperComp>
    )
}

export default TokenSupply;