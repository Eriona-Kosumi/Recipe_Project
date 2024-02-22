import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";

export const Login = () => {
  return <div className="ui container mt-30 pt-[15rem] h-[100vh] pl-[27rem]  ">
    <LoginForm />
    <Link to='/register'>
      Not a user?Sign up now
    </Link>
  
    </div>
};
