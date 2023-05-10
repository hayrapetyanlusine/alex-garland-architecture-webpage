import React from 'react'
import { WorkGallery } from './workGallery/WorkGallery'
import './Workpage.scss'

export const Workpage = ({ workState }) => {
  return (
    <div className='work-section'>
      <div className='container'>
        <header>
          <h2 className='work-title'> Our work </h2>
          <WorkGallery images={workState.galleryImages} />
        </header>
      </div>
    </div>
  )
}
