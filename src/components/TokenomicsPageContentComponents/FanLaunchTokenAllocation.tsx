import ListComp from "../ContentComponents/ListComponent";
import RemainingSupplyComp from "../ContentComponents/RemainingSupplyComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import TitleComp2 from "../ContentComponents/TitleComponent2";
import WrapperComp from "../ContentComponents/WrapperComponent";

const FanLaunchTokenAllocation = () => {
    return (
        <WrapperComp>
            <RemainingSupplyComp address="0x4eff33384aa2b5c27f181aadd0ca617fd71ee1bb"></RemainingSupplyComp>
            <TitleComp>Fan Launch and Token Allocation</TitleComp>

            <TitleComp2>IMPORTANT Notice [Fan Event]: </TitleComp2>
            <ListComp ordered={true}>
                <li>Omni_Laugh is a meme project.</li>
                <li>LMAO token Fan Launch is not an investment opportunity, profits or returns are not guaranteed. </li>
                <li>100% of the LMAO Token may be locked for an infinite time.</li>
                <li>The purpose of the $LMAO Token Fan Launch is to generate support for the Omni_Laugh project, spread fun and unlock happiness.</li>
            </ListComp>

            <TitleComp2>Conditions:</TitleComp2>
            <ListComp>
                <li>If at least 50% of the proposed amount of the $LMAO is not allocated within the specified period, the event will be extended by 50% of the initial period.</li>
                <li>If a minimum of 50% of the proposed amount of the $LMAO Fan Launch is not auctioned after the extension, the donated asset [$zeta] of the Fan Launch will be refunded to the participating wallets and project development postponed indefinitely.</li>
            </ListComp>

            <TitleComp2>How to participate in the $LMAO Fan Launch: </TitleComp2>
            <ListComp ordered={true}>
                <li>Connect your X and Discord accounts. </li>
                <li>Retweet and like pinned post.</li>
                <li>State how many $Zeta you are willing to donate to the $LMAO Fan Launch.</li>
                <li>Validate submission.</li>
            </ListComp>
        </WrapperComp>
    )
}

export default FanLaunchTokenAllocation;