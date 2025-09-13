import { auth, signOut } from "@/auth";
import Image from "next/image";
import { Button } from "@mui/material";

export default async function Profile() {
  const session = await auth();

  async function logout() {
    "use server"
    await signOut();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-l from-indigo-100 to-white">
      <div className="flex flex-col items-center w-full md:w-[356px] h-[360px] p-4 shadow-lg rounded-lg bg-white">
        
        {session?.user?.image && (
          <Image
            width={100}
            height={100}
            src={session.user.image}
            alt="my-image"
            className="rounded-full mb-4"
          />
        )}

        <div className="w-full text-center mb-10">
          <hr className="border-gray-300 mb-4" />
          <p className="text-lg font-semibold mb-8">{session?.user?.name}</p>
          <hr className="border-gray-300 mb-4"/>
          <p className="text-gray-700 text-sm">{session?.user?.email}</p>
        </div>

        <form action={logout}>
          <Button type="submit" 
          variant="contained" 
          color="error"
           fullWidth>
            Log Out
          </Button>
        </form>

      </div>
    </main>
  );
}
