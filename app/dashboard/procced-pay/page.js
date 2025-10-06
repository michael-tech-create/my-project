"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { db } from "@/config/firebaseconfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


export default function ProceedPayPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const title = searchParams.get("title") || "Unknown Service";
  const cat = searchParams.get("cat") || "General";
  const ref = searchParams.get("ref") || `REF${Date.now()}`;

  const account = {
    bank: "Access Bank",
    accountNumber: "1234567890",
    accountName: "Campus SkillHub",
  };

  const [loading, setLoading] = useState(false);

  const handleConfirmPayment = async () => {
    setLoading(true);
    try {
      await addDoc(collection(db, "transactions"), {
        ref,
        title,
        category: cat,
        bank: account.bank,
        accountNumber: account.accountNumber,
        accountName: account.accountName,
        status: "verified",
        createdAt: serverTimestamp(),
      });
      router.push(
        `/dashboard/payment-success?title=${title}&cat=${cat}&ref=${ref}`
      );
    } catch (err) {
      console.error("Error recording transaction:", err);
      alert("Failed to record payment. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-sm flex flex-col items-center justify-center gap-4 p-8 shadow-lg rounded-2xl text-center"
      >
        <h1 className="text-3xl font-bold text-purple-600">Confirm Payment 💳</h1>
        <p className="text-gray-600">Service: {title}</p>
        <p className="text-gray-600">Category: {cat}</p>
        <p className="text-sm text-gray-500">
          Reference ID: <span className="font-mono">{ref}</span>
        </p>

        <div className="bg-indigo-50 p-4 rounded-lg w-full">
          <p>Bank: <b>{account.bank}</b></p>
          <p>Account Name: <b>{account.accountName}</b></p>
          <p>Account Number: <b>{account.accountNumber}</b></p>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          onClick={handleConfirmPayment}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold w-full"
        >
          {loading ? "Proccessing.." : "Confirm Payment"}
        </motion.button>
      </motion.div>
    </main>
  );
}
