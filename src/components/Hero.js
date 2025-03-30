"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Page Wrapper for smooth transitions
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <PageWrapper>
      <section className="bg-blue-50 w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 md:px-10 text-center md:text-left">
        
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-blue-800">
            Logistics Made Simple <br /> with {" "}
            <span className="relative inline-block text-black px-3 py-1 rounded-md">
              BharatLoads
              <span className="absolute inset-x-0 bottom-0 h-1 bg-black opacity-50 rounded-md"></span>
            </span>{" "}
            App
          </h1>

          <p className="text-lg font-medium text-gray-800 mt-2">
            Join BharatLoads to optimize logistics and shape the future.
          </p>

          <p className="text-md text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0 mt-4">
            Experience India’s first map-based load-truck matching platform, seamlessly connecting transporters and truck owners. With advanced technology and a nationwide network, we deliver efficiency, transparency, and growth opportunities for all.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <a
              href="#"
              className="flex items-center bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-md"
            >
              <Image src="/google_play.png" alt="Google Play" width={120} height={50} />
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
            >
              Read More
            </a>
          </div>
        </motion.div>

        {/* Right Side Image with Scroll Animation */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src="/hero-img1.png"
            alt="Truck Image"
            width={600}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto"
          />
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Hero;
