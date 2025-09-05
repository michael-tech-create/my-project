"use client";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const params = useSearchParams();
  const title = params.get("title");
  const cat = params.get("cat");
  const ref = params.get("ref");

  return (
    <main className="min-h-screen flex items-center justify-center bg-indigo-50">
      <div className="p-6 bg-white shadow-md rounded-lg text-center w-[350px]">
        <h1 className="text-2xl font-bold text-black">You Booked ✅</h1>
        <p className="text-gray-600 mt-2">Service: {title}</p>
        <p className="text-gray-600">Category: {cat}</p>
        <p className="text-gray-600">Reference: {ref}</p>

        <button className="mt-4 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
          Proceed to Payment
        </button>
      </div>
    </main>
  );
}
