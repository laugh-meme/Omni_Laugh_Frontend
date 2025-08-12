import { useEffect, useRef, useState } from "react";
import { useAppKitAccount } from "@reown/appkit/react";
import { Link } from "react-router-dom";

import AccordionComp from "../components/AccordionComponents/AccordionComponent";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import Omni_Laugh from "../components/AboutPageContentComponents/Omni_Laugh";
import TheMeme from "../components/AboutPageContentComponents/TheMeme";
import SocialFiInjectorAndSocialMining from "../components/AboutPageContentComponents/SocialFiInjectorAndSocialMining";
import WhatMakesLMAOSocialMiningUnique from "../components/AboutPageContentComponents/WhatMakesLMAOSocialMiningUnique";
import VipDAO from "../components/AboutPageContentComponents/VipDAO";
import TanoshiSwap from "../components/AboutPageContentComponents/TanoshiSwap";
import DLUPSLB from "../components/AboutPageContentComponents/DLUPSLB";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type Data = {
    accordionText: string;
    content: JSX.Element;
};

const data: Data[] = [
    { accordionText: "Omni_Laugh", content: <Omni_Laugh /> },
    { accordionText: "The Meme", content: <TheMeme /> },
    { accordionText: "SocialFi Injector and Social Mining", content: <SocialFiInjectorAndSocialMining /> },
    { accordionText: "Why $LMAO Social Mining is unique", content: <WhatMakesLMAOSocialMiningUnique /> },
    { accordionText: "The Omni_Laugh DAO [VIPDAO]", content: <VipDAO /> },
    { accordionText: "TanoshiiSwap", content: <TanoshiSwap /> },
    { accordionText: "DLUP and SLB", content: <DLUPSLB /> },
];

const About = () => {

    const { isConnected } = useAppKitAccount();

    const [contentHeight, setContentHeight] = useState('0px');
    const [previousIndex, setPreviousIndex] = useState<number>(0);
    const [nextIndex, setNextIndex] = useState<number>(0);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const content = useRef<HTMLDivElement>(null);

    const [isTimeOut, setIsTimeOut] = useState<boolean>(false);

    useEffect(() => {
        const height = content.current?.offsetHeight
        if (height) {
            setContentHeight(`${height}px`);
        }
    })

    useEffect(() => {
        if (currentIndex >= 0) {
            setPreviousIndex(currentIndex  - 1);
            setNextIndex(currentIndex + 1);
        }
    }, [currentIndex])

    return (
        <section className="flex flex-col min-h-screen bg-gradient-to-br from-brand-color-primary to-teal-700 py-8 ">
            <div className="relative flex flex-col items-center text-3xl text-brand-color-secondary font-bold">
                <Link to={`${isConnected ? '/login' : '/'}`} className=''><span className='absolute top-10 left-5 lg:left-20 2xl:left-50 text-brand-color-secondary text-3xl lg:text-4xl'><IoArrowBackCircleOutline /></span></Link>
                <span>ABOUT</span>
                <span>Omni_Laugh</span>
            </div>
            <div>
                
                <div ref={content} className=" relative h-[700px] lg:mx-20 2xl:mx-50 mt-10 mx-3 mb-0 pt-10 pb-5 px-2 md:px-15 lg:px-30 2xl:px-50  border rounded-xl border-brand-color-fourth text-brand-color-fourth  ">

                    <span className="absolute -top-5 left-1/4 backdrop-blur-3xl py-2 w-1/2 text-center sm:text-xl lg:text-2xl border rounded-lg font-bold z-1">{currentIndex >= 0 ? data[currentIndex].accordionText : 'Select an Article'}</span>
                    <div className="flex flex-col gap-5 h-full overflow-y-scroll px-2">
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
                        }} className={` ${!data.find((_, i) => i == previousIndex)?.accordionText && 'opacity-0'} 
                        px-2 sm:px-3 py-2  bg-brand-color-secondary border text-black text-xl sm:text-2xl rounded-xl  cursor-pointer`}><FaAngleLeft /></button>
                    
                    <button onClick={() => {
                        setCurrentIndex(nextIndex)
                        if (currentIndex >= 0) {
                            setIsTimeOut(true);
                            setTimeout(() => {
                                setIsTimeOut(false)
                            }, 400)
                        }
                        }} className={` ${!data.find((_, i) => i !== 0 && i == nextIndex)?.accordionText && 'opacity-0'} 
                        px-2 sm:px-3 py-2 bg-brand-color-secondary border text-black text-xl sm:text-2xl rounded-xl  cursor-pointer`}><FaAngleRight /></button>
                </div>
            </div>
        </section>
    )
}

export default About;