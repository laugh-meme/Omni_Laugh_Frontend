
import { Link, useNavigate } from 'react-router-dom';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { useEffect } from 'react';

import DrawnerComp from '../components/DrawnerComponents/DrawnerComponent';
import DrawnerButtonComp from '../components/DrawnerComponents/DrawnerButton';
import DrawnerInputComp from '../components/DrawnerComponents/DrawnerInput';

import { IoArrowBackCircleOutline } from "react-icons/io5";



const Connection = () => {

    const { open } = useAppKit()

    return (
        <section className="min-h-screen  px-2 py-10 pb-2 md:px-15 lg:px-20 xl:px-50 flex flex-col items-center justify-center border-white/50 text-white/50 bg-gradient-to-br from-brand-color-primary to-teal-700">
            <div className='w-full flex justify-start mb-2'>
                <Link to={'/'} className=''><span className='text-brand-color-secondary text-lg lg:text-2xl'><IoArrowBackCircleOutline /></span></Link>
            </div>

            <div className="flex flex-col gap-2 w-full px-3 sm:px-15 lg:px-20 xl:px-30 py-10 border-2 border-brand-color-fourth rounded-xl font-bold">
                <div className="flex justify-around items-center gap-2 ">
                    <button onClick={() => open()} className="flex-1 border rounded-2xl cursor-pointer py-3 text-sm sm:text-lg hover:text-brand-color-secondary transition-all duration-300">Connect Main Wallet</button>
                    <button className="flex-1 border rounded-2xl cursor-pointer py-3 text-sm sm:text-lg hover:text-brand-color-secondary transition-all duration-300">Link Main Social</button>
                </div>

                <DrawnerComp btnText='Login' className='' >
                    <DrawnerInputComp text='Input 2FA Code' />
                    <DrawnerButtonComp className='flex-2' text='Send'></DrawnerButtonComp>
                </DrawnerComp>
            </div>
        </section>
    )
}

export default Connection;