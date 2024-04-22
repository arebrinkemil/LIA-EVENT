import yrgo from "../assets/icons/yrgoLogo.svg";
import star from "../assets/icons/footerStar.svg";
import gbgLogo from "../assets/photos/gbg-logo.png";

const Footer = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-black text-white px-4 md:px-8 lg:px-12 md:py-6">
          <img className="py-3 md:w-32" src={yrgo} alt="yrgo logo" />
          <div className="flex flex-col text-white gap-3">
            <a className="pt-3 lg:mt-8" href="https://www.yrgo.se">
              Om YRGO
            </a>
            <a href="https://www.yrgo.se/program/digital-designer/">
              Digital Designer
            </a>
            <a href="https://www.yrgo.se/program/webbutvecklare/">
              Webbutvecklare
            </a>
          </div>
          <p className="pt-3 text-white">031–367 31 00</p>
          <p className="pt-3 text-white">marie.kalmnas@educ.goteborg.se</p>
          <p className="pt-3 text-white">hans.2.andersson@educ.goteborg.se</p>
          <p className="text-xs text-white mt-3">
            © 2024 Yrgo, högre yrkesutbildning Göteborg
          </p>
          <img
            className="h-16 mt-6 pb-3"
            src={gbgLogo}
            alt="Göteborgs stad logo"
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
