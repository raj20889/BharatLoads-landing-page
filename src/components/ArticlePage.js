"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

const PartnershipSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full bg-teal-950 text-center py-10 px-6 flex flex-col items-center"
    >
      {/* Title with Scroll Animation */}
      <motion.h1
        className="text-2xl md:text-4xl font-bold text-white tracking-wide mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Want to <span className="text-pink-500 drop-shadow-md">Join</span> Partnership?
      </motion.h1>

      {/* Flip Animation Container */}
      <motion.div
        className="relative w-[400px] h-[250px] perspective-1000"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className={`absolute w-full h-full rounded-xl shadow-lg overflow-hidden transition-transform duration-700 ease-in-out ${
            isHovered ? "rotate-y-180" : "rotate-y-0"
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side (Image with Hover Effect) */}
          <div className="absolute w-full h-full backface-hidden">
            <motion.div
              className="w-full h-full"
              whileHover={{ rotateY: 10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src="/invest-img.png"
                alt="Partnership"
                width={400}
                height={250}
                className="rounded-xl object-cover brightness-95 shadow-md hover:shadow-xl transition-all duration-500"
              />
            </motion.div>

            {/* Button at Left Bottom with Flip Effect */}
            <motion.a
              href="#"
              className="absolute bottom-4 left-4 bg-pink-500 text-white py-2 px-5 rounded-full text-sm font-semibold shadow-md flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isHovered ? 180 : 0 }}
              transition={{ duration: 0.7 }}
            >
              Join as Investor ➜
            </motion.a>
          </div>

          {/* Back Side (CTA Message) */}
          <div className="absolute w-full h-full bg-pink-500 text-white flex flex-col items-center justify-center rounded-xl backface-hidden rotate-y-180">
            <h3 className="text-lg font-bold">Become a Partner Today!</h3>
            <p className="mt-1 text-sm">Grow your business with us.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PartnershipSection;
