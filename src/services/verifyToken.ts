import { apiService } from "./apiService";

export const verifyToken = async ({ token }: { token: string }) => {
    const response = await apiService({
        method: "post",
        url: "/auth/verify-email",
        data: { token }
    });
    return response;
};