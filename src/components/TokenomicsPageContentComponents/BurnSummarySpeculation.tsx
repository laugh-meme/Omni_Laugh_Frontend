import ListComp from "../ContentComponents/ListComponent";
import ParagraphComp from "../ContentComponents/ParagraphComponent";
import TitleComp from "../ContentComponents/TitleComponent";
import WrapperComp from "../ContentComponents/WrapperComponent";

const BurnSummarySpeculation = () => {
    return (
        <WrapperComp>
            <TitleComp>Burn Summary/Speculation</TitleComp>
            <ListComp>
                <li>Unallocated Fan Token burn: unspecified.</li>
                <li>Periodic Transaction-Based Burns: 20% burn quarterly</li>
                <li>DLU/Milestone-Based Burns: Unlimited</li>
            </ListComp>

            <ParagraphComp>Speculation: Approximately 20,000,000,000 - 400,000,000,000 $lmao might be burnt within a period of 36 months which maybe = 40,000,000 - 800,000,000 $zeta in value.</ParagraphComp>

        </WrapperComp>
    )
}

export default BurnSummarySpeculation;