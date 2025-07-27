
import { useState, useRef, forwardRef} from "react";

type SideMenuProps = {
    handlePopupOpen: (buttonRef: React.RefObject<HTMLButtonElement>) => void,
}

const SideMenuComp = forwardRef<HTMLButtonElement, SideMenuProps>(
    ({ handlePopupOpen }, ref) => {
        const [openMainWallet, setOpenMainWallet] = useState(false);
        const selector = useRef<HTMLButtonElement | null>(null);
    
        return (
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
                    <div className="flex items-center gap-2 justify-center border border-l-0 border-brand-color-secondary px-1 py-2 rounded-xl rounded-l-none">
                        <button ref={selector} onClick={() => handlePopupOpen(selector)} className="w-full text-xs sm:text-lg border border-brand-color-secondary rounded-xl py-1 px-2 text-brand-color-secondary text-nowrap"> "******67hg8</button>
                        <button className="text-xs sm:text-sm hover:text-brand-color-secondary transition duration-300 cursor-pointer">2FA ON</button>
                    </div>
                </div>
            </div>
        )
})

export default SideMenuComp;
