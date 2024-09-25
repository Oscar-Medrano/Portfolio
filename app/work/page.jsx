"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { BsArrowRight } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        num: "01",
        title: "Vite-Shop: E-Commerce",
        description: "E-Shop layout with an elegant display of the products.",
        stack:[{name:"JavaScript (JSX)"},{name:"Tailwind CSS"}],
        image: "/thump1.png",
        live:"https://vite-shop.netlify.app/",
        github:"https://github.com/Oscar-Medrano/Vite-Shop"
    },
    {
        num: "02",
        title: "To-Do-Flow",
        description: "Flow directly to your goals with To-Do Flow, keep a detailed record of your tasks",
        stack:[{name:"JavaScript"},{name:"CSS"},{name:"HTML"}],
        image: "/thump2.png",
        live:"https://to-do-flow.netlify.app/",
        github:"https://github.com/Oscar-Medrano/TO-DO-Flow"
    },
]

const Work = () => {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          {/* Loop through projects and render each in a separate card */}
          {projects.map((project, index) => (
            <div key={index} className="mb-10 border border-accent rounded-lg shadow-md overflow-hidden bg-black/50 p-4">
              <div className="flex flex-col xl:flex-row">
                <div className="w-full xl:w-[50%] flex flex-col items-center justify-between order-2 xl:order-none">
                  <div className="flex flex-col gap-[30px] mb-auto">
                    {/* Project details */}
                    <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                      {project.num}
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent-hover transition-all duration-500">
                      <span class="notranslate">{project.title}</span>
                    </h2>
                    <p className="mt-3 mb-2 text-white/70 text-xl">{project.description}</p>
                    <p className="mt-2 text-accent-hover text-xl">Developed with:</p>
                    <ul className="gap-2">
                      {project.stack.map((item, index) => (
                        <li key={index} className="text-xl text-accent">
                          <span class="notranslate">{item.name}</span>
                          {index !== project.stack.length - 1 && ','}
                        </li>
                      ))}
                    </ul>
                {/* Buttons */}
                  <div className="flex justify-start items-center gap-4 mt-auto">
                    {/* Live Project Button */}
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-20 h-20 border border-accent rounded flex justify-center items-center text-accent text-4xl hover:bg-accent hover:text-primary hover:transition-all duration-500">
                            <BsArrowRight />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    {/* GitHub Button */}
                    <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-20 h-20 border border-accent rounded flex justify-center items-center text-accent text-4xl hover:bg-accent hover:text-primary hover:transition-all duration-500">
                            <SiGithub />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>GitHub Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </div>

                </div>
                <div className="w-full xl:w-[50%]">
                <motion.div
                initial={{ opacity: 0 }} // Opacidad inicial de la imagen (oculta)
                animate={{ opacity: 1 }} // Opacidad final de la imagen (visible)
                transition={{ delay: 2, duration: 0.5 }} // Retraso de 2 segundos y duración de 0.5 segundos
                className="h-[640px] relative group flex justify-center items-center bg-pink-50/20"
                >
                    <div className="relative w-full h-full flex-shrink-0">
                        <div className="rounded-lg">
                            <Image 
                            src={project.image} 
                            priority
                            quality={100}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            />
                        </div>
                    </div>
                </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    );
  };
export default Work;