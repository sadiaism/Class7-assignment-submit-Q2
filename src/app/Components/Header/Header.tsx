import React from "react";


const Header =()=>{
    return(
        <header className="bg-cyan-900  " >
            
                <nav className="container mx-auto text-2xl">
                    <ul className=" flex gap-5 py-11 text-white ">

                        <li>
                       <a href="#About" className="hover:text-purple-600 ">About</a> 
                        </li>
                        <li>
                            <a href="#Portfolio"className="hover:text-purple-600 ">Portfolio</a>
                        </li>
                        <li>
                            <a href="#Contact" className="hover:text-purple-600">Contact </a>
                        </li>
                    </ul>

                </nav>
            
        </header>
    )
    
    
};export default Header;