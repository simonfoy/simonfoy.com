import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommandPrompt from '../components/CommandPrompt'
import ReactTyped from 'react-typed'

const TypedStyles = createGlobalStyle`

  body::-webkit-scrollbar {
        display: none;
  }
  body {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .highlight1 {
    color: #3897d3;
    font-style: italic;
    font-weight: bold;
  }
  .highlight2 {
    color: #57df79;
    font-style: italic;
    font-weight: bold;
  }
  .highlight3 {
    color: #FF4500;
    font-style: italic;
    font-weight: bold;
  }
  .highlight4 {
    color: #8527a6;
    font-style: italic;
    font-weight: bold;
  }
  .highlight5 {
    color: #4aa9d1;
    font-style: italic;
    font-weight: bold;
  }
  .highlight6 {
    color: #B22222;
    font-style: italic;
    font-weight: bold;
  }
  .highlight7 {
    color: #E7B43A;
    font-style: italic;
    font-weight: bold;
  }
`;

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
  
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

const JourneyTitle = styled.h2`
  font-size: 28px;
  text-align: left;
  margin-bottom: 30px;
  width: 100%;
  padding-top: 50px;
  @media only screen and (max-width: 1000px) {
    padding-left: 35px;
  }
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
width: 950px;
@media only screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const CommandPromptContainer = styled.div`
  padding-right: 5px;
  padding-top: 15px;
  @media only screen and (max-width: 1000px) {
    padding-right: 0px;
    padding-bottom: 60px;
  }
`

const Timeline = styled.div`
  flex: 2;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 5px 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 17px;
    bottom: 17px;
    left: 21px;
    width: 2px;
    background-color: #3897d3;
  }

  @media only screen and (max-width: 1000px) {
    padding-right: 0px;
    padding-bottom: 60px;

    &:before {
    content: "";
    position: absolute;
    bottom: 67px;
    left: -28px;
  }
  }
`;

const TimelineItem = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 23px;
  margin: 10px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 500px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 20px;
    transform: translateY(-50%);
    left: -37px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #3897d3;
    background-image: url('path.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

  }

  @media only screen and (max-width: 650px) {
    width: 450px;

    &:before {
    content: "";
    position: absolute;
    bottom: 67px;
    left: -36px;
  }
  }

  @media only screen and (max-width: 600px) {
    width: 400px;
  }

  @media only screen and (max-width: 550px) {
    width: 350px;
  }
`;

const Date = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  color: #3897d3;
`;

const EventTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

const EventDescription = styled.p`
  font-size: 16px;
  color: #333;
`;

const EventDropDownContainer = styled.div`
  padding-left: 12px;
`

const EventDropDown = styled.button`
border: none;
background-color: #e5e7eb;
cursor: pointer;
`

const DropDownImage = styled.img`
  height: 20px;
  width: 20px;
`

const AboutPage = () => {
  const pictures = [
    "assets/images/home/professional/professional1-glasses.png",
    "assets/images/home/professional/professional1.png",
    "assets/images/home/business-casual/business-casual1-glasses.png",
    "assets/images/home/business-casual/business-casual1.png",
    "assets/images/home/casual/casual1.png",
    "assets/images/home/casual/casual1-glasses.png",
    "assets/images/home/gym/gym1.png",
    "assets/images/home/gym/gym1-glasses.png"
  ];
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const handlePictureClick = () => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * pictures.length);
      } while (newIndex === currentPictureIndex);
  
      setCurrentPictureIndex(newIndex);
    };
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
    <TypedStyles/>
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
                    <PictureFrame onClick={handlePictureClick}>
                        <Picture src={pictures[currentPictureIndex]}/>
                    </PictureFrame>
                </PictureContainer>
                    <ProfileName>Simon Foy</ProfileName>
                    <ProfileDescription>
                    <ReactTyped
                        strings={[
                            '<span class="highlight1">Fullstack Developer</span>',
                            '<span class="highlight2">Frontend Developer</span>',
                            '<span class="highlight3">Backend Developer</span>',
                            '<span class="highlight4">Software Engineer</span>',
                            '<span class="highlight5">System Administrator</span>',
                            '<span class="highlight6">Cybersecurity Enthusiast</span>',
                            '<span class="highlight7">Your Next Colleague</span>',
                        ]}
                        typeSpeed={45}
                        backSpeed={25}
                        loop
                    />
                </ProfileDescription>
                    <ButtonContainer>
                      <ResumeButton onClick={() => window.open('http://simonfoy.com/assets/resume.html', '_blank')}>Resume</ResumeButton>
                      <MessageButton onClick={() => window.location.href = "mailto:simon.g.foy@outlook.com?subject=Greetings from simonfoy.com"}>Message</MessageButton>
                  </ButtonContainer>
                </InfoCard>
            </ContentContainer>
            <JourneyTitle>My Journey</JourneyTitle>
            <Wrapper>
              <CommandPromptContainer>
      <CommandPrompt/>
      </CommandPromptContainer>
            <Timeline>
            <TimelineContainer>
  <TimelineItem>
    <EventTitle>IT Specialist - Executive Protection Field Office</EventTitle>
    <Date>2021 - Present</Date>
    <EventDescription>Provides support to over 400 assigned special agents, police officers, analysts, physical security specialists, and professional support personnel spread across three continents.</EventDescription>
  </TimelineItem>
  
  {isExpanded && (
    <>
      <TimelineItem>
        <EventTitle>Software Developer - Freelancer</EventTitle>
        <Date>2023 - Present</Date>
        <EventDescription>Develops and deploys custom software solutions tailored to client needs, utilizing a range of programming languages and technologies</EventDescription>
      </TimelineItem>
      <TimelineItem>
        <EventTitle>Signal Support Team Led - US Army</EventTitle>
        <Date>2018 - 2021</Date>
        <EventDescription>Directed a specialized team managing assets worth over $6M and trained technicians on IT and Communication equipment maintenance.</EventDescription>
      </TimelineItem>
      <TimelineItem>
        <EventTitle>Communications Terminal Specialist - North Carolina Army National Guard</EventTitle>
        <Date>2016 - 2018</Date>
        <EventDescription>Established and managed emergency communication links, covering voice, video, and data.</EventDescription>
      </TimelineItem>
    </>
  )}
</TimelineContainer>
<EventDropDownContainer>
<EventDropDown onClick={() => setIsExpanded(prev => !prev)}>
  <DropDownImage
    src="/assets/images/navbar/down-arrow-grey.svg" 
    alt={isExpanded ? "Show Less" : "Show More"} 
    style={{
      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', 
      transition: 'transform 0.3s ease'
    }}
  />
</EventDropDown>
</EventDropDownContainer>
    </Timeline>
    </Wrapper>
        </Container2>
        <Footer/>
    </Section>
    </>
  )
}

export default AboutPage;
