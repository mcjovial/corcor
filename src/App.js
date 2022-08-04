import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import BusinessSignUp from "./pages/BusinessSignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import Verify from "./pages/verify";
import Success from "./pages/Success";
import IndividualSignup from "./pages/IndividualSignup";
import ResetSuccess from "./pages/ResetPwdSuccess";
import BusinessKYC from "./pages/BusinessKYC";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="business-sign-up/*" element={<BusinessSignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="individual-sign-up" element={<IndividualSignup />} />
          <Route path="verify" element={<Verify />} />
          <Route path="successful" element={<Success />} />
          <Route path="reset-success" element={<ResetSuccess />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="business-kyc/*" element={<BusinessKYC />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
