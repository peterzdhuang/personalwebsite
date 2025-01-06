export default function Experience() {
  const experiences = [
    {
      title: 'Web Developer/VP Logistics',
      company: 'Schulich Ignite',
      period: 'Sept 2023 - Present',
      description: [
        'Revamped the team page with a fresh design to enhance UI/UX, improving aesthetics while maintaining the website’s overall performance through targeted updates',
        'Taught 300+ students the fundamentals of data structures, object-oriented programming (OOP), and web development',
      ],
    },
    {
      title: 'Software Intern',
      company: 'CCCCA',
      period: 'May 2024 - Aug 2024',
      description: [
        'Refactored the backend to support new AI translation and audio recording features',
        'streamlining data inputs while enhancing functionality for 500+ catalogue items',
        'Designed and developed a dynamic mobile app for a museum using React Native, improving user engagement, accessibility, and overall visitor experience',
      ],
    },

  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="relative border-l border-gray-200 pl-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
              <svg
                className="w-3 h-3 text-blue-800"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <h3 className="text-sm font-normal" style={{ color: '#5e794e' }}>{exp.company}</h3>
              </div>
              <time
                className="block mb-2 text-sm font-normal leading-none"
                style={{ color: '#32302f' }}
              >
                {exp.period}
              </time>
              <ul className="list-disc pl-5 text-sm font-normal" style={{ color: '#32302f' }}>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
