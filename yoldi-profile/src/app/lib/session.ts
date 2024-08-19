import "server-only";

import { cookies } from "next/headers";

export async function createSession(apiKey: string) {
  cookies().set("apiKey", apiKey, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

export function deleteSession() {
  cookies().delete("apiKey");
}

export function getSession() {
  return cookies().get("apiKey")?.value;
}
