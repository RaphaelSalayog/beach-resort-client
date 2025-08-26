"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Section4 = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end end"],
    });

    // Animate from 30% to 95% width as user scrolls
    const width = useTransform(scrollYProgress, [0, 1], ["95%", "70%"]);
    const height = useTransform(scrollYProgress, [0, 1], ["850px", "650px"]);

    return (
        <section ref={ref} className="min-h-[200vh] flex justify-center">
            <motion.div
                style={{ width, height }}
                className="sticky top-[120px] rounded-xl overflow-hidden"
            >
                <video
                    src="/beach-resort.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
};

export default Section4;
