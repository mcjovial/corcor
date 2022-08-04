import BaseButton from "../../base-components/BaseButton";
import uploadIcon from "../../../assets/auth/upload-icon.png";
import questionMark from "../../../assets/auth/question-mark.png";
import { useState } from "react";

const DocumentUpload = () => {
  let [CACFile, setCACFile] = useState("");
  let [govtID, setGovtID] = useState("");

  function CACUpload(e) {
    setCACFile(e.target.files[0].name);
  }
  function govtIDUpload(e) {
    setGovtID(e.target.files[0].name);
  }
  return (
    <>
      <form>
        <div className="relative bg-[#F9FAFC] text-masto-brown-10 w-full py-2 px-3 rounded-xl border focus:border-masto-blue-10 mb-16">
          <p className="text-xs text-masto-ash-10 lg:text-sm bg-white rounded-[10px] absolute -top-2 left-5 px-2">
            CAC Documents
          </p>
          <div className="flex items-center py-4">
            <img src={uploadIcon} alt="upload icon" className="w-5 h-4 mr-2" />
            <label htmlFor="CAC" className="text-[10px] lg:text-sm">
              Click here to upload certificate of incorporation
            </label>
            <input type="file" name="" id="CAC" hidden onChange={CACUpload} />
            <img src={questionMark} alt="question mark" className="ml-auto" />
          </div>
          <p className="text-[10px] text-masto-blue-10">{CACFile}</p>
        </div>

        <div className="relative bg-[#F9FAFC] text-masto-brown-10 w-full py-2 px-3 rounded-xl border focus:border-masto-blue-10 mb-16 lg:mb-48">
          <p className="text-xs text-masto-ash-10 lg:text-sm bg-white rounded-[10px] absolute -top-2 left-5 px-2">
            Govt ID
          </p>
          <div className="flex items-center py-4">
            <img src={uploadIcon} alt="upload icon" className="w-5 h-4 mr-2" />
            <label htmlFor="govtID" className="text-[10px] lg:text-sm">
              Click here to upload GOVT issued ID
            </label>
            <input
              type="file"
              name="govtID"
              id="govtID"
              hidden
              onChange={govtIDUpload}
            />
            <img src={questionMark} alt="question mark" className="ml-auto" />
          </div>
          <p className="text-[10px] text-masto-blue-10">{govtID}</p>
        </div>
        <BaseButton customText="Save" customStyle="mb-10"></BaseButton>
      </form>
    </>
  );
};

export default DocumentUpload;
