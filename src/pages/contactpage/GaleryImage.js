import React from 'react'

export const GaleryImage = ({ images }) => {
  return (
    images.map(val => {
      return <div key={val.id}> <img src={require(`../../images/${val.imageUrl}`)} alt='image' /> </div>
    })
  )
}