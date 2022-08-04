import back from "../assets/back.png";
import logo from "../assets/auth/logo.png";
import { useNavigate, Link } from "react-router-dom";
import BaseInput from "../components/base-components/BaseInput";
import BaseButton from "../components/base-components/BaseButton";
import Slider from "../components/base-components/Swiper";
import { useState } from "react";
import { loginUser } from "../store/actions/authActions";
import { useDispatch } from "react-redux";

const SignIn = () => {
  let navigateTo = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  let dispatch = useDispatch
  // console.log("auth", localStorage.getItem("isAuthenticated"));


  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });

    console.log(userData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(userData)
    .then((res) => {
      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          name: res.data.user.name,
          email: res.data.user.email,
          token: res.data.token,
        },
      });
      if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
        localStorage.setItem('isAuthenticated', 'true')
      }
      navigateTo('/dashboard/business-kyc')
    })
    .catch((err) => console.log(err));
  };

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
                name="email"
                onChange={(e) => handleInputChange(e)}
              ></BaseInput>
              <BaseInput
                inputPlaceholder="Enter your password"
                inputType="password"
                inputStyle="mb-5"
                name="password"
                onChange={(e) => handleInputChange(e)}
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
                  onClick={handleSubmit}
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
