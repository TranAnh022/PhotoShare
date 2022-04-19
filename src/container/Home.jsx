import React,{useState,useRef,useEffect} from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'

import { Sidebar, UserProfile } from '../components'
import Pins from './Pins'
import { client } from '../client'
import logo from '../asset/logo.png'
import { userQuery } from '../utils/data'

const Home = () => {
  const [user, setUser] = useState(null);
  const [toggleSideBar, setToggleSideBar] = useState();
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
  
  //pull data from database
  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query) 
      .then((data) => {
        setUser(data[0]);
      })

  },[])

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
      <div className="hidden md:flex h-screen flex-initial"></div>
      <Sidebar />
      <div className="flex md:hidden flex-row">
        <HiMenu fonttSize={40} className="cursor-pointer" onClick={() =>setToggleSideBar(false)}/>
        <Link to ="/">
          <img src={logo} alt="logo" className='w-28' />
        </Link>
        <Link to ={`user-profile/${user?._id}`}>
          <img src={user?.image} alt="user" className='w-28' />
        </Link>
      </div>
    </div>
  )
}

export default Home