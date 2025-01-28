'use client'

import { Flex } from "@radix-ui/themes"
import NavLinks from "./NavLinks"

const Navbar = () => {
    return (
        <Flex gap="4">
            <NavLinks />
        </Flex>
    )
}

export default Navbar