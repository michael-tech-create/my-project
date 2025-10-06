"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const categories = [
    "All",
    "Tutoring",
    "Tech",
    "Catering",
    "Fashion",
    "Entertainment",
    "stylish haircut for men",
    "Beauty",
  ];

  // Fetch services from backend API
  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        setServices(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  // Filter services by category + search
  const filtered = services.filter(
    (s) =>
      (category === "All" || s.cat === category) &&
      s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-50 to-white relative">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-indigo-900/60 backdrop-blur-sm"></div>

        <motion.h1
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Campus SkillHub
        </motion.h1>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="relative z-10 mt-4 text-3xl font-bold text-gray-200"
        >
          Find Skills in Your Campus 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative z-10 mt-4 max-w-2xl text-lg text-gray-100 px-4"
        >
          Hire students for tutoring, tech, catering, fashion, entertainment, and more.
        </motion.p>

        {/* Static Search Bar */}
{/* Static Search Bar */}
<div className="mt-8 w-full sm:w-2/3 md:w-1/2 relative z-10">
  <input
    type="text"
    placeholder="🔍 Search a skill..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-800 placeholder-gray-400"
  />
</div>

      </section>

      {/* Categories */}
      <section className="mt-6 flex justify-center gap-3 flex-wrap px-4">
        <AnimatePresence>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setCategory(cat)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className={`px-5 py-2 rounded-full text-sm font-medium shadow-sm transition ${
                category === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 hover:bg-indigo-100"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </AnimatePresence>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-200/60 rounded-xl animate-pulse h-40"
            />
          ))
        ) : filtered.length > 0 ? (
          filtered.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
              className="p-6 bg-white/90 backdrop-blur rounded-xl shadow-md text-center flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-black">{s.title}</h3>
                <p className="mt-1 text-sm text-black/40">{s.cat}</p>
              </div>
              <button
                onClick={() =>
                  router.push(
                    `/dashboard/payment?title=${(
                      s.title
                    )}&cat=${(
                      s.cat
                    )}&ref=REF${Date.now()}`
                  )
                }
                className="mt-6 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Book Now
              </button>
            </motion.div>
          ))
        ) : (
          <motion.p
            className="col-span-full text-center text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No services found for your search.
          </motion.p>
        )}
      </section>
    </main>
  );
}
