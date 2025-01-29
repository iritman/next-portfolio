'use client'

import { Container, Text } from "@radix-ui/themes"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowDownRight as ArrowIcon } from "react-icons/bs"

const services = [
    {
        num: "01",
        title: "Web Development",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        href: ""
    },
    {
        num: "02",
        title: "UI/UX Design",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        href: ""
    },
    {
        num: "03",
        title: "Mobile Development",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        href: ""
    },
    {
        num: "04",
        title: "Database Management",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        href: ""
    },
]

const ServicesPage = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <Container>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2,
                            duration: 0.4,
                            ease: "easeIn"
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-14"
                >
                    {services.map((service, index) => (
                        <div key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group">
                            {/* Top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold 
                                text-transparent text-outline group-hover:text-outline-hover
                                transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link
                                    href={service.href}
                                    className="w-[50px] h-[50px] rounded-full 
                                    bg-[var(--background)] group-hover:bg-[var(--highlight)]
                                    transition-all duration-500
                                    flex justify-center items-center hover:-rotate-45"
                                >
                                    <ArrowIcon className="text-[var(--foreground)] text-3xl" />
                                </Link>
                            </div>

                            {/* Title */}
                            <Text
                                size="8"
                                weight="bold"
                                className="transition-all duration-500
                                hover:text-[var(--highlight)]"
                            >
                                {service.title}
                            </Text>

                            {/* Description */}
                            <Text
                                as="p"
                                className="text-[var(--color-foreground)] opacity-60"
                            >
                                {service.description}
                            </Text>

                            {/* Border */}
                            <div className="border-b border-white/20 w-full" />
                        </div>
                    ))}
                </motion.div>
            </Container>
        </section>
    )
}

export default ServicesPage