import React from 'react'
import { Form } from './Form'
import { GaleryImage } from './GaleryImage'
import "./Contactpage.scss"

export const Contactpage = ({ contactState }) => {
  return (
    <div className='contact-section'>
      <div className='container'>
        <div className='contact-img-gallery'>
          <GaleryImage images={contactState.galeryImgSrc} />
        </div>
        <h2> Contact US </h2>
        <div className='contact-us'>
          <Form form={contactState.form}/>
        </div>
      </div>
    </div>
  )
}
