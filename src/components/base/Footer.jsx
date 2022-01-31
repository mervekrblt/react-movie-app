import theme from "../../theme";
import { useSelector } from "react-redux";

const Footer = () => {
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
  return (
      <footer className={`text-center mt-3 ${currentTheme.text}`}>
        <p>MADE WITH BLOOD, SWEAT AND TEARS</p>
        <p>&copy; Merve Karabulut, 2022</p>
      </footer>
  );
};
export default Footer;
