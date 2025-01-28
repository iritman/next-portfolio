'use client'

import * as Collapsible from "@radix-ui/react-collapsible"
import { Box, Flex } from '@radix-ui/themes'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { CiSquareChevRight as CloseIcon, CiMenuFries as MenuIcon } from "react-icons/ci"
import Brand from './Brand'
import NavLinks from './NavLinks'

const sidebarVariants = {
    open: {
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
        x: "100%",
        transition: { type: "spring", stiffness: 300, damping: 30 },
    },
};

const MobileNavbar = () => {
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null); // تنظیم نوع Ref

    // Handle clicking outside of the sidebar
    const handleOutsideClick = (e: MouseEvent) => { // تعیین نوع MouseEvent
        if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
            setOpen(false); // Close sidebar if clicked outside
        }
    };

    // Adding event listener for clicks outside the sidebar
    React.useEffect(() => {
        if (open) {
            document.addEventListener('click', handleOutsideClick);
        } else {
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [open]);

    const handleLinkClick = () => {
        setOpen(false);  // بستن sidebar بعد از کلیک روی لینک
    };

    return (
        <Collapsible.Root open={open} onOpenChange={setOpen}>
            {/* Trigger Button */}
            <Collapsible.Trigger>
                {open ? (
                    <CloseIcon className="fixed top-12 right-4 z-20 w-6 h-6 text-[var(--highlight)]" />
                ) : (
                    <MenuIcon className="w-6 h-6 text-[var(--highlight)]" />
                )}
            </Collapsible.Trigger>

            {/* Sidebar */}
            <AnimatePresence initial={false}>
                {open && (
                    <Collapsible.Content asChild forceMount>
                        <motion.div
                            className="fixed inset-y-0 right-0 z-10 w-64 bg-gray-800 shadow-lg"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sidebarVariants}
                            ref={sidebarRef} // Attach ref to the sidebar
                        >
                            <Box className="mt-32 mb-40 text-center text-2xl">
                                <Brand />
                            </Box>

                            <Flex gap="4" direction="column" align="center">
                                <NavLinks onClick={handleLinkClick} />
                            </Flex>
                        </motion.div>
                    </Collapsible.Content>
                )}
            </AnimatePresence>
        </Collapsible.Root>
    )
}

export default MobileNavbar