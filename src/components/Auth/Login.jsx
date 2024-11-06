import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password); // Call the function passed from parent

    setEmail(''); // Reset email after submission
    setPassword(''); // Reset password after submission
  };


  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white/80 shadow-lg rounded-2xl p-10 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
        <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required
            className="w-full text-gray-700 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-6 rounded-full placeholder-gray-500 mb-4 focus:border-blue-500 transition-colors duration-300"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="w-full text-gray-700 outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-6 rounded-full placeholder-gray-500 mb-4 focus:border-blue-500 transition-colors duration-300"
            type="password"
            placeholder="Enter Password"
          />
          <button
            className="w-full bg-emerald-600 text-white text-xl py-3 px-6 rounded-full hover:bg-emerald-700 transition-colors duration-300 focus:ring-4 focus:ring-emerald-300"
            type="submit"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a></p>
      </div>
    </div>
  )
}

export default Login
