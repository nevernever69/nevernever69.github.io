import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Page from './page'
import Blog from './components/routes/Blog'
import Top from './layout/Top'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Bottom from './layout/Bottom'
import Project from './components/routes/Project'
import Error from './components/routes/Error'


function App(): React.FC {
return (
	<>
	<div className="lg:px-[527px] m-10">
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
		errorElement: (
			<>
			<div className="lg:px-[527px] m-10 ">
			<Top />
			<Error />
			</div>
			</>
		)

	}

])

export default appRouter; 
