import { Link } from "react-router-dom";
import { useState } from "react";

 function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-teal-800 p-2 flex items-center justify-between" >
   

  
      {/* <a className="text-white font-bold text-xl" href="#">My App</a>
      <div className="flex items-center">
      
        <Link to="/home" className="px-2 text-white hover:text-gray-400">
        HOME
        </Link>
        <Link to="/about" className="px-2 text-white hover:text-gray-400">
        ABOUT
        </Link>
        <Link to="/about" className="px-2 text-white hover:text-gray-400">
        CONTACT
        </Link>
      </div> */}
                                  {/* flex-col */}
   <nav className="bg-teal-800 p-2 md:flex xl:flex items-center justify-between">
  
      <button onClick={() => setIsOpen(!isOpen)} className="block px-2 text-white hover:text-gray-400">
        <svg className={`${isOpen ? 'hidden' : 'block'} w-6 h-6 fill-current`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
        <svg className={`${isOpen ? 'block' : 'hidden'} w-6 h-6 fill-current`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Close</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
      {isOpen && (                          //flex-col ---- stacks it for mobile and doesn't make the page too long -- may not be needed
        <div className="bg-teal-800 py-2 pl-0 px-3 md:flex  xl:flex  text-left items-center justify-between">

            <Link to='/' className="block px-2 py-1 text-white hover:text-gray-400"  > Home
            </Link>

            <Link to='/about' className="block px-2 py-1 text-white hover:text-gray-400"  > About
            </Link>

            <Link to='/contact' className="block px-2 py-1 text-white hover:text-gray-400"  > Contact
            </Link>

            <Link to='/projects' className="block px-2 py-1 text-white hover:text-gray-400"  > Projects
            </Link>
            
            
  
        </div>
      )}
    </nav>

    <a className="text-white font-bold text-xl" href="#">Ryan Essel's Portfolio</a>
    </div>
  )
}

export default Navbar;
