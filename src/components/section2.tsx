import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

const sample = [
    "https://plus.unsplash.com/premium_photo-1723867356920-8e05009f3499?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJvcGljYWwlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?cs=srgb&dl=pexels-asadphoto-457882.jpg&fm=jpg",
    "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?cs=srgb&dl=pexels-asadphoto-1430677.jpg&fm=jpg",
    "https://pics.freeartbackgrounds.com/fullhd/Beach_Background-1342.jpg",
    "https://www.travelandleisure.com/thmb/vYbYnq4RcOc5_ALMXoU75EiLy2c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/santa-monica-boa-vista-cape-verde-WRLDBEACH0421-0a56c858eeef489aba4178dd7e7c759d.jpg",
    "https://www.shutterstock.com/image-photo/maldives-islands-ocean-tropical-beach-600nw-1938868960.jpg",
    "https://media.cntraveler.com/photos/675f30d1796d888fdbf7c595/16:9/w_2580,c_limit/Bark-Beach-miami_GettyImages-1540357059.jpg",
    "https://www.ukswimwear.com/blog/wp-content/uploads/2023/09/Sunset_in_Grace_Bay_Turks_and_Caicos_Islands-scaled.jpg",
];

const Section2 = () => {
    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 10; // 10 is from gap-x-5 (20px) divided by 2 = 10px at motion.ul

        controls = animate(xTranslation, [0, finalPosition], {
            ease: "linear",
            duration: 40,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width]);

    return (
        <section
            className="relative min-h-[80vh] w-full overflow-hidden 
                            before:absolute before:w-[185%] before:h-[200%] 
                            before:bg-[#ffffff] before:rounded-[100%] 
                            before:-top-10/12 before:left-1/2 
                            before:-translate-x-1/2 
                            before:-translate-y-1/2 
                            before:z-10
                            
                            after:absolute after:w-[185%] after:h-[200%] 
                            after:bg-[#ffffff] after:rounded-[100%] 
                            after:-bottom-[283.3333%] after:left-1/2 
                            after:-translate-x-1/2 
                            after:-translate-y-1/2 
                            after:z-10
                        "
        >
            <motion.ul
                ref={ref}
                className="flex gap-x-5"
                style={{ x: xTranslation, width: "max-content" }}
            >
                {[...sample, ...sample].map((letter, index) => (
                    <li className="relative min-h-[80vh] w-[20vw]" key={index}>
                        <Image src={letter} fill alt="qwe" className="object-cover" priority />
                    </li>
                ))}
            </motion.ul>
        </section>
    );
};

export default Section2;
