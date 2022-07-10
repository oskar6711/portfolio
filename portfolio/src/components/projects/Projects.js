import React from 'react'
import './projects.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import {AiFillHome} from 'react-icons/ai'
import {AiFillRobot} from 'react-icons/ai'
import {GiEarthAfricaEurope} from 'react-icons/gi'
import {MdPassword} from 'react-icons/md'

const data = [
  {
    id: 1,
    img: <AiFillHome/>,
    name: 'My Portfolio-Website',
    tech: 'JS/REACT/HTML/CSS',
    link: 'https://github.com/oskar6711/Portfolio'
  },
  {
    id: 2,
    img: <AiFillRobot/>,
    name: 'RoboFriends',
    tech: 'JS/REACT/HTML/CSS',
    link: 'https://github.com/oskar6711/RoboFriends'
  },
  {
    id: 3,
    img: <GiEarthAfricaEurope/>,
    name: 'Web Scraping - op.gg',
    tech: 'Python/Selenium',
    link: 'https://github.com/oskar6711/op-gg-champions-leaderboards-web-scraping/blob/main/opgg_webscraping.py'
  },
  {
    id: 4,
    img: <MdPassword/>,
    name: 'Password Checker',
    tech: 'Python',
    link: 'https://github.com/oskar6711/Python/blob/main/password_checker.py'
  },
  
]

const Projects = () => {
  return (
    <section id='projects'>
      <h2>My Proj<span class='red'>ects</span></h2>
      <div className='swiper__container'>
      <Swiper 
        className='container projects__container' 
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        spaceBetween={100}
        modules={[Pagination, Navigation]}
        >
        
        {
          data.map(({id, img, name, tech, link}) => {
            return (
              <SwiperSlide key={id} className='project'>
                <div className='project-image__container'>
                  {img}
                </div>
                <div className='project-text'>
                  <h4>{name}</h4>
                  <small>{tech}</small>
                </div>
                <div className='project-buttons'>
                  <a href={link} className='btn__projects'>Source Code</a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </div>
    </section>
  )
}

export default Projects