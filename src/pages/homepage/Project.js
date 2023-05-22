import React from 'react'

export const Project = ({ projects }) => {
  return (
    projects.map(({ id, url, name, type }) => (
      <div className='project' key={id}>
        <div className='proj-img'>
          <img className='img' src={require(`../../images/${url}`)} />
        </div>
        <div className='about'>
          <h3>{name}</h3>
          <p>{type}</p>
        </div>
      </div>
    ))
  )
}
