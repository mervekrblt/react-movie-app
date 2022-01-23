import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <>
      <LoginForm />
    </>
  );
};
export default Login;
