import React from 'react'
import './hero.css'

function Trusted() {
  return (
    <div className='w-full p-2 hidden md:flex justify-center items-center bg-gray-50 '>
        <span className='text-gray-500 font-semibold text-xl'>
            Trusted by:
        </span>

        <ul className='flex  items-center ml-6'  >
            <li className='mx-5 ' >
                <img src="./images/youcan.png" alt="youcan" />
            </li>
            <li className='mx-5 ' >
                <img src="./images/barid_bank.png" alt="barid bank" />
            </li>
            <li className='mx-5 ' >
                <img src="./images/populaire bank.png" alt="bkash" />
            </li>
            <li className='mx-5 ' >
                <img src="./images/storeino.png" alt="storeino" />
            </li>
            
        </ul>

    </div>
  )
}

export default Trusted
