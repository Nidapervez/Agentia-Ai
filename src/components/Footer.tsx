import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-14 px-6 md:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand & AI Button */}
        <div>
          <h2 className="text-3xl font-bold text-white tracking-wide">Agentia World</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Revolutionizing industries with AI-powered solutions.
          </p>
          <button className="mt-6 flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg shadow-gray-700/50 transition-all transform hover:scale-105">
            <GiArtificialIntelligence className="text-xl" /> Discover AI
          </button>
        </div>

        {/* Quick Navigation */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            {["Home", "Solutions", "AI Technology", "Contact"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300 transition-all block w-fit">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold text-white">Stay Connected</h3>
          <div className="flex justify-center md:justify-end space-x-5 mt-5">
            {[
              { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/nida-pervez-8468202b6/" },
              { icon: FaGithub, link: "https://github.com/Nidapervez" },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 transition-all rounded-full shadow-md shadow-gray-700/50 backdrop-blur-md transform hover:scale-110"
              >
                <Icon className="text-xl text-white" />
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Agentia World. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
