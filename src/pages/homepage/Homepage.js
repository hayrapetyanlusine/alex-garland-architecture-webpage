import React from 'react'
import { Overlapping } from './overlappingAnimation/Overlapping'
import { Project } from './Project'
import './Homepage.scss'
import { Article } from '../../components/article/Article'
import { Quote } from '../../components/quote/Quote'
import { ContactBtn } from '../../components/contactBtn/ContactBtn'

export const Homepage = ({ homeState }) => {
  return (
    <div className='home-section'>
      <Overlapping name={homeState.name} images={homeState.animationImages} />

      <main className='container'>
        <h2 className='title'>Latest projects</h2>
        <div className='projects'>
          <Project projects={homeState.projects} />
        </div>

        <Article state={homeState.article} />
        <Quote text={homeState.quote.text} name={homeState.quote.name} />

        <div className='home-contact'>
          <div className='home-contact-img'>
            <img className='img' src={require('../../images/home-location.jpg')} />
          </div>
          <div className='home-contact-text'>
            <h4>Let's build something together</h4>
            <p>12345 Ocean Ave.<br /> Long Branch, NJ</p>
          </div>
          <ContactBtn />
        </div>
      </main>
    </div>
  )
}