import success from "../assets/Sticker.png";
import BaseButton from "../components/base-components/BaseButton";
import { useNavigate } from "react-router-dom";
import "./tweaks.css";

const Success = () => {
  let navigateTo = useNavigate();
  return (
    <main>
      <div className="flex flex-col items-center justify-center success-wrapper">
        <img src={success} alt="success sticker" />
        <div className="success-context flex flex-col items-center mt-3">
          <h1 className="font-bold text-center text-2xl">Success!</h1>
          <p className="text-center my-3">
            Your account has been created successfully.
          </p>
          <BaseButton
            onClick={() => {
              navigateTo("/sign-in");
            }}
            customText="Proceed to Sign in"
          />
        </div>
      </div>
    </main>
  );
};

export default Success;
