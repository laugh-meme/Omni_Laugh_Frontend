import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import RemainingSupplyComp from "../ContentComponents/RemainingSupplyComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

const ZetaCommunityAllocation = () => {
    return (
        <WrapperComp>
            <RemainingSupplyComp address="0xB5633E6DBD6ede668af83c2281ed0164Eae4b659"></RemainingSupplyComp>
            <TitleComp>ZetaChain Community Allocation</TitleComp>
            <ParagraphComp>In collaboration with different zetablockchain partners and marketers, the Omni_Laugh project will be distributing the Omni_Laugh Token to qualified community partners and participants. </ParagraphComp>

            <ListComp>
                <li>Partners with over 100k X/Twitter followers: 20million</li>
                <li>Major Participants with over 10k X/Twitter followers: 500k </li>
                <li>DApps with 10k+ active users: 50million</li>
                <li>Airdrop and related events: 10million</li>
            </ListComp>
        </WrapperComp>
    )
}

export default ZetaCommunityAllocation;