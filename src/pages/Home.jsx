import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const user = useSelector((state) => state.auth.user);
  console.log("Redux user:", user);

 

  return (
    <div className='text-white max-w-7xl mx-auto py-5' >
      <h1 className='text-2xl font-bold'>Home Page</h1>

      {user ? (
        <div>
          <p>Role: {user?.data?.role}</p>
          <p>User ID: {user?.data?.userId}</p>
        </div>
      ) : (
        <p>User data is not found</p>
      )}
      
    </div>
  );
};
export default Home