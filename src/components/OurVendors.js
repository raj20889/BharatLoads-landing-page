"use client";

import Image from "next/image";

const brands = [
  "/tata.png",
  "/timken.png",
  "/tatabluescope.png",
  "/housemoving.png",
  "/tata.png",
  "/timken.png",
  "/tatabluescope.png",
  "/housemoving.png",
];

const OurVendors = () => {
  return (
    <section className="w-full bg-gray-100 text-center py-16 px-6 overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-black">Our Vendors</h2>
      
      {/* Description */}
      <p className="text-lg text-pink-500 mt-4">
        Our platform proudly connects with top brand vendors, ensuring quality service and reliable partnerships for seamless operations and growth.
      </p>
      
      {/* Scrolling Brand Logos */}
      <div className="relative w-full overflow-hidden mt-8">
        <div className="flex space-x-12 animate-scroll whitespace-nowrap">
          {brands.map((brand, index) => (
            <div key={index} className="w-24 h-24 flex-shrink-0">
              <Image src={brand} alt="Brand Logo" width={96} height={96} className="rounded-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: 200%;
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurVendors;
