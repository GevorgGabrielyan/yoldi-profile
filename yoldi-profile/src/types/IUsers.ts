import { IImage } from "@/types/IImage";

export interface IUser {
  email: string;
  password: string;
  name: string;
  id?: uuid;
  slug: string;
  description: string;
  image?: IImage | null;
  cover?: IImage | null;
  imageId?: uuid;
  coverId?: uuid;
}
