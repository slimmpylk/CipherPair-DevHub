export default function AboutSection() {
    return (
        <section id="about" className="bg-black text-white py-16">
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 text-center">
                <h2 className="title text-2xl sm:text-3xl font-bold mb-8">About Me</h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-10">
                        Hello! I'm Samuli, an ultra-runner, junior embedded device programmer, and aspiring cybersecurity specialist from Finland.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-10">
                        In my free time, I love pushing my limits through running—it’s the perfect way to balance out all the sitting and screen time.
                        At the same time, I’m constantly working on improving my IT skills to become a true professional. My programming journey started
                        with my academic studies and has grown through personal projects that challenge and inspire me.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        What drives me even further is my passion for ethical hacking. I'm currently immersing myself in this dynamic field, eager to master
                        its intricacies while continuously advancing my technical expertise.
                    </p>
                </div>
            </div>
        </section>
    );
}
