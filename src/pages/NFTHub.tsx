import { useState, useRef, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import NFTCardComp from "../components/NFTCardComponent/NFTCardComponent";
import site1 from '../assets/site1.png'
const cards = [
    { img: site1, imgAlt: 'nftImage', name: 'Omni Laugh', attribute: 'Epic', attribute2: 'Rare' },
    { img: site1, imgAlt: 'nftImage', name: 'Omni Rage', attribute: 'Legend', attribute2: 'Epic' },
    { img: site1, imgAlt: 'nftImage', name: 'Omni Sad', attribute: 'Normal', attribute2: 'Low' },
    { img: site1, imgAlt: 'nftImage', name: 'Omni Good', attribute: 'Normal', attribute2: 'Low' },
    
]

type Position = {
	top: number;
	left: number;
}

const NFTHub = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [boxPosition, setBoxPosition] = useState<Position>({ top: 0, left: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

	// Tıklanınca pozisyonu hesaplayan fonksiyon
	const handleCardClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
		const rect = event.currentTarget.getBoundingClientRect();
		setBoxPosition({
			top: rect.top + window.scrollY - 150,
			left: rect.left + 50,
		});
		setActiveIndex(index);
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setActiveIndex(null);
        }
        };

        document.addEventListener('click', handleClickOutside);

        // Cleanup
        return () => {
        document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    
    const renderInfoBox = () => {
		if (activeIndex === null) return null;

		return (
			<div
				className="absolute z-50 h-fit w-30 bg-teal-700 text-brand-color-secondary border border-brand-color-foreground pl-4 pr-2 py-2 rounded-2xl"
				style={{ top: boxPosition.top, left: boxPosition.left }}
            >   
                <span className="flex justify-end text-end text-xl cursor-pointer" onClick={() => {
                    setActiveIndex(null);
                }}>
                    <IoIosCloseCircleOutline className=""/>

                </span>
                <ul className="font-bold cursor-pointer">
                    <li>DEX</li>
                    <li>DLU Pool</li>
                    <li>NFT Hub</li>
                    <li>Social Mining</li>
                    <li>VIPDAO</li>
                </ul>
			</div>
		);
	};

    return (
        

        <div className="flex flex-col justify-center items-center px-0 md:px-10" >
            {renderInfoBox()}
            <h1 className="text-3xl text-brand-color-secondary font-bold mb-5">NFT HUB</h1>
            <div className="w-full py-10 px-2 flex flex-col justify-around border-2 border-teal-500 bg-teal-700 rounded-xl">
                <div className="flex justify-center"></div>
                <div className="flex h-fit flex-wrap" ref={containerRef}>
                    {
                        cards.map((c, i) => (
                            <div className="relative w-1/2 px-1 md:px-5 sm:w-1/4 mb-10 cursor-pointer" onClick={(e) => handleCardClick(e, i)}>
                                <NFTCardComp
                                    key={i}
                                    img={c.img}
                                    imgAlt={c.imgAlt}
                                    name={c.name}
                                    attribute={c.attribute}
                                    attribute2={c.attribute2}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>            
    )
}

export default NFTHub;