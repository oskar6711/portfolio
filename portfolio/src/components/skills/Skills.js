import React from 'react'
import {IoLogoPython} from 'react-icons/io'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoHtml5} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import {FaLinux} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import './skills.css'
import Tilt from 'react-parallax-tilt'

const data = [
  {
    id: 1,
    image: <IoLogoPython/>,
    name: 'Python',
    level: 'upper-intermediate'
  },
  {
    id: 2,
    image: <IoLogoCss3/>,
    name: 'CSS',
    level: 'intermediate'
  },
  {
    id: 3,
    image: <IoLogoHtml5/>,
    name: 'HTML',
    level: 'intermediate'
  },
  {
    id: 4,
    image: <IoLogoJavascript/>,
    name: 'Javascript',
    level: 'pre-intermediate'
  },
  {
    id: 5,
    image: <FaReact/>,
    name: 'React',
    level: 'beginner'
  },
  {
    id: 6,
    image: <FaLinux/>,
    name: 'Linux Administration',
    level: 'beginner'
  },
  {
    id: 7,
    image: <AiOutlineConsoleSql />,
    name: 'SQL',
    level: 'pre-intermediate'
  },
  {
    id: 8,
    image: <FaJava />,
    name: 'Java',
    level: 'pre-intermediate'
  },
]

const Skills = () => {
  return (
    <section id='skills'>
      <h2>Ski<span className='red'>lls</span></h2>
      <div className='container skills__container'>
          {
            data.map(({id, image, name, level}) => {
              return (
                <article key={id} className='skill'>
                <Tilt>
                  <div className='skill-icon'>
                    {image}
                  </div>
                  <div className='skill-desc'>
                    <h4>{name}</h4>
                    <small>{level}</small>
                  </div>
                </Tilt>
                </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Skills