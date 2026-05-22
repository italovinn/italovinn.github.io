import {useEffect, useRef} from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";

export default function VantaBackground(){
    const vantaRef = useRef(null);

    useEffect(() => {
        const effect = NET({
            el: vantaRef.current,
            THREE,

            color: 0x2563eb,
            backgroundColor: 0x050816,

            points: 12,
            maxDistance: 20,
            spacing: 18,

            mouseControls: true,
            touchControls: true,
            gyroControls: false,
        });

        return () => {
            if(effect) effect.destroy();
        };

    }, []);

    return <div ref={vantaRef} className = "fixed top-0 left-0 w-full h-full z-0" />;
}