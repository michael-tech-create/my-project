import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

export default function Login() {  
    return (
        <main className="flex min-h-screen flex-col justify-center items-center p-6 bg-indigo-50">
        <div className="backdrop-blur bg-white/30 my-8 p-6 shadow-md  w-full md:w-[420px] rounded-lg md:px-3 md:py-4">
                <h1 className="text-4xl font-bold mb-4 text-center text-indiogo-700">sign In</h1>       
        <form className="space-y-4 flex flex-col items-center">
          <div className="w-full md:w-[380px] max-h-[420px] flex flex-col gap-8 rounded-lg md:px-3 md:py-4">
  
          <div className="w-full py-2">
            <TextField
            fullWidth
            type="text"
            label="Full Name"
            placeholder="Full Name"
            id="fullName"/>
            
          </div>

            <div className="w-full py-2 ">
            <TextField
            fullWidth
            type="email"
            label="Email"
            placeholder="yourexample@gmail.com"
            id="email"/>
            
          </div>

          <div className="w-full py-2">
            <TextField
            fullWidth
            type="password"
            placeholder="password"
            label="Password"
            id="password"/>
          </div>
            <button className="my-2 w-full py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
              Continue
             </button>
          <p className="mt-4 text-center text-gray-700 ">
            "Already have an Account? " 
            <a href="/pra/practice" className="text-indigo-600">Login</a>
          </p>
             </div>   
             <div className="mt-4">
            <p className="text-black/40 text-sm text-center">
              By signing you agree to this terms</p>
              </div> 
            </form>
               <button type="submit" className="mt-4 w-full py-2 rounded-md flex items-center justify-center gap-2 hover:shadow-md">
             <FcGoogle className="hover:shadow-md" /> Sign in with google
              </button>
                
          </div>

        </main>
    );
}
