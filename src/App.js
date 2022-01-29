import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/base/Nav";
import routes from "./routes";
import Error from "./pages/Error";
import LoginError from "./pages/LoginError";
import Home from "./pages/Home"

function App() {
  const theme = useSelector((state) => state.theme);
  const isLogin = useSelector((state) => state.isLogin);

  document.querySelector("body").style.backgroundColor = theme
    ? "#141414"
    : "white";

  return (
    <>
      <Nav />
      <Routes>
        {routes
          .filter((route) => route.isLogin === isLogin)
          .map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.element />}
            />
          ))}
          {isLogin && <Route path="/" element={<Home/>}/>}
          <Route path="*" element={!isLogin ? <LoginError/> : <Error />}/>
      </Routes>
    </>
  );
}

export default App;
