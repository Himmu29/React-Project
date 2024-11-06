import React from 'react';

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-around gap-5 flex-wrap'>
      <div className='rounded-xl w-[40%] md:w-[20%] py-6 px-9 bg-gradient-to-br from-red-400 to-red-500 shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out'>
        <h2 className='text-4xl text-white font-bold mb-2'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-lg font-medium text-gray-100'>New Task</h3>
      </div>

      <div className='rounded-xl w-[40%] md:w-[20%] py-6 px-9 bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out'>
        <h2 className='text-4xl text-white font-bold mb-2'>{data.taskNumbers.completed}</h2>
        <h3 className='text-lg font-medium text-gray-100'>Completed Task</h3>
      </div>

      <div className='rounded-xl w-[40%] md:w-[20%] py-6 px-9 bg-gradient-to-br from-green-400 to-green-500 shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out'>
        <h2 className='text-4xl text-white font-bold mb-2'>{data.taskNumbers.failed}</h2>
        <h3 className='text-lg font-medium text-gray-100'>Failed Task</h3>
      </div>

      <div className='rounded-xl w-[40%] md:w-[20%] py-6 px-9 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out'>
        <h2 className='text-4xl text-white font-bold mb-2'>{data.taskNumbers.active}</h2>
        <h3 className='text-lg font-medium text-gray-100'>Accepted Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
