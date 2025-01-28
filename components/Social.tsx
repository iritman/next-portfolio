import { Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import {
    FaGithub as GithubIcon,
    FaLinkedinIn as LinkedinIcon,
    FaYoutube as YoutubeIcon,
    FaTwitter as TwitterIcon
} from 'react-icons/fa'

const socials = [
    { icon: <GithubIcon />, path: "" },
    { icon: <LinkedinIcon />, path: "" },
    { icon: <YoutubeIcon />, path: "" },
    { icon: <TwitterIcon />, path: "" },
]

const Social = () => {

    return (
        <Flex gap="6">
            {socials.map((social, index) => (
                <Link
                    key={index}
                    href={social.path}
                    className="w-9 h-9 border border-[var(--highlight)] rounded-full flex justify-center items-center text-[var(--highlight)] text-base hover:bg-[var(--highlight)] hover:text-[var(--color-foreground)] hover:transition-all duration-500">
                    {social.icon}
                </Link>
            ))}
        </Flex>
    )
}

export default Social