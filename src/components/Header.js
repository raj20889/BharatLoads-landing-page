"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaHome, FaUserTie, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";

// Page Wrapper for full component animation on load
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.4, ease: "easeIn" } }}
    >
      {children}
    </motion.div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <PageWrapper>
      <header className="bg-blue-50 shadow-md w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-8">
          
          {/* LOGO with Animation */}
          <Link href="/">
            <motion.div ref={logoRef} whileTap={{ scale: 0.9 }} className="cursor-pointer">
              <Image src="/bharat-load-logo.png" alt="BharatLoads Logo" width={150} height={60} priority />
            </motion.div>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-blue-900 z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* NAV LINKS */}
          <nav
            className={`md:flex items-center gap-10 fixed md:relative top-0 left-0 h-screen md:h-auto w-3/4 md:w-auto bg-blue-50 md:bg-transparent text-blue-900 md:flex-row flex-col p-6 md:p-0 shadow-lg md:shadow-none rounded-md transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
          >
            {[ 
              { href: "/", icon: <FaHome />, text: "Home" },
              { href: "/about-us", icon: <FaInfoCircle />, text: "About Us" },
              { href: "/investor", icon: <FaUserTie />, text: "Investor", badge: "NEW" },
              { href: "/contact", icon: <FaPhoneAlt />, text: "Contact Us" }
            ].map(({ href, icon, text, badge }, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.1 }} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: index * 0.2, duration: 0.5 } }}
                className="nav-item relative"
              >
                <Link href={href} className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-100 transition-all duration-300">
                  {icon} <span className="text-lg font-semibold ml-2">{text}</span>
                  {badge && <span className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded ml-2">{badge}</span>}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </header>
    </PageWrapper>
  );
};

export default Header;
