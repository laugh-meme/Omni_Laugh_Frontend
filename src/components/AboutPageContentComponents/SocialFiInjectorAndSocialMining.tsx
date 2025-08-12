import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import TitleComp2 from "../ContentComponents/TitleComponent2";
import WrapperComp from "../ContentComponents/WrapperComponent";

const SocialFiInjectorAndSocialMining = () => {
    return (
        <WrapperComp>
            <TitleComp>Bringing fun to every conversation</TitleComp>
            <ParagraphComp> The Omni_Laugh project uses bot and smartcontract mechanics to upgrade legacy social media platforms like X/Twitter, telegram and others into SocialFi and engagement mining platforms.</ParagraphComp>

            <TitleComp2>How The Omni_Laugh SocialFi works:</TitleComp2>
            <ListComp ordered={true}>
                <li><span>Mode of share: </span>Smart contract distributes token to accounts that share fun jokes on Omni_Laugh [@lmao_bot] supported social media platforms.</li>
                <li><span>Claimable Amount: </span>Random amount from 10 - 10,000 $lmao. 80% to claimer, 2% to pledger, 5% to Distributor Bot creator [first 6 months of bot linkage] and 5% to Laugh Founder. </li>
                <li><span>Claim limit: </span>Once per social media account $LMAO claim for life. That is, a social media account cannot claim $LMAO more than once</li>
                <li><span>Claim eligibility: </span>The post must be made by a verified user according to the social media platform verification process. The post must include #lmao, $LMAO or/and #lol tag[s]. The post must have a minimum of 100 unique interactions from verified users and be up for at least 72 hours. The $LMAO allocated to the post must be claimed within 96 hours from the Distributor Bot reply to the eligible post, failure to claim will lead to the allocated $LMAO getting burned.</li>
                <li><span>SocialFi Allocation: </span>See $LMAO Tokenomics. </li>
            </ListComp>

            <TitleComp2>Illustration:</TitleComp2>
            <ParagraphComp>@username makes a post on X: <span className="bg-blue-800">BTC is the greatest assets on earth, it's a shame it's overpriced at 100k 🤣.. #lmao</span> </ParagraphComp>
            <ParagraphComp>{'The use of this tag > #lmao and meeting other criterias like the number of likes from verified X account users will trigger the @lmao_bot on X.'}</ParagraphComp>
            <ParagraphComp>LMAO bot response ︾: <span className="bg-yellow-400">@username 😁 made the community laugh, as a thank you, claim your share of the $LMAO token here [link to omnilaugh.com claim portal] </span></ParagraphComp>

            <TitleComp2>How to claim:</TitleComp2>
            <ListComp ordered={true}>
                <li>@username visits omnilaugh.com claim portal. </li>
                <li>Selects the social media platform [X].  </li>
                <li>@username verify their account by authenticating the Claim_portal with their X account.  </li>
                <li>The Claim portal requires @username to verify their claim by sharing the url to the @lmao_bot reply to their post.  </li>
                <li>If all conditions are met, a popup will appear with the specific amount available for @username to claim. </li>

            </ListComp>
        </WrapperComp>
    )
}

export default SocialFiInjectorAndSocialMining;