import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BiMobile } from "react-icons/bi";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-items">
        <div className="nav-icon-text">
          <div className="icon-bg">
            <FaPhoneAlt size="13" />
          </div>
          <p className="nav-text">+91-9540349392</p>
        </div>
        <div className="nav-icon-text">
          <div className="icon-bg">
            <MdMail size="14" />
          </div>
          <p className="nav-text">contact@schoolaura.com</p>
        </div>
      </div>
      <div className="navbar-items">
        <div className="nav-icon-whtsapp-text">
          <AiOutlineWhatsApp />
          <p className="nav-text">Whats App</p>
        </div>
        <div className="nav-icon-mobileapp-text">
          <BiMobile />
          <p className="nav-text">Mobile App</p>
        </div>
        <button className="nav-btn">Login</button>
        <button className="nav-btn">Registration</button>
      </div>
    </nav>
  );
};

export default Navbar;
