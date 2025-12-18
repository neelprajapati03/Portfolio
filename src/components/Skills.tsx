const skills = {
  frontend: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Material UI"],
  backend: ["Node.js", "NestJS", "Express.js", "REST APIs", "JWT Authentication"],
  database: ["PostgreSQL", "MongoDB", "MySQL"],
  tools: ["Git", "Docker", "Postman", "Vite", "VS Code"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center mb-16 text-gray-900 tracking-wide">Skills & Technologies</h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4 text-green-600">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4 text-purple-600">Database</h3>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-4 text-orange-600">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
