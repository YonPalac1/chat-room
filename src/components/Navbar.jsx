import React, { useContext, useState } from 'react'
import { auth } from '../firebase'
import {signOut} from "firebase/auth"

import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  }

  return (
    <div className='navbar'>
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span onClick={handleShowMore}>{currentUser.displayName}</span>
        {
          showMore &&
          <button onClick={()=>signOut(auth)}>logout</button>
        }
      </div>
    </div>
  )
}

export default Navbar