import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
        <nav>
            <Navbar/>
        </nav>
        <main>
            {children}

        </main>
        <footer>
            <Footer/>
        </footer>
      
    </div>
  )
}

export default Layout
