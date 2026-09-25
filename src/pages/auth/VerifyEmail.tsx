import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import { apiService } from "../../services/apiService";
import { verifyToken } from "../../services/verifyToken";

const VerifyEmail = () => {
  const [queryData, setQueryData] = useSearchParams();
  const token = queryData.get("token");
  const navigate = useNavigate();

  const verifyMutate = useMutation({
    mutationFn: verifyToken,
    onSuccess: (data) => {
      toast.success("Email verified successfull");
      navigate("/auth/login");
    },
  });

  useEffect(() => {
    verifyMutate.mutate({ token });
  }, [token]);
  return (
    <div className="text-center text-2xl text-white font-bold font-roboto">
      {verifyMutate.isPending && <h2>Verifying Email</h2>}
    </div>
  );
};

export default VerifyEmail;
