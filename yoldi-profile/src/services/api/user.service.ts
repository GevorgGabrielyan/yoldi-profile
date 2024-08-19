import { IUser } from "@/types/IUsers";
import { HttpClient } from "@/services/api/client";

export class UserService {
  static me = async (): Promise<IUser> => {
    const res = await HttpClient.get<IUser>("/profile");

    return res.data;
  };

  static accounts = async (): Promise<IUser[]> => {
    const res = await HttpClient.get<IUser[]>("/user");

    return res.data;
  };

  static account = async (slug: string): Promise<IUser> => {
    const res = await HttpClient.get<IUser>(`/user/${slug}`);

    return res.data;
  };

  static editProfile = async (user: IUser): Promise<IUser> => {
    const res = await HttpClient.patch<IUser>(`/profile`, user);

    return res.data;
  };
}
