import React from "react";
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Footer from "./Components/Footer/Footer"
import Image from "next/image";


 
const Home=()=>{
  return(
    <div>
     <Header  />
     
     <Hero  />
     
        
      <section 
           id="About" >
            <div className=" bg-gradient-to-r from-cyan-500 to-blue-500  ">
            <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 mx-11">
              <Image
              src="/images/books_ad.png"
              alt="About Books"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
              />
             <h1 className="text-center font-extrabold py-6">About Books</h1>
             <p className="flex-items-center justify-center py-11  container mx-auto px-11 ">
                Books reading are very mostly important in life of humans.Your interesting in reading books may be better sustained by actively learning and exploring the tangible world of non-fiction.Its high time to embrace one's growth potential in reading more books.Studies of highly successful readers,supports the benefit of developing consistent book-reading habits.
              </p>
            </div></div>

      </section>

      

      <section id="Portfolio">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 " >
         
          
        <h2 className="font-bold text-center py-6">Portfolio </h2>
        <p className="text-center  py-11 container mx-auto px-11">Callibration is the secret ingredient that alligns what you see on-screen with the final product-whether it's a digital file or a page in a PHOTO BOOK.Monitor callibration is fine tuning your display's settings to show colors,contarst and brighteness as accurately as possible.For anyone involved in graphis designing and photo editing,this is a crucial step to ensure that what you see on-screen translates faithfully to other mediums-another monitor or aprinted page.  </p>
        </div>
        </section>

      
      
      
      <section id="Contact">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500">
          <h3 className="text-center font-bold py-11">Contact me</h3>
          <p className="text-center py-11 container mx-auto px-4">Contact for me about Sadia with my email and some other websites content details..

                                      All right reserved
            <a href="mailto:ismailmoiz80@gmail.com"></a>
            
             </p>
          
        </div>
      </section>
      <Footer  />
      

      
      

    </div>
  )

};
export default Home;
 
