"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Section5 = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "50% 50%"],
    });

    const bgPos0 = useTransform(scrollYProgress, [0, 1], ["100% 0%", "0% 0%"]);
    const bgPos1 = useTransform(scrollYProgress, [0.2, 1], ["100% 0%", "0% 0%"]);
    const bgPos2 = useTransform(scrollYProgress, [0.4, 1], ["100% 0%", "0% 0%"]);

    return (
        <section ref={ref} className="min-h-[40vh] flex flex-col justify-center items-center">
            <div className="w-[70%]">
                <motion.p
                    className="flex items-center gap-x-4 ml-[70px] mb-[25px] text-transparent bg-clip-text"
                    style={{
                        backgroundImage: "linear-gradient(to left, #7f7f7f 50%, black 50%)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "200% 100%",
                        backgroundPosition: bgPos0,
                    }}
                >
                    <span className="text-[42px]">{`(`}</span>Event Overview
                    <span className="text-[42px]">{`)`}</span>
                </motion.p>
                <div className="text-[90px] leading-[95px]">
                    <motion.p
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(to left, #7f7f7f 50%, black 50%)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "200% 100%",
                            backgroundPosition: bgPos1,
                        }}
                    >
                        We Want More Than <br />
                        <motion.span
                            className="text-transparent bg-clip-text"
                            style={{
                                backgroundImage: "linear-gradient(to left, #7f7f7f 50%, black 50%)",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "200% 100%",
                                backgroundPosition: bgPos2,
                            }}
                        >
                            Success—We Want Meaning.
                        </motion.span>
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default Section5;
