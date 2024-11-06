import React, { useState } from 'react';

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // } else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className="flex items-end justify-between p-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-white">
        Hello, <br />
        <span className="text-3xl font-bold">username</span>
      </h1>
      <button onClick={logOutUser} className="bg-red-500 text-lg font-medium text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out shadow-sm">
        Log Out
      </button>
    </div>
  );
};

export default Header;
