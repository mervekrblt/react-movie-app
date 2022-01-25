import { useSelector } from "react-redux";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Nav from "./components/base/Nav";
import routes from "./routes";
import Error from "./pages/Error";
import LoginError from "./pages/LoginError";

function App() {
  const theme = useSelector((state) => state.theme);
  const isLogin = useSelector((state) => state.isLogin);
  const navigate = useNavigate()
  console.log(isLogin);
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
          <Route path="*" element={!isLogin ? <LoginError/> : <Error />}/>
      </Routes>
    </>
  );
}

export default App;
