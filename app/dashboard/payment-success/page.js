"use client"; // Needed because we access searchParams dynamically

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title") || "Unknown Service";
  const cat = searchParams.get("cat") || "General";
  const ref = searchParams.get("ref") || "N/A";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="bg-white w-full max-w-sm flex flex-col items-center justify-center gap-4 p-8 shadow-lg rounded-2xl text-center">
        <h1 className="text-3xl font-bold text-green-600">
          Payment Successful 🎉
        </h1>
        <p className="text-gray-600">Your booking has been confirmed.</p>

        <div className="bg-green-50 p-4 rounded-lg w-full">
          <p>
            Service: <b>{title}</b>
          </p>
          <p>
            Category: <b>{cat}</b>
          </p>
          <p>
            Reference ID: <span className="font-mono">{ref}</span>
          </p>
        </div>

        <Link href="/dashboard/dashboad">
          <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition w-full">
            Go to Dashboard
          </button>
        </Link>

        <Link href="/dashboard/transactions">
          <button className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition w-full">
            View Transactions
          </button>
        </Link>
      </div>
    </main>
  );
}
