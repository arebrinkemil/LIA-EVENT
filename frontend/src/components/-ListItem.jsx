import axios from "axios";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

const ListItem = ({ company }) => {
  const [logotype, setLogotype] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cookies] = useCookies(["jwt"]);

  useEffect(() => {
    if (company.logotype && company.logotype.trim()) {
      axios
        .get(`http://134.122.48.238:5555/image/${company.companyId}`)
        .then((response) => {
          if (response.data.length > 0) {
            setLogotype(response.data[0]);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [company._id, company.logotype]);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      window.location.reload();
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
      <h3 className="text-2xl">{company.name}</h3>
      {/* Other content */}
      <button className="border-black border-2 p-1" onClick={handleDeleteClick}>
        Delete
      </button>
      <ConfirmModal
        isOpen={isModalOpen}
        onCancel={closeModal}
        onConfirm={deleteCompany}
      />
    </div>
  );
};

const ConfirmModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      <h2>Are you sure?</h2>
      <button onClick={onCancel}>Cancel</button>
      <button onClick={onConfirm}>Delete</button>
    </div>
  );
};

export default ListItem;
