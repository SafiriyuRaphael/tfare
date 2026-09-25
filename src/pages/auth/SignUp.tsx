import { Link } from "react-router";
import Input from "../../components/Input";
import { Lock, Mail } from "lucide-react";
import Button from "../../components/Button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/signUp";
import { toast } from "sonner";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });

  return (
    <div className="space-y-5 flex flex-col ">
      <div className="space-y-9">
        <Input
          value={userInfo.username}
          placeholder="Username"
          Icon={Mail}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
        <Input
          value={userInfo.email}
          placeholder="Email"
          Icon={Mail}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <Input
          value={userInfo.password}
          placeholder="Password"
          type="password"
          Icon={Lock}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
        <Input
          value={userInfo.confirmPassword}
          placeholder="Confirm Password"
          type="password"
          Icon={Lock}
          onChange={(e) =>
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })
          }
        />
      </div>

      <Button
        label="Sign Up"
        variant="secondary"
        onClick={() => submitMutation.mutate(userInfo)}
        isLoading={submitMutation.isPending}
      />
      <Link to="/auth/login" className="text-center text-white hover:underline">
        Already have an account? Login
      </Link>
    </div>
  );
};

export default SignUp;
