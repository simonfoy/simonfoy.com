import React from 'react'
import styled from 'styled-components'
import Banner from '../components/Banner'
import Navbar from '../components/NavBar'
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
`

const Container = styled.div`
    width: 950px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 60px 0px;

    @media only screen and (max-width: 940px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 60 0px;
    }
`

const About = () => {
  return (
    <Section>
        <Banner/>
        <Navbar/>
        <Container>

        </Container>
        <Footer/>
    </Section>
  )
}

export default About