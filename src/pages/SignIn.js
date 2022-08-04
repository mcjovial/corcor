import back from "../assets/back.png";
import logo from "../assets/auth/logo.png";
import { useNavigate, Link } from "react-router-dom";
import BaseInput from "../components/base-components/BaseInput";
import BaseButton from "../components/base-components/BaseButton";
import Slider from "../components/base-components/Swiper";
const SignIn = () => {
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

      <div className="lg:flex justify-center items-center w-full mt-10 h-full">
        <div className="mt-20 px-6 flex flex-col items-center lg:w-2/5">
          <Slider />
        </div>
        <div className="mt-24">
          <h1 className="font-bold text-2xl text-masto-brown-10 px-9 text-center">
            Welcome Back!👋 <br /> Glad to see you again!
          </h1>
          <div className="flex justify-center w-full mt-10">
            <div className="w-10/12 bg-white px-3 pt-3 shadow-sm rounded-xl pb-20">
              <BaseInput
                inputPlaceholder="Enter your email"
                inputType="email"
                inputStyle="mb-10 lg:mb-5"
              ></BaseInput>
              <BaseInput
                inputPlaceholder="Enter your password"
                inputType="password"
                inputStyle="mb-5"
              ></BaseInput>

              <Link
                to="/forgot-password"
                className="text-masto-green-10 text-sm text-right block mb-20"
              >
                Forgot password?
              </Link>

              <Link to="/business-kyc">
                <BaseButton
                  customText="Sign In Individual"
                  customStyle="mb-5"
                ></BaseButton>
              </Link>

              <Link to="/business-kyc">
                <BaseButton
                  customText="Sign In Business"
                  customStyle="mb-5"
                ></BaseButton>
              </Link>

              <p className="text-sm text-masto-ash-10 text-center">
                New user?{" "}
                <Link to="/" className="text-masto-green-10">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
