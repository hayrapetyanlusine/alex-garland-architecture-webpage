import React from 'react'

export const StaffMember = ({ staff }) => {
  return (
    staff.map(({ id, imgSrc, name, position }) => {
      return (
        <div className='member' key={id}>
          <div className='member-img'>
            <img src={require(`../../images/${imgSrc}`)} />
          </div>
          <div className='about'>
            <h3>{name}</h3>
            <p>{position}</p>
          </div>
        </div>
      )
    })
  )
}
