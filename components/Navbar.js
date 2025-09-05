"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <Link href="/" className="text-2xl font-bold text-indigo-600">

          Campus SkillHub
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link
            className="text-gray-600 hover:text-indigo-600"
            href="/auth/login"
          >
            Login
          </Link>
          <Link
            href="/auth/login"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Get Started
          </Link>
              <Link
            className="text-gray-600 hover:text-indigo-600"
            href="/dashboard/profile"
          >
            <CgProfile  className="text-4xl text-indigo-600"/>

          </Link>
          

        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow p-4 space-y-4">
          <Link
            className="block text-gray-600 hover:text-indigo-600"
            href="/auth/login"
          >
            Login
          </Link>
          <Link
            href="/auth/login"
            className="block px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Get Started
          </Link>

          <Link 
            href="/dashboard/profile">
            <CgProfile  className="text-4xl text-indigo-600"/>
          </Link>
        </div>
      )}
    </header>
  );
}
