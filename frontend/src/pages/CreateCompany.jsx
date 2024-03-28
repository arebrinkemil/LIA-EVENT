import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Header from "../components/Header";

const CreateCompany = () => {
  const [cookies, removeCookie] = useCookies(["jwt"]);
  const [logotype, setLogotype] = useState(null);
  const companyId = Math.floor(Math.random() * 1000000);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [owner_id, setOwnerId] = useState("");
  const [role, setRole] = useState("Webdeveloper");
  const [amount, setAmount] = useState(0);
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
        removeCookie("token");
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

  const handleUploadLogotype = () => {
    const companyId = Math.floor(Math.random() * 1000000); // generates a random number between 0 and 999999
    const data = new FormData();

    console.log("logotype", logotype);
    if (!logotype) {
      handleSaveCompany("", companyId);
    } else {
      data.append("logotype", logotype);

      axios
        .post(`http://localhost:5555/image/${companyId}`, data, {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        })
        .then((response) => {
          handleSaveCompany(response.data.fileUrl, companyId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSaveCompany = (logotypeUrl, companyId) => {
    console.log("logotypeUrl", logotypeUrl);
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
      tools,
      url,
      task_description: taskDescription,
    };

    setLoading(true);
    axios
      .post("http://localhost:5555/companies", data, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
        withCredentials: true,
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Company added successfully", { variant: "success" });
        navigate("/profile");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <>
      <Header></Header>
      <div className="p-4">
        <div className="home_page">
          <h4>
            {" "}
            Welcome <span>{username}</span>
          </h4>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
        <h1 className="text-3xl my-4">Create Book</h1>

        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Logotype</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Company Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Contact</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            >
              <option value="Webdeveloper">Webdeveloper</option>
              <option value="Designer">Designer</option>
              <option value="Both">Both</option>
            </select>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            >
              <option value="Gothenburg">Gothenburg</option>
              <option value="Distance">Distance</option>
              <option value="Outside_Gothenburg">Outside Gothenburg</option>
            </select>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Tools</label>
            <input
              type="text"
              value={tools}
              onChange={(e) => setTools(e.target.value.split(","))}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              placeholder="Separate tools with commas (,)"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Task Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full h-32"
            ></textarea>
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">About Us</label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            ></textarea>
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleUploadLogotype}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateCompany;
