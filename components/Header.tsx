import { Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white bg-pink-50/20">
            <Link href="/">
                <Text size="6" weight="bold">
                    Naiem
                    <Text size="6" weight="bold" color="cyan">.</Text>
                    YF
                </Text>
            </Link>
        </header>
    )
}

export default Header