export default function Experience() {
  const experiences = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Corp',
      period: 'Jan 2020 - Present',
      description: 'Led a team of developers in creating responsive web applications using React and Node.js.',
    },
    {
      title: 'Web Developer',
      company: 'Digital Solutions Inc.',
      period: 'Jun 2017 - Dec 2019',
      description: 'Developed and maintained client websites using HTML, CSS, and JavaScript.',
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
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{exp.period}</time>
            <p className="mb-4 text-base font-normal text-gray-500">{exp.company}</p>
            <p className="text-base font-normal text-gray-500">{exp.description}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
