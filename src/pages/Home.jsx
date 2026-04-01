import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const   user = useSelector((state) => state.auth.user);
  console.log("Redux user:", user);
  

  return (
    <div className='text-black p-4 bg-white'>
      <h1 className='text-2xl font-bold'>Home Page</h1>

      {user && user.name ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>DOB: {user.dob}</p>
        </div>
      ):(
        <p>User data is not found</p>
      )}
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default Home