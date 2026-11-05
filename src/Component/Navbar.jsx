import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [allWorkOpen, setAllWorkOpen] = useState(false);

  // Replace with your actual WhatsApp number
  // Country code included, without + or spaces
  const phoneNumber = "8108833333";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello RISHI INTERIOR & ALL, I want to know about your services."
  )}`;

  const callLink = `tel:+${phoneNumber}`;

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  const allWorkLinks = [
    { name: "All Interior Work", link: "/allwork" },
    { name: "POP Work", link: "/allwork/pop" },
    { name: "Painting Work", link: "/allwork/painting" },
    { name: "Electrical Work", link: "/allwork/electrical" },
    { name: "Furniture Work", link: "/allwork/furniture" },
    { name: "Plumbing Work", link: "/allwork/plumbing" },
    { name: "False Ceiling", link: "/allwork/false-ceiling" },
    { name: "Wall Design", link: "/allwork/wall-design" },
    { name: "Wallpaper Work", link: "/allwork/wallpaper" },
    { name: "Glass & Aluminum", link: "/allwork/glass-aluminum" },
    { name: "Home Renovation", link: "/allwork/renovation" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f6f1]/95 backdrop-blur-lg border-b border-[#ded8cb]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-24 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex flex-col shrink-0">
          <span className="text-3xl font-serif tracking-[7px] text-[#29271f]">
            RISHI<span className="text-[#ad9165]">.</span>
          </span>

          <span className="text-[9px] tracking-[4px] text-[#8c806c] mt-1">
            INTERIOR & ALL
          </span>
        </Link>

        {/* DESKTOP NAVBAR */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="text-sm text-[#49453d] hover:text-[#a48658] transition duration-300"
            >
              {item.name}
            </Link>
          ))}

          {/* ALL WORK DROPDOWN */}
          <div className="relative group">
            <Link
              to="/allwork"
              className="flex items-center gap-2 text-sm text-[#49453d] hover:text-[#a48658] transition duration-300"
            >
              All Work

              <ChevronDown
                size={15}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </Link>

            {/* DROPDOWN MENU */}
            <div className="absolute top-full left-0 pt-5 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="bg-white shadow-xl border border-[#ded8cb] py-3 max-h-[420px] overflow-y-auto">
                {allWorkLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="block px-6 py-3 text-sm text-[#49453d] hover:bg-[#f8f6f1] hover:text-[#a48658] transition duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-2">
          {/* WHATSAPP CHAT */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 text-xs font-semibold tracking-wide hover:bg-[#1ebe5d] transition duration-300 rounded-sm"
          >
            <MessageCircle size={17} />
            WHATSAPP
          </a>

          {/* CALL NOW */}
          <a
            href={callLink}
            aria-label="Call us"
            className="flex items-center gap-2 bg-[#29271f] text-white px-4 py-3 text-xs font-semibold tracking-wide hover:bg-[#a48658] transition duration-300 rounded-sm"
          >
            <Phone size={16} />
            CALL NOW
          </a>

          {/* LET'S TALK */}
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-[#ad9165] text-white px-4 py-3 text-xs tracking-wide hover:bg-[#29271f] transition duration-300 rounded-sm"
          >
            LET'S TALK
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden text-[#29271f]"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="xl:hidden bg-[#f8f6f1] border-t border-[#ded8cb] px-6 py-8 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-serif text-[#29271f]"
              >
                {item.name}
              </Link>
            ))}

            {/* MOBILE ALL WORK */}
            <div>
              <button
                onClick={() => setAllWorkOpen(!allWorkOpen)}
                className="w-full flex items-center justify-between text-lg font-serif text-[#29271f]"
              >
                All Work

                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    allWorkOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {allWorkOpen && (
                <div className="mt-4 ml-3 flex flex-col gap-4 border-l border-[#ded8cb] pl-4">
                  {allWorkLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.link}
                      onClick={() => {
                        setMenuOpen(false);
                        setAllWorkOpen(false);
                      }}
                      className="text-sm text-[#49453d] hover:text-[#a48658]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* MOBILE WHATSAPP */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 bg-[#25D366] py-4 font-semibold text-white"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            {/* MOBILE CALL */}
            <a
              href={callLink}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-3 bg-[#29271f] py-4 font-semibold text-white"
            >
              <Phone size={20} />
              Call Now
            </a>

            {/* MOBILE CONTACT */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#ad9165] py-4 text-white"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

















































