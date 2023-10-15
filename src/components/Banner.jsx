import React, { useState } from 'react'
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    background-color: #3897d3;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 940px) {
        width: 100%; 
    }
`;

const Container = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
    padding: 3px 0;
    color: white;
`;

const CloseButton = styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: white;
`;

const CURRENT_VERSION = 5; 

const Banner = () => {
    const storedVersion = parseInt(localStorage.getItem('bannerVersion'), 10);
    const [isVisible, setIsVisible] = useState(storedVersion !== CURRENT_VERSION);
  
    const handleClose = () => {
      localStorage.setItem('bannerVersion', CURRENT_VERSION.toString());
      setIsVisible(false);
    }
  
    if (!isVisible) return null;

  return (
    <Section>
        <Container>
            This website is still a work in progress. Thank you for your patience!
            <CloseButton onClick={handleClose}>&times;</CloseButton>
        </Container>
    </Section>
  )
}

export default Banner