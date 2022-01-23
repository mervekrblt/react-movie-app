import { changeTheme } from "../../reduxStore/theme";
import { useSelector, useDispatch } from "react-redux";

const Nav = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  console.log(theme);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button onClick={() => dispatch(changeTheme())}>Change theme</button>
      </nav>
    </>
  );
};
export default Nav;
