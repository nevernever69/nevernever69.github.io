import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page from './page.jsx'
import Blog from './components/routes/Blog.jsx'
import Top from './layout/Top.jsx'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Bottom from './layout/Bottom.jsx'
import Project from './components/routes/Project.jsx'
import Error from './components/routes/Error.jsx'


function App() {
return (
	<>
	<div className="lg:px-[527px] m-10 ">
	<Top/>
	<Outlet/>
	<Bottom/>
	</div>
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
			},
			{
				path: '/projects',
				element: <Project/>
			}
		],
		errorElement: <Error />


	}

])

export default appRouter; 
