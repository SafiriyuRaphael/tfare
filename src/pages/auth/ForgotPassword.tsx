import React from "react";
import Input from "../../components/Input";
import { Mail } from "lucide-react";
import Button from "../../components/Button";
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <div className="space-y-5 flex flex-col ">
      <div className="space-y-9">
        <Input placeholder="Email" Icon={Mail} />
      </div>

      <Button label="Send Reset Link" variant="secondary" onClick={() => {}} />
      <Link to="/auth/login" className="text-center text-white hover:underline">
        Already have an account? Login
      </Link>
    </div>
  );
};

export default ForgotPassword;
