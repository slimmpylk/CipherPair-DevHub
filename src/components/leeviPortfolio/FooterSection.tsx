import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function FooterSection() {
    return (
        <footer className="footer bg-black text-center py-6">
            <p className="text-white mb-6">Connect with me:</p>
            <div className="flex justify-center space-x-6">
                <a
                    href="https://github.com/leeviekd"
                    className="text-orange-500 hover:text-white text-5xl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub/>
                </a>
                {/* <a
                    href="https://www.linkedin.com/"
                    className="text-orange-500 hover:text-white text-5xl"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin/>
                </a> */}
            </div>
            <div className="container mx-auto">
                <Link href="/">
                    <button className="mt-8 px-6 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600">
                        Back to Homepage
                    </button>
                    <p className="text-sm text-gray-400">© 2024 Slimmpylk. All rights reserved.</p>
                </Link>
            </div>
        </footer>
    );
}
