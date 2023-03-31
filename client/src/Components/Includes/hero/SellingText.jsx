import { AiOutlineCheckCircle } from "react-icons/ai"

function SellingText() {

  
  return (
    <div className='bg-teal-100 w-full p-10'>
        <h2 className='text-3xl mb-8 text-gray-800 font-bold'>A whole world of professionel delivrer  at your fingertips</h2>
        <div className="container mx-auto md:flex">
          <ul className='w-full md:w-1/2 py-3 pl-4'>
              <li className=" text-xl pb-1 md:mb-4 font-medium text-gray-700">
                <AiOutlineCheckCircle size={30} className='inline-block mr-2 text-green-500 ' />
                Find the right delevrer to ship your products within minutes.
              </li  >
              <li className=" text-xl pb-1 md:mb-4 font-normal text-gray-700">
                <AiOutlineCheckCircle size={30} className='inline-block mr-2 text-green-500 ' />
                Receive competitive bids from freelancers within minutes
              </li>
              <li className=" text-xl pb-1 md:mb-4 font-normal text-gray-700">
                <AiOutlineCheckCircle size={30} className='inline-block mr-2 text-green-500 ' />
                Review, collaborate and hire your freelancer — all in one place
              
              </li>
              <li className=" text-xl pb-1 md:mb-4 font-normal text-gray-700">
                <AiOutlineCheckCircle size={30} className='inline-block mr-2 text-green-500 ' />
                Pay safely and securely through the platform
              </li>
              <li className=" text-xl pb-1 md:mb-4 font-normal text-gray-700">
                <AiOutlineCheckCircle size={30} className='inline-block mr-2 text-green-500 ' />
                Get your work done with a 100% money-back guarantee
              </li>

          </ul>
          <div className="w-full md:w-1/2 ">
            <video class="w-full rounded-2xl" autoPlay loop muted >
              <source src="./videos/welcome delivery guy.mp4" type="video/mp4" />

              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      
    </div>
  )
}

export default SellingText
