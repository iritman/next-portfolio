import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import Brand from './Brand'
import MobileNavbar from './MobileNavbar'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <Flex justify="between" align="center">
                <Brand />

                {/* Desktop nav */}
                <div className='hidden xl:flex items-center gap-8'>
                    <Navbar />
                    <Button color="cyan" radius="full">
                        <Link href="/contact">
                            Hire me
                        </Link>
                    </Button>
                </div>

                {/* Mobile nav */}
                <div className='xl:hidden'>
                    <MobileNavbar />
                </div>
            </Flex>
        </header>
    )
}

export default Header