import BaseButton from "../../base-components/BaseButton";
import BaseInput from "../../base-components/BaseInput";
import { Link } from "react-router-dom";

const PersonalDetails = () => {
  let inputFields = [
    { placeholder: "Firstname", inputType: "text" },
    { placeholder: "Lastname", inputType: "text" },
    { placeholder: "Email", inputType: "email" },
    { placeholder: "Phone Number", inputType: "tel" },
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
      <Link to="/business-sign-up/step2" className="mb-40">
        <BaseButton customText="Proceed"></BaseButton>
      </Link>
    </div>
  );
};

export default PersonalDetails;
