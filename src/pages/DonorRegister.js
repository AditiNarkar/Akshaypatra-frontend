import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "./DonorRegister.css";

const DonorRegister = () => {
  return (
    <div className="donor-register">
      <Header />
      <div className="frame-parent3">
        <div className="logo-1-parent2">
          <img className="logo-1-icon5" alt="" src="/logo-1@2x.png" />
          <b className="donor-registration">Donor Registration</b>
        </div>
        <div className="name-of-donor-parent">
          <b style={{ justifyContent:"right"}} className="name-of-donor">Name of Donor:</b>
          <b style={{ justifyContent:"right"}} className="name-of-donor"> Email Id:</b>
          <b style={{ justifyContent:"right"}} className="name-of-donor">Password:</b>
        </div>
        <div className="frame-parent4">
          <input style={{ border:"none" }} className="frame-child7" />
          <input type="email" style={{ border:"none" }} className="frame-child7" />
          <input type="password" style={{ border:"none" }} className="frame-child7" />
        </div>
        <div className="sign-in-container">
          <b className="sign-in1">Sign In</b>
        </div>
        <b className="already-have-an1">Already have an account? Login</b>
        <div className="frame-child10" />
      </div>
    </div>
  );
};

export default DonorRegister;
