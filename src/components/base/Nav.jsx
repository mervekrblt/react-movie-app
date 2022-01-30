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

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${currentTheme.nav}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="...">
            Capstone Project
          </a>
          <div className={`dropdown me-auto`}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Movies
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="...">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="...">
                  Popular
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="...">
                  Top Rated
                </a>
              </li>
            </ul>
          </div>
          <ThemeSwitch
            checked={stateTheme}
            onClick={() => dispatch(changeTheme())}
          ></ThemeSwitch>
          <AvatarImg
            profile={
              "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fani-game.com%2Fwp-content%2Fuploads%2F2018%2F01%2Fcover-1.jpg&f=1&nofb=1"
            }
          />
        </div>
      </nav>
    </>
  );
};
export default Nav;
