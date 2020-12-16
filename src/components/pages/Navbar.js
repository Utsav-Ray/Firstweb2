 import React from 'react'
 import { Link } from 'react-router-dom'
 import { MdFingerprint} from 'react-icons/md'
 import { Fabars, FaTimes } from 'react-icons/fa'
 
 function Navbar() {
     return (
         <div>
             <div className="navbar">
                 <div classname="navbar-container container">
                     <Link to='/' className="navbar-logo">
                          <img src="https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kif6BrRJMmh...NwXs1M3EMoAJtliAqj...Fv8vo5"/>
                     </Link>
                     <div className="menu-icon">
                     FaBars
                     </div>
                 </div>
             </div>
             
         </div>
     )
 }
 
 export default Navbar
 