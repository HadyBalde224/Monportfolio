import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center">

        <div className="flex justify-center gap-60 text-xl">
          
          
          

          <a
            href="https://www.linkedin.com/in/mamadou-hady-balde-1977762a9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqfYYoxKbSgSqte9xAM2jgQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/HadyBalde224"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          
          <a
            href="https://www.facebook.com/share/1H8vTxDDdL/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebookF />
          </a>

        </div>

        <p className="text-sm mt-4">
          © 2025 <span className="font-semibold text-white">Balde Mamadou Hady</span>. Tous droits réservés.
        </p>

        <p className="test-sm mt-2" >
          Developpeur full stack 
        </p>

      </div>
    </footer>
  );
}
