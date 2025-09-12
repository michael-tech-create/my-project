"use client";

import { useEffect, useState } from "react";

export default function Services() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center bg-indigo-50 pt-24 pb-24">
      
      {/* Page Title */}
      <h1 className="text-4xl md:text-6xl font-bold my-12 text-indigo-900 my-5 drop-shadow-lg">
        Our Services
      </h1>

      {/* First Row */}
      <section className="flex flex-col mb-10 md:flex-row gap-6 px-4 md:px-8 w-full max-w-6xl">
        {/* Image 1 */}
        <div
          className="relative flex-1 h-[35vh] min-h-[250px] md:h-[50vh] lg:h-[60vh] rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: "url('/student.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offsetY * 0.1}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Student Learning
            </h2>
            <p className="text-white mt-2 md:mt-4 text-sm md:text-lg drop-shadow-md">
              Interactive resources and courses for students.
            </p>
            <button className="mt-4 md:mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image 2 */}
        <div
          className="relative flex-1 h-[35vh] min-h-[250px] md:h-[50vh] lg:h-[60vh] rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: "url('/tech.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offsetY * 0.15}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Tech Solutions
            </h2>
            <p className="text-white mt-2 md:mt-4 text-sm md:text-lg drop-shadow-md">
              Advanced tech solutions for your projects.
            </p>
            <button className="mt-4 md:mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Second Row */}
      <section className="flex flex-col md:flex-row gap-6 px-4 md:px-8 mt-6 w-full max-w-6xl">
        {/* Image 3 */}
        <div
          className="relative flex-1 h-[35vh] min-h-[250px] md:h-[50vh] lg:h-[60vh] rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: "url('/catering.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offsetY * 0.2}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Catering Services
            </h2>
            <p className="text-white mt-2 md:mt-4 text-sm md:text-lg drop-shadow-md">
              Delicious meals for events and gatherings.
            </p>
            <button className="mt-4 md:mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>
         <div
          className="relative flex-1 h-[35vh] min-h-[250px] md:h-[50vh] lg:h-[60vh] rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: "url('/dj.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offsetY * 0.2}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Dj for parties
            </h2>
            <p className="text-white mt-2 md:mt-4 text-sm md:text-lg drop-shadow-md">
              Entertainment.
            </p>
            <button className="mt-4 md:mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image 4 */}
        <div
          className="relative flex-1 h-[35vh] min-h-[250px] md:h-[50vh] lg:h-[60vh] rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: "url('/fashion-designer.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offsetY * 0.25}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Fashion & Style
            </h2>
            <p className="text-white mt-2 md:mt-4 text-sm md:text-lg drop-shadow-md">
              Trendy outfits and styling services.
            </p>
            <button className="mt-2 md:mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>
        

        {/* Image 5 */}
        <div
          className="relative flex-1 h-[35vh] min-h-[250px] md:h-[50vh] lg:h-[60vh] rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: "url('/hairdressers.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offsetY * 0.25}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Hairdressers
            </h2>
            <p className="text-white mt-2 md:mt-4 text-sm md:text-lg drop-shadow-md">
              Bring beauty to the world.
            </p>
            <button className="mt-4 md:mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Third Row */}
      <section className="flex flex-col md:flex-row gap-6 px-4 md:px-8 my-4 w-full max-w-6xl">
        {/* Image 6 */}
        <div
          className="relative flex-1 h-[35vh] min-h-[250px] md:h-[50vh] lg:h-[60vh] mb-170 mb:my-18 rounded-xl shadow-lg overflow-hidden"
          style={{
            backgroundImage: "url('/barber.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offsetY * 0.3}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Barbers
            </h2>
            <p className="text-white mt-2 md:mt-4 text-sm md:text-lg drop-shadow-md">
              Stylish haircuts for men and boys.
            </p>
            <button className="mt-4 mb-20 md:mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
