import Navbar from "../Navbar/Navbar";
import LoginForm from "../LoginForm/LoginForm";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import "./index.css";

const Home = () => (
  <div>
    <Navbar />
    <div className="home">
      <div className="home-navbar">
        <div className="bg">
          <img
            src="https://schoolaura.com/Content/assets/images/logo_school.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="home-navbar-options">
          <div className="nav-zero-option">Home</div>
          <div className="nav-option">
            Exam Solution <RiArrowDownSFill />
            <ul className="exam-solution-list-div">
              <li className="exam-solution-list">1st-12th Exam</li>
              <li className="exam-solution-list">Competitive Exam</li>
              <li className="exam-solution-list">Enterance exam</li>
            </ul>
          </div>
          <div className="nav-option">
            Online Study <RiArrowDownSFill />
            <ul className="exam-solution-list-div">
              <li className="exam-solution-list">1st-12th Exam</li>
              <li className="exam-solution-list">Competitive Exam</li>
              <li className="exam-solution-list">Enterance exam</li>
            </ul>
          </div>
          <div className="nav-option">
            Tutor Solution <RiArrowDownSFill />
            <ul className="exam-solution-list-div">
              <li className="exam-solution-list">Find Tutor</li>
              <li className="exam-solution-list">Become Tutor</li>
            </ul>
          </div>
          <div className="nav-zero-option">Blogs</div>
          <div className="nav-zero-option">Contact Us</div>
          <button className="school-management-btn">
            <FaUniversity size={18} />
            School Management
          </button>
        </div>
      </div>
      <div className="login-page">
        <div className="home-banner">
          <img
            src="https://schoolaura.com/Content/new_assets/images/header/header-girl-icon.png"
            alt="girl"
            className="girl-img"
          />

          <div className="home-banner-details">
            <h1 className="smart-studennt-head">
              BE A <span className="span">SMART STUDENT</span>
            </h1>
            <p className="school-para">
              SchoolAura Is A Smart Education Platform
            </p>
            <div className="home-banner-card-div">
              <div className="card">
                <h1 className="card-heading">
                  ENTERANCE <br />
                  Solution
                </h1>
                <button className="exam-btn">Exam</button>
                <button className="exam-btn">Courses</button>
                <p className="read-more-para">
                  READ MORE <AiOutlineRight className="more-icon" />
                </p>
              </div>
              <div className="card">
                <h1 className="card-heading">
                  COMPETITIVE <br />
                  Solution
                </h1>
                <button className="exam-btn">Exam</button>
                <button className="exam-btn">Courses</button>
                <p className="read-more-para">
                  READ MORE <AiOutlineRight className="more-icon" />
                </p>
              </div>
              <div className="card">
                <h1 className="card-heading">
                  KG - 12TH <br />
                  SCHOOL
                </h1>
                <button className="exam-btn">Exam</button>
                <button className="exam-btn">Courses</button>
                <p className="read-more-para">
                  READ MORE <AiOutlineRight className="more-icon" />
                </p>
              </div>
              <div className="card">
                <h1 className="card-heading">
                  TUTOR <br />
                  SOLUTION
                </h1>
                <button className="exam-btn">Find Tutors</button>
                <button className="exam-btn">Become Tutor</button>
                <p className="read-more-para">
                  READ MORE <AiOutlineRight className="more-icon" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  </div>
);

export default Home;
