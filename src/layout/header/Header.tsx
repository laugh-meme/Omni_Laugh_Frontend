
import TitleHeaderComp from "../../components/TitleHeaderComp/TitleHeaderComp";
import TitleDescriptionComp from "../../components/TitleDescriptionComponent/TitleDescriptionComponent";
import SloganComp from "../../components/SloganComponent/SloganComp";

const Header = () => {
  return (
    <div className="flex flex-col text-center pt-5">
      <TitleHeaderComp/>
      <TitleDescriptionComp/>
      <SloganComp/>
    </div>
  );
}

export default Header;