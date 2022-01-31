import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/base/Nav";
import Footer from "./components/base/Footer"
import routes from "./routes";
import Error from "./pages/Error";
import LoginError from "./pages/LoginError";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const theme = useSelector((state) => state.theme);
  const isLogin = useSelector((state) => state.isLogin);

  document.querySelector("body").setAttribute("id", "scrollbar");

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
        {isLogin && <Route path="/" element={<Home />} />}
        {!isLogin && <Route path="/" element={<Login />} />}
        <Route path="*" element={!isLogin ? <LoginError /> : <Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
