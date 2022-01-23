import { useSelector } from "react-redux";
import Login from "./pages/Login";

function App() {
  const user = useSelector((state) => state.user.username);
  console.log(user);
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
