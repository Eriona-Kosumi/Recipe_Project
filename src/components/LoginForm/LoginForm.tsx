import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";

import Input from "../shared/Input/Input";
import Button from "../shared/Button/Button";

import { useLoginFormik } from "../../lib/hooks/useLoginFormik";

import { login } from "../../api/User/user.client";
import "react-toastify/dist/ReactToastify.css";
import { PasswordField } from "../shared/PasswordField/PasswordField";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const LoginForm = () => {
  const authCtx = useAuthContext();
  const navigate = useNavigate()

  const formik = useLoginFormik({
    onSubmit: async (values, formikHelpers) => {
      try {
        const res = await login(values)
        toast.success('Logged in successfully')
        authCtx.login(res.data.token);
        navigate('/')
      } catch (error: any) {
        toast.error(error.response.data.errors.global)
      }
    },
  });
  
  const handleFormikChange = (name: string, value: string | number) => {
    formik.setFieldValue(name, value);
    formik.setFieldTouched(name, true);
  };

  return (
    <div className="LoginForm ">
      <form className="mb-3  w-[300px]" onSubmit={formik.handleSubmit}>
        <h2 className="mt-8 mb-12 text-4xl font-bold text-left text-black md:mt-0">Sign in</h2>

        <Input
          className="mb-2.5"
          id="email"
          name="email"
          placeholder="Email"
          icon="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />

        <PasswordField
          className="mb-2.5"
          id="password"
          name="password"
          placeholder="******"
          icon="lock"
          value={formik.values.password}
          onChange={(name: string, value: string | number) => handleFormikChange(name, value)}
          error={formik.errors.password}
        />

        <Button className="min-w-full rounded-md uppercase" type="submit" loading={formik.isSubmitting}>
          Sign in
        </Button>
      </form>
    </div>
  );
};
