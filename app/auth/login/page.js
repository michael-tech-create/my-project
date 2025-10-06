"use client";

import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { loginWithGoogle } from "./actions";


export default function LoginPage() {
  

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-l from-indigo-200 to-white px-4">
      <div className="flex flex-col w-full max-w-sm p-6 md:p-8 shadow-lg rounded-lg backdrop-blur-lg bg-white/30">
        <h1 className="text-center font-bold text-2xl mb-4">Create Account</h1>

        {/* Email Sign Up */}
        <form  className="flex flex-col gap-4">
          <TextField
            fullWidth
            label="Email"
            placeholder="youremail@gmail.com"
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            placeholder="••••••••"
           
          />

          <button
            type="submit"
            className="w-full py-2 rounded-md text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition disabled:opacity-50"
          >
            continue
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-600 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign In */}
        <form action={loginWithGoogle}>
          <button className="flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <FcGoogle className="text-xl" />
            <span className="font-medium text-gray-700">Sign in with Google</span>
          </button>
        </form>
      </div>
    </main>
  );
}
