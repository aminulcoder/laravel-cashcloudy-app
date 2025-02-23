import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Withdraw = () => {
  return (
    <div className='text-center'>
        <div className="inline-flex justify-center bg-gray-200 rounded-full ">
            <CheckIcon className=' w-10 h-10 sm:h-16 sm:w-16 p-2 sm:p-3 font-bold text-violet-700'/>
        </div>
        <div className="py-6">
          <h1 className=' text-xl sm:text-2xl font-Inter text-[#0C111D]  font-semibold'>Congratulations your payment is <br /> successfully send</h1>
        </div>

        <div className="bg-violet-600 rounded-lg">
          <button className=' bg-violet-600  font-semibold text-white py-2'>Back to home</button>
        </div>
      </div>
  )
}

export default Withdraw
