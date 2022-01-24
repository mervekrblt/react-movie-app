import { useDispatch } from "react-redux";
import { setUsername, setPassword } from "../reduxStore/user";
import { isLogin } from "../reduxStore/isLogin";

const LoginForm = () => {
  const dispatch = useDispatch()
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      event.target.username.value === "merve" &&
      event.target.password.value === "123456"
    ) {
      dispatch(setUsername(event.target.username.value))
      dispatch(setPassword(event.target.password.value))
      dispatch(isLogin())
      console.log("true");
    }
  };
  return (
    <>
      <form
        className="d-flex my-5 flex-column align-items-center"
        onSubmit={submitHandler}
      >
        <div className="mb-3 col-6 ">
          <label htmlFor="username" className="form-label">
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
          <label htmlFor="password" className="form-label">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default LoginForm;
