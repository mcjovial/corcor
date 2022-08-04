import back from "../assets/back.png";
import logo from "../assets/auth/logo.png";
import Slider from "../components/base-components/Swiper";
import { useNavigate, Link } from "react-router-dom";
import BaseInput from "../components/base-components/BaseInput";
import BaseButton from "../components/base-components/BaseButton";
const NewPassword = () => {
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

      <div className="items-center justify-center lg:flex">
        <div className="flex flex-col items-center px-6 mt-24 lg:w-2/5">
          <Slider />
          <div className="mb-5">
            <h2 className="my-5 text-2xl font-semibold text-center text-masto-brown-10">
              Create new password
            </h2>
            <p className="text-sm text-center text-masto-ash-10">
              Your new password must be unique from those previously used.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full lg:w-3/5 lg:mt-28">
          <div className="flex flex-col items-center justify-center w-full ">
            <div className="hidden mb-5 lg:block">
              <h2 className="my-5 text-2xl font-semibold text-center text-masto-brown-10">
                Create new password
              </h2>
              <p className="text-sm text-center text-masto-ash-10">
                Your new password must be unique from those previously used.
              </p>
            </div>
            <div className="w-10/12 px-3 pt-8 pb-5 bg-white shadow-md lg:w-8/12 rounded-t-3xl">
              <BaseInput
                inputPlaceholder="New Password"
                inputType="password"
                inputStyle="mb-10"
              ></BaseInput>
              <BaseInput
                inputPlaceholder="Confirm Password"
                inputType="password"
                inputStyle="mb-10"
              ></BaseInput>

              <BaseButton
                onClick={() => {
                  navigateTo("/reset-success");
                }}
                customText="Reset Password"
                customStyle="mb-5"
              ></BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
