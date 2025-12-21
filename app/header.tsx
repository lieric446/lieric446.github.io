import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="custom-container mb-10">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <img 
              src="pfp.jpg"
              alt="Eric Li"
              width={80}
              height={80}
            />
            <span className="ml-2 text-xl font-bold text-gray-800">Eric Li</span>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
            <Link href="/notes" className="text-gray-700 hover:text-blue-600">Notes</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
