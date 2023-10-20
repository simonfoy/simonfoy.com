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

const Biography = styled.div`
  flex: 2;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }
`;

const InfoCard = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const PictureContainer = styled.div`
    padding-bottom: 20px;
`

const PictureFrame = styled.div`
    display: inline-block;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: #3897d3;
    border: 2px solid #333;
    overflow: hidden;
`

const Picture = styled.img`
    cursor: pointer;
    height: 100%;
    width: 100%;
    transform: scale(1.75); 
`;

const ProfileName = styled.h3`
  margin-bottom: 10px;
`;

const ProfileDescription = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ResumeButton = styled(Button)`
  background-color: #3897d3;
  color: white;
`;

const MessageButton = styled(Button)`
  background-color: white;
  color: black;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 30px;
  
  @media only screen and (max-width: 940px) {
    flex-direction: column;
  }
`;

const AboutPage = () => {
  return (
    <Section>
        <Container1>
            <Banner/>
            <Navbar/>
        </Container1>
        <Container2>
            <Title>About Me</Title>
            <ContentContainer>
                <Biography>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident tempore officia, repudiandae unde velit, iusto impedit esse quasi amet consequuntur nesciunt libero ipsa distinctio, animi ipsum. Exercitationem consequuntur impedit eius?
                    </p>
                </Biography>
                <InfoCard>
                <PictureContainer>
                    <PictureFrame>
                        <Picture src='assets/images/home/professional/professional1-glasses.png'/>
                    </PictureFrame>
                </PictureContainer>
                    <ProfileName>Simon Foy</ProfileName>
                    <ProfileDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ProfileDescription>
                    <ButtonContainer>
                        <ResumeButton>Resume</ResumeButton>
                        <MessageButton>Message</MessageButton>
                    </ButtonContainer>
                </InfoCard>
            </ContentContainer>
        </Container2>
        <Footer/>
    </Section>
  )
}

export default AboutPage;
