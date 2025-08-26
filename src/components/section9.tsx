import Link from "next/link";

const Section9 = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-y-9 overflow-hidden font-syne">
            <p className="text-[70px] font-semibold">About the Venue</p>
            <div className="grid grid-cols-5 w-4/6">
                <div className="relative h-full col-span-2 transform -rotate-12">
                    <div className="bg-green-500 w-8/12 h-full" />
                    <div className="absolute -bottom-11 right-14 bg-red-500 w-2/4 h-7/12 transform rotate-18" />
                </div>
                <div className="space-y-8 text-lg p-10 col-span-2">
                    <p className="font-bold">Henann Resort, Alona Beach, Bohol</p>
                    <p>
                        The biggest beach resort in Panglao Island, Bohol sits on a lush 6.5 hectare
                        property on the pristine shores of Alona Beach. Upon arriving at the resort,
                        beautifully designed structures and warm, open spaces will welcome you to
                        begin your most unforgettable Bohol trip.
                    </p>
                    <p>
                        The Coastal elements of the interiors give out a relaxing vibe, immediately
                        preparing you for a tranquil stay. Continuing the Henann tradition of making
                        it worth your stay.
                    </p>
                </div>
                <div
                    style={{
                        background:
                            "linear-gradient(90deg, rgb(255 207 139 / 70%) 0%, rgb(0 248 212 / 70%) 50%, rgb(73 171 255 / 70%) 100%)",
                    }}
                    className="w-full"
                />
            </div>

            <Link href="/sample" scroll>
                <button className="bg-blue-500 text-white px-4 py-2">Contact Us</button>
            </Link>
        </section>
    );
};

export default Section9;
