import { apiService } from "./apiService";

export const login = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    const data = await apiService({
        method: "post",
        url: "/auth/login",
        data: { email, password },
    });

    return data
};