"use client";

import { useEffect } from "react";

interface SkillBarProps {
    skill: string;
    level: number; // Skill level as a percentage
}

export default function SkillBar({ skill, level }: SkillBarProps) {
    useEffect(() => {
        const progressBar = document.querySelector(`.progress-bar[data-skill="${skill}"]`) as HTMLElement;
        if (progressBar) {
            progressBar.style.width = `${level}%`;
        }
    }, [skill, level]);

    return (
        <div className="mb-6">
            <span className="text-white block mb-2">{skill}</span>
            <div className="w-full bg-gray-800 rounded h-3">
                <div
                    className="progress-bar bg-orange-500 h-full rounded"
                    style={{ width: `${level}%` }}
                    data-skill={skill}
                ></div>
            </div>
        </div>
    );
}
