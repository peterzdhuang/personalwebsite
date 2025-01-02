export default function Resume() {
    return (
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Resume</h2>
        <a 
          href="/path-to-your-resume.pdf" 
          download 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors inline-block w-full text-center"
        >
          Download Resume (PDF)
        </a>
      </div>
    )
  }
  
  