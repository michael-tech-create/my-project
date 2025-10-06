"use server";

import { signIn } from "@/auth";
import { AuthorizationCheck } from "@/config/authorization-checks";
<AuthorizationCheck/>
export async function loginWithGoogle() {
  return await signIn("google");
}
