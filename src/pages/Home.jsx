import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const user = useSelector((state) => state.auth.user);
  console.log("Redux user:", user);

  const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
    loading: false,
  }

  return (
    <div className='text-white max-w-7xl mx-auto py-5' >
      <h1 className='text-2xl font-bold'>Home Page</h1>

      {user && user.name ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>DOB: {user.dob}</p>
        </div>
      ) : (
        <p>User data is not found</p>
      )}
      <pre>{JSON.stringify(user.name, null, 2)}</pre>
    </div>
  );
};
export default Home