import { useState, useRef, useEffect} from "react";
import { TiTickOutline } from "react-icons/ti";
import laugh2 from '../assets/laugh2.png'


const Profile = () => {

    const [openMainWallet, setOpenMainWallet] = useState(false);
    const [openMainSocial, setOpenMainSocial] = useState(false);
    const [openBids, setOpenBids] = useState(false);
    const [openContributions, setOpenContributions] = useState(false);
    const [openFollowed, setOpenFollowed] = useState(false);
    const [openIdentification, setOpenIdentification] = useState(false);
    const [openCheckOut, setCheckOut] = useState(false);



    // ---------------------------
    // Show and set position for pop-up
    const [openPopUp, setOpenPopUp] = useState(false)
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 })
    const walletSelector = useRef<HTMLButtonElement | null>(null)
    const socialsSelector = useRef<HTMLButtonElement | null>(null)
    const popupRef = useRef<HTMLDivElement | null>(null);

    // Open menu
    const handlePopupOpen = (buttonRef: React.RefObject<HTMLButtonElement>) => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
    
            setPopupPosition({
                top: rect.top + window.scrollY + rect.height + 8, // butonun altına 8px boşluk
                left: rect.left + window.scrollX + rect.width / 2, // butonun ortası
            });
    
            setOpenPopUp(true);
        }
    };
    
    // Automatically close if clicked other elements
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target as Node) &&
                walletSelector.current &&
                !walletSelector.current.contains(event.target as Node) ||
                socialsSelector.current &&
                !socialsSelector.current.contains(event.target as Node)
                
            ) {
                setOpenPopUp(false);
            }
        };
    
        if (openPopUp) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openPopUp]);
    
    // --------------------------
    


    return (
        <div className="border-white/50 text-white/50 px-2 md:px-15 lg:px-30 2xl:px-50 ">
            <div className="w-full flex justify-center relative">
                <button className="border w-1/2 text-lg sm:text-2xl px-10 py-2 sm:py-4 mb-2 rounded-xl text-center">Profile</button>
                <img src={ laugh2 } className="w-15 absolute right-1/13 top-0 sm:w-21" />
            </div>
            <div className="relative w-full border rounded-xl min-h-100 py-10 px-3 md:px-10">
                {/* Options */}
                <button className="absolute top-5 left-1/8 font-bold py-1 px-6 border sm:text-2xl bg-brand-color-primary border-brand-color-secondary text-brand-color-secondary rounded-lg cursor-pointer">Details</button>
                <button className="absolute top-5 right-1/8 font-bold py-1 px-6 border sm:text-2xl bg-brand-color-primary rounded-lg cursor-pointer">Assets</button>

                {/* Pop up menu */}
                {openPopUp && (
                    <div
                        ref={popupRef}
                        className="fixed min-w-fit bg-brand-color-secondary border rounded-xl py-2 px-2 text-black text-sm sm:text-lg font-bold shadow-lg z-50"
                        style={{
                            top: `${popupPosition.top}px`,
                            left: `${popupPosition.left}px`,
                            transform: 'translateX(-50%)'
                        }}
                    >
                        <ul className="flex flex-col gap-1.5 cursor-pointer  ">
                            <li className="flex items-center transition duration-300 hover:text-brand-color-primary">0x...1234 <TiTickOutline className="text-lg" /></li>
                            <li className="flex items-center transition duration-300 hover:text-brand-color-primary">0x...5678 <TiTickOutline className="text-lg" /></li>
                            <li className="flex items-center transition duration-300 hover:text-brand-color-primary">0x...9abc <TiTickOutline className="text-lg" /></li>
                        </ul>
                    </div>
                )}

                {/* Settings */}
                <div className="w-full min-h-100 border-3 bg-teal-700 border-brand-color-secondary rounded-2xl shadow-xl">
                    <div className="w-full flex flex-col gap-4 py-10 px-3 md:px-6 lg:px-20 md:py-20 font-bold">

                        {/* Main Wallet */}
                        <div className="flex justify-center items-stretch">
                            <button
                                onClick={() => setOpenMainWallet(!openMainWallet)}
                                className={`
                                    border rounded-xl py-2 cursor-pointer sm:text-xl
                                    transition-all duration-500 ease text-nowrap
                                    ${openMainWallet && 'border-brand-color-secondary text-brand-color-secondary rounded-r-none text-xs'}
                                `}
                                style={{
                                width: openMainWallet ? '33.3333%' : '100%',
                                transition: 'width 0.5s ease-in-out',
                            }}> Main Wallet</button>
                            <div className={`
                                transition-all duration-500 ease-in-out overflow-hidden origin-left
                                ${openMainWallet ? 'opacity-100 pl-0' : 'opacity-0 pl-0'}
                            `}
                            style={{
                                width: openMainWallet ? '66.6666%' : '0px',
                                transition: 'width 0.5s ease-in-out, opacity 0.5s ease-in-out',
                            }}>
                                <div className="flex items-center gap-2 min-h-[50px] sm:min-h-[58px] justify-center border border-l-0 border-brand-color-secondary px-1 py-2 rounded-xl rounded-l-none">
                                    <button ref={walletSelector} onClick={() => handlePopupOpen(walletSelector)} className="w-full text-xs sm:text-lg border border-brand-color-secondary rounded-xl py-1 px-2 text-brand-color-secondary text-nowrap"> ******67hg8</button>
                                    <button className="text-xs sm:text-sm hover:text-brand-color-secondary transition duration-300 cursor-pointer">2FA ON</button>
                                </div>
                            </div>
                        </div>

                        {/* Main Social */}
                        <div className="flex justify-center items-stretch">
                            <button
                                onClick={() => setOpenMainSocial(!openMainSocial)}
                                className={`
                                    border rounded-xl py-2 cursor-pointer sm:text-xl
                                    transition-all duration-500 ease text-nowrap
                                    ${openMainSocial && 'border-brand-color-secondary text-brand-color-secondary rounded-r-none text-xs'}
                                `}
                                style={{
                                width: openMainSocial ? '33.3333%' : '100%',
                                transition: 'width 0.5s ease-in-out',
                            }}> Main Social</button>
                            <div className={`
                                transition-all duration-500 ease-in-out overflow-hidden origin-left
                                ${openMainSocial ? 'opacity-100 pl-0' : 'opacity-0 pl-0'}
                            `}
                            style={{
                                width: openMainSocial ? '66.6666%' : '0px',
                                transition: 'width 0.5s ease-in-out, opacity 0.5s ease-in-out',
                            }}>
                                <div className="flex items-center gap-2 min-h-[50px] sm:min-h-[58px] justify-center border border-l-0 border-brand-color-secondary px-1 py-2 rounded-xl rounded-l-none">
                                    <button ref={socialsSelector} onClick={() => handlePopupOpen(socialsSelector)} className="w-full text-xs sm:text-lg border border-brand-color-secondary rounded-xl py-1 px-2 text-brand-color-secondary text-nowrap"> X @username</button>
                                    <button className="text-xs sm:text-sm hover:text-brand-color-secondary transition duration-300 cursor-pointer">2FA ON</button>
                                </div>
                            </div>
                        </div>

                        {/* Bids */}
                        <div className="flex justify-center items-stretch">
                            <button
                                onClick={() => setOpenBids(!openBids)}
                                className={`
                                    border rounded-xl py-2 cursor-pointer sm:text-xl
                                    transition-all duration-500 ease text-nowrap
                                    ${openBids && 'border-brand-color-secondary text-brand-color-secondary rounded-r-none text-xs'}
                                `}
                                style={{
                                width: openBids ? '33.3333%' : '100%',
                                transition: 'width 0.5s ease-in-out',
                            }}> Bids</button>
                            <div className={`
                                transition-all duration-500 ease-in-out overflow-hidden origin-left
                                ${openBids ? 'opacity-100 pl-0' : 'opacity-0 pl-0'}
                            `}
                            style={{
                                width: openBids ? '66.6666%' : '0px',
                                transition: 'width 0.5s ease-in-out, opacity 0.5s ease-in-out',
                            }}>
                                <div className="flex items-center gap-2 min-h-[50px] sm:min-h-[58px] justify-center border border-l-0 border-brand-color-secondary px-1 py-2 rounded-xl rounded-l-none">
                                    <span className="text-xs sm:text-sm font-semibold text-white text-nowrap">null Active Bids</span>
                                    <span className="text-xs sm:text-sm font-semibold text-black text-nowrap">null Lost Bids</span>
                                </div>
                            </div>
                        </div>

                        {/* Contributions  */}
                        <div className="flex justify-center items-stretch">
                            <button
                                onClick={() => setOpenContributions(!openContributions)}
                                className={`
                                    border rounded-xl py-2 cursor-pointer sm:text-xl
                                    transition-all duration-500 ease text-nowrap
                                    ${openContributions && 'border-brand-color-secondary text-brand-color-secondary rounded-r-none text-xs'}
                                `}
                                style={{
                                width: openContributions ? '33.3333%' : '100%',
                                transition: 'width 0.5s ease-in-out',
                            }}> Contributions</button>
                            <div className={`
                                transition-all duration-500 ease-in-out overflow-hidden origin-left
                                ${openContributions ? 'opacity-100 pl-0' : 'opacity-0 pl-0'}
                            `}
                            style={{
                                width: openContributions ? '66.6666%' : '0px',
                                transition: 'width 0.5s ease-in-out, opacity 0.5s ease-in-out',
                            }}>
                                <div className="flex sm:grid grid-cols-4 items-center gap-2 min-h-[50px] sm:min-h-[58px] justify-center border border-l-0 border-brand-color-secondary px-1 py-2 rounded-xl rounded-l-none">
                                    <button className=" relative text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">
                                        <span className="absolute right-0 top-0 inline-flex w-1 h-1 animate-ping rounded-full bg-white"></span>
                                        Topics
                                    </button>
                                    <button className="text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">Comnt</button>
                                    <button className="text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">RB</button>
                                    <button className="text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">PRB</button>
                                </div>
                            </div>
                        </div>

                        {/* Followed */}
                        <div className="flex justify-center items-stretch">
                            <button
                                onClick={() => setOpenFollowed(!openFollowed)}
                                className={`
                                    border rounded-xl py-2 cursor-pointer sm:text-xl
                                    transition-all duration-500 ease text-nowrap
                                    ${openFollowed && 'border-brand-color-secondary text-brand-color-secondary rounded-r-none text-xs'}
                                `}
                                style={{
                                width: openFollowed ? '33.3333%' : '100%',
                                transition: 'width 0.5s ease-in-out',
                            }}> Followed</button>
                            <div className={`
                                transition-all duration-500 ease-in-out overflow-hidden origin-left
                                ${openFollowed ? 'opacity-100 pl-0' : 'opacity-0 pl-0'}
                            `}
                            style={{
                                width: openFollowed ? '66.6666%' : '0px',
                                transition: 'width 0.5s ease-in-out, opacity 0.5s ease-in-out',
                            }}>
                                <div className="flex sm:grid grid-cols-4 items-center gap-2 min-h-[50px] sm:min-h-[58px] justify-center border border-l-0 border-brand-color-secondary px-1 py-2 rounded-xl rounded-l-none">
                                    <button className=" text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">Topics</button>
                                    <button className="text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">Comnt</button>
                                    <button className="relative text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">
                                        RB
                                        <span className="absolute right-0 top-0 inline-flex w-1 h-1 animate-ping rounded-full bg-white"></span>
                                    </button>
                                    <button className="text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">PRB</button>
                                </div>
                            </div>
                        </div>

                        {/* Identification */}
                        <div className="flex justify-center items-stretch">
                            <button
                                onClick={() => setOpenIdentification(!openIdentification)}
                                className={`
                                    border rounded-xl py-2 cursor-pointer sm:text-xl
                                    transition-all duration-500 ease text-nowrap
                                    ${openIdentification && 'border-brand-color-secondary text-brand-color-secondary rounded-r-none text-xs'}
                                `}
                                style={{
                                width: openIdentification ? '33.3333%' : '100%',
                                transition: 'width 0.5s ease-in-out',
                            }}> Identification</button>
                            <div className={`
                                transition-all duration-500 ease-in-out overflow-hidden origin-left
                                ${openIdentification ? 'opacity-100 pl-0' : 'opacity-0 pl-0'}
                            `}
                            style={{
                                width: openIdentification ? '66.6666%' : '0px',
                                transition: 'width 0.5s ease-in-out, opacity 0.5s ease-in-out',
                            }}>
                                <div className="grid grid-cols-3 items-center gap-2 min-h-[50px] sm:min-h-[58px] border border-l-0 border-brand-color-secondary px-1 py-2 rounded-xl rounded-l-none">
                                    <button className=" text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">Topics</button>
                                    <button className="text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">Comnt</button>
                                    <button className="relative text-xs sm:text-sm px-1 py-1 border rounded-lg transition duration-300 hover:text-brand-color-secondary cursor-pointer">RB</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* Checkout */}
            <div className="flex justify-center items-stretch mt-5 mb-10 px-10 sm:h-[58px]">
                <button
                    onClick={() => setCheckOut(!openCheckOut)}
                    className={`
                        border rounded-xl py-2 cursor-pointer sm:text-xl sm:min-h-[58px]
                        transition-all duration-500 ease text-nowrap
                        ${openCheckOut && 'border-brand-color-secondary text-brand-color-secondary rounded-r-none text-xs'}
                    `}
                    style={{
                    width: openCheckOut ? '33.3333%' : '100%',
                    transition: 'width 0.5s ease-in-out',
                }}> Check Out</button>
                <div className={`
                    transition-all duration-500 ease-in-out overflow-hidden origin-left
                    ${openCheckOut ? 'opacity-100 pl-0' : 'opacity-0 pl-0'}
                `}
                style={{
                    width: openCheckOut ? '66.6666%' : '0px',
                    transition: 'width 0.5s ease-in-out, opacity 0.5s ease-in-out',
                }}>
                    <div className="flex items-center gap-2 min-h-[50px] sm:min-h-[58px] justify-center border border-l-0 border-brand-color-secondary px-5 py-2 text-xs sm:text-xl rounded-xl rounded-l-none cursor-pointer">
                        Random Suggestions
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;