import BaseInput from "../../base-components/BaseInput";
import BaseButton from "../../base-components/BaseButton";
import { Link } from "react-router-dom";

const SetPassword = () => {
  let inputFields = [
    { placeholder: "Password", inputType: "password" },
    { placeholder: "Confirm Password", inputType: "password" },
  ];
  return (
    <div>
      {inputFields.map((field, index) => {
        return (
          <BaseInput
            key={index}
            inputPlaceholder={field.placeholder}
            inputType={field.inputType}
            inputStyle="mb-10 lg:mb-5"
          ></BaseInput>
        );
      })}
      <Link to="/verify">
        <BaseButton
          customText="Agree & SignUp"
          customStyle="lg:mt-12"
        ></BaseButton>
            
      </Link>
    </div>
  );
};

export default SetPassword;
