import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-blue-600  text-white py-10 mt-16">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">DonateWear</h2>
          <p className="text-sm leading-relaxed">
            We believe in spreading warmth and hope. Every piece of clothing
            you donate helps someone in need live with dignity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3  className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/"  className="hover:link">Home</Link></li>
            <li><Link to="/about"  className="hover:link">About</Link></li>
            <li><Link to="/blog"  className="hover:link">Blog</Link></li>
            <li><Link to="/contact"  className="hover:link">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-sm mb-2">Email: support@donatewear.org</p>
          <p className="text-sm mb-4">Phone: +880 1234-567890</p>
          <div className="flex space-x-4">
            <a href="#"  className="hover:scale-125 transition"><FaFacebook/></a>
            <a href="#"  className="hover:scale-125 transition"><FaTwitter/></a>
            <a href="#"  className="hover:scale-125 transition"><FaInstagram/></a>
            <a href="#"  className="hover:scale-125 transition"><FaWhatsapp/></a>
          </div>
        </div>
      </div>

      {/* Bottom small text */}
      <div className="text-center text-xs text-white mt-8 border-t border-white pt-4">
        © {new Date().getFullYear()} DonateWear. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
