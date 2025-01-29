'use client'

import CountUp from "react-countup";
import { Container, Grid, Flex, Box, Text } from "@radix-ui/themes";

const items = [
    { num: 20, text: 'Years of experience' },
    { num: 24, text: 'Projects completed' },
    { num: 8, text: 'Technologies mastered' },
    { num: 2, text: 'Global invention awards won' },
]

const Stats = () => {
    return (
        <section >
            <Container className="pt-4 pb-12 xl:pt-0 xl:pb-0">
                <Grid columns={{ initial: "2", md: "3", lg: "4" }} gap="6" className="w-full mx-auto">
                    {items.map((item, index) => (
                        <Flex key={index} align="center" justify="center" gap="3" p="4">
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <Box maxWidth="xs">
                                <Text className="leading-snug text-white/80">
                                    {item.text}
                                </Text>
                            </Box>
                        </Flex>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

export default Stats;