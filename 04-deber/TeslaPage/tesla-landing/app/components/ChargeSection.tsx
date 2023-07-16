import React from "react";

export default function Page() {
    return (
        <section className={"bg-black h-screen w-screen text-center  overflow-hidden text-black relative"}
        data-header-color={"black"}
        >
            <div className={"z-30 relative h-full flex flex-col"}>
                <header className={""}>
                    <h2 className={"text-black pt-40 text-5xl font-medium"}>Model Y</h2>
                    <p className={"text-back text-base"}>Schedule a Demo Drive Today</p>

                </header>
                <footer className={"flex flex-col flex-grow flex-nowrap justify-end pb-14"}>
                    <div className={'flex mx-auto gap-x-2'}>
                        <a className={"border-2 border-white bg-white rounded font-medium text-black px-20 py-2 inline-block hover:bg-black hover:text-white hover:border-black transition-colors duration-300"}
                           href="">Order Now</a>
                        <a className={"border-2 border-white bg-white/5 backdrop-blur-sm rounded font-medium text-white px-20 py-2 inline-block hover:bg-white hover:text-black transition-colors duration-300"}
                           href="">Demo Drive</a>
                    </div>
                </footer>
            </div>


            <div className={"absolute top-0 bottom-0 h-full w-full z-10"} suppressHydrationWarning={true}>
                <img className={"object-center object-cover h-full w-full"} src={"model-y.avif"}></img>
            </div>
        </section>
    )
}