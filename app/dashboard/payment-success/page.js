import Link from "next/link";

// Page is a Server Component by default in Next.js App Router
export default function PaymentSuccess({ searchParams }) {
  const title = searchParams?.title || "Unknown Service";
  const cat = searchParams?.cat || "General";
  const ref = searchParams?.ref || "N/A";

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

        {/* Go to Dashboard */}
        <Link href="/dashboard/dashboard">
          <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition w-full">
            Go to Dashboard
          </button>
        </Link>

        {/* View Transactions */}
        <Link href="/dashboard/transactions">
          <button className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition w-full">
            View Transactions
          </button>
        </Link>
      </div>
    </main>
  );
}
