import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import TitleComp2 from "../ContentComponents/TitleComponent2";
import WrapperComp from "../ContentComponents/WrapperComponent";

const WhatMakesLMAOSocialMiningUnique = () => {
    return (
        <WrapperComp>
            <TitleComp>Why $LMAO Social Mining is unique</TitleComp>
            <ParagraphComp> $LMAO Social Mining brings the spotlight to ideas, conversations, products and projects through community engagement tokenization.</ParagraphComp>

            <TitleComp2>How it works:</TitleComp2>
            <ListComp>
                <li>Social Mining uses on-chain randomness and automated verification to boost and tokenise genuine engagement, reducing bot and spam attacks.</li>
                <li>Social Mining is available to all users and is also beneficial to any institution, business or individual seeking to draw more attention to their activities. </li>

            </ListComp>
        </WrapperComp>
    )
}

export default WhatMakesLMAOSocialMiningUnique;