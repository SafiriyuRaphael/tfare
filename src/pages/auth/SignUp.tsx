import { Link } from "react-router";
import Input from "../../components/Input";
import { Lock, Mail } from "lucide-react";
import Button from "../../components/Button";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitUser = async () => {
    const { username, email, password, confirmPassword } = userInfo;
    if (!username || !email || !password || !confirmPassword) {
      toast.error("Registration Failed", {
        description: "data incomplete",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Registration Failed", {
        description: "password does not match",
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/auth/register", {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
      });

      toast.message(response.data.message);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  };

  const submitMutation = useMutation({
    mutationFn: submitUser,
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
        onClick={() => submitMutation.mutate()}
        isLoading={submitMutation.isPending}
      />
      <Link to="/auth/login" className="text-center text-white hover:underline">
        Already have an account? Login
      </Link>
    </div>
  );
};

export default SignUp;
