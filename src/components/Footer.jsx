import React from 'react'
import styled from 'styled-components'
import { FaLinkedinIn, FaDiscord, FaGithub } from 'react-icons/fa'; 

const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 100%; 
    background: transparent;
`

const Container = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 23px;
`

const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 5px;
    padding: 5px;
    font-size: 25px;
    width: 30px;
    justify-content: center;
    text-align: center;
    text-decoration: none;
`

const StyledLinkedin = styled(FaLinkedinIn)`
    color: #0A66C2;
`

const StyledDiscord = styled(FaDiscord)`
    color: #5865F2;
`

const StyledGithub = styled(FaGithub)`
    color: #181717;
`

const Text = styled.p`
    font-size: 14px;
    color: rgb(75 85 99);
`

const NameColor = styled.span`
    color: #3897d3;
    font-weight: bold;
`

const Footer = () => {
  return (
    <Section>
        <Container> 
            <SocialIcons>
                <a href="https://www.linkedin.com/in/simonfoy/" target="_blank" rel="noopener noreferrer"><StyledLinkedin /></a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><StyledDiscord /></a>
                <a href="https://github.com/simonfoy" target="_blank" rel="noopener noreferrer"><StyledGithub /></a>
            </SocialIcons>
            <Text>Made by <NameColor>Simon Foy</NameColor>.</Text>
        </Container>
    </Section>
  )
}

export default Footer