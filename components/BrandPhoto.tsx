'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const BrandPhoto = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 1.5,
                        duration: 0.4,
                        ease: "easeInOut"
                    }
                }}>
                {/* Image */}
                <motion.div className="w-[198px] h-[198px] 
    xl:w-[398px] xl:h-[398px] 
    mix-blend-lighten
    absolute">
                    <Image
                        src="/assets/profile.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain rounded-full overflow-hidden"
                    />
                </motion.div>

                {/* Circle */}
                <motion.svg
                    className="w-[200px] xl:w-[406px] h-[200px] xl:h-[406px]"
                    fill="transparent"
                    viewBox="0 0 406 406"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="200"
                        cy="200"
                        r="203"
                        stroke="#52e1fee5"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default BrandPhoto