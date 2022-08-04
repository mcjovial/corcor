import logo from "../assets/auth/logo.png";
import check from "../assets/auth/check-icon.png";
import quote from "../assets/auth/quote.png";
import OnboardingOptions from "../components/OnboardingOptions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Onboarding = (props) => {
  let year = new Date().getFullYear();
  console.log(props);
  return (
    <div>
      <div id="mobileView" className="lg:hidden ">
        <nav className="flex items-center bg-[#355B7F] px-5 py-4 fixed left-0 right-0 top-0">
          <img src={logo} alt="mastocred logo" className="sm:w-36" />
          <p className="text-xs text-white ml-auto">
            Already have an account?{" "}
            <Link to="sign-in" className="text-masto-green-10 no-underline">
              Sign In
            </Link>
          </p>
        </nav>
        <div className="pt-8 bg-lg-onboarding bg-cover sm:pb-10 flex w-full">
          <div className="w-full sm:w-9/12">
            <div className="mt-[53px] px-5 text-white">
              <div>
                <img src={quote} alt="Opening quote" />
              </div>
              <p className="text-sm leading-9 mt-3 sm:text-base sm:leading-9">
                Small and medium-sized businesses need access to a diverse range
                of finance options, including non-bank lending. These new forms
                of finance are still small in scale today but they should, over
                time, bring additional choice and greater competition to the
                lending market.
              </p>
              <div className="flex items-center py-4 text-base xs:pb-12">
                <p className="mr-3 sm:text-lg">Vince Cable</p>
                <img src={check} alt="check" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start">
          <div className="w-full xs:w-11/12 sm:w-9/12">
            <OnboardingOptions />
          </div>
        </div>
        <p className="text-masto-ash-10 mt-20 mb-4 text-center">
          ©{year} - All Rights Reserved - Mastocred
        </p>
      </div>
      <div id="largerScreenView" className="hidden lg:flex h-screen ">
        <div className="w-1/2 bg-lg-onboarding bg-cover h-full px-12 relative pt-16">
          <img src={logo} alt="mastocred logo" className="w-40 h-8" />
          <div className="flex items-center h-[70vh]">
            <div className="mt-[53px] px-5 text-white">
              <div>
                <img src={quote} alt="Opening quote" />
              </div>
              <p className="text-sm leading-9 mt-3 sm:text-base sm:leading-9">
                Small and medium-sized businesses need access to a diverse range
                of finance options, including non-bank lending. These new forms
                of finance are still small in scale today but they should, over
                time, bring additional choice and greater competition to the
                lending market.
              </p>
              <div className="flex items-center py-4 text-base">
                <p className="mr-3 sm:text-lg">Vince Cable</p>
                <img src={check} alt="check" />
              </div>
            </div>
          </div>
          <p className="text-masto-ash-10 mt-20 mb-4 text-center absolute bottom-0 right-0 left-0">
            ©{year} - All Rights Reserved - Mastocred
          </p>
        </div>
        <div className="w-1/2 px-12 pt-16">
          <p className="text-xs text-masto-ash-10 ml-auto text-right">
            Already have an account?{" "}
            <Link to="sign-in" className="text-masto-green-10">
              Sign In
            </Link>
          </p>
          <div className="flex items-center h-[70vh]">
            <OnboardingOptions />
          </div>
        </div>
      </div>
    </div>
  );
};
let mapStateToProps = (state) => {
  return {
    tester: state.userDetails,
  };
};
export default connect(mapStateToProps)(Onboarding);
