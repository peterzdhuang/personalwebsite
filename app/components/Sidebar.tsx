import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside
      className="w-[30%] bg-gray-100 p-6 flex flex-col items-center justify-between sticky top-0 h-screen overflow-y-auto"
      style={{ fontFamily: 'HelveticaNeue, sans-serif', color: '#000' }}
    >
      <div className="flex flex-col items-center justify-center mb-3 h-full">
        {/* Header */}
        <div className="text-center">
          <h1
            className="text-6xl font-bold"
            style={{ fontFamily: 'CaslonGraphique-Opti, sans-serif' }}
          >
            Peter Huang
          </h1>
          <p className="text-lg text-gray-600">Fullstack Developer</p>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          
          <p className="text-gray-600"><a href="mailto:petezdhuang@gmail.com" target="_blank">petezdhuang@gmail.com</a></p>
          <div className="flex items-center justify-center space-x-6 mt-4">
            {/* LinkedIn Link */}
            <a
              href="https://linkedin.com/in/peterzdhuang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline flex items-center"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            {/* GitHub Link */}
            <a
              href="https://github.com/peterzdhuang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline flex items-center"
            >
              <FaGithub className="text-3xl" />
            </a>
            {/* Resume Link */}
            <a
              href="https://drive.google.com/file/d/1jqqTWdUA-PG9OOFcV6nsNo3hpmDn_oA7/view?usp=sharing" // Update with your resume link
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline flex items-center"
            >
              <img
                src="/icons/cv.png"
                alt="Resume"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
