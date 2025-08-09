import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import RemainingSupplyComp from "../ContentComponents/RemainingSupplyComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

const SocialFiDistributionMechanics = () => {
    return (
        <WrapperComp>
            <RemainingSupplyComp address="0x4037c1f244d94e18a8ab6f10ba3a94b8f0d5f6ca"></RemainingSupplyComp>
            <TitleComp>SocialFi Distribution Mechanics</TitleComp>
            <ParagraphComp>As a SocialFi injector with the use of bot + smartcontract mechanics, successfully associated social media platforms will be allocated a specific amount of $LMAO to be awarded to qualified participants for spreading fun and unlocking happiness within the social media platform. Details are as follows: </ParagraphComp>

            <ListComp>
                <li>Per/Social Media Platform Allocation: 50,000,000</li>
                <li>Claim Per account: Mini 100 - 10k Max </li>
                <li>DApps with 10k+ active users: 50million</li>
                <li>LMAO Distributor Bot Creator Allocation: Distributor Bot creator gets 5% of the $LMAO claim per account for 6 months. That is 5% of 100 - 10k $LMAO claim per account</li>
            </ListComp>
        </WrapperComp>
    )
}

export default SocialFiDistributionMechanics;