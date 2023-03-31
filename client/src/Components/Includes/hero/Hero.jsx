
import {  useEffect, useState } from 'react';
import './hero.css';

import {AiOutlineSearch} from 'react-icons/ai'




function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const images =[
        "./images/deliveryguy.jpg",
        "./images/deliveryguy2.jpg",
        "./images/deliveryguy3.jpg",
    ]

  
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [images.length]);
    
      const backgroundStyles = {
        backgroundImage: `url(${images[currentImage]})`,
        
      };
    

    return (
        <div>
          <div
      className=" w-screen bg-cover bg-center bgImage flex justify-center items-center md:pl-8 text-center p-5 md:block "
      style={backgroundStyles}
        >
            <div className="container md:text-left md:mt-24 md:pt-20 md:w-6/12 ">
                <h1 className="text-5xl font-bold text-white md:w-full ">
                Find the perfect <span className=''>delivery guy</span> services for your business
                </h1>

                <form action="#" className="flex flex-col md:flex-row justify-center items-center py-9 md:justify-start ">
                  <div className='w-full flex justify-center items-center'>
                  <span className='bg-white  p-4 rounded-l-lg' >
                      <AiOutlineSearch className="text-2xl text-gray-500" />
                  </span>
                  
                  <input  
                  type="text"
                  className="w-full p-4 rounded-r-lg md:rounded-r-none focus:outline-none "
                  placeholder="Search for a service"
                  />
                  </div>
                  <button className="bg-green-500 text-white p-4 block mt-2 w-full md:w-1/5  md:mt-0  md:rounded-r-lg ">
                      Search
                  </button>
                </form>
            
                <div className=' flex items-center  '>
                    <span className='text-xl text-white font-bold'>
                    Popular:
                    </span>
                    <ul className='ml-4'>
                        <li className='inline-block border border-gray-200 px-2 py-1 rounded mr-1 hover:bg-gray-50'>
                            <a href="#" className="text-white hover:text-green-500">Delivery</a>
                        </li> 
                        <li className='inline-block border border-gray-200 px-2 py-1 rounded mr-1 hover:bg-gray-50'> 
                            <a href="#" className="text-white hover:text-green-500">Cleaning</a>
                        </li>

                    </ul>
                </div>
            </div>


        </div>
        
        </div>
  )
}

export default Hero
