import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-25px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

export const NotFoundAnimation = styled.div`
  span {
    display: inline-block;
    font-size: 5rem;
    animation: ${bounce} 2s infinite ease;
  }
`;


export const NotFoundTitle = styled.h1`
    font-size: 6rem;
    margin: 20px 0 10px;
    color: #ff6b6b;
`



export const NotFoundSubTitle = styled.p`
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #555;
`

export const NotFoundLink = styled(Link)`
  padding: 10px 25px;
  background-color: #4f46e5;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background-color: #3730a3;
  }
`
