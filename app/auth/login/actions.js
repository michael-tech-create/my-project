"use server";

import { signIn } from "@/auth";

export async function loginWithGoogle() {
  return await signIn("google");
}

export async function loginWithTwitter() {
  return await signIn("twitter");
}
