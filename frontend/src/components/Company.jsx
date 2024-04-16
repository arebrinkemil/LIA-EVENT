import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HorizontalLine from "./HorizontalLine";
import Header from "./Header";
import Footer from "./Footer";
import Arrows from "./ArrowsDown";
import asterisk from "../assets/icons/asterisk-black.svg";
import { CompanyDetails, CompanyAbout, CompanyContact } from "./CompanyFields";
import NavButton from "./NavButton";
import DividerStar from "./NavDivider";

const Company = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

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

  let companyName = company.name.toUpperCase();

  return (
    <>
      <div className="relative min-h-screen overflow-x-clip">
        <Header></Header>
        <div className="m-4 w-full flex flex-row gap-1 items-center">
          <NavButton path={"/"}>HEM</NavButton>
          <DividerStar></DividerStar>
          <NavButton path={"/companies"}>HITTA LIA</NavButton>
          <DividerStar></DividerStar>
          <NavButton>{companyName}</NavButton>
        </div>

        <div className=" lg:grid grid-cols-3 gap-5 lg:mx-20">
          <div className="flex flex-col col-span-2">
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500"></label>
              {company.logotype && company.logotype.trim() && (
                <>
                  <div className="max-w-xl max-h-96 overflow-hidden flex items-center justify-center">
                    <img src={company.logotype} alt="Company logotype" />
                  </div>
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
              </div>
            </div>

            <div className="hidden lg:flex">
              <div className="flex-3 w-3/4">
                <CompanyAbout company={company} />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col flex-1 mt-14 mb-24">
            <div className="">
              <Arrows />
              <div className="border-[1px] py-4 mt-16">
                <CompanyDetails company={company} />
              </div>
              <div className="border-[1px] border-t-0 py-4">
                <CompanyContact company={company} />
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
