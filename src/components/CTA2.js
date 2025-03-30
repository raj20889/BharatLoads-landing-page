"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
  {
    text: "BharatLoads has transformed my logistics business. The app is user-friendly and highly efficient!",
    name: "Rahul Sharma",
    image: "/r1.jpg",
    rating: 5,
  },
  {
    text: "Finding the right trucks is now seamless. My business has grown tremendously!",
    name: "Priya Verma",
    image: "/r2.jpg",
    rating: 4.5,
  },
  {
    text: "An amazing platform! Load matching has never been easier and quicker.",
    name: "Amit Kumar",
    image: "/r3.jpg",
    rating: 5,
  },
];

const CTA2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-16 px-6 md:px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section - Text + Reviews */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-extrabold text-black">
            What Customers Say About{" "}
            <span className="text-pink-600 drop-shadow-md">BharatLoads</span>
          </h2>

          {/* Sliding Review Card */}
          <motion.div
            className="mt-6 bg-gray-100 p-6 rounded-xl shadow-md text-center"
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p className="text-lg text-gray-800 font-semibold">
              &quot;{reviews[currentIndex].text}&quot;
            </p>

            {/* Profile Image, Name & Rating */}
            <div className="flex flex-col items-center mt-4">
              <Image
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                width={50}
                height={50}
                className="rounded-full border border-gray-300"
              />
              <p className="font-bold mt-2">{reviews[currentIndex].name}</p>
              
              {/* Star Rating */}
              <div className="flex mt-1 text-yellow-500">
                {Array.from({ length: Math.floor(reviews[currentIndex].rating) }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                {reviews[currentIndex].rating % 1 !== 0 && <FaStar className="opacity-50" />}
              </div>
            </div>
          </motion.div>

          {/* Slider Navigation Buttons */}
          <div className="flex justify-center mt-4 space-x-4">
            <button onClick={prevReview} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaChevronLeft className="text-gray-600" />
            </button>
            <button onClick={nextReview} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src="/laptop.png"
            alt="Customer Reviews"
            width={500}
            height={350}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTA2;
