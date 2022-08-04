import back from "../assets/back.png";
import logo from "../assets/auth/logo.png";
import signInTwo from "../assets/auth/forgot-password.png";

import { useNavigate, Link } from "react-router-dom";
import BaseInput from "../components/base-components/BaseInput";
import BaseButton from "../components/base-components/BaseButton";
const ForgotPassword = () => {
  let navigateTo = useNavigate();
  return (
    <div>
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

      <div className="flex-col items-center justify-center lg:flex">
        <div className="flex flex-col items-center px-6 mt-24 lg:w-2/5">
          <img src={signInTwo} alt="Hello" />
          <div className="mb-5">
            <h2 className="my-5 text-2xl font-semibold text-center text-masto-brown-10">
              Forgot Password?
            </h2>
            <p className="text-sm text-center text-masto-ash-10">
              Don't worry! It occurs. Please enter the email address linked with
              your account.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-3/5">
          <div className="flex justify-center w-full ">
            <div className="w-10/12 px-3 pt-8 pb-5 bg-white shadow-md lg:w-8/12 rounded-t-3xl">
              <BaseInput
                inputPlaceholder="Enter your email"
                inputType="email"
                inputStyle="mb-10"
              ></BaseInput>

              <Link to="/new-password">
                <BaseButton
                  customText="Proceed"
                  customStyle="mb-5 lg:mb-10"
                ></BaseButton>
              </Link>

              <p className="text-sm text-center text-masto-ash-10">
                Remember Password?{" "}
                <Link to="/sign-in" className="text-masto-green-10">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
