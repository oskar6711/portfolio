import React from 'react'
import ME from '../../assets/me.jpg'
import './about.css'
import Tilt from 'react-parallax-tilt'

const About = () => {
  
  
  return (
    <section id='about'>
      <h2>About<span className='red'> Me</span></h2>
      <div className='container about__container'>
        <Tilt glareEnable={true}><div className='about__image'>
          <Tilt glareEnable={true}><span><img src={ME} alt='me'></img></span></Tilt>
        </div></Tilt>
        <div className='about__info'>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <div className='about__cards'>
            <article className='about__card'>
              <h4>Education:</h4>
              <p>WSB University in Wrocław<br/>Computer Science</p>
            </article>

            <article className='about__card'>
              <h4>Age:</h4>
              <p>19</p>
            </article>

            <article className='about__card'>
              <h4>Hobby:</h4>
              <p>Programming<br/>Football<br/>Computer Games</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About