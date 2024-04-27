import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Content = () => {
	return (
		<>
		<div className="py-4">
		<p>
		I Use <span className="font-bold">Arch</span> Btw 🐧.
		</p>
		<p className="py-4">
		Greetings, I'm <span className="font-bold">Ashish</span>, a developer from Earth. I love to do 
		low-level development  like 
		operating system dev  and 
		 Exploit development, Shellcodes and Reverse Engineering
		. Enjoy Web Dev , CLI and NeoVim  too.
		</p>
		<h2 className="py-4 text-gray-500 opacity-4 underline text-3xl font-bold">
		#Learning
		</h2>
		<p>
		Currently I'm working on <span className="font-bold">freeBSD </span>rc.conf to learn how it works. And unwraping the Underlying Concepts on <span className="font-bold">Machine Learning</span> and Reversing Some Binaries.
		</p>
		<h2 className="py-4 text-gray-500 opacity-4 underline text-3xl font-bold">
		#Intersted		
		</h2>
		<p className="py-2">
		<p>- Operating System Development</p>
		<p>- Exploit development</p>
		<p>- Machine Learning</p>
		</p>

		<h2 className="py-4 text-gray-500 opacity-4 underline text-3xl font-bold">
		#Connect
		</h2>
		<div className=" flex">
		<a className="px-2" href="https://github.com/nevernever69"><FaGithub/></a>
		<a className="px-2" href="https://linkedin.com/in/ashish-baghel-16a073230"><FaLinkedinIn /></a>
		<a className="px-2" href="https://twitter.com/Neverne55768089"><FaXTwitter/></a>
		</div>
		<div className="p-8 ">
		</div>
		</div>
		</>
	)
}
export default Content;
