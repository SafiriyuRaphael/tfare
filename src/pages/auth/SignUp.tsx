import React from "react";
import { Link } from "react-router";
import Input from "../../components/Input";
import { Lock, Mail } from "lucide-react";
import Button from "../../components/Button";

const SignUp = () => {
  return (
    <div className="space-y-5 flex flex-col ">
      <div className="space-y-9">
        <Input placeholder="Username" Icon={Mail} />
        <Input placeholder="Email" Icon={Mail} />
        <Input placeholder="Password" type="password" Icon={Lock} />
        <Input placeholder="Confirm Password" type="password" Icon={Lock} />
      </div>

      <Button label="Sign Up" variant="secondary" onClick={() => {}} />
      <Link to="/auth/login" className="text-center text-white hover:underline">
        Already have an account? Login
      </Link>
    </div>
  );
};

export default SignUp;
