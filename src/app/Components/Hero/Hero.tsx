import React from "react";
import Image from "next/image";

const Hero =()=>{
    return(
        <section >
            <div className=" bg-gradient-to-r from-purple-500 to-pink-500">
                <h1 className="font-bold text-center py-11 text-4xl">Hero Section</h1>
                <p className="text-center text-[24px] font-bold py-11 ">Welcome to the landing page</p>
            </div>
        </section>
    )
};
export default Hero;