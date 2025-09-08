export default function Footer () {
    return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-500">Campus SkillHub</h2>
          <p className="mt-2 text-sm">
            Connecting Skills, Empowering Students 🚀
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick links</h3>
          <ul className="mt-3 space-y-2">
            <li>Home</li>
            <li>About us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <ul className="mt-3 space-y-2">
            <li>Tutoring</li>
            <li>Tech</li>
            <li>Catering</li>
            <li>Fashion</li>
            <li>Entertainment</li>
          </ul>
        </div>
        <div>
            <h3 className="text-white font-semibold text-lg">follow us</h3>
            <ul className="mt-3 space-y-2">
                <li>f</li>
                <l1>i</l1>
                <li>x</li>
            </ul>
            

        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Campus SkillHub. Built for School Project 
      </div>
    </footer>
  );
}
