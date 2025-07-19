
import TitleHeaderComp from "../../components/TitleHeaderComp/TitleHeaderComp";
import TitleDescriptionComp from "../../components/TitleDescriptionComponent/TitleDescriptionComponent";
import SloganComp from "../../components/SloganComponent/SloganComp";

import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "../navbar/Navbar";

interface NavbarP {
	isMobileNavOpen: boolean;
	toggleMobileNavMenu: () => void;
}

const Header = ({isMobileNavOpen, toggleMobileNavMenu}: NavbarP) => {



 	 return (
		<div className="flex flex-col text-center pt-5">
			<RxHamburgerMenu onClick={() => toggleMobileNavMenu()} className="absolute sm:hidden top-7 left-1 text-3xl text-brand-color-secondary cursor-pointer z-60"/>
			<TitleHeaderComp/>
			<TitleDescriptionComp/>
			<SloganComp/>
			<Navbar isMobileNavOpen={isMobileNavOpen}/>
		</div>	
 	 );
}

export default Header;