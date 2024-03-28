import "./NGORegister.css";
import Navbar from "../components/Navbar";

const NGORegister = () => {
  return (
    <div className="ngo-register">
      <Navbar />
      {/* <div className="navbar">
        <img className="logo-1-icon2" alt="" src="/logo-13@2x.png" />
        <div className="home-parent">
          <b className="contact">Home</b>
          <b className="contact">About</b>
          <b className="contact">Contact</b>
          <button className="log-in-wrapper">
            <b className="log-in">Log In</b>
          </button>
        </div>
      </div> */}
      <section className="frame-group">
        <div className="logo-1-container">
          <img className="logo-1-icon3" alt="" src="/logo-1@2x.png" />
          <h2 className="ngo-registration">NGO Registration</h2>
        </div>
        <div className="name-of-ngo-parent">
          <b style={{ justifyContent:"right"}} className="name-of-ngo">Name of NGO:</b>
          <b style={{ justifyContent:"right"}} className="name-of-ngo">Address:</b>
          <b style={{ justifyContent:"right"}} className="name-of-ngo">NGO Foundation Id:</b>
          <b style={{ justifyContent:"right"}} className="name-of-ngo">NGO Email Id:</b>
          <b style={{ justifyContent:"right"}} className="name-of-ngo">Password:</b>
        </div>
        <div className="frame-container">
          <input style={{ border:"none"}} className="frame-item" />
          <input style={{ border:"none"}} className="frame-item" />
          <input style={{ border:"none"}} className="frame-item" />
          <input type="email" style={{ border:"none"}} className="frame-item" />
          <input type="password" style={{ border:"none"}} className="frame-item" />
        </div>
        <button className="sign-in-wrapper">
          <b className="log-in">Sign In</b>
        </button>
        <b className="already-have-an">Already have an account? Login</b>
        <div className="line-div" />
      </section>
    </div>
  );
};

export default NGORegister;
