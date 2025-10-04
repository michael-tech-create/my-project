"use client"; // ← Important! This makes the page a client component

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Payment() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title") || "Unknown Service";
  const cat = searchParams.get("cat") || "General";
  const ref = searchParams.get("ref") || `REF${Date.now()}`;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4">
      <div className="bg-white w-full max-w-sm flex flex-col items-center justify-center gap-4 p-8 shadow-lg rounded-2xl text-center">
        <h1 className="text-3xl font-bold text-green-600">Payment Info 💳</h1>
        <p className="text-gray-600">Service: {title}</p>
        <p className="text-gray-600">Category: {cat}</p>
        <p className="text-sm text-gray-500">
          Reference ID: <span className="font-mono">{ref}</span>
        </p>

        <Link
          href={`/dashboard/procced-pay?title=${encodeURIComponent(title)}&cat=${encodeURIComponent(cat)}&ref=${encodeURIComponent(ref)}`}
        >
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            Proceed to Pay
          </button>
        </Link>
      </div>
    </main>
  );
}
