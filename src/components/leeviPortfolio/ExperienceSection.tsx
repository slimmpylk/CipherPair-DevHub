export default function ExperienceSection() {
    const experiences = [
        {
            date: "07/2017 - 12/2021",
            title: "Security Officer (Customer Service)",
            highlights: [
                "Patrolled properties for safety.",
                "Ensured a safe and welcoming environment in commercial properties.",
                "Provided exceptional customer service to tenants and visitors.",
                "Proactively managed and maintained security systems.",
                "Prepared detailed reports to enhance operations and processes.",
                "Responded to customer concerns with professionalism and efficiency.",
                "Enforced security policies effectively.",
            ],
        },
        {
            date: "09/2018 - 03/2019",
            title: "Security Chauffeur",
            description:
                "Transported high-ranking officials, including an Armored Brigade General and politicians, across Finland with responsibilities including:",
            highlights: [
                "Ensuring vehicle cleanliness and maintenance.",
                "Providing professional service to high-profile clients.",
                "Monitoring surroundings for safety and comfort during transit.",
                "Maintaining detailed travel logs for seamless operations.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-16">
            <div className="container mx-auto">
                <h2 className="text-center text-2xl font-bold text-orange-500 mb-8">Work Experience</h2>
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-lg mb-8 p-6">
                        <div className="flex flex-col md:flex-row md:items-center">
                            <div className="bg-orange-500 text-white text-center py-4 px-6 rounded-md md:w-1/4">
                                <p className="font-bold">{exp.date}</p>
                                <h5 className="font-semibold">{exp.title}</h5>
                            </div>
                            <div className="md:w-3/4 md:pl-8">
                                <h5 className="text-orange-500 font-bold text-lg mb-4">{exp.title}</h5>
                                {exp.description && <p className="text-white mb-4">{exp.description}</p>}
                                <ul className="list-disc list-inside text-white space-y-2">
                                    {exp.highlights.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
