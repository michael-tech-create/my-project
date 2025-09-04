"use client";
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!session) {
    return (
      <main className="min-h-screen flex justify-center items-center bg-indigo-50">
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h2 className="text-xl font-bold text-gray-800">Not logged in</h2>
          <p className="text-gray-600 mt-2">Please sign in to view your profile.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-indigo-50">
      <div className="flex flex-col gap-6 p-6 md:w-[420px] shadow-md rounded-lg bg-white items-center">
        <Image
          src={session.user?.image || "/iphone 2.webp"} // google image or fallback
          alt="User Avatar"
          width={100}
          height={100}
          className="rounded-full border shadow"
        />
        <h1 className="text-2xl font-bold text-gray-800">{session.user?.name}</h1>
        <p className="text-gray-600">{session.user?.email}</p>
        <p>User id :{session.user?.id}</p>
        <Button className="w-full" variant="contained" color="primary">log out</Button>
      </div>
    </main>
  );
}
