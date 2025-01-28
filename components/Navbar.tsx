'use client'

import { Flex } from "@radix-ui/themes"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
]

const Navbar = () => {
    const pathname = usePathname();

    return (
        <Flex gap="4">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={
                        `${link.path === pathname && "text-[var(--highlight)] border-b-2 border-[var(--highlight)]"}
                        capitalize font-medium hover:text-[var(--highlight)] transition-all`}>
                    {link.name}
                </Link>
            ))}
        </Flex>
    )
}

export default Navbar