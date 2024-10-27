 import React from "react";
 
 const Footer =()=>{
    return(
        <footer className="bg-pink-300 ">
            <div className="py-10">
                <p  className="text-center font-extra ">Contact For me</p>
                <div>
                    <li><a href="mailto:ismailmoiz80@gmail.com"
                    className="hover:text-purple-600  flex-gap-5 ">Sadia
                    </a></li>

                    <li><a href="https://www.google.com" className="hover:text-purple-600 ">Google</a></li>

                    <li><a href="https://www.youtube.com" className="hover:text-purple-600 ">Youtube</a></li>
                </div>

            </div>
        </footer>
    )
};
export default Footer;