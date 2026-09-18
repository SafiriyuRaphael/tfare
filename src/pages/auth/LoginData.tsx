import React, { useState } from "react";
import Input from "../../components/Input";
import { Lock, Mail } from "lucide-react";
import Button from "../../components/Button";
import { Link, useSearchParams } from "react-router";
import axios from "axios";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

const LoginData = () => {
  const [queryData, setQueryData] = useSearchParams();
  const [userData, setUserData] = useState({ email: " ", password: "" });

  const login = async () => {
    const { email, password } = userData;

    try {
      await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      toast.success("Login successful");
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  const loginMutation = useMutation({
    mutationFn: login,
  });
  return (
    <div className="space-y-3 flex flex-col ">
      <div className="space-y-9">
        <Input
          value={userData.email}
          onChange={(e) =>
            setUserData((data) => ({
              password: data.password,
              email: e.target.value,
            }))
          }
          placeholder="Email or Username"
          Icon={Mail}
        />
        <Input
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          placeholder="Password"
          type="password"
          Icon={Lock}
        />
      </div>
      <Link
        to="/auth/forgot-password"
        className="text-right text-white hover:underline cursor-pointer"
      >
        Forgot Password?
      </Link>
      <Button
        label="Login"
        variant="secondary"
        onClick={() => loginMutation.mutate()}
        isLoading={loginMutation.isPending}
      />
      <Link
        to="/auth/signup"
        className="text-center text-white hover:underline"
      >
        Don't have an account? Sign Up
      </Link>
    </div>
  );
};

export default LoginData;
