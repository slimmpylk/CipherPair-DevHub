"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/DynamicText.module.css";

interface DynamicTextProps {
    texts: string[];
}

export default function DynamicTextFunction({ texts }: DynamicTextProps) {
    const [currentText, setCurrentText] = useState<string>(texts[0]);
    const indexRef = useRef<number>(0);
    const dynamicTextRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        const changeText = () => {
            if (dynamicTextRef.current) {
                dynamicTextRef.current.classList.add(styles.flashOut);

                setTimeout(() => {
                    indexRef.current = (indexRef.current + 1) % texts.length;
                    setCurrentText(texts[indexRef.current]);

                    dynamicTextRef.current?.classList.remove(styles.flashOut);
                    dynamicTextRef.current?.classList.add(styles.flashIn);

                    setTimeout(() => {
                        dynamicTextRef.current?.classList.remove(styles.flashIn);
                    }, 500);
                }, 500);
            }
        };

        const interval = setInterval(changeText, 2000);
        return () => clearInterval(interval);
    }, [texts]);

    return (
        <p ref={dynamicTextRef} className="text-lg sm:text-xl text-orange-500 mt-2">
            {currentText}
        </p>
    );
}
