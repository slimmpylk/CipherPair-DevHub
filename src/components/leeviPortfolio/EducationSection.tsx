export default function EducationSection() {
    const education = [
        {
            date: "2024 - Present",
            title: "Bachelor of Cybersecurity",
            description:
                "Focusing on penetration testing, SOC, red teaming, and advanced security methodologies, with hands-on experience through Hack The Box.",
        },
        {
            date: "2022 - Present",
            title: "Bachelor of Engineering",
            description:
                "Developing skills in programming and electrical engineering while engaging in collaborative projects at Oulu University of Applied Sciences.",
        },
        {
            date: "2015 - 2018",
            title: "Hyria Vocational School",
            description:
                "Trained in safety protocols, video monitoring, and customer interaction, including creating security protocols still in use today.",
        },
    ];

    return (
        <section id="education" className="py-16">
            <div className="container mx-auto">
                <h2 className="text-center text-2xl font-bold text-orange-500 mb-8">Education</h2>
                <div className="grid grid-cols-1 gap-8">
                    {education.map((edu, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6">
                            <div className="flex flex-col md:flex-row md:items-center">
                                <div className="bg-orange-500 text-white text-center py-4 px-6 rounded-md md:w-1/4">
                                    <p className="font-bold">{edu.date}</p>
                                    <h5 className="font-semibold">{edu.title}</h5>
                                </div>
                                <div className="md:w-3/4 md:pl-8">
                                    <h5 className="text-orange-500 font-bold text-lg mb-4">{edu.title}</h5>
                                    <p className="text-white">{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
