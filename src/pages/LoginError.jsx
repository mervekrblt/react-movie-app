import "./LoginError.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import theme from "../theme";
const LoginError = () => {
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
  return (
    <div className="text-center login-err">
      <Link to={"/"}>
        <div className="padding-button mt-5">
          <button className={`${currentTheme.button} btn-lg`}>Yo need to login, Balrog</button>
        </div>
      </Link>
    </div>
  );
};
export default LoginError;
