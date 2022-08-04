import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import otp from "../assets/auth/sign-in-three.png"
import back from "../assets/back.png"
import logo from "../assets/auth/logo.png"
import './tweaks.css'
import BaseButton from "../components/base-components/BaseButton";

const Verify = () => {
  //   const [otp, setOtp] = useState("");
  //   const preventDefault = (event) => event.preventDefault();

  let navigateTo = useNavigate();

  const [counter, setCounter] = useState(120);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <main className="min-h-full px-10 py-5">
      <div className="fixed left-0 right-0 top-0 px-6 py-4 bg-white flex items-center shadow-sm">
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

      <div className="flex flex-col justify-center items-center w-100 verify-wrapper">
        <img className="w-40 otp-illr" src={otp} alt="" />
        <div className="otp-context mt-10 flex flex-col items-center">
          <h2 className="mb-2 text-center text-xl font-bold ">
            OTP Verification
          </h2>
          <p className="otp-instr text-center">
            Enter the verification code we just sent on your mobile number
          </p>
        </div>
        <form
          className="flex flex-col items-center justify-start"
          autoComplete="off"
        >
          <div className="flex items-center justify-center px-3 my-4">
            <input
              className="w-20 h-20 m-2 text-center bg-[#F7F8F9] focus:outline-none border border-[#94C146] border-solid rounded-md"
              type="text"
              maxLength="1"
              tabIndex="1"
              autoFocus
            />
            <input
              className="w-20 h-20 m-2 text-center bg-[#F7F8F9] focus:outline-none border border-[#94C146] border-solid rounded-md"
              type="text"
              maxLength="1"
              tabIndex="2"
            />
            <input
              className="w-20 h-20 m-2 text-center bg-[#F7F8F9] focus:outline-none border border-[#94C146] border-solid rounded-md"
              type="text"
              maxLength="1"
              tabIndex="3"
            />
            <input
              className="w-20 h-20 m-2 text-center bg-[#F7F8F9] focus:outline-none border border-[#94C146] border-solid rounded-md"
              type="text"
              maxLength="1"
              tabIndex="4"
            />
          </div>
          <p className="font-normal">
            00:<span>{counter}</span> Sec
          </p>
          <BaseButton customText="Verify" onClick={()=>{
            navigateTo('/successful')
          }} />
          <p className="mt-2">
            Didn't receive code?
            <span style={{ color: "#94c146", cursor: "pointer" }}> Resend</span>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Verify;
