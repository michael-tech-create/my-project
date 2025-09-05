"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const router = useRouter();

  const categories = [
    "All",
    "Tutoring",
    "Tech",
    "Catering",
    "Fashion",
    "Entertainment",
    "Boys & girl cutz",
    "Beauty(girls)",
  ];
  const services = [
    { title: "Math Tutor", cat: "Tutoring" },
    { title: "Web Developer", cat: "Tech" },
    { title: "Catering for Events", cat: "Catering" },
    { title: "Fashion Designer", cat: "Fashion" },
    { title: "DJ for Parties", cat: "Entertainment" },
    { title: "Barbers", cat: "Boys & girl cutz" },
    { title: "Hairdressers", cat: "Beauty(girls)" },
  ];

  // Filter services by category + search
  const filtered = services.filter(
    (s) =>
      (category === "All" || s.cat === category) &&
      s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      className="min-h-screen bg-gradient-to-r from-indigo-50 to-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="backdrop-blur-md min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-50 ">
            Campus SkillHub
          </h1>
          <h2 className="text-4xl font-extrabold text-gray-800">
            Find Skills in Your Campus 🚀
          </h2>
          <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
            Hire students for tutoring, tech, catering, fashion, entertainment,
            and more.
          </p>

          {/* Search */}
          <div className="mt-8 flex justify-center">
            <input
              type="text"
              placeholder="🔍 Search a skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-2/3 md:w-1/2 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white"
            />
          </div>

          {/* Categories */}
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium shadow-sm transition ${
                  category === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-indigo-100 "
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.length > 0 ? (
            filtered.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-white/90 backdrop-blur rounded-xl shadow-md hover:shadow-xl transition text-center flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-black">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-black/40">{s.cat}</p>
                </div>
                <button
                  onClick={() =>
                    router.push(
                      `/dashboard/payment?title=${encodeURIComponent(
                        s.title
                      )}&cat=${encodeURIComponent(
                        s.cat
                      )}&ref=REF${Date.now()}`
                    )
                  }
                  className="mt-6 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  Book Now
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-700 ">
              No services found for your search.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
