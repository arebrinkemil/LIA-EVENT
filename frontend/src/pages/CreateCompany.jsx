import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Header from "../components/Header";
import AmountInput from "../components/AmountInput";

const CreateCompany = () => {
  const [cookies, removeCookie] = useCookies(["jwt"]);
  const [logotype, setLogotype] = useState(null);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [owner_id, setOwnerId] = useState("");
  const [role, setRole] = useState("Webdeveloper");
  const [amount, setAmount] = useState(1);
  const [location, setLocation] = useState("Gothenburg");
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
        const response = await axios.get("http://localhost:5555/profile", {
          headers: {
            Authorization: `Bearer ${cookies.jwt}`,
          },
          withCredentials: true,
        });
        const { data } = response;
        console.log("Response data:", data);
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
        "http://localhost:5555/logout",
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
    setLogotype(e.target.files[0]);
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
          `http://localhost:5555/image/${companyId}`,
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
      await axios.post("http://localhost:5555/companies", data, {
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
      <div className="w-full">
        <div className="home_page">
          <h4>
            Welcome <span>{username}</span>
          </h4>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
        <h1 className="text-3xl my-4">Företagsprofil</h1>

        <div className="flex flex-col border-sky-400 w-full px-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Logotype</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="form-input"
            />
          </div>

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
            <label className="text-xl mr-4 text-gray-500">*Vad söker ni</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-input"
            >
              <option value="Webdeveloper">Webdeveloper</option>
              <option value="Designer">Designer</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <label className="text-xl mr-4 text-gray-500">
            *Antal LIA platser
          </label>
          <AmountInput amount={amount} setAmount={setAmount} />

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Vart?</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-input"
            >
              <option value="Gothenburg">Gothenburg</option>
              <option value="Distance">Distance</option>
              <option value="Outside_Gothenburg">Outside Gothenburg</option>
            </select>
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Arbetsverktyg</label>
            <input
              type="text"
              value={tools}
              onChange={(e) => setTools(e.target.value)}
              className="form-input"
              placeholder="separate with comma ex: figma, git, adobe"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Webbsida</label>
            <input
              type="text"
              placeholder="https://www.example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Kontakta oss</label>
            <input
              type="text"
              placeholder="email eller telefonnummer"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Arbetsuppgifter under LIA
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
            <label className="text-xl mr-4 text-gray-500">Om oss</label>
            <textarea
              placeholder="Berätta mer om er verksamhet, ex: Arbetsuppgifter, arbetsplatskultur osv ..."
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              onInput={autoResize}
              className="textarea form-input min-h-[229px] overflow-hidden resize-none "
            />
          </div>

          <button
            className="bg-red text-white font-bold text-xl flex justify-center align-middle rounded-3xl w-[calc(100vw-32px)] my-12 p-3"
            onClick={handleUploadLogotype}
            disabled={loading}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
