import ParagraphComp from "../ContentComponents/ParagraphComponent";
import RemainingSupplyComp from "../ContentComponents/RemainingSupplyComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

const AirdropAllocation = () => {
    return (
        <WrapperComp>
            <RemainingSupplyComp address="0xe073cbb4f6a63b8ce2de69e8ef7efb67e8392bb3"></RemainingSupplyComp>
            <TitleComp>Airdrop Allocation</TitleComp>
            <ParagraphComp> The Omni_Laugh official handles will periodically hold events, engage in partnerships etc; to promote the Omni_Laugh project and its associated utilities.</ParagraphComp>
        </WrapperComp>
    )
}

export default AirdropAllocation;