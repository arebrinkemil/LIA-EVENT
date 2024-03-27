import yrgo from "../assets/icons/yrgoLogo.svg";
import star from "../assets/icons/footerStar.svg";
import gbgLogo from "../assets/photos/gbg-logo.png";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-black text-white px-4">
        <img className="py-3" src={yrgo} alt="yrgo logo" />
        <a className="pt-3" href="https://www.yrgo.se">
          Om YRGO
        </a>
        <p className="pt-3 pb-3">Location</p>
        <a href="https://www.linkedin.com/school/yrgo/">LinkedIn</a>
        <p className="pt-3">031–367 31 00</p>
        <p className="pt-3">yrgo.lardomsgatan@educ.goteborg.se</p>
        <p className="text-xs">© 2024 Yrgo, högre yrkesutbildning Göteborg</p>
        <img
          className="h-16 mt-3 pb-3"
          src={gbgLogo}
          alt="Göteborgs stad logo"
        />
      </div>
      <img className="absolute top-12 right-4" src={star} alt="star" />
    </div>
  );
};
export default Footer;
