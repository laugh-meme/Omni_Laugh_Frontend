import { useState} from "react";

import DrawnerComp from '../components/DrawnerComponent/DrawnerComponent';
import DrawnerButtonComp from '../components/DrawnerComponent/DrawnerButton';

import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import laugh2 from '../assets/laugh2.png'


const Profile = () => {

    const [activePage, setActivePage] = useState<'details' | 'assets'>('details');
    const [activeAssetsPage, setActiveAssetsPage] = useState<'pools' | 'nft' | 'tokens'>('nft')

    return (
        <section className="border-white/50 text-white/50 px-2 md:px-15 lg:px-30 2xl:px-50 ">
            <div className="w-full flex justify-center relative">
                <button className="border w-1/2 text-lg sm:text-3xl px-10 py-2 sm:py-4 mb-2 rounded-xl text-center">Profile</button>
                <img src={ laugh2 } className="w-15 absolute right-1/13 top-0 sm:w-21" />
            </div>
            <div className="relative w-full border rounded-xl min-h-100 py-10 px-3 md:px-10 transition-all duration-300">
                {/* Options */}
                <button onClick={() => setActivePage('details')} className={`absolute top-5 left-1/8 font-bold py-1 px-6 border sm:text-2xl bg-brand-color-primary rounded-lg cursor-pointer ${activePage === 'details' && 'border-brand-color-secondary text-brand-color-secondary '} `}>Details</button>
                <button onClick={() => setActivePage('assets')} className={`absolute top-5 right-1/8 font-bold py-1 px-6 border sm:text-2xl bg-brand-color-primary rounded-lg cursor-pointer ${activePage === 'assets' && 'border-brand-color-secondary text-brand-color-secondary'} `}>Assets</button>

                {/* Profile */}
                {activePage === 'details' ? (
                    <div className="w-full min-h-100 border-3 bg-teal-700 border-brand-color-secondary rounded-2xl shadow-xl">
                        <div className="w-full flex flex-col gap-4 py-10 px-3 md:px-6 lg:px-20 md:py-20 font-bold">
                            <DrawnerComp className='' btnText='Main Wallet'>
                                <DrawnerButtonComp text='*****67hg8' />
                                <button className="text-xs md:text-[14px] text-wrap hover:text-brand-color-secondary transition duration-300">2FA ON</button>
                            </DrawnerComp>

                            <DrawnerComp className='' btnText='Main Social'>
                                <DrawnerButtonComp text='X @username' />
                                <button className="text-xs md:text-[14px] text-wrap hover:text-brand-color-secondary transition duration-300">2FA ON</button>
                            </DrawnerComp>

                            <DrawnerComp className='' btnText='Bids'>
                                <span className="text-xs font-normal text-white">Null Active Bids</span>
                                <span className="text-xs font-normal text-black">Null Lost Bids</span>
                            </DrawnerComp>

                            <DrawnerComp className='' btnText='Contributions'>
                                <DrawnerButtonComp className="min-w-[60px]" text='Topics'/>
                                <DrawnerButtonComp className="min-w-[60px]" text='Comnt'/>
                                <DrawnerButtonComp className="min-w-[60px]" text='RB'/>
                                <DrawnerButtonComp className="min-w-[60px]" text='PRB'/>
                            </DrawnerComp>

                            <DrawnerComp className='' btnText='Followed'>
                                <DrawnerButtonComp className="min-w-[60px]" text='Topics'/>
                                <DrawnerButtonComp className="min-w-[60px]" text='Comnt'/>
                                <DrawnerButtonComp className="min-w-[60px]" text='RB'/>
                                <DrawnerButtonComp className="min-w-[60px]" text='PRB'/>
                            </DrawnerComp>

                            <DrawnerComp className='' btnText='Identification'>
                                <DrawnerButtonComp className="min-w-[60px]" text='Topics'/>
                                <DrawnerButtonComp className="min-w-[60px]" text='Comnt'/>
                                <DrawnerButtonComp className="min-w-[60px]" text='RB'/>
                                <DrawnerButtonComp className="min-w-[60px]" text='PRB'/>
                            </DrawnerComp>

                        </div>
                    </div>
                ) : (
                    <div className="w-full flex items-stretch min-h-100 2xl:min-h-150 border-3 bg-teal-700 border-brand-color-secondary rounded-2xl shadow-xl">
                        <div className="w-full flex flex-col gap-4 py-15 pb-0 px-3 md:px-6 lg:px-20 md:pt-20 font-bold">
                            {/* Options */}
                            <div className="flex gap-3">
                                <DrawnerButtonComp onClickFn={() => setActiveAssetsPage('pools')} className={`${activeAssetsPage === 'pools' && 'text-brand-color-secondary'}`} text='Pools' />
                                <DrawnerButtonComp onClickFn={() => setActiveAssetsPage('nft')} className={`${activeAssetsPage === 'nft' && 'text-brand-color-secondary'}`} text='NFT' />
                                <DrawnerButtonComp onClickFn={() => setActiveAssetsPage('tokens')} className={`${activeAssetsPage === 'tokens' && 'text-brand-color-secondary'}`} text='Tokens' />
                            </div>
                            <hr className=""/>
                            {activeAssetsPage === 'nft' && (
                                <>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-6 gap-3 text-brand-color-secondary">

                                        <div className="flex flex-col justify-center items-center gap-2 py-3 sm:pb-8 border rounded-xl">
                                            <span className="text-xs sm:text-md">Topic</span>
                                            <span className="text-3xl sm:text-4xl">NFT</span>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-2 py-3 sm:pb-8 border rounded-xl">
                                            <span className="text-xs sm:text-md">Fun_Master</span>
                                            <span className="text-3xl sm:text-4xl">NFT</span>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-2 py-3 sm:pb-8 border rounded-xl">
                                            <span className="text-xs sm:text-md">Fun_Master</span>
                                            <span className="text-3xl sm:text-4xl">NFT</span>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-2 py-3 sm:pb-8 border rounded-xl">
                                            <span className="text-xs sm:text-md">Fun_Master</span>
                                            <span className="text-3xl sm:text-4xl">NFT</span>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-2 py-3 sm:pb-8 border rounded-xl">
                                            <span className="text-xs sm:text-md">PRB</span>
                                            <span className="text-3xl sm:text-4xl">NFT</span>
                                        </div>
                                        <div className="flex flex-col justify-center items-center gap-2 py-3 sm:pb-8 border rounded-xl">
                                            <span className="text-xs sm:text-md">RB</span>
                                            <span className="text-3xl sm:text-4xl">NFT</span>
                                        </div>




                                        
                                    </div>

                                    <div className="flex justify-center items-end h-full w-full pb-3 md:pb-6">
                                        <ul className="flex cursor-pointer ">
                                            <li className="flex lg:text-lg items-center border rounded-l-lg px-2 py-1 hover:text-brand-color-secondary transition duration-300 "><FaRegHandPointLeft /></li>
                                            <li className="border lg:text-lg px-3 py-1 hover:text-brand-color-secondary transition duration-300">1</li>
                                            <li className="border lg:text-lg px-3 py-1 hover:text-brand-color-secondary transition duration-300">2</li>
                                            <li className="border lg:text-lg px-3 py-1 hover:text-brand-color-secondary transition duration-300">3</li>
                                            <li className="flex items-center border rounded-r-lg px-2 py-1  hover:text-brand-color-secondary transition duration-300"><FaRegHandPointRight /></li>
                                        </ul>
                                    </div>
                                </>
                            )}

                            {activeAssetsPage === 'tokens' && (
                                <div className="flex flex-col gap-3 justify-center h-full pb-10">
                                    <DrawnerComp className="text-center text-brand-color-secondary" btnText="Valid $LMAO">
                                        <span className="text-2xl w-full">10,000</span>
                                        <span>+10 Days</span>
                                    </DrawnerComp>

                                    <DrawnerComp className="text-center text-brand-color-secondary" btnText="Vesting $LMAO">
                                        <span className="text-2xl w-full">10,000</span>
                                        <span>-5 Days</span>
                                    </DrawnerComp>

                                    <DrawnerComp className="text-center text-brand-color-secondary" btnText="Pending $LMAO">
                                        <span className="text-2xl w-full">-10,000</span>
                                        <span>200 Days</span>
                                    </DrawnerComp>
                                </div>
                            )}

                            {activeAssetsPage === 'pools' && (
                                <div className="flex h-full w-full items-center justify-center pb-15">
                                    <h1>Not available</h1>
                                </div>
                            )}


                        </div>
                    </div>
                )}
            </div>
            {/* Checkout */}
            <DrawnerComp className='px-5 mt-5' btnText='Check out'>
                <DrawnerButtonComp text='Random suggestion' />
            </DrawnerComp>
        </section>
    )
}

export default Profile;