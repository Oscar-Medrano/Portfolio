"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return <div className="w-full h-full relative">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}
        >
            {/*foto.png*/}
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] rounded-md overflow-hidden relative border border-accent">
                <Image 
                src="/foto.jpg"
                priority
                quality={100}
                alt=""
                layout="fill"
                objectFit="cover"
                />
            </motion.div>
        </motion.div>
    </div>
}

export default Photo;