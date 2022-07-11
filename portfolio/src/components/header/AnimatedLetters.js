import React from 'react'
import './header.css'

const AnimatedLetters = () => {
    const hiArray = ['H', 'i', ',']
    const nameArray = ['I', "'", 'm', '_', 'O', 's', 'k', 'a', 'r']
    const jobArray = ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k', '_', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    return (
        <div className='header__text'>
            <div className='header__text-hi'>
                {
                    hiArray.map((char, i) =>(
                        <span key={i}><span className='header__letter hi'>{char}</span></span>
                    ))
                }
            </div>
            <div className='header__text-name'>
                {
                    nameArray.map((char, i) => (
                        <span key={i} className='header__letter name' >{char}</span>
                    ))
                }
            </div>
            <div className='header__text-job'>
                {
                    jobArray.map((char, i) => (
                        <span key={i} className='header__letter job' >{char}</span>
                    ))
                }
            </div>
        </div>
  )
}

export default AnimatedLetters