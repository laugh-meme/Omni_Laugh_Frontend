

import TitleHeaderComp from '../components/TitleHeaderComp/TitleHeaderComp';
import TitleDescriptionComp from '../components/TitleDescriptionComponent/TitleDescriptionComponent';
import DrawnerComp from '../components/DrawnerComponent/DrawnerComponent';
import DrawnerButtonComp from '../components/DrawnerComponent/DrawnerButton';

import thumbs from '../assets/thumbs.png'
import TanoshiSwap2 from '../assets/TanoshiSwap2.png'
import VIPDAO from '../assets/VIPDAO.png'

const Login = () => {

    return (
        <section className="flex flex-col px-2 py-10 pb-2 md:px-15 lg:px-20 xl:px-50 bg-gradient-to-br from-brand-color-primary to-teal-700">
            <div className="relative flex flex-col items-center mb-5">
                <img src={thumbs} className='w-40 absolute top-1' />
                <div className='flex flex-col justify-center items-center mt-29'>
                    <TitleHeaderComp />
                    <TitleDescriptionComp></TitleDescriptionComp>
                </div>
            </div>
            
            <DrawnerComp btnText='Check out' className='mb-3' >
                    <DrawnerButtonComp to='/connect' className='min-w-[90px]' text='Connect' />
                    <DrawnerButtonComp className='min-w-[90px]' text='About Omni' />
                    <DrawnerButtonComp className='min-w-[90px]' text='$LMAO Token' />
            </DrawnerComp>

            <DrawnerComp btnText='Operations' className='' >
                <DrawnerButtonComp className='min-w-[90px]' text='SocialFi' />
                <DrawnerButtonComp className='min-w-[90px]' text='Social Mining' />
                <DrawnerButtonComp className='min-w-[90px]' text='NFT Hub' />
            </DrawnerComp>

            <div className='relative flex justify-around items-center gap-10 lg:gap-20 font-bold border-2 px-3 lg:px-20  py-12 shadow-xl border-brand-color-fourth sm:text-xl text-brand-color-fourth rounded-xl text-shadow-lg my-7'>
                <div className='flex flex-1 flex-col gap-7 items-center w-full text-center'>
                    <img className='w-23 sm:w-30 sm:h-30 border rounded-full' src={TanoshiSwap2} alt="Tanoshi Swap Logo" />
                    {/* <div className='w-20 sm:w-30 h-20 sm:h-30 rounded-full bg-green-800'></div> */}
                    <button className='w-full px-3 py-2 border rounded-xl cursor-pointer'>Check out</button>
                </div>
                <div className='flex flex-1 flex-col gap-7 items-center text-center'>
                    <img className='w-23 sm:w-30 sm:h-30 border rounded-full' src={VIPDAO} alt="VIPDAO Logo" />
                    {/* <div className='w-20 sm:w-30 h-20 sm:h-30 rounded-full bg-green-800'></div> */}
                    <button className='w-full px-3 py-2 border rounded-xl cursor-pointer'>Check out</button>
                </div>
                <button className='absolute bottom-2 right-2 text-xs sm:text-sm cursor-pointer'>See more</button>
            </div>

            <DrawnerComp btnText='Partners' className='mb-3' >
                <DrawnerButtonComp text='X/Twitter' />
            </DrawnerComp>

            <DrawnerComp btnText='Sponsors' className='mb-3' >
                <DrawnerButtonComp text='X/Twitter' />
            </DrawnerComp>

            <DrawnerComp btnText='Promoters' className='mb-3' >
                <DrawnerButtonComp className='min-w-[90px]' text='Marketer' />
                <DrawnerButtonComp className='min-w-[90px]' text='Hyper' />
                <DrawnerButtonComp className='min-w-[90px]' text='Influencer' />
            </DrawnerComp>

            <DrawnerComp btnText='Socials' className='' >
                <DrawnerButtonComp className='min-w-[90px]' text='X/Twitter' />
                <DrawnerButtonComp className='min-w-[90px]' text='Discord' />
                <DrawnerButtonComp className='min-w-[90px]' text='Reddit' />
            </DrawnerComp>

            <hr className='text-brand-color-secondary my-10' />

            <div className='flex flex-col items-center gap-2 justify-center rounded-xl text-shadow-lg font-bold  '>
                <DrawnerComp btnText='Omni_Laugh' className='w-full' >
                    <DrawnerButtonComp className='' text='Designed by' />
                    <DrawnerButtonComp className='' text='Built by' />
                </DrawnerComp>
                <div className='w-full flex justify-center items-center gap-1'>
                    <span className='text-brand-color-secondary text-xs sm:text-lg'>&copy;2025</span>
                    <span className='text-brand-color-secondary text-xs sm:text-lg'>All Rights Reserved</span>
                </div>
            </div>
        </section>
    )
}

export default Login;