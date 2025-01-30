'use client'

import { motion } from "framer-motion";
import { useState } from "react";

import { AspectRatio, Container, Tooltip } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import {
    BsArrowUpRight as ArrowIcon,
    BsGithub as GithubIcon
} from "react-icons/bs";
import {
    PiCaretLeftBold as CaretLeftIcon,
    PiCaretRightBold as CaretRightIcon
} from "react-icons/pi";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";

interface SliderButtonsProp {
    containerStyles: string,
    btnStyles: string
}

const WorkSliderButtons = ({ containerStyles, btnStyles }: SliderButtonsProp) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles}>
            <button className={btnStyles}>
                <CaretLeftIcon onClick={() => swiper.slidePrev()} />
            </button>
            <button className={btnStyles}>
                <CaretRightIcon onClick={() => swiper.slideNext()} />
            </button>
        </div>
    );
};

const projects = [
    {
        code: "01",
        category: "Front-end",
        title: "Project 1",
        description: `Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Blanditiis recusandae possimus ut 
        odio aut! Velit, asperiores reprehenderit`,
        stack: [
            { name: "HTML 5" },
            { name: "CSS 3" },
            { name: "JavaScript" }
        ],
        image: "/assets/work/thumb-01.png",
        live: "",
        github: ""
    },
    {
        code: "02",
        category: "Full-stack",
        title: "Project 2",
        description: `Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Blanditiis recusandae possimus ut 
        odio aut! Velit, asperiores reprehenderit`,
        stack: [
            { name: "Next.js" },
            { name: "Tailwind.css" },
            { name: "Node.js" }
        ],
        image: "/assets/work/thumb-02.png",
        live: "",
        github: ""
    },
    {
        code: "03",
        category: "Front-end",
        title: "Project 3",
        description: `Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Blanditiis recusandae possimus ut 
        odio aut! Velit, asperiores reprehenderit`,
        stack: [
            { name: "Next.js" },
            { name: "Tailwind.css" },
        ],
        image: "/assets/work/thumb-03.png",
        live: "",
        github: ""
    }
]

const WorkPage = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper: SwiperClass) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 2,
                transition: {
                    delay: 1,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <Container>
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] 
                    flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-4 h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none 
                            font-extrabold text-transparent text-outline">
                                {project.code}
                            </div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none 
                            text-white group-hover:text-accent 
                            transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>

                            {/* project description */}
                            <p className="opacity-60">{project.description}</p>

                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="text-xL text-[var(--highlight)]">
                                            {item.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* border */}
                            <div className="border border-white/20" />

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                <Link href={project.live}>
                                    <Tooltip content="Live project">
                                        <div className="w-[70px] h-[70px] rounded-full bg-white/5 
                                        flex justify-center items-center group">
                                            <ArrowIcon className="text-white text-3xl 
                                            group-hover:text-[var(--highlight)]
                                            transition-all duration-500" />
                                        </div>
                                    </Tooltip>
                                </Link>

                                {/* github project button */}
                                <Link href={project.github}>
                                    <Tooltip content="Github repository">
                                        <div className="w-[70px] h-[70px] rounded-full bg-white/5 
                                        flex justify-center items-center group">
                                            <GithubIcon className="text-white text-3xl 
                                            group-hover:text-[var(--highlight)]
                                            transition-all duration-500" />
                                        </div>
                                    </Tooltip>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* slider */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="w-full">
                                        <div className="h-[460px] relative group 
                                        flex justify-center items-center
                                        bg-pink-50/20">
                                            {/* image */}
                                            <AspectRatio ratio={16 / 8}>
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    alt=""
                                                    className="object-cover"
                                                />
                                            </AspectRatio>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                            <WorkSliderButtons
                                containerStyles="flex justify-between gap-2 
                                absolute right-0 z-20 w-full
                                bottom-[calc(50%_-_22px)] 
                                xl:bottom-0 xl:w-max xl:justify-none"
                                btnStyles="bg-[var(--highlight)] hover:opacity-70 
                                text-primary text-[22px] 
                                w-[44px] h-[44px] 
                                flex justify-center items-center 
                                transition-all duration-300"
                            />
                        </Swiper>
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}



export default WorkPage