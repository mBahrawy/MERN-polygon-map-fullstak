import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const showErrorToaster = (message: string) => !toast.isActive(message) && toast.error(message, { toastId: message });

const http = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Request interceptor
http.interceptors.request.use(
  (config: any) => {
    const configClone = { ...config };
    // const token = getToken();
    // token && (configClone.headers.Authorization = `Bearer ${token}`);
    return configClone;
  },
  (error: Error) => {
    Promise.reject(error);
  }
);

// Response interceptor
http.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    switch (error.response?.status) {
      case 500:
        showErrorToaster("There is an issue with the server, try again later.");
        break;
      case 404:
        showErrorToaster("The requested data doesn't exists.");
        break;
      case 401 || 403:
        showErrorToaster("You are not allowed to do this action.");
        localStorage.clear();
        break;
      default:
        showErrorToaster("Something wrong happened, try again later");
    }
    return Promise.reject(error);
  }
);

export default http;
