import React from 'react'
import "./Article.scss"

export const Article = ({ state }) => {
    return (
        <div className='article'>
            <div className='article-img'>
                <img className='img' src={require(`../../images/${state.imgUrl}`)} alt='img' />
            </div>
            <div className='article-text'>
                <h2>{state.title}</h2>
                <p>{state.text}</p>
            </div>
        </div>
    )
}
