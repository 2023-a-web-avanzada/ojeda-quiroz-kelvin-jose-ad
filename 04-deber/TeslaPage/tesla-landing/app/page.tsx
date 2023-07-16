'use client'
import React, {useEffect, useRef, useState} from "react";

import LandingHeader from "@/app/components/LandingHeader";
import HeroSection from "@/app/components/HeroSection";
import ChargeSection from "@/app/components/ChargeSection";
import {handleSmoothScroll} from "next/dist/shared/lib/router/utils/handle-smooth-scroll";

export default function Page() {
    const [headerTextColor, setHeaderTextColor] = useState("white");
    const chargeSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const isChargeSectionVisible = entries[0].isIntersecting;
            setHeaderTextColor(isChargeSectionVisible ? "black" : "white");
        });

        if (chargeSectionRef.current) {
            observer.observe(chargeSectionRef.current);
        }

        return () => {
            if (chargeSectionRef.current) {
                observer.unobserve(chargeSectionRef.current);
            }
        };
    }, []);



    return (
        <>
            <LandingHeader textColor={headerTextColor}/>
            <main className={"snap-y snap-mandatory relative w-full h-screen overflow-auto scroll-auto"}>

                <div className={"snap-center"}>
                    <HeroSection/>
                </div>
                <div className={"snap-center"} ref={chargeSectionRef}>
                    <ChargeSection/>
                </div>
            </main>
        </>

    )
}
