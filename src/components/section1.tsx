import { detailsLetters, ofWonderLetters, wavesLetters } from "@/constants/title";

const Section1 = () => {
    return (
        <section className="min-h-[80vh] flex flex-col items-center text-center gap-y-12 pt-52">
            <h4 className="text-[140px] leading-none">
                <p className="pb-[18px]">
                    {wavesLetters.map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </p>
                <p>
                    {ofWonderLetters.map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </p>
            </h4>
            <div className="text-xl">
                {detailsLetters.map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </div>
            <button className="h-[60px] w-[176px] bg-[#1e1e1e] text-white text-lg rounded-full">
                Schedule
            </button>
        </section>
    );
};

export default Section1;
