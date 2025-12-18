const projects = [
  {
    name: "Travel Planning App",
    description: "A full-stack travel planning application with authentication, API integrations, and a responsive user experience.",
    tech: ["React", "NestJS", "PostgreSQL", "Tailwind"],
    demo: "#",
    github: "#",
    image: "src/assets/about.jpg",
  },
  {
    name: "Task Management App",
    description: "A project and task management system featuring drag-and-drop functionality and clean UI.",
    tech: ["React", "DnD Kit", "JSON Storage", "Tailwind"],
    demo: "#",
    github: "#",
    image: "/assets/tasks.png",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-800" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-white font-semibold text-center mb-16 tracking-wide">Projects</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div key={i} className="group bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-56 object-cover " />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demo} className="px-5 py-2 bg-sky-800 text-white rounded-lg font-medium  hover:bg-sky-700 transition">
                    Demo
                  </a>
                  <a href={project.github} className="px-5 py-2 border border-gray-500 text-gray-200 rounded-lg font-medium hover:bg-gray-900 transition">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
