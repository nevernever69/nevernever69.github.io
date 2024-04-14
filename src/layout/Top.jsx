import Mobilebar from '../app/MobileBar.jsx'
import Navbar from '../app/Navbar.jsx'
import Sidebar from '../app/Sidebar.jsx'
const Top = () => {
	return(
		<>
		<div className="hidden lg:block">
		<Navbar/>
		</div>
		<div className="lg:hidden block">
		<Mobilebar/>
		</div>
		<Sidebar/>
		</>
	)
}
export default Top;
