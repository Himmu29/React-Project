import React from 'react'

const CompleteTask = ({data}) => {
  return (
      <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl'>
        <div className='flex justify-between items-center' >
            <h2 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h2>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold' >{data.taskTitle}</h2>
        <p className='text-sm mt-2' >{data.taskDescription}</p>
        <div className='mt-2'>
        <div className='mt-2'>
    <button className='w-full bg-green-500 text-white font-bold py-3 rounded-lg shadow-md'>
        Completed
    </button>
</div>
</div>

      </div>
  )
}

export default CompleteTask
