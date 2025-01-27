import { Button, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <Flex justify="between" align="center">
                <Link href="/">
                    <Text size="6" weight="bold">
                        Naiem
                        <Text size="6" weight="bold" color="cyan">.</Text>
                        YF
                    </Text>
                </Link>

                {/* Desktop nav */}
                <div className='hidden xl:flex items-center gap-8'>
                    <Navbar />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* Mobile nav */}
                <div className='xl:hidden'>
                    Mobile nav
                </div>
            </Flex>
        </header>
    )
}

export default Header