
interface NFTCardP {
    img: string;
    imgAlt: string;
    name: string;
    attribute: string,
    attribute2: string
}

const NFTCardComp = ({
    img,
    imgAlt,
    name,
    attribute,
    attribute2

}: NFTCardP) => {

    return (
        <div className="border border-b-0 border-r-0 border-black rounded-t-xl rounded-b-sm ">
            <div className="flex flex-col border-1 border-t-0 border-b-0 border-r-0 border-brand-color-foreground rounded-t-xl rounded-b-sm">
                <div className="flex justify-between items-center bg-brand-color-foreground rounded-t-xl px-2 py-1">
                    <div className="text-md md:text-xl lg:text-2xl text-center font-mono text-blue-400">{name}</div>
                    <div className="flex flex-col justify-center items-center text-end text-xs lg:text-sm">
                        <span className="font-mono font-bold text-white">{attribute}</span>
                        <span className="font-mono text-brand-color-primary">{attribute2}</span>
                    </div>
                </div>
                <div className="flex">
                    <img src={img} alt={imgAlt} />
                </div>
                <div className="flex justify-center items-start ">
                    <button className="px-1 mx-3 w-1/4 text-xs md:text-sm text-brand-color-foreground font-bold border border-brand-color-foreground rounded-md cursor-pointer hover:text-black hover:bg-brand-color-foreground transition-all duration-300">Mint</button>
                    <button className="px-2 py-1 w-2/4 text-sm md:text-lg text-white font-bold border border-brand-color-foreground rounded-md cursor-pointer hover:text-black hover:bg-brand-color-foreground transition-all duration-300">Swap</button>
                    <button className="px-1 mx-3 w-1/4 text-xs md:text-sm sm:text-md text-brand-color-foreground font-bold border border-brand-color-foreground rounded-md cursor-pointer hover:text-black hover:bg-brand-color-foreground transition-all duration-300">List</button>
                </div>
            </div>
        </div>
    )
}

export default NFTCardComp;
