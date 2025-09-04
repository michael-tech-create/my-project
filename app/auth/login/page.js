"use client";
import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";

export default function Signup() {
  const { data: session } = useSession(); // just get session
  console.log("Session data:", session); 

  return (
    <main className="min-h-screen justify-center flex px-2 md:px-12 lg:px-16 py-4 md:py-6 lg:py-12 bg-indigo-50">
      <div className="w-full md:w-[380px] max-h-[420px] flex flex-col gap-8 rounded-lg md:shadow-md md:px-3 md:py-4 bg-white/30">
        <h1 className="text-center font-bold text-2xl text-black">Create Account</h1>

        <form className="justify-items-center">

          <div className="w-full py-2">
            <TextField fullWidth type="email" label="Email" placeholder="yourexample@gmail.com" id="email" />
          </div>

          <button
            type="submit"
            className="w-full h-9 px-2 font-semibold text-center text-white rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-700"
          >
            Sign Up
          </button>

          <p className="mt-4 text-center text-gray-700">
            Already have an Account? <a href="/pra/practice" className="text-indigo-600">Login</a>
          </p>
        </form>

        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard/pra" })}
          className="mt-4 w-full py-2 rounded-md flex items-center justify-center gap-2 hover:shadow-md"
        >
          <FcGoogle /> Sign in with Google
        </button>
      </div>
    </main>
  );
}
