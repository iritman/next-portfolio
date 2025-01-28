'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { CiMenuFries as MenuIcon, CiSquareChevRight as CloseIcon } from "react-icons/ci"
import Link from 'next/link'
import * as Collapsible from "@radix-ui/react-collapsible";
import Brand from './Brand'
import { Box, Flex } from '@radix-ui/themes'
import { AnimatePresence, motion } from 'framer-motion';

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
]

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
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

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
                        >
                            <Box className="mt-32 mb-40 text-center text-2xl">
                                <Brand />
                            </Box>

                            <Flex gap="4" direction="column" align="center">
                                {links.map((link, index) => (
                                    <Link
                                        href={link.path}
                                        key={index}
                                        onClick={handleLinkClick}
                                        className={
                                            `${link.path === pathname && "text-[var(--highlight)] border-b-2 border-[var(--highlight)]"}
                        capitalize font-medium hover:text-[var(--highlight)] transition-all`}>
                                        {link.name}
                                    </Link>
                                ))}
                            </Flex>
                        </motion.div>
                    </Collapsible.Content>
                )}
            </AnimatePresence>
        </Collapsible.Root>
    )
}

export default MobileNavbar