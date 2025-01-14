export default function EducationSection() {
    const education = [
        {
            date: "2018 - 2021",
            title: "High school",
            description:
                "Graduated with EEMCCB grades, focusing on languages and psychology.",
        },
        {
            date: "2021-2022",
            title: "Truck driver training in Finnish Air Force",
            description:
                "Professional qualification in driving trucks and operating heavy machinery.",
        },
        {
            date: "2022-present",
            title: "Bachelor of Engineering in Information Technology",
            description:
                "Currently studying at the Oulu University of Applied Sciences.",
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
