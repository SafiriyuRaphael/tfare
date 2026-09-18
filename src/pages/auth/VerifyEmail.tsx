import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";

const VerifyEmail = () => {
  const [queryData, setQueryData] = useSearchParams();
  const token = queryData.get("token");
  const navigate = useNavigate();

  const verifyToken = async () => {
    try {
      await axios.post("http://localhost:4000/auth/verify-email", {
        token,
      });
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const verifyMutate = useMutation({
    mutationFn: verifyToken,
    onSuccess: () => {
      // toast.success("Email verified successfull");
      // navigate("/auth/login");
    },
  });

  useEffect(() => {
    verifyMutate.mutate();
  }, [token]);
  return (
    <div className="text-center text-2xl text-white font-bold font-roboto">
      {verifyMutate.isPending && <h2>Verifying Email</h2>}
    </div>
  );
};

export default VerifyEmail;
