import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-500">Campus SkillHub</h2>
          <p className="mt-2 text-sm">
            Connecting Skills, Empowering Students 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link href="/" className="hover:text-indigo-400">Home</Link></li>
            <li><Link href="/" className="hover:text-indigo-400">Servics</Link></li>
            <li><Link href="/dashboard/aboutus" className="hover:text-indigo-400">about us</Link></li>
            
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/terms" className="hover:text-indigo-400">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-indigo-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 mt-3">
            <Link href="#" className="hover:text-indigo-400"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-indigo-400"><FaXTwitter /></Link>
            <Link href="#" className="hover:text-indigo-400"><FaInstagram /></Link>

          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Campus SkillHub. All rights reserved.
      </div>
    </footer>
  );
}
