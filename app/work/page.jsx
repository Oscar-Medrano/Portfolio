"use client";

import React, { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { SiGithub } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";

const projectImages = [
  "/Dr. Oscar Medrano Shot 1.webp",
  "/Dr. Oscar Medrano Shot 2.webp",
  "/Dr. Oscar Medrano Shot 3.webp",
  "/Dr. Oscar Medrano Shot 4.webp",
  "/Dr. Oscar Medrano Shot 5.webp",
];

const technologies = [
  "Golang",
  "Vue.js 3",
  "PostgreSQL / Supabase",
  "Tailwind CSS",
  "Firebase Auth",
  "REST API",
];

const technicalHighlights = [
  "RESTful API built with Golang for high performance.",
  "PostgreSQL database with Supabase for reliable data storage.",
  "Modern Vue.js 3 interface with Tailwind CSS.",
  "Clean Architecture pattern for maintainability.",
  "Scalable cloud deployment on Render + Vercel.",
];

const Work = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto max-w-7xl">
        <FadeIn>
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left Column: Gallery (60% = 3 cols) */}
            <div className="lg:col-span-3">
              {/* Main Image */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-transparent mb-4">
                <Image
                  src={projectImages[currentImage]}
                  alt="Dr. Oscar Medrano - Main View"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="thumbnails-mobile-grid sm:flex sm:gap-3 mt-6 sm:mt-8 sm:justify-center px-2">
                {projectImages.map((img, index) => (
                  <div
                    key={index}
                    className={`relative h-20 sm:w-20 sm:h-14 md:w-24 md:h-16 lg:w-28 lg:h-20 ${
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
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 150px"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Technical Info (40% = 2 cols) */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Dr. Oscar Medrano: Fullstack Medical Ecosystem
              </h2>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 sm:px-4 sm:py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A comprehensive clinical management solution designed specifically for medical practices. 
                This system enables patients to book appointments online 24/7, while healthcare providers 
                can efficiently manage their schedules, patient records, and administrative tasks through an intuitive interface.
              </p>

              {/* Technical Highlights */}
              <ul className="list-disc list-outside text-gray-400 pl-5 space-y-2 mb-8">
                {technicalHighlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <a
                  href="https://github.com/Oscar-Medrano/Frontend-Consultorio-Medrano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent-hover transition-colors duration-300 w-full sm:w-auto"
                >
                  <SiGithub className="text-xl" />
                  <span>View Code</span>
                </a>
                <a
                  href="https://doctor-oscar-medrano.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-black transition-colors duration-300 w-full sm:w-auto"
                >
                  <BsArrowUpRight className="text-xl" />
                  <span>Visit Page</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Work;
