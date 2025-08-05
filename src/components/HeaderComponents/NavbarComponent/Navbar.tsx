
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from "./MobileNavbar";
import { useAppKitAccount } from "@reown/appkit/react";

type NavbarP = {
	isMobileNavOpen: boolean;
	toggleMobileNavMenu: () => void;
}

const links = [
    { label: 'Home', link: '/' },
    { label: 'DEX', link: 'dex' },
    { label: 'DLUP', link: '#' },
    { label: 'NFT Hub', link: 'nft_hub' },
    { label: 'VIPDAO', link: '#' },
    { label: 'Social Mining', link: '#' },
    { label: 'Profile', link: 'profile' },
    { label: 'Settings', link: 'settings' },
]


const Navbar = ({ isMobileNavOpen, toggleMobileNavMenu }: NavbarP) => {

	const { isConnected } = useAppKitAccount();


    return (
        <div className="fixed flex justify-between items-center min-w-full bg-brand-color-secondary h-8 z-50">
            <RxHamburgerMenu onClick={() => toggleMobileNavMenu()} className={`
                sm:hidden text-3xl text-black-secondary cursor-pointer ml-3 z-60
                transform transition-transform duration-300 ease-in-out
                ${!isMobileNavOpen ? "rotate-0 scale-100" : "-rotate-90 scale-85"}
            `} />

            {isConnected && (
                <div className="flex justify-end items-center w-full">
                    <appkit-account-button  />
                </div>
            ) }
            
            <MobileNavbar isMobileNavOpen={isMobileNavOpen} toggleMobileNavMenu={toggleMobileNavMenu} links={links} />
        </div>

    )
}

export default Navbar;