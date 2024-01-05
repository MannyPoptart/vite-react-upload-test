import Navbar from './components/Navbar'
import Home from './pages/Home'
import Parts from './pages/Parts'
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom'

import './App.css'

const Dashboard = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ]
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
