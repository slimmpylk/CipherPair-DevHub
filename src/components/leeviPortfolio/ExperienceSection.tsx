export default function ExperienceSection() {
    const experiences = [
        {
            date: "07/2020-01/2023",
            title: "Driver",
            highlights: [
                "Delivered cars between car retail stores and/or to customers.",
                "Responded to customer concerns with professionalism and efficiency.",
            ],
        },
        {
            date: "03/2021-08/2022",
            title: "Construction worker",
            description:
                "Worked in construction sites as a general laborer.",
            highlights: [

            ],
        },
        {
            date: "05/2023-08/2023 & 05/2024-08/2024",
            title: "Truck Driver",
            description:
                "Industrial and sewage service truck driver.",
            highlights: [
                "Operated industrial and sewage service trucks.",
            ],
        }
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
