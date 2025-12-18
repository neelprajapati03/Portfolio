import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Neel Prajapati</span>. All rights reserved.
        </p>

        {/* Center */}
        <p className="text-sm text-gray-400">
          Built with <span className="text-blue-500 font-medium">React</span> & <span className="text-blue-500 font-medium">Tailwind CSS</span>
        </p>

        {/* Right (Social Links) */}
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" className="hover:text-white transition border border-white rounded-full py-2 px-2">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" className="hover:text-white transition border border-white rounded-full py-2 px-2">
            <LinkedinIcon />
          </a>
          <a href="mailto:your@email.com" className="hover:text-white transition border border-white rounded-full py-2 px-2">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
