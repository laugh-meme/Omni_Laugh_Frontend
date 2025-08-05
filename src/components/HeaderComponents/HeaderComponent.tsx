import Navbar from './NavbarComponent/Navbar';
import Logo from './LogoComponent/Logo';

type HeaderP = {
	isMobileNavOpen: boolean;
	toggleMobileNavMenu: () => void;
}

const HeaderComp = ({isMobileNavOpen, toggleMobileNavMenu}: HeaderP) => {
    return (
        <header >
            <Navbar isMobileNavOpen={isMobileNavOpen} toggleMobileNavMenu={toggleMobileNavMenu} />
            <Logo />
        </header>
    )
}

export default HeaderComp