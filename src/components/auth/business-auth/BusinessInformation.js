import BaseInput from "../../base-components/BaseInput";
import BaseButton from "../../base-components/BaseButton";
import { Link } from "react-router-dom";

const BusinessInformation = () => {
  let inputFields = [
    { placeholder: "Business name", inputType: "text" },
    { placeholder: "Year registered", inputType: "number" },
    { placeholder: "RC number", inputType: "number" },
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
      <Link to="/business-sign-up/step3">
        <BaseButton customText="Proceed"></BaseButton>
      </Link>
    </div>
  );
};

export default BusinessInformation;
