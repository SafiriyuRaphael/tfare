import { toast } from "sonner";
import type { IRegisterInfo } from "../types";
import { apiService } from "./apiService";

export const signUp = async ({
    confirmPassword,
    email,
    password,
    username,
}: IRegisterInfo) => {
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

    const response = await apiService({
        method: "post",
        url: "/auth/register",
        data: { username, password, email },
    });

    return response;
};