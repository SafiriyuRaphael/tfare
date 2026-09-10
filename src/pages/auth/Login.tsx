import React from "react";
import Input from "../../components/Input";
import { Lock, Mail } from "lucide-react";
import Button from "../../components/Button";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="space-y-3 flex flex-col ">
      <div className="space-y-9">
        <Input placeholder="Email or Username" Icon={Mail} />
        <Input placeholder="Password" type="password" Icon={Lock} />
      </div>
      <Link
        to="/auth/forgot-password"
        className="text-right text-white hover:underline cursor-pointer"
      >
        Forgot Password?
      </Link>
      <Button label="Login" variant="secondary" onClick={() => {}} />
      <Link
        to="/auth/signup"
        className="text-center text-white hover:underline"
      >
        Don't have an account? Sign Up
      </Link>
    </div>
  );
};

export default Login;
