import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../reduxStore/user";
import { isLogin } from "../reduxStore/isLogin";
import theme from "../theme";
import user from "../user.json";
import { useState } from "react";
console.log(user);
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
  const [err, setErr] = useState(false)

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      event.target.username.value === user.username &&
      event.target.password.value === user.password
    ) {
      setErr(false)
      dispatch(setUser(user));
      dispatch(isLogin());
      navigate("/home");
    }else {
      setErr(true)
    }
  };
  return (
    <>
      <form
      autoComplete="off"
        className="d-flex flex-column mb-5 align-items-center"
        onSubmit={submitHandler}
      >
        {err && <div className="alert alert-warning" role="alert">
          Username/Password are not correct
        </div>}
        <div className="mb-3 col-6 ">
          <label htmlFor="username" className={`form-label ${currentTheme.p}`}>
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="username"
            name="username"
          />
        </div>
        <div className="mb-3 col-6 ">
          <label htmlFor="password" className={`form-label ${currentTheme.p}`}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            aria-describedby="password"
            name="password"
          />
        </div>
        <button type="submit" className={`${currentTheme.button}`}>
          Submit
        </button>
      </form>
    </>
  );
};
export default LoginForm;
