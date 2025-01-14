import DynamicTextFunction from "@/styles/DynamicTextFunction";

export default function DynamicTextForLeeviWrapper() {
    const texts = ["Junior developer", "Intermediate in embedded systems"];

    return <DynamicTextFunction texts={texts} />;
}

