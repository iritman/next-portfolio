'use client'

import {
    FaCss3,
    FaFigma,
    FaHtml5,
    FaJs,
    FaNodeJs,
    FaReact,
} from "react-icons/fa";

import { Box, Container, ScrollArea, Tabs, Text, Tooltip } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";


const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at excepturi odio, quidem nisi commodi. Cum, provident.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Naiem YF"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+1) 123 456 789"
        },
        {
            fieldName: "Experience",
            fieldValue: "20+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "iritman@gmail.com"
        },
        {
            fieldName: "GitHub",
            fieldValue: "github.com/iritman"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Turkish, Persian"
        },
    ]
}

const experience = {
    title: "My experience",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at excepturi odio, quidem nisi commodi. Cum, provident.",
    items: [
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            company: "Web Design Studio",
            position: "Front-End Developer Intern",
            duration: "Summer 2021",
        },
        {
            company: "E-commerce Startup",
            position: "Freelance Web Developer",
            duration: "2020 - 2021",
        },
        {
            company: "Tech Academy",
            position: "Teaching Assistant",
            duration: "2019 - 2020",
        },
        {
            company: "Digital Agency",
            position: "UI/UX Designer",
            duration: "2018 - 2019",
        },
        {
            company: "Software Development Firm",
            position: "Junior Developer",
            duration: "2017 - 2018",
        },
    ]
}

const education = {
    title: "My education",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at excepturi odio, quidem nisi commodi. Cum, provident.",
    items: [
        {
            institution: "Online Course Platform",
            degree: "Full Stack Web Development Bootcamp",
            duration: "2023",
        },
        {
            institution: "Codecademy",
            degree: "Front-end Track",
            duration: "2022",
        },
        {
            institution: "Online Course",
            degree: "Programming Course",
            duration: "2020 - 2021",
        },
        {
            institution: "Tech Institute",
            degree: "Certified Web Developer",
            duration: "2019",
        },
        {
            institution: "Design School",
            degree: "Diploma in Graphic Design",
            duration: "2016 - 2018",
        },
        {
            institution: "Community College",
            degree: "Associate Degree in Computer Science",
            duration: "2014 - 2016",
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione incidunt assumenda adipisci, quaerat quam ipsam temporibus ipsum.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js"
        },
        {
            icon: <FaFigma />,
            name: "Figma"
        },
    ]
}

const ResumePage = () => {
    return (
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
            className="min-h-[80vh] flex  justify-center "
        >
            <Container>
                <Tabs.Root
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-14"
                >
                    <Tabs.List
                        color="cyan"
                        className="flex flex-col gap-2"
                    >
                        <Tabs.Trigger value="experience">Experience</Tabs.Trigger>
                        <Tabs.Trigger value="education">Education</Tabs.Trigger>
                        <Tabs.Trigger value="skills">Skills</Tabs.Trigger>
                        <Tabs.Trigger value="about">About me</Tabs.Trigger>
                    </Tabs.List>

                    <Box pt="3">
                        <Tabs.Content value="experience">
                            <div className="flex flex-col gap-3 text-center xl:text-left">
                                <Text
                                    size="8"
                                    weight="bold"
                                >
                                    {experience.title}
                                </Text>
                                <Text
                                    as="p"
                                    className="max-w-sm text-[var(--color-foreground)] opacity-60 mx-auto xl:mx-0"
                                >
                                    {experience.description}
                                </Text>
                                <ScrollArea
                                    type="auto"
                                    scrollbars="vertical"
                                    style={{ height: 400 }}>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="py-6 px-10 rounded-xl
                                            flex flex-col justify-center items-center
                                            lg:items-start gap-1
                                            bg-[#232329]"
                                            >
                                                <span
                                                    className="text-[var(--highlight)]"
                                                >
                                                    {item.duration}
                                                </span>
                                                <h3
                                                    className="text-xl max-w-80 min-h-14
                                                text-center lg:text-left"
                                                >
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span
                                                        className="w-1 h-1 rounded-full bg-[var(--highlight)]" />
                                                    <Text
                                                        as="p"
                                                        className="text-[var(--color-foreground)] opacity-60">
                                                        {item.company}
                                                    </Text>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </Tabs.Content>

                        <Tabs.Content value="education">
                            <div className="flex flex-col gap-3 text-center xl:text-left">
                                <Text
                                    size="8"
                                    weight="bold"
                                >
                                    {education.title}
                                </Text>
                                <Text
                                    as="p"
                                    className="max-w-sm text-[var(--color-foreground)] opacity-60 mx-auto xl:mx-0"
                                >
                                    {education.description}
                                </Text>
                                <ScrollArea
                                    type="auto"
                                    scrollbars="vertical"
                                    style={{ height: 400 }}>
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="py-6 px-10 rounded-xl
                                            flex flex-col justify-center items-center
                                            lg:items-start gap-1
                                            bg-[#232329]"
                                            >
                                                <span
                                                    className="text-[var(--highlight)]"
                                                >
                                                    {item.duration}
                                                </span>
                                                <h3
                                                    className="text-xl max-w-80 min-h-14
                                                text-center lg:text-left"
                                                >
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span
                                                        className="w-1 h-1 rounded-full bg-[var(--highlight)]" />
                                                    <Text
                                                        as="p"
                                                        className="text-[var(--color-foreground)] opacity-60">
                                                        {item.institution}
                                                    </Text>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </Tabs.Content>

                        <Tabs.Content value="skills">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-3 text-center xl:text-left">
                                    <Text
                                        size="8"
                                        weight="bold"
                                    >
                                        {skills.title}
                                    </Text>
                                    <Text
                                        as="p"
                                        className="max-w-sm text-[var(--color-foreground)] opacity-60 mx-auto xl:mx-0"
                                    >
                                        {skills.description}
                                    </Text>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-8">
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <div className="px-9 py-9 rounded-xl
                                            flex justify-center items-center
                                            group bg-[#232329]">
                                                <Tooltip content={skill.name}>
                                                    <div className="text-6xl transition-all duration-300
                                                group-hover:text-[var(--highlight)]">
                                                        {skill.icon}
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Tabs.Content>

                        <Tabs.Content value="about">
                            <div className="flex flex-col gap-3 text-center xl:text-left">
                                <Text
                                    size="8"
                                    weight="bold"
                                >
                                    {about.title}
                                </Text>
                                <Text
                                    as="p"
                                    className="max-w-sm text-[var(--color-foreground)] opacity-60 mx-auto xl:mx-0"
                                >
                                    {about.description}
                                </Text>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 
                                gap-x-5 gap-y-6
                                max-w-[620px] xl:max-w-max
                                mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-center xl:justify-start
                                        items-center gap-4"
                                        >
                                            <span className="opacity-80">{item.fieldName}</span>
                                            <span className="text-l">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Container>
        </motion.div>
    )
}

export default ResumePage
