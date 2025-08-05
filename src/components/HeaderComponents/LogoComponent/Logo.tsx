import { useLocation } from "react-router-dom";

import TitleHeaderComp from "../../TitleHeaderComp/TitleHeaderComp";
import TitleDescriptionComp from "../../TitleDescriptionComponent/TitleDescriptionComponent";
import SloganComp from "../../SloganComponent/SloganComp";


const Logo = () => {
	const location = useLocation();
	const isForbiddenPage = location.pathname === "/login" || location.pathname === '/tokenomics';
	console.log(location.pathname)

	return (
		<>
			{/* Logo */}
			{!isForbiddenPage && (
				<div className="flex flex-col text-center pt-10">
					<TitleHeaderComp to="login"/>
					<TitleDescriptionComp/>
					<SloganComp/>
				</div>	
			)}

			
		</>
	);
}

export default Logo;