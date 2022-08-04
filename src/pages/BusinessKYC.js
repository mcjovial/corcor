import { useNavigate, Link } from "react-router-dom";
import back from "../assets/back.png";
import logo from "../assets/auth/logo.png";
import avatar from "../assets/auth/avatar.png";
import { Routes, Route } from "react-router-dom";
import FurtherDetails from "../components/auth/business-auth/FurtherDetails";
import DocumentUpload from "../components/auth/business-auth/DocumentUpload";

const BusinessKYC = () => {
  let navigateTo = useNavigate();
  return (
    <>
      <div className="fixed top-0 left-0 right-0 flex items-center px-6 py-4 bg-white shadow-sm">
        <button
          className="rounded-lg pl-2.5 pr-3 py-2 border border-[#E8ECF4] mb-2.5"
          onClick={() => {
            navigateTo(-1);
          }}
        >
          <img src={back} alt="backwards arrow" />
        </button>
        <Link to="/" className="ml-auto">
          <img src={logo} alt="mastocred logo" className="h-6" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center pt-24">
        <div className="w-full xs:w-10/12 sm:w-8/12 md:w-1/2">
          <div className="flex-col items-center justify-center lg:flex">
            <div className="w-full flex justify-center">
              <img src={avatar} alt="avatar" className="w-[86px] h-[86px]" />
            </div>{" "}
            <div className="mb-5">
              <h2 className="my-5 text-2xl font-semibold text-center text-masto-brown-10">
                Hi, Onyinye
              </h2>
              <p className="text-sm text-center text-masto-ash-10 lg:text-lg px-5">
                To access the dashboard, let's get to know you better! Please
                upload a profile picture.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex justify-center w-full ">
              <div className="px-3 pt-8 pb-5 bg-white shadow-md w-full rounded-t-3xl">
                <Routes>
                  <Route path="" element={<FurtherDetails />}></Route>
                  <Route path="/step2" element={<DocumentUpload />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessKYC;
