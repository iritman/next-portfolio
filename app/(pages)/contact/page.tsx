"use client";

import {
    Button,
    Container,
    Select,
    Text,
    TextArea,
    TextField
} from '@radix-ui/themes';
import { motion } from "framer-motion";

import {
    FaEnvelope as EnvelopeIcon,
    FaMapMarkerAlt as MarkerIcon,
    FaPhoneAlt as PhoneIcon
} from "react-icons/fa";

const info = [
    {
        icon: <PhoneIcon />,
        title: "Phone",
        description: "(+1) 123 456 789"
    },
    {
        icon: <EnvelopeIcon />,
        title: "Email",
        description: "iritman@gmail.com",
    },
    {
        icon: <MarkerIcon />,
        title: "Address",
        description: "Code Corner, Tech Town 724",
    }
];

const Contact = () => {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 2,
            transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeIn"
            }
        }}
        className="py-6"
    >
        <Container>
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 
                    p-10 bg-[#27272c] 
                    rounded-xl">
                        <Text className="text-4xl text-[var(--highlight)]">
                            Let's work together
                        </Text>

                        <Text
                            as="p"
                            className="opacity-60">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                            nihil sapiente pariatur id totam.
                        </Text>

                        {/* input */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField.Root
                                type="text"
                                placeholder="Firstname"
                                className="input-class" />

                            <TextField.Root
                                type="text"
                                placeholder="Lastname"
                                className="input-class" />

                            <TextField.Root
                                type="email"
                                placeholder="Email address"
                                className="input-class" />

                            <TextField.Root
                                type="tel"
                                placeholder="Phone number"
                                className="input-class" />
                        </div>

                        {/* select */}
                        <Select.Root>
                            <Select.Trigger placeholder='Select a service' />
                            <Select.Content color="cyan">
                                <Select.Item value="web-dev">
                                    Web Development
                                </Select.Item>
                                <Select.Item value="ui-ux-design">
                                    UI/UX Design
                                </Select.Item>
                                <Select.Item value="logo-design">
                                    Logo Design
                                </Select.Item>
                            </Select.Content>
                        </Select.Root>

                        {/* textarea */}
                        <TextArea
                            className='h-48'
                            placeholder="Type your message here..."
                        />

                        {/* submit button */}
                        <Button
                            radius="full"
                            color="cyan"
                            size="3"
                            style={{
                                cursor: "pointer",
                                maxWidth: "10rem"
                            }}
                        >
                            Send message
                        </Button>
                    </form>
                </div>

                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end 
                order-1 xl:order-none 
                mb-6 xl:mb-0">
                    <ul className="flex flex-col gap-8">
                        {info.map((item, index) => {
                            return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="rounded-md
                                    w-14 h-14 xl:w-16 xl:h-16
                                    bg-[#27272c] text-[var(--highlight)]
                                    flex items-center justify-center">
                                        <div className="text-2xl">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <Text as="p" className='opacity-60'>
                                            {item.title}
                                        </Text>
                                        <Text size="4">
                                            {item.description}
                                        </Text>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </Container>
    </motion.div>
};

export default Contact;