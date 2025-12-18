import profileImg from "../assets/profile.jpg";

export default function Home() {
  return (
    <>
      <section className="h-screen flex flex-col md:flex-row justify-center items-center gap-10  bg-gradient-to-r from-gray-900 via-black to-gray-800" id="home">
        <div className="text-center md:text-left space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-widest mb-4 text-white font-serif">NEEL PRAJAPATI</h2>
          <p className="text-xl md:text-2xl  text-gray-300">Full Stack Developer</p>
          <p className="text-lg md:text-xl text-gray-400 max-w-md">Crafting modern, scalable, and responsive web applications with clean code and best practices.</p>

          <a href="#projects" className="inline-block px-8 py-3 bg-sky-800 text-white font-semibold rounded-lg hover:bg-sky-700 transform hover:scale-105 transition-all duration-300">
            View My Work
          </a>
        </div>
        <div className="flex justify-center md:justify-end">
          <img src={profileImg} alt="" className="w-72 md:w-80 shadow-xl shadow-sky-600  rounded-full" />
        </div>
      </section>
    </>
  );
}
