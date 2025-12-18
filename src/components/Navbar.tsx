export default function Navbar() {
  return (
    <>
      <header className="flex justify-between items-center p-6 bg-black text-white fixed w-full z-10">
        <h1 className="text-xl font-bold">Neel Prajapati</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-400">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
