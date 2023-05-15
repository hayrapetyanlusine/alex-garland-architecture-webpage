import React from 'react'
import styled from 'styled-components';

import { QuoteIconSvg } from '../../svg/svg'

const Div = styled.div`
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 64px 0;

    .quote-icon {
        width: 150px;
        height: 120px;
    }

    .quote-text {
        color: #141414d5;
        font-size: clamp(16px, 4vw, 22px);
        margin: 15px 0;
        text-align: center;
    }

    h4 {
        margin: 0;
        font-size: clamp(14px, 4vw, 18px);
    }

    @media screen and (max-width: 768px) { 
        padding: 16px 0;

        .quote-icon {
            width: 100px;
            height: 80px;
        }

        .quote-text {
            margin-top: 0;
        }
    }
`;

export const Quote = ({ text, name }) => {
    return (
        <Div className='quote'>
            <div className='quote-icon'>
                <QuoteIconSvg />
            </div>
            <p className='quote-text'>{text}</p>
            <h4>{name}</h4>
        </Div>
    )
}
