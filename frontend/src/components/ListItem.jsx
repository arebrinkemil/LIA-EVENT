import axios from "axios";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

const ListItem = ({ company }) => {
  const [logotype, setLogotype] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (company.logotype && company.logotype.trim()) {
      axios
        .get(`http://134.122.48.238:5555/image/${company.companyId}`)
        .then((response) => {
          console.log(response.data);
          if (response.data.length > 0) {
            console.log(response.data[0]);
            setLogotype(response.data[0]);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [company._id, company.logotype]);

  const [cookies] = useCookies(["jwt"]);

  const deleteCompany = async () => {
    try {
      await axios.delete(
        `http://134.122.48.238:5555/companies/${company.companyId}`,
        {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
          withCredentials: true,
        }
      );

      enqueueSnackbar("Company Deleted", { variant: "success" });
      //skulle varit bättre att ladda in listan igen
      window.location.reload();

      console.log("Company deleted successfully");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error", { variant: "error" });
    }
  };

  return (
    <div
      className="border-black border-2 rounded-xl p-4 my-4 w-2/4"
      key={company._id}
    >
      <br></br>
      <h3 className="text-2xl">{company.name}</h3>
      <p>About: {company.about}</p>
      <p>Contact: {company.contact}</p>
      <p>id: {company.companyId}</p>
      <p>{logotype}</p>
      {logotype && <img src={logotype} alt="Company logotype" />}
      <Link
        className="border-black border-2 p-1"
        to={`/companies/${company._id}/edit`}
      >
        EDIT
      </Link>
      <Link
        className="border-black border-2 p-1"
        to={`/companies/${company._id}`}
      >
        VIEW
      </Link>
      <button className="border-black border-2 p-1" onClick={deleteCompany}>
        Delete
      </button>
    </div>
  );
};

export default ListItem;
