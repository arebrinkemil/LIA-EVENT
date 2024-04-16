import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import Header from "./Header";
import Footer from "./Footer";
import NavButton from "./NavButton";
import DividerStar from "./NavDivider";
import DOMPurify from "dompurify";

const EditCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [logotype, setLogotype] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [role, setRole] = useState("");
  const [amount, setAmount] = useState(0);
  const [location, setLocation] = useState("");
  const [tools, setTools] = useState([]);
  const [url, setUrl] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [cookies] = useCookies(["jwt"]);
  const { enqueueSnackbar } = useSnackbar();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          `http://134.122.48.238:5555/companies/${id}`
        );

        setCompany(response.data);
        setLogotype(response.data.logotype);
        setCompanyId(response.data.companyId);
        setName(DOMPurify.sanitize(response.data.name));
        setAbout(DOMPurify.sanitize(response.data.about));
        setContact(DOMPurify.sanitize(response.data.contact));
        setRole(response.data.role);
        setAmount(response.data.amount);
        setLocation(response.data.location);
        setTools(DOMPurify.sanitize(response.data.tools));
        setUrl(DOMPurify.sanitize(response.data.url));
        setTaskDescription(DOMPurify.sanitize(response.data.task_description));
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    fetchCompany();
  }, [id]);

  const deleteLogo = async (e) => {
    try {
      console.log("logotype:", logotype);
      if (logotype && logotype.trim()) {
        const oldLogotypeUrl = new URL(logotype);
        const oldLogotypePath = oldLogotypeUrl.pathname;
        const oldLogotypeFilename = oldLogotypePath.substring(
          oldLogotypePath.lastIndexOf("/") + 1
        );

        await axios.delete(
          `http://134.122.48.238:5555/image/${companyId}/${oldLogotypeFilename}`,
          {
            withCredentials: true,
          }
        );

        // Clear logotype after successful deletion
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
    setLogotype("");
  };

  const autoResize = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const confirmDelete = async () => {
    // Place your delete logic here
    deleteCompany();
    setShowDeleteModal(false); // Close modal after delete
  };

  const closeModal = () => {
    setShowDeleteModal(false);
  };

  const handleFileChange = async (e) => {
    if (!e.target.files[0]) return;

    const formData = new FormData();
    formData.append("logotype", e.target.files[0]);

    try {
      console.log("logotype:", logotype);
      if (logotype && logotype.trim()) {
        const oldLogotypeUrl = new URL(logotype);
        const oldLogotypePath = oldLogotypeUrl.pathname;
        const oldLogotypeFilename = oldLogotypePath.substring(
          oldLogotypePath.lastIndexOf("/") + 1
        );

        await axios.delete(
          `http://134.122.48.238:5555/image/${companyId}/${oldLogotypeFilename}`,
          {
            withCredentials: true,
          }
        );
      }

      const response = await axios.post(
        `http://134.122.48.238:5555/image/${companyId}`,
        formData,
        {
          withCredentials: true,
        }
      );

      setLogotype(response.data.fileUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
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
      navigate("/profile");
      console.log("Company deleted successfully");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error", { variant: "error" });
    }
  };
  const handleSaveCompany = async () => {
    try {
      await axios.put(
        `http://134.122.48.238:5555/companies/${id}`,
        {
          logotype,
          name,
          about,
          contact,
          role,
          amount,
          location,
          tools,
          url,
          task_description: taskDescription,
        },
        {
          withCredentials: true,
        }
      );

      alert("Company updated successfully");

      navigate("/profile");
    } catch (error) {
      console.error("Error updating company:", error);
    }
  };

  let companyName = name.toUpperCase();

  if (!company) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="relative min-h-screen overflow-x-clip">
        <Header></Header>
        <div className="m-4 w-full flex flex-row gap-1 items-center">
          <NavButton path={"/"}>HEM</NavButton>
          <DividerStar></DividerStar>
          <NavButton path={"/profile"}>PROFIL</NavButton>
          <DividerStar></DividerStar>
          <NavButton>{companyName}</NavButton>
        </div>
        <div className="p-4">
          <div className="flex flex-col border-sky-400 w-full px-4 md:px-48 mx-auto">
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">*Företagnamn</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                *Vad söker ni
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-input "
              >
                <option value="Webbutvecklare">Webbutvecklare</option>
                <option value="Digital Designer">Digital Designer</option>
              </select>
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                *Hur många planerade LIA platser tar ni in?{" "}
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Vart?</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-input"
              >
                <option value="Göteborg">Göteborg</option>
                <option value="Annan Plats">Annan Plats</option>
              </select>
            </div>

            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                Företagskompetenser
              </label>
              <input
                type="text"
                value={tools}
                onChange={(e) => setTools(e.target.value.split(","))}
                className="form-input"
                placeholder="Separate tools with commas (,)"
              />
            </div>

            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                Vad kan studenterna förvänta sig under sin LIA-period?{" "}
              </label>
              <textarea
                placeholder="Berätta vad för typ av arbetsuppgifter som man kan förvänta sig under lia-perioden ..."
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                onInput={autoResize}
                className="textarea form-input min-h-[80px] overflow-hidden resize-none"
              />
            </div>

            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Webbsida</label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                Kontakta oss{" "}
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                Övrig information om er
              </label>
              <textarea
                placeholder="Berätta mer om er verksamhet, ex: Arbetsuppgifter, arbetsplatskultur osv ..."
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                onInput={autoResize}
                className="textarea form-input min-h-[229px] overflow-hidden resize-none "
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Logotyp</label>
              {logotype && logotype.trim() && (
                <>
                  <img src={logotype} alt="Company logotype" />
                  <button className="" onClick={deleteLogo}>
                    Delete logotype
                  </button>
                </>
              )}
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                Replace Logotype
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="form-input"
              />
            </div>

            <button
              className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl mb-5  p-3 hover:bg-redHover"
              onClick={handleSaveCompany}
            >
              Save
            </button>
            <button
              className=" border-[1px] font-bold text-xl flex justify-center align-middle rounded-3xl mb-10 p-3 hover:bg-redHover hover:border-redHover hover:text-white"
              onClick={() => setShowDeleteModal(true)}
            >
              Delete
            </button>
            {showDeleteModal && (
              <DeleteConfirmationModal
                onClose={closeModal}
                onConfirm={confirmDelete}
              />
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default EditCompany;
