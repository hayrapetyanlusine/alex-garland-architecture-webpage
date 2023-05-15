import React from 'react'
import './Studiopage.scss'
import { Animation } from './studioAnimation/Animation';
import { Quote } from '../../components/quote/Quote';
import { ContactBtn } from '../../components/contactBtn/ContactBtn';

export const Studiopage = ({ studioState }) => {
  return (
    <div className='studio-section'>
      <Animation />

      <main>
        <div className='about-philosophy'>
          <img className='img' src={require(`../../images/about-philosophy-intro.jpg`)} />
        </div>

        <div className='container'>
          <div className='studio-inspiration'>
            <div className='insp-img'>
              <img className='img' src={require(`../../images/inspiration-img.jpg`)} alt='img' />
            </div>
            <div className='insp-text'>
              <h2>{studioState.inspiration.title}</h2>
              <p>{studioState.inspiration.text}</p>
            </div>
          </div>

          <Quote text={studioState.quote.text} name={studioState.quote.name} />
          <ContactBtn />
        </div>
      </main>
    </div>
  )
}
