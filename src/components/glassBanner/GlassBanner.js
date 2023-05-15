import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  width: 100%;
  backdrop-filter: blur(20px);
  background-color: rgba(250, 250, 250, .3);
  padding: 16px 32px;
  text-align: start;
  position: absolute;
  bottom: 40px;
  left: 0;

  h2 {
    color: #141414;
    font-family: Cinzel;
    font-size: clamp(28px, 4vw, 50px);
    margin: 0;
    font-weight: normal;
  }
`;

export const GlassBanner = ({ title }) => {
  return (
    <Div className='glass-banner'>
      <h2>{title}</h2>
    </Div>
  )
}
