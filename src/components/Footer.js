"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-[#2e2c4e] border-t-[10px] border-[#3bd1c5] bg-cover bg-center text-white"
      style={{ backgroundImage: "url(/img/footer-bg.png)" }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <Link href="/">
              <Image
                src="/bharat-load-logo.png"
                alt="BharatLoads Logo"
                width={200}
                height={60}
                className="mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
              By seamlessly connecting transporters with truck owners through our
              map-based load-truck matching system, BharatLoads simplifies the
              way logistics operate in India. Join us in shaping the future of
              logistics.
            </p>
            <div className="mt-4">
              <Link href="#">
                <Image
                  src="/google_play.png"
                  alt="Google Play"
                  width={150}
                  height={50}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Middle Section - Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-[#3bd1c5] text-lg" />
              <p className="hover:underline">Jamshedpur, Jharkhand</p>
            </div>
            <p className="mt-2">
              <Link href="mailto:bharatloads@gmail.com" className="flex items-center space-x-2 hover:text-[#3bd1c5] transition-colors duration-300">
                <FaEnvelope className="text-[#3bd1c5] text-lg" />
                <span>bharatloads@gmail.com</span>
              </Link>
            </p>
            <p className="mt-2">
              <Link href="tel:+919693736187" className="flex items-center space-x-2 hover:text-[#3bd1c5] transition-colors duration-300">
                <FaPhone className="text-[#3bd1c5] text-lg" />
                <span>+91-9693736187</span>
              </Link>
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-xl text-gray-400 hover:text-[#3bd1c5] hover:scale-110 transition-all duration-300">
                <FaFacebookF />
              </Link>
              <Link href="#" className="text-xl text-gray-400 hover:text-[#3bd1c5] hover:scale-110 transition-all duration-300">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-xl text-gray-400 hover:text-[#3bd1c5] hover:scale-110 transition-all duration-300">
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Right Section - Menu */}
          <div>
            <h4 className="text-lg font-bold mb-4">Shortcut Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex items-center justify-between group hover:text-[#3bd1c5] transition-all duration-300">
                  Home
                  <span className="flex items-center gap-x-0.5 group-hover:translate-x-1 transition-transform duration-300">
                    <FaArrowRight />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center justify-between group hover:text-[#3bd1c5] transition-all duration-300">
                  About Us
                  <span className="flex items-center gap-x-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    <FaArrowRight />
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center justify-between group hover:text-[#3bd1c5] transition-all duration-300">
                  Contact Us
                  <span className="flex items-center gap-x-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    <FaArrowRight />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between text-sm">
          <p>
            Copyright © 2024 BharatLoads | Website Developed By ❤️
            <Link href="#" className="text-[#3bd1c5] hover:underline transition-all duration-300">
              Mohit Raj
            </Link>
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <Link href="#" className="hover:text-[#3bd1c5] transition-all duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#3bd1c5] transition-all duration-300">Terms & Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
