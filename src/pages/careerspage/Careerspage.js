import React from 'react'
import "./Careerspage.scss"
import { InterestItem } from './InterestItem'
import { ContactBtn } from '../../components/contactBtn/ContactBtn'

export const Careerspage = ({ careersState }) => {
  return (
    <div className='career-section'>
      <header>
        <div className='career-header'>
          <div className='text-wrapper-div'>
            <p>
              If you want to work on exciting projects alongside passionate people, apply for one of our open positions. Our company culture is highly collaborative and supportive, so expect to expand your understanding and expertise every day.
              <br /> <br />
              Our packages are competitive, our people arephenomenal, and our work speaks for itself. We look forward to seeing what you can do.
            </p>
          </div>
          <div className='career-img'>
            <img src={require(`../../images/${careersState.imagesUrl[0]}`)} />
          </div>
        </div>
        <div className='glass-banner'> <h2>Careers</h2> </div>
      </header>

      <h2 className='title'> What is your area of interest? </h2>
      <div className='interests container'>
        <InterestItem intereste={careersState.interests} />
      </div>

      <h2 className='title'>Join our team</h2>
      <div className='contact-block container'>
        <img src={require(`../../images/${careersState.imagesUrl[1]}`)} />
        <ContactBtn />
      </div>
    </div>
  )
}
