import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HorizontalLine from "./HorizontalLine";
import Header from "./Header";
import Footer from "./Footer";
import Arrows from "./ArrowsDown";
import asterisk from "../assets/icons/asterisk-black.svg";
import { CompanyDetails, CompanyAbout, CompanyContact } from "./CompanyFields";

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
    <>
      <div className="relative min-h-screen overflow-x-clip">
        <Header></Header>

        <div className="">
          <Link to="/profile" className="p-2 bg-sky-300 m-8">
            Go to Profile
          </Link>
          <div className="flex flex-col">
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Logotype</label>
              {company.logotype && company.logotype.trim() && (
                <>
                  <img src={company.logotype} alt="Company logotype" />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <div className=" ">
                <HorizontalLine></HorizontalLine>
                <div className="my-4">
                  <label className="text-xl mr-4 text-gray-500"></label>
                  <div className=" px-4 py-2 w-full text-4xl">
                    {company.name}
                  </div>
                </div>
                <HorizontalLine></HorizontalLine>

                <div className="lg:hidden">
                  <CompanyDetails company={company} />
                  <Arrows />
                  <CompanyAbout company={company} />
                  <CompanyContact company={company} />
                  <HorizontalLine></HorizontalLine>
                </div>

                <div className="hidden lg:flex">
                  <div className="flex-3 w-3/4">
                    <CompanyAbout company={company} />
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="">
                      <Arrows />
                    </div>
                    <div className="">
                      <div className="border-[1px]">
                        <CompanyDetails company={company} />
                      </div>
                      <div className="border-[1px] border-t-0">
                        <CompanyContact company={company} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
};

export default Company;
