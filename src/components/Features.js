"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-10">
      
      {/* Left Content */}
      <motion.div
        className="text-center md:text-left md:w-1/2 flex flex-col justify-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }} // Animates when 20% of the div is visible
      >
        {/* BharatLoads Title in One Line */}
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold text-pink-700"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          BharatLoads: <span className="text-black font-bold">India’s digital marketplace for logistics</span>
        </motion.h2>

        {/* Light Pink Paragraph with Reduced Size */}
        <motion.p
          className="text-sm md:text-base text-pink-500 mt-2 text-center md:text-left max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
        >
          At BharatLoads, we’re building an online marketplace designed to seamlessly match transporters and truck owners. 
          With our innovative map-based load-truck matching system, we simplify logistics, improve efficiency, and unlock 
          new earning opportunities for all.
        </motion.p>
      </motion.div>

      {/* Space Before Features */}
      <div className="mt-8"></div>

      {/* Two Images with Animations */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <motion.div
          className="text-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image src="/feature1.png" alt="Transporter" width={350} height={250} />
          <h3 className="text-xl font-bold text-gray-800 mt-4">01 Transporter</h3>
          <p className="text-gray-600 mt-2 max-w-sm">
            Searching for the right truck to transport your goods has never been easier. With BharatLoads, 
            our platform quickly connects you with reliable truck owners who meet your specific needs.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="text-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image src="/feature2.png" alt="Truck Owner" width={350} height={250} />
          <h3 className="text-xl font-bold text-gray-800 mt-4">02 Truck Owner</h3>
          <p className="text-gray-600 mt-2 max-w-sm">
            No more endless phone calls or time wasted searching for loads. With BharatLoads, 
            our platform streamlines the entire process, quickly matching you with the best loads based on your needs.
          </p>
        </motion.div>
      </div>
      
    </section>
  );
};

export default Hero;
