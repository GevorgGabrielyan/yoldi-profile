import axios, { HttpStatusCode, isAxiosError } from "axios";

import type {
  InternalAxiosRequestConfig,
  AxiosInterceptorManager,
} from "axios";
import { deleteApiKey, getApiKey } from "@/app/actions/auth";

const HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

HttpClient.interceptors.request.use(
  async (req: InternalAxiosRequestConfig) => {
    const apiKey = await getApiKey();
    if (apiKey) {
      req.headers["X-API-KEY"] = `${apiKey}`;
      if (req.headers["Content-Type"] !== "multipart/form-data") {
        req.headers["Content-Type"] = "application/json";
      }
      req.headers["Correlation-Object"] = JSON.stringify({
        correlationId: new Date(),
      });
    }
    return req;
  },
  (error) => Promise.reject(error),
);

const ResponseErrorHandler: Parameters<
  AxiosInterceptorManager<unknown>["use"]
>[1] = async (error) => {
  if (
    isAxiosError(error) &&
    error.response?.status === HttpStatusCode.Unauthorized
  ) {
    localStorage.clear();
    await deleteApiKey();
  }
  return Promise.reject(error);
};

HttpClient.interceptors.response.use(null, ResponseErrorHandler);

/**
 * @description Refers to next app's api folder endpoints
 */
const ApiClient = axios.create({
  baseURL: "/api",
});

ApiClient.interceptors.response.use(null, ResponseErrorHandler);

export { HttpClient, ApiClient };
