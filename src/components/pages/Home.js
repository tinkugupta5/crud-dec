import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Home = () => {
    const [users,setUser] = useState([]);

    useEffect(()=>{

        loadUsers();

    },[])

    const loadUsers = async() => {
        const result = await axios.get('http://localhost:3003/users');
        // console.log(result);  
        setUser(result.data);
    }

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Home Page</h1>
      </div> 
    </div>
  ) 
}

export default Home
