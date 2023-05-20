import React from 'react'
import './Studiopage.scss'
import { Animation } from './studioAnimation/Animation';
import { Quote } from '../../components/quote/Quote';
import { ContactBtn } from '../../components/contactBtn/ContactBtn';
import { Article } from '../../components/article/Article';

export const Studiopage = ({ studioState }) => {
  return (
    <div className='studio-section'>
      <Animation />

      <main>
        <div className='about-philosophy'>
          <img className='img' src={require(`../../images/about-philosophy-intro.jpg`)} />
        </div>

        <div className='container'>
          <Article state={studioState.article} />

          <Quote text={studioState.quote.text} name={studioState.quote.name} />
          <ContactBtn />
        </div>
      </main>
    </div>
  )
}
