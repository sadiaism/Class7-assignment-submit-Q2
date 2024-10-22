 import React from "react";
 
 const Footer =()=>{
    return(
        <footer className="bg-cyan-900 ">
            <div className="py-10">
                <p  className="text-center font-extra text-white">Contact For me</p>
                <div>
                    <li><a href="mailto:ismailmoiz80@gmail.com"
                    className="hover:text-purple-600  flex-gap-5 text-white">Sadia
                    </a></li>

                    <li><a href="https://www.google.com" className="hover:text-purple-600 text-white">Google</a></li>

                    <li><a href="https://www.youtube.com" className="hover:text-purple-600 text-white">Youtube</a></li>
                </div>

            </div>
        </footer>
    )
};
export default Footer;