import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BaseProgressBar = () => {
  let [progress, setProgress] = useState("w-1/2");
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/business-sign-up") {
      setProgress("w-1/2");
    } else if (location.pathname === "/business-sign-up/step2") {
      setProgress("stage-1-to-2");
    } else if (location.pathname === "/business-sign-up/step3") {
      setProgress("stage-2-to-3");
    }
  }, [location]);
  return (
    <div className="w-full h-0.5 border border-dashed border-[#E5E9F2] mb-2">
      <div
        className={`stage-3-to-2 relative ${progress} h-0.5 bg-masto-green-10`}
      >
        <div className="w-4 h-4 rounded-[50%] bg-masto-green-10 absolute right-0 -top-2"></div>
      </div>
    </div>
  );
};

export default BaseProgressBar;
