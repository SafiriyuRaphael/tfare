import { useState } from "react";
import Input from "../../components/Input";
import { Lock, Mail } from "lucide-react";
import Button from "../../components/Button";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/login";
import { Link } from "react-router";
import { toast } from "sonner";
import { authStore } from "../../store/authStore";

const LoginData = () => {
  const [userData, setUserData] = useState({ email: " ", password: "" });
  const { setUser } = authStore();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("Login Successful");
      setUser({ userData: data.user, token: data.token });
    },
  });
  return (
    <div className="space-y-3 flex flex-col ">
      <div className="space-y-9">
        <Input
          value={userData.email}
          onChange={(e) =>
            setUserData((data) => ({
              ...data,
              email: e.target.value,
            }))
          }
          placeholder="Email or Username"
          Icon={Mail}
        />
        <Input
          value={userData.password}
          onChange={(e) =>
            setUserData((data) => ({
              ...data,
              password: e.target.value,
            }))
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
        onClick={() => loginMutation.mutate(userData)}
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
