import aboutImg from "../assets/about.jpg";
import Projects from "./Projects";

export default function About() {
  return (
    <>
      <section className="bg-gray-100 py-20 px-6" id="about">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img src={aboutImg} alt="" className="w-72 md:w-80 rounded-2xl shadow-xl" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold mb-6 text-gray-900 tracking-wide">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl">
              I’m a passionate <span className="font-semibold text-gray-900">Full-Stack Developer</span> with hands-on experience in building modern web applications using
              <span className="font-semibold"> React, NestJS, Node.js,</span> and
              <span className="font-semibold"> PostgreSQL</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-xl">
              I enjoy transforming ideas into scalable, responsive, and user-friendly digital solutions while following clean code practices and performance-focused development.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-sky-800 text-white rounded-full text-sm">React</span>
              <span className="px-4 py-2 bg-sky-800 text-white rounded-full text-sm">NestJS</span>
              <span className="px-4 py-2 bg-sky-800 text-white rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-sky-800 text-white rounded-full text-sm">PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
