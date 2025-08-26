"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Section8 = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={ref} className="mt-30 min-h-screen overflow-hidden">
            <motion.div
                className="pt-30"
                style={{
                    y: backgroundPositionY,
                }}
            >
                <motion.div
                    className="relative min-h-screen w-full"
                    style={{
                        backgroundImage: `url("https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg")`,
                        backgroundSize: "cover",
                        backgroundPosition: "bottom",
                    }}
                />
            </motion.div>
        </section>
    );
};

export default Section8;
