import Icon from '@mdi/react';
import { mdiGithub,  mdiLinkedin, mdiTwitter } from '@mdi/js';
const Content = () => {
	return (
		<>
		<div className=" flex flex-col justify-center text-wrap text-lg py-4">
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
		<div className=" flex ">
		<a className="px-2" href="https://github.com/nevernever69"><Icon path={mdiGithub} size={1} /></a>
		<a className="px-2" href="https://linkedin.com/in/ashish-baghel-16a073230"><Icon path={mdiLinkedin} size={1} /></a>
		<a className="px-2" href="https://twitter.com/Neverne55768089"><Icon path={mdiTwitter} size={1} /></a>
		</div>
		</div>
		</>
	)
}
export default Content;
