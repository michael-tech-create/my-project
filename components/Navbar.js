"use client"
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <header className="bg-white my-0 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center my-4 px-4">

        <h1 className="text-2xl text-indigo-600 font-extrabold">
          Campus SkillHub
        </h1>

        <nav className="hidden md:flex">
          <ul className="flex gap-4 items-center">
            <li>
              <Link href="/auth/login" className="text-gray-700 hover:text-indigo-600">
                Login
              </Link>
            </li>

            <li>
              <button className="w-[100px] h-[40px] bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition">
                Get Started
              </button>
            </li>
            <Link href="/dashboard/profile">
            <li>
              <CgProfile className="text-3xl text-indigo-600 cursor-pointer hover:text-indigo-800" />
            </li>
            </Link>
          </ul>
        </nav>

        <button
          className="md:hidden text-3xl text-block text-indigo-600 shadow"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-indigo-50 shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link
                href="/auth/login"
                className="block text-gray-700 hover:text-indigo-600"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>

            <li>
              <button
                className="w-full h-[40px] bg-indigo-600 rounded-lg text-white hover:bg-indigo-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </button>
            </li>
          <Link  href="dashboard/profile">
            <li>
              <CgProfile className="text-3xl text-indigo-600 cursor-pointer hover:text-indigo-800" />
            </li>
          </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
