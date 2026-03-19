"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return <div className="w-full h-full relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0, duration: 0.4, ease: "easeIn" },
            }}
        >
            {/*foto.png*/}
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0, duration: 0.4, ease: "easeInOut" },
            }}
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] rounded-md overflow-hidden relative border border-accent">
                <Image 
                src="/foto.jpeg"
                priority
                quality={100}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 2560px) 50vw, 40vw"
                className="object-cover"
                />
            </motion.div>
        </motion.div>
    </div>
}

export default Photo;