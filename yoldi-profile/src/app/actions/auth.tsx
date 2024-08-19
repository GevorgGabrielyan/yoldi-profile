"use server";

import { redirect } from "next/navigation";
import axios from "axios";

export async function login(data: { email?: string; password?: string }) {
  const res = await axios.post<{ value: string }>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    data,
  );
  console.log(res);

  redirect("/accounts");
}
