import individual from "../assets/auth/individual-icon.png";
import business from "../assets/auth/business-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingOptions = () => {
  let [currentOption, setCurrentOption] = useState("individual");
  let navigateTo = useNavigate();
  return (
    <div className="px-5 py-7">
      <h1 className="text-masto-brown-10 font-bold text-2xl mb-3">Join Us!</h1>
      <p className="text-masto-ash-10 text-sm leading-7 mb-4">
        To begin this journey, tell us what type of account you'd be opening.
      </p>
      <ul>
        <li
          onClick={() => {
            setCurrentOption("individual");
            navigateTo("individual-sign-up");
          }}
          className={`flex items-center pl-4 py-2 border mb-5 ${
            currentOption === "individual"
              ? "border-masto-blue-10 bg-[#F5F9FF]"
              : "border-transparent shadow-md bg-white"
          } rounded-md list-none`}
        >
          <img src={individual} alt="individual icon" className="w-10 h-10" />
          <div className="ml-3">
            <h3 className="text-sm text-masto-brown-10">Individual</h3>
            <p className="text-masto-ash-10 text-xs">
              Personal account to manage all your activities.
            </p>
          </div>
        </li>
        <li
          onClick={() => {
            setCurrentOption("business");
            navigateTo("business-sign-up");
          }}
          className={`flex items-center pl-4 py-3 border mb-5 ${
            currentOption === "individual"
              ? "border-transparent shadow-md bg-white"
              : "border-masto-blue-10 bg-[#F5F9FF]"
          } rounded-md list-none`}
        >
          <img src={business} alt="individual icon" />
          <div className="ml-3">
            <h3 className="text-sm text-masto-brown-10">Business</h3>
            <p className="text-masto-ash-10 text-xs">
              Own or belong to a company, this is for you.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OnboardingOptions;
