import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
    // <footer className="bg-gray-50 border-t border-gray-200">
    //   <div className="max-w-7xl mx-auto px-4 py-8 md:flex md:items-center md:justify-between">
        
    //     {/* Logo or Brand Name */}
    //     <div className="flex justify-center md:order-2">
    //       <Link href="/" className="text-gray-600 hover:text-blue-600 font-semibold text-lg">
    //         BrandName
    //       </Link>
    //     </div>

    //     {/* Navigation Links */}
    //     <div className="mt-8 md:mt-0 md:order-1">
    //       <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
    //         <li><Link href="/about" className="hover:underline">About</Link></li>
    //         <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
    //         <li><Link href="/terms" className="hover:underline">Terms</Link></li>
    //         <li><Link href="/contact" className="hover:underline">Contact</Link></li>
    //       </ul>
    //     </div>

    //     {/* Copyright Section */}
    //     <div className="mt-8 md:mt-0 md:order-3">
    //       <p className="text-center text-sm text-gray-400">
    //         &copy; {new Date().getFullYear()} BrandName, Inc. All rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="fixed bottom-0 left-0 z-50 w-full p-4 bg-gray-200">
        <div className="flex justify-center items-center gap-5">
            <a href='mailto:lieric446@gmail.com' target='_blank'>
                <AiOutlineMail size={50} className="mx-auto text-gray-500"/>
            </a>
            <a href='https://github.com/lieric446/' target='_blank'>
                <AiFillGithub size={50} className="mx-auto text-black"/>
            </a>
            <a href='https://www.linkedin.com/in/ericli0721/' target='_blank'>
                <AiFillLinkedin size={50} className="mx-auto text-blue-600"/>
            </a>
        </div>
    </footer>
  );
};
