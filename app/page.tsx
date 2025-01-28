import Social from '@/components/Social'
import { Button, Container, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import { FiDownload as DownloadIcon } from 'react-icons/fi'

const HomePage = () => {
  return (
    <section className="h-full">
      <Container>
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <Flex direction="column">
              <Text size="2">Software Engineer</Text>
              <Text size="7">Hello I'm</Text>
              <Text mb="6" size="9" className='text-[var(--highlight)]'>Naiem YF</Text>
              <Text mb="9" className='max-w-[25rem]'>
                I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies
              </Text>

              <div className='flex flex-col xl:flex-row items-center gap-8'>

                <Button color="cyan" radius='full' size="3">
                  <Link href="/">
                    Download CV
                  </Link>
                  <DownloadIcon />
                </Button>

                <div className='mb-8 xl:mb-0'>
                  <Social />
                </div>
              </div>
            </Flex>
          </div>
          <div>photo</div>
        </div>
      </Container>
    </section>
  )
}

export default HomePage