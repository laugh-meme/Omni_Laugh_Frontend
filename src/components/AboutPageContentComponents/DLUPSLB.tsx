

import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

import TanoshiSwap2 from "../../assets/TanoshiSwap2.png"
import ImageComp from "../ContentComponents/ImageComponent";
import TitleComp2 from "../ContentComponents/TitleComponent2";

const DLUPSLB = () => {
    return (
        <WrapperComp>
            <TitleComp>Making ideas a reality</TitleComp>
            <ParagraphComp> As a utility deflatory meme token, Omni_Laugh is heavily committed to helping project ideas become a reality. Holders of the Omni_Laugh Token can contribute to start-up ideas and be rewarded as early contributors. Plus; with every startup idea that is launched on the dlup-slb, a percentage of the Omni_Laugh Token total supply is burnt. Making it a win-win for both holders of the Omni_Laugh token and contributors to the start-up idea.</ParagraphComp>
            <ParagraphComp>The Decentralized LMAO Utilities Pools [DLUP] and Startup LaunchPad and Booster [SLB] provides the core mechanics to ensure that Omni_Laugh as a utility deflatory memecoin stands at the forefront of blockchain innovation while inspiring ideas and intriguing use cases for the Omni_Laugh Token - $LMAO. </ParagraphComp>

            <TitleComp2>Why DLUP-SLB matters?</TitleComp2>
            <ListComp>
                <li>DLUP-SLB provides a solid foundation for innovative projects/dApps to build on. </li>
                <li>DLUP-SLB employs a dynamic approach that provides the Omni_Laugh community with utilities that are tailored and governed based on the community pain points. </li>
                <li>As a future proof project, the Omni_Laugh community will continually benefit from utility based projects as they will utilise the $LMAO token for various actions and at the same time, function as a practical solution to token inflation and value fluctuations. </li>
            </ListComp>

            <TitleComp2>Stage 1 - DLUP: </TitleComp2>
            <ListComp>
                <li>DLUP is strictly for startups that will integrate $LMAO or $zeta as a utility token in their dApps.  </li>
                <li>DApps with token support must tokenize their assets on the Zetablockchain.</li>
                <li>A <span className="font-bold">PRB</span> must accumulate a minimum of 1,000,000 $LMAO [or as voted by the VIPDAO] within a 31 day period from a minimum of 70 unique $LMAO holders with first charged $LMAO transaction dating back a minimum of 60 days before the PRB staking.</li>
                <li>On project promotion to the SLB, staked $LMAO will be unstaked and available for claim after a 7 day period.</li>
                <li>5% of the total staked $LMAO will be burnt from the $LMAO SocialFi Allocation. </li>
            </ListComp>

            <TitleComp2>Stage 2 - SLB: </TitleComp2>
            <ListComp>
                <li>Users can stake their $LMAO token to a PRB on the SLB during an incubation period of 7 days for 6 weeks.  </li>
                <li>After a 6 week period stakers can swap their staked $LMAO to a PRB-shares at a rate of 1000 $LMAO to 1 PRB-shares which will entitle the PRB-shares holders to earning rewards from the project $LMAO/zeta fee and subscription pool and other PRB-shares exclusive as long as the project functions. </li>
                <li>5% of the Total PRB-shares owned will be estimated in $LMAO and burnt from the $LMAO token SocialFi Allocation.</li>
            </ListComp>
        </WrapperComp>
    )
}

export default DLUPSLB;