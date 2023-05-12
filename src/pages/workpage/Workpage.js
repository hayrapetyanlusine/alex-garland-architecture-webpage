import React from 'react'
import './Workpage.scss'
import { WorkGallery } from './workGallery/WorkGallery'
import img from '../../images/inspiration.jpg'
import { QuoteIconSvg } from '../../svg/svg'
import { WorkCarousel } from './workCarousel/WorkCarousel'
import { ContactBtn } from '../../components/contactBtn/ContactBtn'

export const Workpage = ({ workState }) => {
  return (
    <div className='work-section'>
      <div className='container'>
        <header>
          <h2 className='work-title'> Our work </h2>
          <WorkGallery images={workState.galleryImages} />
        </header>
        <main>
          <div className='quote'>
            <div className='quote-icon'>
              <QuoteIconSvg />
            </div>
            <p className='quote-text'>
              We couldn't be happier with our decision to work with Alex Garland Architects. They exceeded our expectations on every level and designed a building we love being in every day.
            </p>
            <h4>- Zack Morris, Bayside High School</h4>
          </div>

          <div className='inspiration'>
            <div className='insp-content'>
              <h2 className='title'>Inspiration</h2>
              <p>
                This is where the architect would write a little about the inspiration for this project. It would mention what the client wanted to achieve and how the architectural team made it happen. This would include which materials were used, how that informed some creative decisions, and how the project was as environmentally friendly as possible.
                <br /> <br />
                This write-up doesn’t have to be long. Its purpose is to give the reader an idea of the firm’s thought process and creativity. Mentioning the use of space and light always sounds great, so make sure that’s included.
              </p>
            </div>
            <div className='insp-img'>
              <img src={img} />
            </div>
          </div>

          <WorkCarousel images={workState.sliderImages} />
          <ContactBtn />
        </main>
      </div>
    </div>
  )
}
