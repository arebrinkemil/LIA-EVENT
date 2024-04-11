import RedStar from "../assets/icons/burgerStar.svg";
const BulletPoint = ({ children }) => {
  return (
    <>
      <div className="md:hidden flex flex-row gap-2 pt-0">
        <img className="w-6 h-6" src={RedStar} alt="bulletpoint" />
        {children}
      </div>

      <div className="hidden md:flex flex-row gap-2 pt-0 items-center">
        <img className="w-11 h-11" src={RedStar} alt="bulletpoint" />
        {children}
      </div>
    </>
  );
};
export default BulletPoint;
