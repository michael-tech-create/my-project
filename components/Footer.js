import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <main className="bg-gray-900 text-gray-300 py-30 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-500">Campus SkillHub</h2>
          <p className="mt-2 text-sm">
            Connecting Skills, Empowering Students 
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <Link href="/" className="hover:text-indigo-400"><li>Home</li></Link>
            <Link href="/dashboard/services" className="hover:text-indigo-400"><li>Services</li></Link>
            <Link href="/dashboard/about" className="hover:text-indigo-400"><li>About us</li></Link>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <ul className="mt-3 space-y-2">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 mt-3">
          <FaFacebook className="text-indigo-500" />
          <FaXTwitter className="text-indigo-500" />
          <FaInstagram className="text-indigo-500" />



          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Campus SkillHub. All rights reserved.
      </div>
    </main>
  );
}
