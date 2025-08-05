import { useEffect, useRef, useState } from "react";
import AccordionComp from "../components/AccordionComponents/AccordionComponent";

const data = [
    { accordionText: "Important Note", content: "Important" },
    { accordionText: "Token Supply", content: "Supply" },
    { accordionText: "Airdrop Allocation", content: "Allocation" },
    { accordionText: "Project Allocation", content: "Project" },
    { accordionText: "Zeta Comm. Allocation", content: "Zeta" },
    { accordionText: "SocialFi Distribution", content: "SocialFi" },
    { accordionText: "Fan Launch", content: "Fan" },
    { accordionText: "Dex Allocation", content: "Dex" },
    { accordionText: "Token Burns", content: "Token" },
    { accordionText: "Burn Sum/Spec", content: "Burn" }
];


const Tokenomics = () => {

    const [contentHeight, setContentHeight] = useState('0px');
    const [previousIndex, setPreviousIndex] = useState<number>(0);
    const [nextIndex, setNextIndex] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const content = useRef<HTMLDivElement>(null);

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
        <section className="flex flex-col min-h-screen bg-gradient-to-br from-brand-color-primary to-teal-700 py-8">
            <div className="relative flex flex-col items-center text-3xl text-brand-color-secondary font-bold">
                <span>$LMAO</span>
                <span>TOKENOMICS</span>
                <span className="text-lg text-brand-color-fourth">[Testnet]</span>
            </div>
            <div ref={content} className="relative min-h-[700px] mt-10 mx-3 mb-0 py-10 px-2 md:px-15 lg:px-30 2xl:px-50 flex flex-col justify-between border rounded-xl border-brand-color-fourth text-brand-color-fourth  ">
                
                <span className="absolute -top-5 left-1/4 backdrop-blur-3xl py-2 w-1/2 text-center border rounded-lg font-bold z-2">{currentIndex >= 0 ? data[currentIndex].accordionText : 'Select an Article'}</span>
                {data.map((item, i) => (
                <AccordionComp
                    key={i}
                    index={i}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    // setTitle={setTitle}
                    height={contentHeight}
                    accordionText={item.accordionText}
                >
                    <div>{item.content}</div>
                </AccordionComp>
                ))}

            </div>

            <div className=" flex justify-between py-5 px-5">
                <button onClick={() => setCurrentIndex(previousIndex)} className={` ${!data.find((_, i) => i == previousIndex)?.accordionText && 'opacity-0'} px-3 py-2 bg-brand-color-secondary border text-black rounded-xl cursor-pointer`}>{data.find((_, i) => i == previousIndex)?.accordionText}</button>
                <button onClick={() => setCurrentIndex(nextIndex)} className={` ${!data.find((_, i) => i !== 0 && i == nextIndex)?.accordionText && 'opacity-0'} px-3 py-2 bg-brand-color-secondary border text-black rounded-xl cursor-pointer`}>{data.find((_, i) => i !== 0 && i == nextIndex)?.accordionText}</button>
            </div>
        </section>
    )
}

export default Tokenomics;