
import TitleHeaderComp from "../../components/TitleHeaderComp/TitleHeaderComp";
import TitleDescriptionComp from "../../components/TitleDescriptionComponent/TitleDescriptionComponent";
import SloganComp from "../../components/SloganComponent/SloganComp";

import { RxHamburgerMenu } from "react-icons/rx";
import MobileNavbar from "../navbar/MobileNavbar";

import { useAppKitAccount } from "@reown/appkit/react";

interface NavbarP {
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

const Header = ({ isMobileNavOpen, toggleMobileNavMenu }: NavbarP) => {
	const { isConnected } = useAppKitAccount();

	return (
		<>
			<div className="flex justify-between items-center min-w-full bg-brand-color-secondary h-8">
				<RxHamburgerMenu onClick={() => toggleMobileNavMenu()} className={`
					sm:hidden text-3xl text-black-secondary cursor-pointer ml-3 z-60
					transform transition-transform duration-300 ease-in-out
					${!isMobileNavOpen ? "rotate-0 scale-100" : "-rotate-90 scale-85"}
				`} />
				{/* <span className="mr-3 text-lg font-semibold w-full text-end">0x00...0000</span> */}
				{isConnected && (
					<div className="flex justify-end items-center w-full">
						<appkit-network-button />
						<appkit-account-button balance="hide" />
					</div>
				) }
				<MobileNavbar isMobileNavOpen={isMobileNavOpen} toggleMobileNavMenu={toggleMobileNavMenu} links={links} />
			</div>
			<div className="flex flex-col text-center pt-3">
				<TitleHeaderComp/>
				<TitleDescriptionComp/>
				<SloganComp/>
			</div>	
		</>
	);
}

export default Header;