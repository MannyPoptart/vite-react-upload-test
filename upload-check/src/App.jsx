import Navbar from './components/Navbar'
import Home from './pages/Home'
import Parts from './pages/Parts'
import ErrorPage from './pages/ErrorPage'
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom'

import './App.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/parts',
    element: <Parts />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  }
])

function App() {

  return (
      <div className='App'>

        <RouterProvider router={router} />
        
      </div>
  )
}

export default App
