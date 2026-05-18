const projects = [
  {
    title: "AI Exam Platform",
    description:
      "Full-stack exam platform with JWT auth, evaluation system, and role-based access.",
    demo: "https://your-demo-link.com",
    github: "https://github.com/fabianxox",
    video: "https://www.youtube.com/embed/y5RpolLnLOA",
  },

  {
    title: "WhatsApp Grocery AI",
    description:
      "AI-powered grocery ordering system using WhatsApp and automation workflows.",
    demo: "https://www.youtube.com/watch?v=y5RpolLnLOA",
    github: "https://github.com/yourgithub/grocery-ai",
    video: "https://www.youtube.com/embed/NAkQVL61BRI",
  },

  {
    title: "Lead Scraper System",
    description:
      "Automated lead scraping pipeline storing business data into PostgreSQL.",
    demo: "https://your-demo-link.com",
    github: "https://github.com/yourgithub/lead-scraper",
    video: "https://www.youtube.com/embed/y5RpolLnLOA",
  },
]

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* HERO */}
        <section className="mb-24">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fabian Dinesh. A
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            I build AI systems, automation tools, scalable backend applications,
            and production-focused SaaS products.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/fabianxox"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-6 py-3 rounded-xl hover:border-gray-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/fabiandinesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-6 py-3 rounded-xl hover:border-gray-500 transition"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* INTRO VIDEO */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">
            Intro Video
          </h2>

          <div className="aspect-video rounded-2xl overflow-hidden border border-gray-800">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/y5RpolLnLOA"
              title="Intro Video"
              allowFullScreen
            />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-24">
          <h2 className="text-3xl font-bold mb-10">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-2xl p-5 hover:border-gray-600 transition"
              >

                {/* PROJECT VIDEO */}
                <div className="aspect-video rounded-xl overflow-hidden mb-5 border border-gray-800">
                  <iframe
                    className="w-full h-full"
                    src={project.video}
                    title={project.title}
                    allowFullScreen
                  />
                </div>

                {/* PROJECT TITLE */}
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                {/* PROJECT DESCRIPTION */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-700 px-4 py-2 rounded-lg hover:border-gray-500 transition"
                  >
                    GitHub
                  </a>

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* CONTACT */}
        <section>
          <h2 className="text-3xl font-bold mb-6">
            Contact
          </h2>

          <p className="text-gray-400 mb-4">
            Open to internships, freelance projects, and AI/backend engineering opportunities.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="fabianxdinesh@gmail.com"
              className="border border-gray-700 px-5 py-3 rounded-xl hover:border-gray-500 transition"
            >
              Email
            </a>

            <a
              href="https://github.com/fabianxox"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-5 py-3 rounded-xl hover:border-gray-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/fabiandinesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-5 py-3 rounded-xl hover:border-gray-500 transition"
            >
              LinkedIn
            </a>

          </div>
        </section>

      </div>
    </div>
  )
}

export default App