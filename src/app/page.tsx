import React from "react";
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Footer from "./Components/Footer/Footer"

 
const Home=()=>{
  return(
    <div>
     <Header  />
     
     <Hero  />
     
        
      <section 
           id="About">
            <div className="bg-pink-300 py-11 ">
              <h1 className="text-center font-extrabold">About Me</h1>
              <div className="text-center"><p className=" font-black ">
                MY name is Sadia and I am a student of Inormation Technology in Governer House.I am starting new journey because I am a beginner level in IT.I am very hardworking in this field so want to take time some time involve in senior students.I am practicing with my laptop to make my projects good and my typing is clear day by day
              </p></div>
            </div>

      </section>

      

      <section id="Portfolio">
        <div className="bg-slate-400 py-11 ">
        <h2 className="font-bold text-center">Portfolio </h2>
        <p className="text-center font-black ">I have completed class projects in quarter 1 and quarter 2. My projects names are 45 assignment questions and all of class assignments and Hackathon 1 and 2 with basic styles and tags. </p>
        </div>

      </section>
      
      
      <section id="Contact">
        <div className="bg-pink-300 py-11">
          <h3 className="text-center font-bold">Contact me</h3>
          <p className="text-center  font-black">Contact for me about Sadia with my email and some other websites content details..
            <a href="mailto:ismailmoiz80@gmail.com"></a>
            
             </p>
          
        </div>
      </section>
      <Footer  />
      

      
      

    </div>
  )

};
export default Home;
 
