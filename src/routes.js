import Home from "./pages/Home";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";

const routes = [
  { id: 1, path: "/", element: Login, isLogin: false },
  { id: 2, path: "home", element: Home, isLogin: true },
  { id: 3, path: "search", element: SearchPage, isLogin: true },
];

export default routes