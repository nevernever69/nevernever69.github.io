import {Link} from 'react-router-dom';
import {ModeToggle} from '../components//mode-toggle.jsx'

const Navbar = () => {
	return (
		<>
		<div className="flex justify-between">
		<h4 className="font-bold font-indie text-3xl hover:text-gray-500"><Link to='./'>Never</Link></h4>
		<div className="flex text-2xl">
		<ModeToggle/>
		<p className="px-4 hover:text-slate-600 radius-md"><Link to='/blog'>Blog</Link></p>
		<p className="px-4 hover:text-slate-600 radius-md"><Link to='/'> About</Link></p>
		</div>
		</div>
		</>
	)
}
export default Navbar;
