import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { FilmsContext } from "../../lib/context/FilmsContext/FilmsContext";

export const Login = () => {
  return <div  className="ui container mt-6">
    <LoginForm />
      <Link to='/register'>
        Register
      </Link>
  </div>
};
