import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Resume from './Resume';

export default function Sidebar() {
  return (
    <aside
      className="w-[30%] bg-gray-100 p-6 flex flex-col justify-between sticky top-0 h-screen overflow-y-auto"
      style={{ fontFamily: 'HelveticaNeue, sans-serif', color: '#000' }}
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1
            className="text-6xl font-bold mb-2"
            style={{ fontFamily: 'CaslonGraphique-Opti, sans-serif' }}
          >
            Peter Huang
          </h1>
          <p className="text-lg text-gray-600">Fullstack Developer</p>
        </div>

        <div>
          <p className="mb-1 text-gray-600">peterzdhuang@gmail.com</p>
          <div className="mt-4 flex items-center space-x-6">
            {/* LinkedIn Link */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline flex items-center"
            >
              <FaLinkedin className="mr-2 text-3xl" /> {/* Icon size increased */}
            </a>
            {/* GitHub Link */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black  hover:underline flex items-center"
            >
              <FaGithub className="mr-2 text-3xl" /> {/* Icon size increased */}
            </a>
          </div>
        </div>
      </div>

      {/* Resume */}
      <div className="mt-auto">
        <Resume />
      </div>
    </aside>
  );
}
