import { useState } from 'react';
import LMAO_logo from '../assets/thumbs.png';
import ZETA_logo from '../assets/zeta_logo.jpg';

type Token = {
    symbol: string;
    address: string;
    img: string;
};

const DEX = () => {
    const [token1, setToken1] = useState('ZETA');
    const [token2, setToken2] = useState('LMAO');
    const [amount1, setAmount1] = useState(0);
    const [amount2, setAmount2] = useState(0);
    const [isSwapping, setIsSwapping] = useState(false);

    const tokenList: Token[] = [
        { symbol: 'LMAO', address: 'lmaotoken', img: LMAO_logo }, 
        { symbol: 'ZETA', address: 'zetatoken', img: ZETA_logo }
    ];

    // Mock swap
    const handleSwap = () => {
        if (!amount1) return;
        setIsSwapping(true);
    };

    // Change tokens  
    const switchTokens = () => {
        setToken1(token2);
        setToken2(token1);
        setAmount1(amount2);
        setAmount2(amount1);
    };

    return (
        <div className="min-h-screen md:h-fit flex items-start justify-center p-2 sm:px-4 mt-10">
            <div className="relative bg-teal-700 border-4 border-r-0 border-b-0 border-brand-color-foreground backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-xl py-3 px-6 ">
                
                {/* Logo */}
                {/* <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <img className='w-18' src={TanoshiSwap} alt='Tanoshi Swap Logo' />
                </div> */}

                {/* Menu */}
                <div className='w-full flex gap-4 pt-6 pb-6 text-white '>
                    <div className='w-full flex gap-1 py-2 justify-center items-center bg-brand-color-primary rounded-xl font-bold shadow-lg'>
                        <button className='text-brand-color-secondary text-shadow-md border py-1 px-3 rounded-2xl cursor-pointer' >Swap</button>
                        <button className='py-1 px-3 text-shadow-md cursor-pointer'>DLUP</button>
                        <button className='py-1 px-3 text-shadow-md cursor-pointer'>SLB</button>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-y-2 text-xs font-semibold'>
                        <button className='py-1 px-1 text-brand-color-primary bg-brand-color-foreground text-shadow-md rounded-lg cursor-pointer'>Liquidity</button>
                        <button className='py-1 px-1 text-brand-color-secondary bg-brand-color-foreground text-shadow-md rounded-lg cursor-pointer'>Staking</button>
                    </div>
                </div>
                
                {/* Token 1 input */}
                <div className="bg-gray-700/50 rounded-2xl p-4 mb-2 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-shadow-lg text-sm">Send</span>
                        <span className="text-yellow-200 text-shadow-lg text-sm">
                        Balance: 
                        </span>
                    </div>
                    <div className="flex items-center">
                        <div className="relative mr-3">
                        <select 
                            value={token1} 
                            onChange={(e) => setToken1(e.target.value)}
                            className="bg-gray-600 text-white appearance-none py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-color-primary"
                        >
                            {tokenList.map(token => (
                            <option key={token.symbol} value={token.symbol}>
                                {token.symbol}
                            </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                        </div>
                        <input
                        type="text"
                        placeholder="0.0"
                        value={amount1}
                        onChange={(e) => setAmount1(Number(e.target.value))}
                        className="bg-transparent text-white text-right text-2xl w-full focus:outline-none placeholder:text-gray-500 "
                        />
                    </div>
                </div>

                {/* Switch Button */}
                <div className="flex justify-center my-3">
                    <button 
                        onClick={switchTokens}
                        className="bg-gray-700 hovsetAmount2er:bg-gray-600 rounded-full p-3 transition-all duration-300 border border-white/10 group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-color-secondary group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                    </button>
                </div>

                {/* Token 2 input */}
                <div className="bg-gray-700/50 rounded-2xl p-4 mb-6 border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white text-shadow-lg text-sm">Receive</span>
                        <span className="text-yellow-200 text-shadow-lg text-sm">
                        Balance: 
                        </span>
                    </div>
                    <div className="flex items-center">
                        <div className="relative mr-3">
                        <select 
                            value={token2} 
                            onChange={(e) => setToken2(e.target.value)}
                            className="bg-gray-600 text-white appearance-none py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-color-primary"
                        >
                            {tokenList.map(token => (
                            <option key={token.symbol} value={token.symbol}>
                                {token.symbol}
                            </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                        </div>
                        <input
                        type="text"
                        placeholder="0.0"
                        value={amount2}
                        readOnly
                        className="bg-transparent text-white text-right text-2xl w-full focus:outline-none placeholder:text-gray-500"
                        />
                    </div>
                </div>

                {/* Price Info */}
                <div className="text-center text-gray-400 text-sm mb-6 py-2">
                    0.0
                </div>

                {/* Swap Button */}
                <button 
                onClick={handleSwap}
                disabled={isSwapping || !amount1}
                className={`w-full py-4 rounded-2xl font-bold text-lg shadow-xl text-shadow-lg transition-all duration-300 mb-5  ${
                    isSwapping || amount1 === 0
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-teal-600 to-teal-400 hover:from-teal-400 hover:to-blue-400 hover:ring hover:ring-black transition-colors duration-300 text-white shadow-lg hover:shadow-purple-500/30'
                }`}
                >
                {isSwapping ? (
                    <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </div>
                ) : (
                    'Swap Tokens'
                )}
                </button>
            </div>
        </div>
    );
};

export default DEX;