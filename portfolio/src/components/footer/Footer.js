import React from 'react'
import './footer.css'
import {RiArrowUpSLine} from 'react-icons/ri'
import {VscGithub} from 'react-icons/vsc'
import {BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__home'><RiArrowUpSLine className='footer__icon'/><br/>Go back to Homepage</a>
      <div className='footer__socials'>
        <a target='_blank' rel='noreferrer' href='https://github.com/oskar6711'><VscGithub/></a>
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/oskar-szymczyk-1a5024235/'><BsLinkedin/></a>
        <a target='_blank' rel='noreferrer' href='https://www.facebook.com/oskar.szymczyk.58/'><GrFacebook/></a>
        <a target='_blank' rel='noreferrer' href='https://www.instagram.com/oskar_szymczyk/'><BsInstagram/></a>
      </div>
      <div className='footer__copy'>
        <small>&copy; 2022 - Coded by Oskar Szymczyk</small>
      </div>
    </footer>
  )
}

export default Footer