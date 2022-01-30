import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import SearchPage from "./pages/SearchPage";
import Filter from "./pages/Filter";

const routes = [
  { id: 1, path: "/", element: Login, isLogin: false },
  { id: 2, path: "home", element: Home, isLogin: true },
  { id: 3, path: "search", element: SearchPage, isLogin: true },
  { id: 4, path: "movie/:id", element: MovieDetail , isLogin: true },
  { id: 5, path: "profile", element: Profile , isLogin: true },
  { id: 6, path: "filter/:category", element: Filter , isLogin: true },
];

export default routes