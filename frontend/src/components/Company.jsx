import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          `http://134.122.48.238:5555/companies/${id}`
        );

        setCompany(response.data);
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    fetchCompany();
  }, [id]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <Link to="/profile" className="p-2 bg-sky-300 m-8">
        Go to Profile
      </Link>
      <div className="flex flex-col border-sky-400 rounded-xl w-3/4 p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Logotype</label>
          {company.logotype && company.logotype.trim() && (
            <>
              <img src={company.logotype} alt="Company logotype" />
            </>
          )}
        </div>
        <div className="flex flex-row">
          <div className=" ">
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Company Name</label>
              <div className=" px-4 py-2 w-full">{company.name}</div>
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">About Us</label>
              <div className=" px-4 py-2 w-full">{company.about}</div>
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Contact</label>
              <div className=" px-4 py-2 w-full">{company.contact}</div>
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Role</label>
              <div className=" px-4 py-2 w-full">{company.role}</div>
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Amount</label>
              <div className=" px-4 py-2 w-full">{company.amount}</div>
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Location</label>
              <div className=" px-4 py-2 w-full">{company.location}</div>
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Tools</label>
              <ul className=" px-4 py-2 w-full">
                {company.tools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">URL</label>
              <div className=" px-4 py-2 w-full">{company.url}</div>
            </div>
          </div>
          <div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                Task Description
              </label>
              <div className=" px-4 py-2 w-full">
                {company.task_description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
