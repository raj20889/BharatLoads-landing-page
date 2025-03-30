"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6 } },
};

const CTA = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left Side Image with Scroll Animation */}
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }} // Animates when 30% of the div is visible
        >
          <Image
            src="/truck-imag.png"
            alt="Map Matching Feature"
            width={500}
            height={350}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right Side Content with Scroll Animations */}
        <div className="md:w-1/2 text-center md:text-left">
          
          <motion.h2
            className="text-3xl font-extrabold text-pink-700"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            Effortless Load Matching:{" "}
            <span className="text-black font-bold">With Just One Tap On The Map</span>
          </motion.h2>

          <motion.p
            className="text-md text-gray-700 mt-4 max-w-md"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Finding the right load or truck is now as easy as tapping a map. With BharatLoads, 
            our innovative map-based system ensures instant, accurate matches with just one tap.
          </motion.p>

          <motion.p
            className="text-md text-gray-700 mt-4 max-w-md font-semibold"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            FIND LOAD WITH JUST ONE TAP ON THE MAP. Simplify your logistics, save time, 
            maximize profits, and focus on growing your business.
          </motion.p>

          {/* Download App Button & Playstore Image with Animation */}
          <motion.div
            className="mt-6"
            variants={buttonVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <a
              href="#"
              className="bg-pink-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-all duration-300"
            >
              📲 Download BharatLoads App
            </a>

            {/* Google Playstore Image */}
            <motion.div
              className="mt-4"
              variants={buttonVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image 
                src="/google_play.png" 
                alt="Google Playstore" 
                width={180} 
                height={50} 
                className="mx-auto md:mx-0"
              />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default CTA;
