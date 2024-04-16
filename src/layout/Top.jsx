import Mobilebar from '../app/MobileBar.jsx'
import Navbar from '../app/Navbar.jsx'
import Sidebar from '../app/Sidebar.jsx'
const Top = () => {
	return(
		<>
		<div className="hidden sm:block hidden">
		<Navbar/>
		</div>
		<div className="sm:hidden ">
		<Mobilebar/>
		</div>
		<Sidebar/>
		</>
	)
}
export default Top;
