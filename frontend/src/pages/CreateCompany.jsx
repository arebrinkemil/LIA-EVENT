import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Header from "../components/Header";
import AmountInput from "../components/AmountInput";
import NavButton from "../components/NavButton";
import DividerStar from "../components/NavDivider";
import DOMpurify from "dompurify";
import Arrow from "../assets/icons/dropdown_arrow.svg";

const CreateCompany = () => {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [cookies, removeCookie] = useCookies(["jwt"]);
  const [logotype, setLogotype] = useState(null);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [owner_id, setOwnerId] = useState("");
  const [role, setRole] = useState("Webbutvecklare");
  const [amount, setAmount] = useState(1);
  const [location, setLocation] = useState("Göteborg");
  const [tools, setTools] = useState([]);
  const [url, setUrl] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const verifyAuth = async () => {
      if (!cookies.jwt) {
        navigate("/login");
        return;
      }
      try {
        const response = await axios.get(
          "https://liaevent.arebr.ink/api/profile",
          {
            headers: {
              Authorization: `Bearer ${cookies.jwt}`,
            },
            withCredentials: true,
          }
        );
        const { data } = response;
        const { _id, name, email } = data;
        if (!_id || !name || !email) {
          throw new Error("Invalid user data received from the server");
        }
        setUsername(name);
        setOwnerId(_id);
      } catch (error) {
        console.error("Error verifying authentication:", error);
        removeCookie("jwt");
        navigate("/login");
      }
    };
    verifyAuth();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://liaevent.arebr.ink/api/logout",
        {},
        {
          withCredentials: true,
        }
      );

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (file) {
      setFileName(file.name);
      setLogotype(file);
    }
  };

  const autoResize = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleUploadLogotype = async () => {
    setLoading(true);
    const companyId = Math.floor(Math.random() * 1000000);
    const data = new FormData();
    if (logotype) {
      data.append("logotype", logotype);
      try {
        const response = await axios.post(
          `https://liaevent.arebr.ink/api/image/${companyId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${cookies.jwt}`,
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );
        handleSaveCompany(response.data.fileUrl, companyId);
      } catch (error) {
        console.error(error);
        enqueueSnackbar("Error uploading logotype", { variant: "error" });
        setLoading(false);
      }
    } else {
      handleSaveCompany("", companyId);
    }
  };

  const handleSaveCompany = async (logotypeUrl, companyId) => {
    const data = {
      logotype: logotypeUrl,
      name,
      about,
      contact,
      owner_id,
      companyId,
      role,
      amount,
      location,
      tools: tools.length > 0 ? tools.split(",") : [],
      url,
      task_description: taskDescription,
    };
    try {
      await axios.post("https://liaevent.arebr.ink/api/companies", data, {
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
        withCredentials: true,
      });
      enqueueSnackbar("Company added successfully", { variant: "success" });
      navigate("/profile");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error saving company", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-clip">
      <Header />
      <div className="m-4 w-full flex flex-row gap-1 items-center">
        <NavButton path={"/"}>HEM</NavButton>
        <DividerStar></DividerStar>
        <NavButton path={"/profile"}>PROFIL</NavButton>
        <DividerStar></DividerStar>
        <NavButton>SKAPA NYTT FÖRETAGSKORT</NavButton>
      </div>
      <div className="w-full">
        <h1 className="my-4 text-6xl font-light md:text-center">
          Skapa nytt företagskort
        </h1>

        <div className="flex flex-col border-sky-400 w-full px-4 md:px-48 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">*Företagnamn</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(DOMpurify.sanitize(e.target.value))}
              className="form-input"
            />
          </div>

          <div className="my-4 relative">
            <label className="text-xl mr-4 text-gray-500">*Vad söker ni</label>
            <select
              value={role}
              onChange={(e) => setRole(DOMpurify.sanitize(e.target.value))}
              className="form-input"
            >
              <option value="Webbutvecklare">Webbutvecklare</option>
              <option value="Digital Designer">Digital Designer</option>
            </select>
            <img
              className="absolute right-4 top-10 pointer-events-none"
              src={Arrow}
              alt=""
            />
          </div>

          <label className="text-xl mr-4 text-gray-500 my-4">
            *Hur många planerade LIA platser tar ni in?
          </label>
          <AmountInput amount={amount} setAmount={setAmount} />

          <div className="my-4 relative">
            <label className="text-xl mr-4 text-gray-500">Vart?</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-input"
            >
              <option value="Göteborg">Göteborg</option>
              <option value="Annan Plats">Annan Plats</option>
            </select>
            <img
              className="absolute right-4 top-10 pointer-events-none"
              src={Arrow}
              alt=""
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Företagskompetenser
            </label>
            <input
              type="text"
              value={tools}
              onChange={(e) => setTools(e.target.value)}
              className="form-input"
              placeholder="separate with comma ex: figma, git, adobe"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Vad kan studenterna förvänta sig under sin LIA-period?{" "}
            </label>
            <textarea
              placeholder="Berätta mer om er LIA, ex: Arbetsuppgifter, arbetsplatskultur osv ..."
              value={taskDescription}
              onChange={(e) =>
                setTaskDescription(DOMpurify.sanitize(e.target.value))
              }
              onInput={autoResize}
              className="textarea form-input min-h-[80px] overflow-hidden resize-none"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Webbsida</label>
            <input
              type="text"
              placeholder="https://www.example.com"
              value={url}
              onChange={(e) => setUrl(DOMpurify.sanitize(e.target.value))}
              className="form-input"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Kontakta oss</label>
            <input
              type="text"
              placeholder="Hur kontaktar man er? "
              value={contact}
              onChange={(e) => setContact(DOMpurify.sanitize(e.target.value))}
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
              onChange={(e) => setAbout(DOMpurify.sanitize(e.target.value))}
              onInput={autoResize}
              className="textarea form-input min-h-[229px] overflow-hidden resize-none "
            />
          </div>

          <label className="text-xl mr-4 text-gray-500 mt-4">Logotyp</label>
          <div
            className="bg-gray-50 mb-8 text-center px-4 rounded w-80 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-400 border-dashed mx-auto font-[sans-serif]"
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => {
              setDragging(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              handleFileChange(e);
            }}
          >
            {" "}
            <div className="py-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 mb-2 fill-gray-600 inline-block"
                viewBox="0 0 32 32"
              >
                <path
                  d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                  data-original="#000000"
                />
                <path
                  d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                  data-original="#000000"
                />
              </svg>
              <h4 className="text-base font-semibold text-gray-600">
                Drag and drop files here
              </h4>
            </div>
            <hr className="w-full border-gray-400 my-2" />
            <div className="py-6">
              <input
                type="file"
                id="uploadFile1"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="uploadFile1"
                className="block px-6 py-2.5 rounded text-gray-600 text-sm tracking-wider font-semibold border-none outline-none bg-gray-200 hover:bg-gray-100"
              >
                Browse Files
              </label>
              <p className="text-xs text-gray-400 mt-4">
                {fileName
                  ? `Selected file: ${fileName}`
                  : "PNG, JPG, SVG, WEBP, and GIF are allowed."}
              </p>
            </div>
          </div>

          <button
            className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl mb-5  p-3 hover:bg-redHover"
            onClick={handleUploadLogotype}
            disabled={loading}
          >
            Skapa företagskort
          </button>
          <button
            className=" border-[1px] font-bold text-xl flex justify-center align-middle rounded-3xl mb-10 p-3 hover:bg-redHover hover:border-redHover hover:text-white"
            onClick={() => navigate("/profile")}
          >
            Avbryt
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
