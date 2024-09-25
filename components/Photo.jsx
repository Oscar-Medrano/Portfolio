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
            className="w-[298px] h-[298px] xl:w-[555px] xl:h-[555px] rounded-md overflow-hidden relative border border-accent">
                <Image 
                src="/foto.png"
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