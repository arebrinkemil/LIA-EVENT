import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5555/companies/${id}`
        );

        setCompany(response.data);
        setLogotype(response.data.logotype);
        setCompanyId(response.data.companyId);
        setName(response.data.name);
        setAbout(response.data.about);
        setContact(response.data.contact);
        setRole(response.data.role);
        setAmount(response.data.amount);
        setLocation(response.data.location);
        setTools(response.data.tools);
        setUrl(response.data.url);
        setTaskDescription(response.data.task_description);
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
          `http://localhost:5555/image/${companyId}/${oldLogotypeFilename}`,
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
          `http://localhost:5555/image/${companyId}/${oldLogotypeFilename}`,
          {
            withCredentials: true,
          }
        );
      }

      const response = await axios.post(
        `http://localhost:5555/image/${companyId}`,
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

  const handleSaveCompany = async () => {
    try {
      await axios.put(
        `http://localhost:5555/companies/${id}`,
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
    } catch (error) {
      console.error("Error updating company:", error);
    }
  };

  if (!company) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4">
      <Link to="/profile" className="p-2 bg-sky-300 m-8">
        Go to Profile
      </Link>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Logotype</label>
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
          <label className="text-xl mr-4 text-gray-500">Replace Logotype</label>
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
          <label className="text-xl mr-4 text-gray-500">About Us</label>
          <input
            type="text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
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
          <label className="text-xl mr-4 text-gray-500">Task Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full h-32"
          ></textarea>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveCompany}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditCompany;
