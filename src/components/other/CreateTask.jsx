import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData , setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')


  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
  
    // Create the new task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    // Find the employee with the matching firstName
    const updatedUserData = userData.map((elem) => {
      if (assignTo === elem.firstName) {
        // Update the tasks array and taskNumbers for the matched employee
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskNumbers: {
            ...elem.taskNumbers,
            newTask: elem.taskNumbers.newTask + 1,
          },
        };
      }
      return elem;
    });
  
    // Update the userData state
    setUserData(updatedUserData);
  
    // Clear the form fields
    setAssignTo('');
    setCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');
  };
  return (
    <div>
      <div className='mt-10 bg-gray-800 shadow-lg rounded-lg p-8 max-w-4xl mx-auto'>
        <h2 className='text-3xl font-semibold text-gray-100 mb-6'>Create New Task</h2>

        {/* Form */}
        <form onSubmit={submitHandler} className='flex w-full items-start justify-between gap-8'>
          {/* Left Side */}
          <div className='w-1/2 space-y-6'>
            <div>
              <h3 className='text-lg font-medium text-gray-300 mb-2'>Task Title</h3>
              <input 
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder='Make a UI Design'
                className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>

            <div>
              <h3 className='text-lg font-medium text-gray-300 mb-2'>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>

            <div>
              <h3 className='text-lg font-medium text-gray-300 mb-2'>Assign to</h3>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                type="text"
                placeholder='Employee Name'
                className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>

            <div>
              <h3 className='text-lg font-medium text-gray-300 mb-2'>Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder='Design, Dev, etc.'
                className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>
          </div>

          {/* Right Side */}
          <div className='w-1/2 space-y-6'>
            <div>
              <h3 className='text-lg font-medium text-gray-300 mb-2'>Description</h3>
              <textarea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                cols="30"
                rows="10"
                placeholder='Describe the task in detail...'
                className='w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              ></textarea>
            </div>

            {/* Submit Button placed directly below Description */}
            <div className='w-full mt-8'>
              <button
                type="submit"
                className='w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300'
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
