import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AvatarImg from "../Avatar";
import { changeTheme } from "../../reduxStore/theme";
import theme from "../../theme";
import ThemeSwitch from "../ThemeSwitch";

const Nav = () => {
  const stateTheme = useSelector((state) => state.theme);
  const stateUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
  console.log(stateUser)
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${currentTheme.nav}`}>
        <div className="container-fluid">
        <Link style={{ textDecoration: "none"}} to={`/`}>
          <img src={'logo.svg'} style={{width: "12vh"}} />
          </Link>
          <div className={`dropdown me-auto`}>
            <button
              className={`dropdown-toggle ${currentTheme.button}`}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Movies
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <Link style={{ textDecoration: "none"}} to={`filter/popular`}>
                <p className="dropdown-item">
                  Popular
                </p>
              </Link>
              <Link style={{ textDecoration: "none"}} to={`filter/top_rated`}>
                <p className="dropdown-item">
                  Top Rated
                </p>
              </Link>
            </ul>
          </div>
          <ThemeSwitch
            checked={stateTheme}
            onClick={() => dispatch(changeTheme())}
          ></ThemeSwitch>
          <AvatarImg
            profile={stateUser?.avatarUrl}
          />
        </div>
      </nav>
    </>
  );
};
export default Nav;
