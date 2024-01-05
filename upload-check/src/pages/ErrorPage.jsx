import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div>

        <h1>404</h1>
        <h2>Page not found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>You can always go back to the <Link to="/">Home</Link>page</p>
        


    </div>


  )
}

export default ErrorPage