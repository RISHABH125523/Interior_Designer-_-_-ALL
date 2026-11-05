import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#29271f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company Details */}
          <div>
            <h2 className="text-2xl font-bold">
              RISHI <span className="text-[#c4a477]">INTERIOR</span>
            </h2>

            <p className="mt-2 text-sm tracking-widest text-gray-400">
              & ALL
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              We design and create beautiful, comfortable, and modern spaces
              according to your lifestyle. Our goal is to make your dream home
              a reality.
            </p>

            <div className="mt-5 flex gap-3">
              <a href="https://www.facebook.com/" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-sm hover:bg-[#c4a477]">
                f
              </a>

              <a href="https://www.instagram.com/" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-sm hover:bg-[#c4a477]">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
              <span className="mt-2 block h-1 w-10 bg-[#c4a477]"></span>
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#c4a477]">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#c4a477]">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-[#c4a477]">
                  Our Services
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="hover:text-[#c4a477]">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#c4a477]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Our Services
              <span className="mt-2 block h-1 w-10 bg-[#c4a477]"></span>
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="/allwork/pop" className="hover:text-[#c4a477]">
                  POP Work
                </Link>
              </li>

              <li>
                <Link to="/allwork/painting" className="hover:text-[#c4a477]">
                  Painting Work
                </Link>
              </li>

              <li>
                <Link to="/allwork/furniture" className="hover:text-[#c4a477]">
                  Furniture Work
                </Link>
              </li>

              <li>
                <Link to="/allwork/false-ceiling" className="hover:text-[#c4a477]">
                  False Ceiling
                </Link>
              </li>

              <li>
                <Link to="/allwork/wallpaper" className="hover:text-[#c4a477]">
                  Wall Paper
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
              <span className="mt-2 block h-1 w-10 bg-[#c4a477]"></span>
            </h3>

            <div className="space-y-4 text-sm text-gray-400">
              <p>
                <span className="mr-2 text-[#c4a477]">Address:</span>
               Mumbai Maharashtra, India
              </p>

              <p>
                <span className="mr-2 text-[#c4a477]">Phone:</span>
                +91  810-883-7805
              </p>

              <p>
                <span className="mr-2 text-[#c4a477]">Email:</span>
                rishabhprajapati573@gmail.com
              </p>

              <p>
                <span className="mr-2 text-[#c4a477]">Timing:</span>
                Mon - Sat, 9 AM - 9 PM
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-block bg-[#c4a477] px-5 py-3 text-sm font-semibold text-[#29271f] transition hover:bg-white"
            >
              Get a Free Quote →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} RISHI INTERIOR & ALL. All Rights Reserved.
          </p>

          <p className="text-xs text-gray-400">
            Designed with love for beautiful spaces.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;