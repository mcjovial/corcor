import BaseButton from "../../base-components/BaseButton";
import BaseInput from "../../base-components/BaseInput";
import { Link } from "react-router-dom";

const FurtherDetails = () => {
  let incomeOptions = [
    "10k-50k",
    "60k-100k",
    "110k-150k",
    "160k-200k",
    "210k-250k",
    "260k-300k",
    "Above 300k",
  ];
  let ageOptions = [
    "Under 18",
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55-64",
    "65 or Above",
  ];

  let maritalStatusOptions = ["Married", "Single", "Divorced"];
  return (
    <>
      <form>
        <div className="relative">
          <label
            htmlFor="Occupation"
            className="text-xs text-masto-ash-10 lg:text-sm bg-white rounded-[10px] absolute -top-2 left-5 px-2"
          >
            Occupation
          </label>
          <BaseInput
            inputPlaceholder="Artisan"
            inputType="text"
            inputStyle="mb-10"
          ></BaseInput>
        </div>
        <div className="relative">
          <label
            htmlFor="income"
            className="text-xs text-masto-ash-10 lg:text-sm bg-white rounded-[10px] absolute -top-2 left-5 px-2"
          >
            Monthly Income
          </label>
          <select
            name="Age"
            id="Age"
            className="bg-[#F9FAFC] text-masto-brown-10 w-full py-3 sm:py-4 lg:py-5 px-4 rounded-xl border mb-10 focus:outline-none"
          >
            {incomeOptions.map((incomeRange, index) => {
              return (
                <option
                  value={incomeRange}
                  key={index}
                  className="w-1/2 rounded-xl"
                >
                  {incomeRange}
                </option>
              );
            })}
          </select>
        </div>
        <div className="relative">
          <label
            htmlFor="age"
            className="text-xs text-masto-ash-10 lg:text-sm bg-white rounded-[10px] absolute -top-2 left-5 px-2"
          >
            Age
          </label>
          <select
            name="Age"
            id="Age"
            className="bg-[#F9FAFC] text-masto-brown-10 w-full py-3 sm:py-4 lg:py-5 px-4 rounded-xl border mb-10 focus:outline-none"
          >
            {ageOptions.map((ageRange, index) => {
              return (
                <option
                  value={ageRange}
                  key={index}
                  className="w-1/2 rounded-xl"
                >
                  {ageRange}
                </option>
              );
            })}
          </select>
        </div>
        <div className="relative">
          <label
            htmlFor="marital-status"
            className="text-xs text-masto-ash-10 lg:text-sm bg-white rounded-[10px] absolute -top-2 left-5 px-2"
          >
            Marital Status
          </label>

          <select
            name="Age"
            id="Age"
            className="bg-[#F9FAFC] text-masto-brown-10 w-full py-3 sm:py-4 lg:py-5 pl-4 rounded-xl border mb-9 focus:outline-none"
          >
            {maritalStatusOptions.map((status, index) => {
              return (
                <option value={status} key={index}>
                  {status}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-10 relative">
          <label
            htmlFor="BVN"
            className="text-masto-ash-10 text-xs lg:text-sm bg-white rounded-[10px] absolute -top-2 left-5 px-2"
          >
            BVN
          </label>
          <BaseInput
            inputPlaceholder="2345678901"
            inputType="number"
          ></BaseInput>
        </div>
        <Link to="step2">
          <BaseButton customText="Save" customStyle="mb-6"></BaseButton>
        </Link>
      </form>
    </>
  );
};

export default FurtherDetails;
