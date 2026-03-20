"use client";

import React, { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { BsArrowUpRight } from "react-icons/bs";

const certificatesByCategory = {
  backend: [
    "/1.webp",
    "/2.webp",
    "/3.webp",
    "/4.webp",
  ],
  frontend: [
    "/5.webp",
    "/6.webp",
    "/7.webp",
  ],
  foundations: [
    "/8.webp",
    "/9.webp",
    "/10.webp",
  ],
};

const categories = [
  { id: "backend", label: "Backend & Architecture" },
  { id: "frontend", label: "Frontend & Fullstack" },
  { id: "foundations", label: "Foundations & English" },
];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("backend");
  const [currentImage, setCurrentImage] = useState(0);

  const images = certificatesByCategory[activeCategory];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentImage(0);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left Column: Gallery (60% = 3 cols) */}
            <div className="lg:col-span-3">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-3 py-2 sm:px-4 sm:py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-accent text-black"
                        : "bg-primary text-gray-300 border border-gray-700 hover:border-accent hover:text-accent"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-transparent mb-4">
                <Image
                  src={images[currentImage]}
                  alt={`Certificate ${currentImage + 1}`}
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8 overflow-x-auto pb-2 justify-center px-2">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-20 flex-shrink-0 ${
                        currentImage === index
                          ? "border-2 border-cyan-400 rounded-lg"
                          : "opacity-60 hover:opacity-100 rounded-lg"
                      }`}
                  >
                    <div className="w-full h-full rounded-lg overflow-hidden">
                      <button
                        onClick={() => setCurrentImage(index)}
                        className="relative w-full h-full block"
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 640px) 20vw, (max-width: 768px) 25vw, 150px"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Info (40% = 2 cols) */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Lifelong Learning & Technical Mastery
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Since 2021, I have embarked on a rigorous journey of continuous displacement and growth through Platzi, the leading technology education platform in Latin America. What started as a curiosity for code has evolved into a professional mission to build the future of software.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Over the last few years, I have earned more than 100 certifications, meticulously crafting a modern fullstack developer profile. My learning path has been focused on three core pillars:
              </p>

              {/* Learning Pillars */}
              <ul className="list-disc list-outside text-gray-400 pl-5 space-y-2 mb-6">
                <li><span className="text-accent font-medium">Scalable Architecture:</span> Mastering Golang and Node.js to build high-concurrency, secure, and robust backends.</li>
                <li><span className="text-accent font-medium">Modern Frontend Ecosystems:</span> Developing intuitive and reactive user experiences using Vue.js, React, and Next.js.</li>
                <li><span className="text-accent font-medium">Global Communication:</span> Achieving an Advanced English (C1) level to collaborate effectively in international and remote environments.</li>
              </ul>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                For me, software is not just about writing lines of code; it's about solving complex architectural puzzles with clean, maintainable, and business-oriented solutions.
              </p>

              {/* CTA Button */}
              <a
                href="https://platzi.com/p/oscaralfonzomedranoyilalys/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-300 w-full sm:w-fit"
              >
                <BsArrowUpRight className="text-xl" />
                <span>Full certification catalog</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Certificates;
