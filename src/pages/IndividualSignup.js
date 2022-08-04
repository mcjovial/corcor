import back from "../assets/back.png";
import logo from "../assets/auth/logo.png";
import { useNavigate, Link } from "react-router-dom";
import IndividualInfo from "../components/auth/individual-auth/IndividualInfo";
import BaseButton from "../components/base-components/BaseButton";
import Slider from "../components/base-components/Swiper";

const IndividualSignup = () => {
  let navigateTo = useNavigate();
  return (
    <div>
      <div className="z-50 fixed  left-0 right-0 top-0 px-6 py-4 bg-white flex items-center shadow-sm">
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

      <div className="lg:flex justify-center items-start">

        <div className="mt-20 px-6 flex flex-col items-center lg:w-2/5">

              <Slider/>
          
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:w-3/5 lg:mt-20 lg:pt-8">
          <h1 className="font-bold text-2xl text-masto-brown-10 px-9 text-center">
            Hello there!👋 <br /> Welcome to Mastocred!
          </h1>
          <form className="flex flex-col items-center justify-center  p-5 indi-form">
            <IndividualInfo />
            <BaseButton 
              onClick={() => {
                navigateTo("/verify");
              }}
              customText="Agree & Continue"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndividualSignup;
