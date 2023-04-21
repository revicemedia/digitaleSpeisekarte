import "./HeroSection.scss";
import LocationImage from "../../Configs/LocationImage.jpg";

function HeroSection(): JSX.Element {
  const baseClass = "HeroSection";

  return (
    <div className={baseClass}>
      <div>
        <img className={baseClass + "__Image"} src={LocationImage} alt="" />
      </div>
    </div>
  );
}

export default HeroSection;
