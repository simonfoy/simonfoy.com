import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Section = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 940px) {
    min-height: auto;
  }
`;

const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Container2 = styled.div`
  width: 950px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 60px 0px;

  @media only screen and (max-width: 940px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: black;
`;

const Description = styled.p`
  font-size: 18px;
  color: black;
`;

const AboutPage = () => {
  return (
    <Section>
        <Container1>
            <Banner/>
            <Navbar/>
        </Container1>
        <Container2>
            <Title>About Me!</Title>
            <Description>
                This page is unfinished. Check back later.
            </Description>
        </Container2>
        <Footer/>
    </Section>
  )
}

export default AboutPage