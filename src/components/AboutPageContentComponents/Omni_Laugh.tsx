import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

const Omni_Laugh = () => {
    return (
        <WrapperComp>
            <TitleComp>Omni_Laugh</TitleComp>
            <ParagraphComp> The Omni_Laugh meme is synonymous with happiness, fun and laughter. Omni_Laugh is the life of the on-chain party. Thanks to its existence on the Zetablockchain [a universal chain], the Omni_Laugh Meme token [$LMAO] becomes the first Universatile memecoin to be available globally. To take things further, Omni_Laugh meme unites three unique aspects of the cryptocurrency community to turn ideas into realities.</ParagraphComp>
            <ListComp ordered={true}>
                <li>The Meme: Unlocking happiness. </li>
                <li>SocialFi Injector and social mining: Bringing fun to every conversation. </li>
                <li>Startup LaunchPad and Booster [DLUP-SLB]: Making ideas a reality. </li>
            </ListComp>
        </WrapperComp>
    )
}

export default Omni_Laugh;