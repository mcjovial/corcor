import back from "../assets/back.png";
import logo from "../assets/auth/logo.png";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import PersonalDetails from "../components/auth/business-auth/PersonalDetails";
import BusinessInformation from "../components/auth/business-auth/BusinessInformation";
import SetPassword from "../components/auth/business-auth/SetPassword";
import BaseProgressBar from "../components/base-components/BaseProgressBar";
import Slider from "../components/base-components/Swiper";

const BusinessSignUp = () => {
  let navigateTo = useNavigate();
  return (
    <div>
      <div className="z-50 fixed left-0 right-0 top-0 px-6 py-4 bg-white flex items-center shadow-sm">
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

      <div className="items-center justify-center lg:flex">
        <div className="flex flex-col items-center px-6 mt-20 lg:w-2/5">
          <Slider />
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-3/5 lg:mt-20 lg:pt-8">
          <h1 className="text-2xl font-bold text-center text-masto-brown-10 px-9">
            Hello there!👋 <br /> Welcome to Mastocred!
          </h1>
          <div className="w-9/12 mt-5 lg:w-7/12">
            <div>
              <BaseProgressBar />
            </div>
            <div className="flex justify-between text-masto-green-10 font-bold text-[9px]">
              <p>Personal Details</p>
              <p>Business Information</p>
              <p>Set Password</p>
            </div>
          </div>
          <div className="flex justify-center w-full mt-10">
            <div className="w-10/12 px-3 pt-3 pb-4 bg-white shadow-sm lg:w-8/12 rounded-xl">
              <Routes>
                <Route path="/" element={<PersonalDetails />} />
                <Route path="step2" element={<BusinessInformation />} />
                <Route path="step3" element={<SetPassword />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSignUp;
