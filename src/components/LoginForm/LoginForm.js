import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./index.css";
import { useState } from "react";

const LoginForm = () => {
  const [isStudent, setIsStudent] = useState(true);
  const [isParent, setIsParent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    id: "",
    password: "",
  });
  const studentLogin = () => {
    setIsParent(false);
    setIsStudent(true);
  };
  const parentLogin = () => {
    setIsStudent(false);
    setIsParent(true);
  };

  const onClickshowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formEl = (event) => {
    event.preventDefault();
  };

  const changeId = (event) => {
    setData({ ...data, id: event.target.value });
  };
  const changePassword = (event) => {
    setData({ ...data, password: event.target.value });
  };

  return (
    <div>
      <form className="login-form" onSubmit={formEl}>
        <div className="login-page-change-div">
          <button
            type="button"
            className={isStudent ? "active-btn" : "student-login-btn"}
            onClick={studentLogin}
          >
            Students Login
          </button>
          <button
            type="button"
            className={isParent ? "active-btn" : "parent-login-btn"}
            onClick={parentLogin}
          >
            Parents Login
          </button>
        </div>
        {isStudent && (
          <>
            <label htmlFor="number-input" className="login-label">
              Mobile Number or Key
            </label>
            <input
              type="text"
              id="number-input"
              value={data.id}
              className="login-input"
              onChange={changeId}
            />
            <label htmlFor="password" className="login-label">
              Student Password
            </label>
            {!showPassword && (
              <input
                type="password"
                id="password"
                value={data.password}
                className="login-input"
                onChange={changePassword}
              />
            )}
            {showPassword && (
              <input
                type="text"
                id="number-input"
                value={data.password}
                className="login-input"
                onChange={changePassword}
              />
            )}
            {!showPassword && (
              <AiFillEyeInvisible onClick={onClickshowPassword} />
            )}
            {showPassword && <AiFillEye onClick={onClickshowPassword} />}
          </>
        )}

        {isParent && (
          <>
            <label htmlFor="number-input" className="login-label">
              Parent Mobile or Email
            </label>
            <input
              type="text"
              id="number-input"
              className="login-input"
              onChange={changeId}
            />
            <label htmlFor="password" className="login-label">
              Parent Password
            </label>

            <input
              type="password"
              id="password"
              className="login-input"
              onChange={changePassword}
            />
          </>
        )}

        <button type="submit" className="login-form-btn">
          Login
        </button>
        <div className="form-end-btn">
          <button type="button" className="forgot-password-btn">
            Forgot Password
          </button>
          {isStudent && (
            <button type="button" className="forgot-password-btn">
              Create Account
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
