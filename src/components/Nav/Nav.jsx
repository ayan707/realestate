import React from 'react'
import './Nav.css'
import {MdExplore, MdFavorite} from 'react-icons/md'
import {BsInboxesFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'


const Nav = () => {
  return (
    <nav>
      <div className='item__nav'>
        <MdExplore className='nav__icon'/>
        <p className='nav__text'>Explore</p>
      </div>
      <div className='item__nav'>
        <MdFavorite className='nav__icon'/>
        <p className='nav__text'>Favorite</p>
      </div>
      <div className='item__nav'>
        <BsInboxesFill className='nav__icon'/>
        <p className='nav__text'>Inbox</p>
      </div>
      <div className='item__nav'>
        <CgProfile className='nav__icon'/>
        <p className='nav__text'>Profile</p>
      </div>
    </nav>
  )
}

export default Nav