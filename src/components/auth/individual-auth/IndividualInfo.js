import BaseInput from "../../base-components/BaseInput";
import "./tweak.css";

const IndividualInfo = () => {
  let inputFields = [
    { placeholder: "First name", inputType: "text" },
    { placeholder: "Last name", inputType: "text" },
    { placeholder: "Email", inputType: "email" },
    { placeholder: "Phone Number", inputType: "tel" },
    { placeholder: "Association", inputType: "select" },
    { placeholder: "Branch", inputType: "select" },
    { placeholder: "Password", inputType: "password" },
    { placeholder: "Confirm Password", inputType: "password" },
  ];
  return (
    <>
       {inputFields.map((x, index) => {
        return (
          <BaseInput
            key={index}
            inputPlaceholder={x.placeholder}
            inputType={x.inputType}
            inputStyle="mb-10 lg:mb-5"
          ></BaseInput>
        );
        
      })}
    </>

  );
};

export default IndividualInfo;
