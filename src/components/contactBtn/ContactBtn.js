import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background-color: #0075a3;
  color: #fafafa;
  padding: 10px 28px;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
  font-size: 20px;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, .3);
  }
`;

const StyledLink = styled(Link)`
  color: #fafafa;
  text-decoration: none;

  &:visited {
    color: #fafafa;
  }
`;

export const ContactBtn = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button onClick={handleClick}>
      <StyledLink to="/contact"> Contact Us </StyledLink>
    </Button>
  );
};
