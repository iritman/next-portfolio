import { Text } from '@radix-ui/themes'
import Link from 'next/link'

const Brand = () => {
    return (
        <Link href="/">
            <Text size="6" weight="bold">
                Naiem
                <Text size="6" weight="bold" className="text-[var(--highlight)]">.</Text>
                YF
            </Text>
        </Link>

    )
}

export default Brand