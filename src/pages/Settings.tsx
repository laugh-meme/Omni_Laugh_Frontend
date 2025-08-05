import DrawnerComp from '../components/DrawnerComponents/DrawnerComponent';
import DrawnerButtonComp from '../components/DrawnerComponents/DrawnerButton';
import DrawnerInputComp from '../components/DrawnerComponents/DrawnerInput';

import laugh from '../assets/laugh.png';

const Settings = () => {
    return (
        <section className="border-white/50 text-white/50 px-2 pb-20 md:px-15 lg:px-30 2xl:px-50 ">
            <div className="w-full flex justify-center relative">
                <button className="border w-1/2 text-lg sm:text-3xl px-10 py-2 sm:py-4 mb-2 rounded-xl text-center">Settings</button>
                <img src={laugh} className="w-18 absolute right-1/13 top-0 sm:w-26" />
            </div>
            <div className="relative w-full border rounded-xl min-h-100 py-10 px-3 md:px-10">
                {/* Settings */}
                <div className="w-full min-h-100 border-3 bg-teal-700 border-brand-color-secondary rounded-2xl shadow-xl">
                    <div className="w-full flex flex-col gap-4 py-10 px-3 md:px-6 lg:px-20 md:py-20 font-bold">
                        <DrawnerComp className='' btnText='Wallet'>
                            <DrawnerButtonComp text='Add Wallet' />
                            <DrawnerButtonComp text='Disconnect' />
                        </DrawnerComp>

                        <DrawnerComp className='' btnText='Social Media'>
                            <DrawnerButtonComp text='Add Account' />
                            <DrawnerButtonComp text='Disconnect' />
                        </DrawnerComp>

                        <DrawnerComp className='' btnText='Account 2FA'>
                            <DrawnerButtonComp className='w-full min-w-1/2' text='On/Off' />
                            <DrawnerButtonComp className='min-w-fit sm:min-w-1/2' text='Generate backup key' />
                        </DrawnerComp>

                        <DrawnerComp className='' btnText='Login Data'>
                            <DrawnerInputComp text='***df67lka' />
                            <DrawnerInputComp text='Username' />
                        </DrawnerComp>

                        <DrawnerComp className='' btnText='Login Option'>
                            <DrawnerButtonComp text='Wallet' />
                            <DrawnerButtonComp text='Social' />
                            <DrawnerButtonComp text='2FA' />
                        </DrawnerComp>

                        <DrawnerComp className='' btnText='Login 2FA'>
                            <DrawnerButtonComp text='Disconnect' />
                        </DrawnerComp>
                        <DrawnerComp className='' btnText='Pool 2FA'>
                            <DrawnerButtonComp text='Connect' />
                        </DrawnerComp>
                    </div>
                </div>

            </div>
            {/* Checkout */}
            <DrawnerComp className='px-5 mt-5' btnText='Check out'>
                <DrawnerButtonComp text='Random suggestion' />
            </DrawnerComp>
        </section>
    )
}

export default Settings;