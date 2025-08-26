"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Section3 = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end end"],
    });

    const bgPos0 = useTransform(scrollYProgress, [0, 1], ["100% 0%", "0% 0%"]);
    const bgPos1 = useTransform(scrollYProgress, [0.2, 1], ["100% 0%", "0% 0%"]);
    const bgPos2 = useTransform(scrollYProgress, [0.4, 1], ["100% 0%", "0% 0%"]);
    const bgPos3 = useTransform(scrollYProgress, [0.6, 1], ["100% 0%", "0% 0%"]);

    return (
        <section ref={ref} className="min-h-screen grid place-items-center">
            <div className="w-[60%]">
                <motion.p
                    className="flex items-center gap-x-4 ml-[70px] mb-[25px] text-transparent bg-clip-text"
                    style={{
                        backgroundImage: "linear-gradient(to right, black 50%, #7f7f7f 50%)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "200% 100%",
                        backgroundPosition: bgPos0,
                    }}
                >
                    <span className="text-[42px]">{`(`}</span>Midyear Conference 2025
                    <span className="text-[42px]">{`)`}</span>
                </motion.p>
                <div className="text-[90px] leading-[95px]">
                    <motion.p
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(to right, black 50%, #7f7f7f 50%)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "200% 100%",
                            backgroundPosition: bgPos1,
                        }}
                    >
                        <span className="text-[#40e0d0]">W</span>aves{" "}
                        <span className="text-[#40e0d0]">O</span>f{" "}
                        <span className="text-[#40e0d0]">W</span>onder.
                    </motion.p>
                    <motion.p
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(to right, black 50%, #7f7f7f 50%)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "200% 100%",
                            backgroundPosition: bgPos2,
                        }}
                    >
                        One Journey.
                    </motion.p>
                    <motion.p
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(to right, black 50%, #7f7f7f 50%)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "200% 100%",
                            backgroundPosition: bgPos3,
                        }}
                    >
                        Infinite Possibilities.
                    </motion.p>
                </div>

                <div className="grid grid-cols-3 items-center mt-9">
                    <Image
                        src={
                            "https://dkthealth.com.ph/midcon2025/assets/img/home-03/about/ab-shape-img.png"
                        }
                        width={140}
                        height={140}
                        alt="shape"
                        className="col-span-1 justify-self-center animate-rotate"
                    />
                    <div className="font-syne text-lg space-y-7 col-span-2 pr-[230px]">
                        <p>
                            "Waves of Wonder" captures the essence of continuous growth, synergy,
                            and adaptability in a constantly evolving environment.
                        </p>
                        <p>
                            Like the tide, we embrace change, ride the highs and lows together, and
                            discover the treasures of unity and innovation along the way.
                        </p>
                        <p>
                            Anchored in DKT’s mission, this theme symbolizes our collective journey
                            toward progress while celebrating the power of connection,
                            sustainability, and purposeful transformation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section3;
