import RedStar from "../assets/icons/burgerStar.svg";
const BulletPoint = ({ children }) => {
  return (
    <div className="flex flex-row gap-2 pt-0">
      <img className="w-6 h-6" src={RedStar} alt="bulletpoint" />
      {children}
    </div>
  );
};
export default BulletPoint;
