import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData , setUserData] = useContext(AuthContext)

  return (
    <div className='bg-gray-800 p-6 mt-5 h-auto rounded-lg shadow-lg overflow-auto'>
      {/* Header Row */}
      <div className='bg-gray-700 mb-3 py-3 px-5 flex justify-between items-center rounded-lg shadow-md'>
        <h2 className='text-lg font-semibold text-gray-100'>Employee Name</h2>
        <h3 className='text-md font-semibold text-blue-400'>Active Task</h3>
        <h5 className='text-md font-semibold text-yellow-400'>New Task</h5>
        <h5 className='text-md font-semibold text-green-400'>Completed Task</h5>
        <h5 className='text-md font-semibold text-red-400'>Failed Task</h5>
      </div>

      {/* Employee Tasks */}
      <div className='space-y-3 h-[80%] overflow-auto'>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className='bg-gray-700 mb-3 py-3 px-5 flex justify-between items-center rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'>
            <h2 className='text-lg font-bold text-gray-100'>{elem.firstName}</h2>
            <h3 className='text-md font-semibold text-blue-400'>{elem.taskNumbers.active}</h3>
            <h5 className='text-md font-semibold text-yellow-400'>{elem.taskNumbers.newTask}</h5>
            <h5 className='text-md font-semibold text-green-400'>{elem.taskNumbers.completed}</h5>
            <h5 className='text-md font-semibold text-red-400'>{elem.taskNumbers.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
