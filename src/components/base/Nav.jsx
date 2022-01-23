import { changeTheme } from "../../reduxStore/theme";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme";
import ThemeSwitch from "../ThemeSwitch";

const Nav = () => {
  const stateTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${currentTheme.nav}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Capstone Project
          </a>
          <div class={`dropdown me-auto`}>
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Movies
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Popular
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Top Rated
                </a>
              </li>
            </ul>
          </div>
          <ThemeSwitch onClick={() => dispatch(changeTheme())}></ThemeSwitch>
          <p className={`my-auto ${currentTheme.p}`}>Avatar</p>
        </div>
      </nav>
    </>
  );
};
export default Nav;
