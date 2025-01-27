'use client'

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"

const PageTransition = ({ children }: PropsWithChildren) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: "easeInOut"
                        }
                    }}
                    className="h-screen w-screen fixed left-0 top-0 pointer-events-none bg-[var(--color-background)]"
                // Use -> bg-[var(--color-background)] to access to the current theme background color
                />

                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition