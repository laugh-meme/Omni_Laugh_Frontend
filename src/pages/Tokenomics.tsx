import { useEffect, useRef, useState } from "react";
import AccordionComp from "../components/AccordionComponents/AccordionComponent";

import ImportantNote from "../components/TokenomicsPageContentComponents/ImportantNote";
import TokenSupply from "../components/TokenomicsPageContentComponents/TokenSupply";
import AirdropAllocation from "../components/TokenomicsPageContentComponents/AirdropAllocation";
import ProjectDevelopmentAllocation from "../components/TokenomicsPageContentComponents/ProjectDevelopmentAllocation";
import ZetaCommunityAllocation from "../components/TokenomicsPageContentComponents/ZetaCommunityAllocation";
import SocialFiDistributionMechanics from "../components/TokenomicsPageContentComponents/SocialFiDistributionMechanics";
import FanLaunchTokenAllocation from "../components/TokenomicsPageContentComponents/FanLaunchTokenAllocation";
import DexAllocation from "../components/TokenomicsPageContentComponents/DexAllocation";
import LMAOTokenBurn from "../components/TokenomicsPageContentComponents/LMAOTokenBurn";
import BurnSummarySpeculation from "../components/TokenomicsPageContentComponents/BurnSummarySpeculation";


type Data = {
    accordionText: string;
    content: JSX.Element;
};

const data: Data[] = [
    { accordionText: "Important Note", content: <ImportantNote /> },
    { accordionText: "Token Supply", content: <TokenSupply /> },
    { accordionText: "Airdrop Allocation", content: <AirdropAllocation /> },
    { accordionText: "Project Allocation", content: <ProjectDevelopmentAllocation /> },
    { accordionText: "Zeta Comm. Allocation", content: <ZetaCommunityAllocation /> },
    { accordionText: "SocialFi Distribution", content: <SocialFiDistributionMechanics /> },
    { accordionText: "Fan Launch", content: <FanLaunchTokenAllocation /> },
    { accordionText: "Dex Allocation", content: <DexAllocation /> },
    { accordionText: "Token Burns", content: <LMAOTokenBurn /> },
    { accordionText: "Burn Sum/Spec", content: <BurnSummarySpeculation /> }
];


const Tokenomics = () => {

    const [contentHeight, setContentHeight] = useState('0px');
    const [previousIndex, setPreviousIndex] = useState<number>(0);
    const [nextIndex, setNextIndex] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const content = useRef<HTMLDivElement>(null);

    const [isTimeOut, setIsTimeOut] = useState<boolean>(false);

    useEffect(() => {
        const height = content.current?.offsetHeight
        console.log(height)
        if (height) {
            setContentHeight(`${height}px`);
        }
    })

    useEffect(() => {
        if (currentIndex >= 0) {
            setPreviousIndex(currentIndex  - 1);
            setNextIndex(currentIndex + 1);
            console.log(previousIndex, currentIndex, nextIndex);
        }
    }, [currentIndex])

    return (
        <section className="flex flex-col min-h-screen bg-gradient-to-br from-brand-color-primary to-teal-700 py-8 ">
            <div className="relative flex flex-col items-center text-3xl text-brand-color-secondary font-bold">
                <span>$LMAO</span>
                <span>TOKENOMICS</span>
                <span className="text-lg text-brand-color-fourth">[Testnet]</span>
            </div>
            <div ref={content} className="relative h-[700px] lg:h-[700px] lg:mx-20 2xl:mx-50 mt-10 mx-3 mb-0 pt-10 pb-5 px-2 md:px-15 lg:px-30 2xl:px-50  border rounded-xl border-brand-color-fourth text-brand-color-fourth  ">
                <span className="absolute -top-5 left-1/4 backdrop-blur-3xl py-2 w-1/2 text-center sm:text-xl lg:text-2xl border rounded-lg font-bold z-1">{currentIndex >= 0 ? data[currentIndex].accordionText : 'Select an Article'}</span>
                <div className="flex flex-col justify-between gap-5 h-full overflow-y-auto">
                    {data.map((item, i) => (
                    <AccordionComp
                        key={i}
                        index={i}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                        isTimeOut={isTimeOut}
                        height={contentHeight}
                        accordionText={item.accordionText}
                    >
                        <div>{item.content}</div>
                    </AccordionComp>
                    ))}
                </div>

            </div>

            <div className=" flex justify-between py-5 px-5 lg:mx-20 xl:mx-50">
                <button onClick={() => {
                    setCurrentIndex(previousIndex)
                    if (currentIndex >= 0) {
                        setIsTimeOut(true);
                        setTimeout(() => {
                            setIsTimeOut(false)
                        }, 400)
                    }
                    }} className={` ${!data.find((_, i) => i == previousIndex)?.accordionText && 'opacity-0'} px-3 py-2 bg-brand-color-secondary border text-black rounded-xl cursor-pointer`}>{data.find((_, i) => i == previousIndex)?.accordionText}</button>
                <button onClick={() => {
                    setCurrentIndex(nextIndex)
                    if (currentIndex >= 0) {
                        setIsTimeOut(true);
                        setTimeout(() => {
                            setIsTimeOut(false)
                        }, 400)
                    }
                    }} className={` ${!data.find((_, i) => i !== 0 && i == nextIndex)?.accordionText && 'opacity-0'} px-3 py-2 bg-brand-color-secondary border text-black rounded-xl cursor-pointer`}>{data.find((_, i) => i !== 0 && i == nextIndex)?.accordionText}</button>
            </div>
        </section>
    )
}

export default Tokenomics;