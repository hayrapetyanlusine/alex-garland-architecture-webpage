import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
    padding: 10px 18px;
    border-radius: 8px;
    font-size: clamp(23px, 3vw, 27px);
    box-shadow: 4px 4px 5px rgba(0, 0, 0, .2), -7px -7px #70a7be;
    cursor: pointer;
    text-align: center;
    min-width: 300px;

    &:hover{
        transform: translate(-2px, -2px);
        box-shadow: -4px -4px 5px #70a7be, 2px 2px rgba(20, 20, 20, .1);
    }

    @media (max-width: 730px) {
        min-width: unset;
        width: 100%;
    }
`;

const StyledLink = styled(Link)`
    color: #141414;
    text-decoration: none;
    
    h3{
        font-weight: normal;
    }
`;

export const InterestItem = ({ intereste }) => {
    return (
        intereste.map(({ id, name }) => {
            return (
                <Div className='interest' key={id}>
                    <StyledLink to="#"> <h3>{name}</h3> </StyledLink>
                </Div>
            )
        })
    )
}
