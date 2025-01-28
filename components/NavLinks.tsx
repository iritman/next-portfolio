'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

const NavLinks = ({ onClick }: Props) => {
    const pathname = usePathname();

    return (
        <>
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    onClick={onClick}
                    className={
                        `${link.path === pathname && "text-[var(--highlight)] border-b-2 border-[var(--highlight)]"}
                        capitalize font-medium hover:text-[var(--highlight)] transition-all`}>
                    {link.name}
                </Link>
            ))}
        </>
    )
}

export default NavLinks