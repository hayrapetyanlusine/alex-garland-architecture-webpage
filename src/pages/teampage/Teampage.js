import React from 'react'
import { StaffMember } from './StaffMember'
import './Teampage.scss'
import { ContactBtn } from '../../components/contactBtn/ContactBtn'

export const Teampage = ({ teamState }) => {
  return (
    <div className='team-section'>
      <div className='container'>
        <h2 className='title'> Our incredible team </h2>
        <div className='staff-members'>
          <StaffMember staff={teamState.staff} />
        </div>
        <h3 className='small-title title'> Want to join our team? </h3>
        <ContactBtn />
      </div>
    </div>
  )
}
