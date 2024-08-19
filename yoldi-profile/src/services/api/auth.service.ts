import axios from "axios";
import { IUser } from "@/types/IUsers";

export class AuthService {
  static signup = async (data: IUser): Promise<{ value: string }> => {
    const res = await axios.post<{ value: string }>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-up`,
      data,
    );

    return res.data;
  };

  static login = async (data: Partial<IUser>): Promise<{ value: string }> => {
    const res = await axios.post<{ value: string }>(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      data,
    );

    return res.data;
  };
}
