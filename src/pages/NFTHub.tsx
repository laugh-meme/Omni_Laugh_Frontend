
import NFTCardComp from "../components/NFTCardComponent/NFTCardComponent";
import site1 from '../assets/site1.png'
const cards = [
    { img: site1, imgAlt: 'nftImage', name: 'Omni Laugh', attribute: 'Epic', attribute2: 'Rare' },
    { img: site1, imgAlt: 'nftImage', name: 'Omni Rage', attribute: 'Legend', attribute2: 'Epic' },
    { img: site1, imgAlt: 'nftImage', name: 'Omni Sad', attribute: 'Normal', attribute2: 'Low' },
    { img: site1, imgAlt: 'nftImage', name: 'Omni Good', attribute: 'Normal', attribute2: 'Low' },
    
]


const NFTHub = () => {

    return (


        <div className="flex flex-col justify-center items-center px-0 sm:px-10" >
            <h1 className="text-3xl text-brand-color-secondary font-bold mb-5">NFT HUB</h1>
            <div className="w-full py-10 px-2 flex flex-col justify-around border-2 border-teal-500 bg-teal-700 rounded-xl">
                <div className="flex justify-center"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    cards.map((c, i) => (
                        <NFTCardComp
                            key={i}
                            img={c.img}
                            imgAlt={c.imgAlt}
                            name={c.name}
                            attribute={c.attribute}
                            attribute2={c.attribute2}
                        />
                    ))
                }
                </div>
            </div>
            
        </div>            
    )
}

export default NFTHub;