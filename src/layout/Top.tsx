import React from 'react'
import Mobilebar from '../app/MobileBar'
import Navbar from '../app/Navbar'
import Sidebar from '../app/Sidebar'
const Top: React.FC = () => {
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
