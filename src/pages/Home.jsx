import Discover from "../components/listingComponents/Discover";
import Trend from "../components/listingComponents/Trend";
import theme from "../theme";
import { useSelector } from "react-redux";
import Search from "../components/Search";

const Home = () => {
  const stateTheme = useSelector((state) => state.theme);
  const currentTheme = stateTheme ? theme.isDark : theme.isLight;
  return (
    <>
    <Search/>
      <h2 className={`text-center pt-5 ${currentTheme.p}`}>Discover</h2>
      <Discover />
      <h2 className={`text-center pt-5 ${currentTheme.p}`}>Trending</h2>
      <Trend />
    </>
  );
};
export default Home;
