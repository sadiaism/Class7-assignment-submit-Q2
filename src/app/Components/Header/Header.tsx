import React from "react";
import Link from "next/link";

const Header =()=>{
    return(
        <header className="bg-pink-300  " >
            <div className="bg-[url)'/images/bg-image.jpeg')] bg-no-repeat py-11 items-center"><h1 className="text-2xl ">Portfolio Of Book</h1>
            
                <nav className="container mx-auto text-2xl justify-between items-center">
                    <ul className=" flex gap-5 py-11 justify-end ">

                        <li>
                       <Link href="#About" className="hover:text-purple-600 ">About</Link> 
                        </li>
                        <li>
                            <Link href="#Portfolio"className="hover:text-purple-600 ">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="#Contact" className="hover:text-purple-600">Contact </Link>
                        </li>
                    </ul>

                </nav>
                </div>
            
        </header>
    )
    
    
};export default Header;