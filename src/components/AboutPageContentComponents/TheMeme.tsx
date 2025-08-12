import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import TitleComp2 from "../ContentComponents/TitleComponent2";
import WrapperComp from "../ContentComponents/WrapperComponent";

const TheMeme = () => {
    return (
        <WrapperComp>
            <TitleComp>Unlocking happiness</TitleComp>
            <ParagraphComp> Omni_Laugh meme utilises on-chain tokenization [$LMAO] and innovative inventions to spread fun and unlock happiness.</ParagraphComp>
            
            <TitleComp2>Omni_laugh as a value driven meme</TitleComp2>
            <ParagraphComp>Omni_laugh token [LMAO] employs a utility deflatory mechanism to boost its value, bringing fun and value to contributors, builders and the Omni_Laugh community. Whether you are holding, trading or contributing, the Omni Laugh Token [$LMAO] deflatory [burn] mechanics are tied to bringing innovative ideas to live. </ParagraphComp>

            <TitleComp2>How the $LMAO Utility deflation works?</TitleComp2>
            <ParagraphComp>The amount of $LMAO in the SocialFi Allocation and the amount of $LMAO users can earn will shrink by 0.2% every time a new utility is launched on the Startup LaunchPad and Booster [SLB].</ParagraphComp>
            <ParagraphComp><span className="font-bold">Illustration: </span>Imagine the $LMAO SocialFi Allocation Pool has a total supply of 50,000,000 $LMAO: </ParagraphComp>
            <ListComp>
                <li>After the launch of Utility-A, that amount will drop by 0.2% to 49,900,000 $LMAO.</li>
                <li>Similarly, the amount of $LMAO users can earn through social mining will reduce by 0.2%, going from 10 and 10,000 $LMAO to 9.98 and 9,980 $LMAO respectively after the launch of Utility-A.</li>
            </ListComp>

            <ParagraphComp>This 0.2% reduction will keep occurring each time a new utility is launched until there is no $LMAO in the SocialFi Allocation Pool.</ParagraphComp>


        </WrapperComp>
    )
}

export default TheMeme;