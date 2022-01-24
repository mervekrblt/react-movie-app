import { useSelector } from "react-redux";
import Login from "./pages/Login";

function App() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  document.querySelector("body").style.backgroundColor = theme
    ? "#141414"
    : "white";
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
