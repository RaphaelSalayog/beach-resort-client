"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Section7 = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const translateLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const translateRight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={ref} className="min-h-[250vh] flex flex-col items-center pb-48">
            <motion.div className="sticky top-[200px] w-1/4 flex flex-col items-center text-center rounded-xl leading-[95px] mt-[170px]">
                <motion.div
                    style={{ translateX: translateRight }}
                    className="absolute h-[120%] w-[120%] rounded-xl bg-red-500 translate-x-10 rotate-2 z-10"
                />
                <motion.div
                    style={{ translateX: translateLeft }}
                    className="absolute h-[120%] w-[120%] rounded-xl bg-black -translate-x-10 -rotate-2 z-10"
                />

                <p className="text-lg mb-30">MID-CON 2025</p>
                <p className="text-[90px] mb-7">
                    Schedule
                    <br />
                    Overview
                </p>
                <button className="border border-neutral-300 rounded-full text-sm px-6 py-1 font-bold mb-22">
                    See More
                </button>
                <span
                    style={{
                        background:
                            "linear-gradient(90deg, rgb(255 207 139 / 70%) 0%, rgb(0 248 212 / 70%) 50%, rgb(73 171 255 / 70%) 100%)",
                    }}
                    className="block w-2/4 h-5 rounded-full"
                />
            </motion.div>
        </section>
    );
};

export default Section7;
