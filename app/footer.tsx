import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Footer() {
  return (
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
