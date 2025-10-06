"use client";
import { useEffect, useState } from "react";
import { db } from "@/config/firebaseconfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock } from "react-icons/fa";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "transactions"), orderBy("createdAt", "desc"));
    // Real-time updates
    const unsubscribe = onSnapshot(q, (snap) => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTransactions(data);
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-50 to-white px-4 py-10 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-6">
          Transactions Dashboard
        </h1>

        {transactions.length === 0 ? (
          <p className="text-center text-gray-600">No transactions yet 🚀</p>
        ) : (
          <div className="overflow-x-auto shadow-md rounded-xl">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3">Reference</th>
                  <th className="px-6 py-3">Service</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Bank</th>
                  <th className="px-6 py-3">Account</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, i) => (
                  <motion.tr
                    key={tx.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b hover:bg-indigo-50 transition"
                  >
                    <td className="px-6 py-3 font-mono text-sm">{tx.ref}</td>
                    <td className="px-6 py-3">{tx.title}</td>
                    <td className="px-6 py-3">{tx.category}</td>
                    <td className="px-6 py-3">{tx.bank}</td>
                    <td className="px-6 py-3">
                      {tx.accountName} <br />
                      <span className="font-mono text-gray-500">{tx.accountNumber}</span>
                    </td>
                    <td className="px-6 py-3 flex items-center gap-2">
                      {tx.status === "pending_verification" ? (
                        <FaClock className="text-yellow-500" />
                      ) : (
                        <FaCheckCircle className="text-green-600" />
                      )}
                      {tx.status.replace("_", " ")}
                    </td>
                    <td className="px-6 py-3">
                      {tx.createdAt?.toDate
                        ? tx.createdAt.toDate().toLocaleString()
                        : new Date(tx.createdAt).toLocaleString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </main>
  );
}
