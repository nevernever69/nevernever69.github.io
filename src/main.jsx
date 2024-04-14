import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "@/components/theme-provider"
import {RouterProvider} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
	<RouterProvider router={App}/>
	</ThemeProvider>
  </React.StrictMode>,
)
