import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineBook} from 'react-icons/ai'
import {MdOutlineSettingsApplications} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import './nav.css'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome/></a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><BsPerson/></a>
      <a href='#skills' className={activeNav === '#skills' ? 'active' : ''} onClick={() => setActiveNav('#skills')}><AiOutlineBook/></a>
      <a href='#projects' className={activeNav === '#projects' ? 'active' : ''} onClick={() => setActiveNav('#projects')}><MdOutlineSettingsApplications/></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav