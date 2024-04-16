import Sidebar from './Sidebar.jsx'
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom';
import CSheet from './Sheet.jsx'
const Bottombar = () => {
	return(
		<>
		<Sidebar/>
		<div className="flex justify-evenly py-2 font-bold">
		<CSheet/>
		<button><Link to='/'><Icon icon="ci:house-02" width="1.2rem" height="1.2rem"  className="hover:text-red-600" /></Link></button>
		<button><Link to='/blog'><Icon icon="ci:chevron-right" width="1.2rem" height="1.2rem"  className="hover:text-red-600" /></Link></button>
		</div>
		</>
	)
}
export default Bottombar;
