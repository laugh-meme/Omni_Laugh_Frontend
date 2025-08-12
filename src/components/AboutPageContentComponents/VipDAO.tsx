import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import TitleComp2 from "../ContentComponents/TitleComponent2";
import WrapperComp from "../ContentComponents/WrapperComponent";

import VIPDAO from "../../assets/VIPDAO.png"
import ImageComp from "../ContentComponents/ImageComponent";

const VipDAO = () => {
    return (
        <WrapperComp>
            <TitleComp>On-Chain governance and community ownership</TitleComp>
            <ImageComp src={VIPDAO}/> 
            <ParagraphComp> VIPDAO is a decentralized governance structure that is built to monitor and manage the Omni_Laugh Meme project and its utility development. The idea and development of VIPDAO was inspired by the Zetablockchain VIP Contributors department. An arm of ZetaChain that has contributed immensely to Zetachain community globalisation and ecosystem. </ParagraphComp>
            <ParagraphComp> As a pioneer of the utility deflation based system, VIPDAO ensures utilities geared towards the advancement of the Omni_Laugh Meme are based on the Omni_Laugh community values. With a community ownership system, dApps and utilities that are launched via the DLUP and SLB are owned by the Omni_Laugh community.</ParagraphComp>

            <ParagraphComp>VIPDAO at its core utilises an hybrid algorithm to ensure maximum security and privacy. The VIPDAO hybrid algorithm consist of:</ParagraphComp>
            <ListComp ordered={true}>
                <li>Liquid Democracy [as proposed by <a style={{color: '#1447e6', textDecoration: 'underline'}} href="https://www.reddit.com/r/solidity/s/PY1gL4DMzk">Claudia</a>].</li>
                <li>Wallet Based Vote system. </li>
            </ListComp>

            <TitleComp2>Wallet Based Vote [WBV]</TitleComp2>
            <ParagraphComp>To ensure stability and adequate representation of the Omni_Laugh community Omni_Laugh is introducing the first ever WBV system.</ParagraphComp>
            <ListComp ordered={true}>
                <li>The WBV approach aims to eradicate wrong-doing by ensuring that only early contributors to the Omni_Laugh project have a voting right. That is; Irrespective of how many $LMAO a wallet or user holds, an Omni_Laugh DAO [vipdao] WBV compliant wallet gets only 1 vote. </li>
                <li>Any wallet holding a minimum of 400 $LMAO token for 7days or more can create a topic or Request Board but only <span className="font-bold">Fun_Master NFT</span> holders, specific $LMAO token <span className="font-bold">airdrops</span> and $LMAO <span className="font-bold">Fan Launch participants</span> can vote on the VIPDAO platform.</li>
                <li>If a topic receives 2000 upvotes within a 72 hour period after posting, the topic is then drafted for review and implementation. </li>
                <li>If a Request Board - RB receives 2000 upvotes within a 72 hour period after posting, the Request Board is then promoted to the <span className="font-bold">DLUP</span> and becomes Project Request Board - <span className="font-bold">PRB</span>.</li>
                <li>All topics or Request Board have a 72 hour voting period or as permitted by the VIPDAO.</li>

            </ListComp>

            <TitleComp2>Highlights</TitleComp2>
            <ListComp ordered={true}>
                <li>Participating in the $LMAO Fan Launch event makes the contributor a member of the VIPDAO, earning voting and staking rewards from the $LMAO token native pools.</li>
                <li>Only wallets that participated in Fan Launch, specific airdrop events and holds specific NFTs will have a voting right in the Omni Laugh project governance. </li>
            </ListComp>
        </WrapperComp>
    )
}

export default VipDAO;