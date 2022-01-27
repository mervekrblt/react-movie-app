import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import SearchPage from "./pages/SearchPage";

const routes = [
  { id: 1, path: "/", element: Login, isLogin: false },
  { id: 2, path: "home", element: Home, isLogin: true },
  { id: 3, path: "search", element: SearchPage, isLogin: true },
  { id: 4, path: "movie/:id", element: MovieDetail , isLogin: true },
];

export default routes