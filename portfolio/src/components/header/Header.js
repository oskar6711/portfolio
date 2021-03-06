import React from 'react'
import './header.css'
import {RiArrowDownSLine} from 'react-icons/ri'
import {VscGithub} from 'react-icons/vsc'
import {BsLinkedin} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {BsInstagram} from 'react-icons/bs'
import Particles from './Particles'
import CV from '../../assets/cv.pdf'
import AnimatedLetters from './AnimatedLetters'
import Tilt from 'react-parallax-tilt'

const Header = () => {
  return (
    <section>
      <Particles></Particles>
      <Tilt scale={1} glareEnable={false}>
      <header className='container header__container'>
        <div className='header__header'>
          {/* <h5 className='text1'>Hi,</h5>
          <h1 className='text2'>I'm <span className='red'>Oskar</span></h1>
          <h5 className='text3'>Full<span className='red'>stack</span> Developer</h5> */}
          
          <AnimatedLetters />
          <div className='line'></div>
      
        </div>
        <div className='header__socials'>
          <a target='_blank' rel='noreferrer' href='https://github.com/oskar6711'><VscGithub/></a>
          <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/oskar-szymczyk-1a5024235/'><BsLinkedin/></a>
          <a target='_blank' rel='noreferrer' href='https://www.facebook.com/oskar.szymczyk.58/'><GrFacebook/></a>
          <a target='_blank' rel='noreferrer' href='https://www.instagram.com/oskar_szymczyk/'><BsInstagram/></a>
        </div>
        <div className='CTA'>
          <a href={CV} download className='btn btn__red '>Download CV</a>
        </div>
        <div className='header__scroll'>
          <a href='#about'>Scroll Down<br/><RiArrowDownSLine className='header__scroll-icon' /></a>
        </div>
      </header>
      </Tilt>
    </section>
  )
}

export default Header