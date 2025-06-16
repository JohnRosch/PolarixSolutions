export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <a href="#home" className="ml-8">
        <img src="/logo.png" alt="Polarix Logo" className="h-12 w-auto" />
      </a>
      <ul className="flex gap-8 text-base font-semibold text-gray-800">
        <li>
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
        </li>
        <li>
          <a href="#team" className="hover:text-blue-600 transition">Team</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </li>
      </ul>
      {/* deleted button at the right part */}
      <a
        href="#contact"
        className="bg-green-800 text-white px-5 py-2 rounded hover:bg-red-900 transition"
      >
        Contact Us
      </a>
    </nav>
  );
}
