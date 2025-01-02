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
      // Add more experiences as needed
    ]
  
    const education = [
      {
        degree: 'Master of Science in Computer Science',
        school: 'Tech University',
        period: '2015 - 2017',
        description: 'Specialized in Web Technologies and Artificial Intelligence.',
      },
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'State University',
        period: '2011 - 2015',
        description: 'Focused on Software Engineering and Database Management.',
      },
      // Add more education entries as needed
    ]
  
    return (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="relative border-l border-gray-200 pl-4 mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg className="w-3 h-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 hover:bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{exp.period}</time>
                <p className="mb-4 text-base font-normal text-gray-500">{exp.company}</p>
                <p className="text-base font-normal text-gray-500">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="relative border-l border-gray-200 pl-4">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-8 ring-white">
                <svg className="w-3 h-3 text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
              </span>
              <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300 hover:bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{edu.period}</time>
                <p className="mb-4 text-base font-normal text-gray-500">{edu.school}</p>
                <p className="text-base font-normal text-gray-500">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  