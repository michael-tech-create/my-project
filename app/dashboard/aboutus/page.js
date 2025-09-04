import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";


export default function Aboutus() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-50 to-white px-4">
      <div className="flex flex-col justify-center items-center w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        
        {/* Title */}
        <h1 className="font-extrabold text-4xl text-indigo-600 mb-4">
          About Us
        </h1>

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed text-center">
          Campus SkillHub was created for Nigerian students to showcase their
          skills and connect with opportunities. The idea came from{" "}
          <span className="font-semibold text-indigo-600">Michael</span>, 
          a student passionate about empowering youths who want to learn,
          grow, and earn income while studying. ✨
        </p>
        <p className="text-gray-600 leading-relaxed text-center mt-4">
          We believe that every student has a talent — from academics, tech,
          and entrepreneurship, to fashion, catering, and entertainment.
          Our platform brings these skills into the spotlight, helping
          students collaborate, get noticed, and even earn while they are
          in school.
        </p>

        {/* Mission & Vision */}
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-center">
          <div className="p-6 bg-indigo-50 rounded-xl shadow">
            <h2 className="font-bold text-xl text-indigo-600">Our Mission</h2>
            <p className="mt-2 text-gray-600 text-sm">
              To empower students by giving them a platform to share skills,
              connect with others, and create real impact on campus life.  
              We aim to break the barriers of limited opportunities by
              making every skill visible and valuable.
            </p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-xl shadow">
            <h2 className="font-bold text-xl text-indigo-600">Our Vision</h2>
            <p className="mt-2 text-gray-600 text-sm">
              To build a global student-powered hub where every skill counts,
              and every student finds opportunities beyond the classroom.
              We dream of a future where no student’s talent is wasted, and
              Campus SkillHub becomes the link between passion and success.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-8 p-6 bg-indigo-50 rounded-xl shadow text-center">
          <h2 className="font-bold text-xl text-indigo-600">Our Core Values</h2>
          <p className="mt-2 text-gray-600 text-sm">
            🌍 Community – We grow better together.  
            🚀 Innovation – We embrace creativity and new ideas.  
            💡 Empowerment – We give students the tools to shine.  
            🤝 Collaboration – We connect people to opportunities.  
          </p>
        </div>

        {/* Contact Section */}
        <div className="p-6 bg-indigo-50 backdrop-blur rounded-xl mt-6 w-full shadow-lg">
          <h1 className="text-center font-extrabold text-4xl text-indigo-700">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mt-2 text-sm">
            Have questions, suggestions, or want to partner with us?  
            Reach out to our team anytime through our social media channels below:
          </p>
          <div className="flex justify-center items-center mt-4">
            <div className="flex gap-6">
              <FaWhatsapp className="text-green-500 shadow text-4xl hover:scale-110 transition"/>
              <FaFacebookSquare className="text-blue-500 shadow text-4xl hover:scale-110 transition"/>
              <FaInstagram className="text-pink-500 shadow text-4xl hover:scale-110 transition"/>
            </div>
          </div>
        <div className="flex flex-col gap-2 mt-4 text-gray-600 text-sm">
            <p className="flex items-center justify-center gap-2">
                <FaPhone className="text-green-600" /> 
            +09033464071
        </p>
        <p className="flex items-center justify-center gap-2">
             <FaEnvelope className="text-indigo-600" /> 
             info@campusskillhub.com
             </p>
        </div>
        </div>
      </div>


    </main>
  );
}
