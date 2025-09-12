"use client";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUsers,
  FaLaptopCode,
  FaGraduationCap,
} from "react-icons/fa";

// Variants for stagger animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen text-gray-800 overflow-hidden">
      {/* 🔥 Hero Section with floating text */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden px-6">
        {/* Animated gradient background */}
        <motion.div
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-[length:200%_200%]"
        ></motion.div>

        <div className="absolute inset-0 bg-black/50"></div>

        {/* Floating heading */}
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative z-10 text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Welcome to Campus SkillHub
        </motion.h1>

        {/* Parallax paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mt-6 text-lg md:text-xl max-w-3xl text-gray-200"
        >
          Your all-in-one platform for discovering talents, hiring skills, and
          growing your network across campuses. A new generation of creators is
          here 🚀.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-6 bg-gray-50">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {[
            {
              icon: <FaGraduationCap className="text-6xl text-indigo-600 mb-6" />,
              title: "Student Empowerment",
              text: "We give students real-world opportunities to showcase their talents, earn money, and gain confidence.",
            },
            {
              icon: <FaLaptopCode className="text-6xl text-indigo-600 mb-6" />,
              title: "Tech & Innovation",
              text: "Our platform uses AI-driven skill matching, modern design, and real-time collaboration tools.",
            },
            {
              icon: <FaUsers className="text-6xl text-indigo-600 mb-6" />,
              title: "Community First",
              text: "We are building a strong campus ecosystem where people connect, share, and grow together.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.05,
                rotate: [0, 1.5, -1.5, 0],
              }}
              transition={{ duration: 0.4 }}
              className="p-8 bg-white rounded-2xl shadow-xl text-center"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {card.icon}
              </motion.div>
              <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
              <p className="text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section with pop animation */}
      <section className="relative py-20 px-6 bg-indigo-900 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-extrabold mb-6">Contact Us</h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-300">
            Have questions, ideas, or want to partner with us? Reach out — we’re
            building the future of campus innovation and you can be part of it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaPhoneAlt className="text-4xl text-indigo-300 mb-3" />,
                text: "+234 800 123 4567",
              },
              {
                icon: <FaEnvelope className="text-4xl text-indigo-300 mb-3" />,
                text: "support@campusskillhub.com",
              },
              {
                icon: <FaMapMarkerAlt className="text-4xl text-indigo-300 mb-3" />,
                text: "Lagos, Nigeria",
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                {info.icon}
                <p className="text-lg">{info.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
