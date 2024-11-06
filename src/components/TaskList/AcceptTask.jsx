import React from 'react'

const AcceptTask = ({data}) => {
  return (
      <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center' >
            <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h2>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold' >{data.taskTitle}</h2>
        <p className='text-sm mt-2' >
            {data.taskDescription}
        </p>
        <div className='flex justify-between mt-4'>
            <button className='bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'>
                Mark as Completed
            </button>
            <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105'>
                Mark as Failed
            </button>
        </div>
        </div>
  )
}

export default AcceptTask