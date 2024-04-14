import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page from './page.jsx'
import Blog from './components/routes/Blog.jsx'
import Top from './layout/Top.jsx'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Bottom from './layout/Bottom.jsx'


function App() {
return (
	<>
	<div className="lg:px-96 lg:my-10 mx-10 my-10 ">
	<Top/>
	<Outlet/>
	</div>
	<Bottom/>
	</>
  )
}
const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Page/>,
			},
			{
				path: '/blog',
				element: <Blog/>
			},
			{
				path: '/about',
				element: <Page/>
			}
		],
		errorElement: <Error />


	}

])

export default appRouter; 
