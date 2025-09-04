"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/config/firebaseconfig";

export default function Dashboard() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });

  // ✅ Fetch services from Firestore
  useEffect(() => {
    async function fetchServices() {
      try {
        const querySnapshot = await getDocs(collection(db, "services"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    }
    fetchServices();
  }, []);

  // ✅ Handle form input change
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  // ✅ Submit service
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.description || !form.price || !form.category) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "services"), {
        ...form,
        createdAt: new Date(),
      });
      console.log("Service added with ID:", docRef.id);

      // refresh list
      setServices((prev) => [
        ...prev,
        { id: docRef.id, ...form },
      ]);

      // reset form
      setForm({ title: "", description: "", price: "", category: "" });
    } catch (e) {
      console.error("Error adding service: ", e);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-indigo-600">Dashboard 👋</h1>

      {/* Service Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 bg-white shadow-md rounded-lg p-6 max-w-lg"
      >
        <h2 className="text-xl font-semibold mb-4">➕ Add a Service</h2>

        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Service Title"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Service Description"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        ></textarea>

        <input
          type="text"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price (e.g. ₦5000 per hour)"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />

        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category (e.g. Tutoring, Fashion)"
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Save Service
        </button>
      </form>

      {/* Services Grid */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length > 0 ? (
          services.map((s) => (
            <div key={s.id} className="bg-white rounded-xl shadow p-4">
              <h2 className="font-semibold text-lg">{s.title}</h2>
              <p className="text-gray-600">{s.description}</p>
              <p className="mt-2 text-sm text-indigo-600 font-medium">{s.price}</p>
              <p className="mt-1 text-sm text-gray-500">{s.category}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No services yet. Add one using the form 🚀
          </p>
        )}
      </section>
    </main>
  );
}

