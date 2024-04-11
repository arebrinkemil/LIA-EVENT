import yrgo from "../assets/icons/yrgoLogo.svg";
import star from "../assets/icons/footerStar.svg";
import gbgLogo from "../assets/photos/gbg-logo.png";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-black text-white px-4">
          <img className="py-3" src={yrgo} alt="yrgo logo" />
          <a className="pt-3" href="https://www.yrgo.se">
            Om YRGO
          </a>
          <p className="pt-3 pb-3 text-white">Location</p>
          <a href="https://www.linkedin.com/school/yrgo/">LinkedIn</a>
          <p className="pt-3 text-white">031–367 31 00</p>
          <p className="pt-3 text-white">yrgo.lardomsgatan@educ.goteborg.se</p>
          <p className="text-xs text-white">
            © 2024 Yrgo, högre yrkesutbildning Göteborg
          </p>
          <img
            className="h-16 mt-3 pb-3"
            src={gbgLogo}
            alt="Göteborgs stad logo"
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
