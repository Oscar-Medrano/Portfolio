"use client";

import { BsArrowRight } from 'react-icons/bs';
import Link from "next/link";
import { motion } from 'framer-motion';

const services = [
    {
        num:'01',
        title:'Web Developer',
        description: "As a skilled web developer, I specialize in crafting visually stunning, user-centered websites that seamlessly blend aesthetics and functionality. With a deep understanding of HTML, CSS, JavaScript, and modern frameworks like Vite, Next.js, and React, I deliver high-performance, responsive web solutions tailored to meet your unique business objectives.",
        href: '/summary',
    },
    {
        num:'02',
        title:'Portfolio Designer',
        description: "A website portfolio is your digital storefront. It's the first impression potential clients have of your work. As a portfolio designer, I specialize in creating stunning, functional, and SEO-friendly portfolios that showcase your unique skills and attract your ideal clients.",
        href: '/summary',
    }
]

const Services = () => {
    return (
      <section className="min-h-[80vh]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 gap-[50px] services">
            {services.map((service, index) => (
              <div key={index} className="card group">  {/* Agregamos la clase 'card' */}
                <div className="card-body p-6">  {/* Creamos un contenedor para el contenido */}
                        {/*Top */}
                        <div className="w-full flex justify-between items-center mb-7">
                            <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                                {service.num}
                            </div>
                            <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center">
                                <BsArrowRight className="text-primary text-4xl"/>
                            </Link>
                        </div>
                            {/*Title */}
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 mb-5'>
                            {service.title}
                        </h2>
                            {/*Description*/}
                        <p className='text-white/60 text-xl mb-2'>{service.description}</p>
                        <div className="border-b border-white/20 w-full"></div>
                </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;