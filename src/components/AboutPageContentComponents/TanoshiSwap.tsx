
import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

import TanoshiSwap2 from "../../assets/TanoshiSwap2.png"
import ImageComp from "../ContentComponents/ImageComponent";

const TanoshiSwap = () => {
    return (
        <WrapperComp>
            <TitleComp>TanoshiiSwap</TitleComp>
            <ImageComp src={TanoshiSwap2}/> 
            <ParagraphComp> Tanoshii means Fun in Japanese which aligns with the Omni_Laugh project tradition of inducing fun into crypto activities. TanoshiiSwap is a native DEX integrated with the Omni_Laugh platform for easy trading of Omni_Laugh assets and features such as: </ParagraphComp>

            <ListComp>
                <li>Token swap. </li>
                <li>NFT minting and trading. </li>
                <li>The Omni_Laugh community <span className="font-bold">Decentralized LMAO Utilities Pools [DLUP] - Startup LaunchPad and booster [SLB].</span> </li>
                <li>Liquidity provision and Token staking. </li>
            </ListComp>
        </WrapperComp>
    )
}

export default TanoshiSwap;