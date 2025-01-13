import DynamicTextFunction from "@/styles/DynamicTextFunction";

export default function DynamicTextWrapper() {
    const texts = [
        "Programmer (junior)",
        "Ultra Runner",
        "Ethical Hacker (junior)",
        "SOC analyst (junior)",
    ];

    return <DynamicTextFunction texts={texts} />;
}

