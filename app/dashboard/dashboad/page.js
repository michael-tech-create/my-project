"use client";
import { useState, useEffect } from "react";
import { db } from "@/config/firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("Tutoring");
  const [services, setServices] = useState([]);

  const categories = [
    "Tutoring",
    "Tech",
    "Catering",
    "Fashion",
    "Entertainment",
    "stylish haircut for men",
    "Beauty",
  ];

  // Fetch all services
  useEffect(() => {
    async function fetchServices() {
      const querySnapshot = await getDocs(collection(db, "services"));
      setServices(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    }
    fetchServices();
  }, []);

  // Add service
  async function handleAddService(e) {
    e.preventDefault();
    if (!title.trim()) return;

    await addDoc(collection(db, "services"), {
      title,
      cat,
      createdAt: new Date(),
    });

    setTitle(""); // reset form
    alert("✅ Service added!");
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-50 to-white px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white/80 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-indigo-600">
          Dashboard – Manage Your Services
        </h1>

        {/* Add Service Form */}
        <form
          onSubmit={handleAddService}
          className="mt-8 flex flex-col md:flex-row gap-4 items-center"
        >
          <input
            type="text"
            placeholder="Enter service title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Add Service
          </button>
        </form>

        {/* Services List */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.length > 0 ? (
            services.map((s) => (
              <div
                key={s.id}
                className="p-6 bg-white shadow rounded-xl border hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.cat}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">
              No services added yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
