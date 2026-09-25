import axios from "axios";
import { toast } from "sonner";
import { authStore } from "../store/authStore";

const apiUrl = import.meta.env.VITE_API_URL;

const apiClient = axios.create();

apiClient.interceptors.request.use((config) => {
  const token = authStore.getState().user?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const apiService = async ({
  method,
  baseUrl,
  url,
  timeOut,
  data,
  params,
}: {
  method: "get" | "delete" | "patch" | "post" | "put";
  baseUrl?: string;
  url: string;
  timeOut?: number;
  data?: any;
  params?: any;
}) => {
  const baseURL = baseUrl || apiUrl;
  const timeout = timeOut || 60000;

  try {
    const response = await apiClient({
      method,
      baseURL,
      url,
      timeout,
      data,
      params,
    });

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      toast.error(
        err.response?.data?.error || "Something went wrong"
      );
    } else {
      toast.error("Something went wrong");
    }

    throw err;
  }
};