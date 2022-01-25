import Home from "./pages/Home";
import Login from "./pages/Login";

const routes = [
  { id: 1, path: "/", element: Login, isLogin: false },
  { id: 2, path: "/home", element: Home, isLogin: true },
];

export default routes