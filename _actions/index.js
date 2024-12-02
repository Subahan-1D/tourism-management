"use server";
import { signIn, signOut } from "@/components/authProvider/auth";
export async function doSocialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/profile" });
  console.log(action);
}

export async function doLogOut() {
  await signOut({ redirectTo: "/" });
}
