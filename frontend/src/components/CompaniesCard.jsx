import CompaniesSingleCard from "./CompaniesSingleCard";

const CompaniesCard = ({ companies }) => {
  return (
    <div className="grid pt-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {companies.map((item) => (
        <CompaniesSingleCard key={item._id} company={item} />
      ))}
    </div>
  );
};

export default CompaniesCard;
