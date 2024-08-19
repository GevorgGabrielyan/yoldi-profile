"use server";

import { redirect } from "next/navigation";
import axios from "axios";
import { createSession, deleteSession, getSession } from "@/app/lib/session";

export default async function login(data: { email: string; password: string }) {
  const res = await axios.post<{ value: string }>(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
    data,
  );
  if (res.data?.value) {
    createSession(res.data.value);
    redirect("/accounts");
  }
}

export const getApiKey = async () => getSession();

export const deleteApiKey = async () => deleteSession();
