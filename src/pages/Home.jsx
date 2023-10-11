import React, { useState } from 'react'
import Banner from '../components/Banner'
import styled, { createGlobalStyle } from 'styled-components'
import Navbar from '../components/NavBar'
import ReactTyped from 'react-typed'
import Footer from '../components/Footer'
import { FaCss3Alt, FaExternalLinkAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'

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

const Top = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const PictureContainer = styled.div`
    padding-bottom: 20px;
`

const PictureFrame = styled.div`
    display: inline-block;
    height: 175px;
    width: 175px;
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

const Header = styled.h1`
    text-align: center;
    padding: 8px 0px;
    font-size: 32px;
`

const Typed = styled.h2`
    text-align: center;
    padding: 10px 0px;
    font-size: 22px;
`

const Paragraph = styled.p`
    text-align: center;
    padding: 10px 0px;
    font-size: 19px;

    @media only screen and (max-width: 940px) {
        padding: 10px 25px;
    }
`

const Bottom = styled.div`
    padding-top: 10px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const Title = styled.h3`
    text-align: center;
    padding: 14px 0px;
    font-size: 22px;
    border-bottom: 2px solid #d1d5db;
`;

const ProjectContainer = styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media only screen and (max-width: 940px) {
        justify-content: center;
    }
`

const ProjectCard = styled.div`
position: relative;
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    height: 140px;
    width: 250px;
    overflow: hidden;
    
    &:hover {
        transform: translateY(-10px);
    }
`;

const ProjectTopRight = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 8px;
    padding: 10px;
`;

const LogoLink = styled.a`
    cursor: pointer;
    color: #3897d3;
`;

const ProjectTitleContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 2px;
`;

const ProjectIcon = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 8px;
    border-radius: 50%;
`;

const ProjectTitle = styled.h4`
    padding-top: 10px;
    font-size: 20px;
    margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const SkillIcons = styled.div`
    display: flex;
    justify-content: left;
    gap: 10px;
    padding-top: 10px;
`;

const StyledReact = styled(FaReact)`
    color: #61DAFB;
`;

const Home = () => {
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
  return (
    <>
    <TypedStyles/>
    <Section>
        <Banner/>
        <Navbar/>
        <Container>
            <Top>
                <PictureContainer>
                    <PictureFrame onClick={handlePictureClick}>
                        <Picture src={pictures[currentPictureIndex]}/>
                    </PictureFrame>
                </PictureContainer>
                <Header>Hi, I am Simon!</Header>
                <Typed>
                    <ReactTyped
                        strings={[
                            'A <span class="highlight1">Fullstack</span> Developer',
                            'A <span class="highlight2">Frontend</span> Developer',
                            'A <span class="highlight3">Backend</span> Developer',
                            'A <span class="highlight4">Software</span> Engineer',
                            'A <span class="highlight5">System</span> Administrator',
                            'A <span class="highlight6">Cybersecurity</span> Enthusiast',
                            'Your <span class="highlight7">Next</span> Colleague',
                        ]}
                        typeSpeed={55}
                        backSpeed={35}
                        loop
                    />
                </Typed>
                <Paragraph>
                    By day, I am a IT / Cyber professional always staying ahead with the latest in tech trends. 
                    Come nightfall, my passion for software development takes over, driving me to innovate and create. 
                </Paragraph>
            </Top>
            <Bottom>
                <Title>Recent Projects</Title>
                <ProjectContainer>
                    <ProjectCard>
                        <ProjectTopRight>
                            <LogoLink href="github-link-here"><FaGithub size={18} /></LogoLink>
                            <LogoLink href="https://simonfoy.com"><FaExternalLinkAlt size={17} /></LogoLink>
                        </ProjectTopRight>
                        <ProjectTitleContainer>
                            <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                            <ProjectTitle>Portfolio</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescription>
                            Current version of my personal website.
                        </ProjectDescription>
                        <SkillIcons>
                            <StyledReact size={24} title="React" />
                        </SkillIcons>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectTopRight>
                            <LogoLink href="github-link-here"><FaGithub size={18} /></LogoLink>
                            <LogoLink href="https://simonfoy.com"><FaExternalLinkAlt size={17} /></LogoLink>
                        </ProjectTopRight>
                        <ProjectTitleContainer>
                            <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                            <ProjectTitle>Portfolio</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescription>
                            Current version of my personal website.
                        </ProjectDescription>
                    </ProjectCard>
                    <ProjectCard>
                        <ProjectTopRight>
                            <LogoLink href="github-link-here"><FaGithub size={18} /></LogoLink>
                            <LogoLink href="live-link-here"><FaExternalLinkAlt size={17} /></LogoLink>
                        </ProjectTopRight>
                        <ProjectTitleContainer>
                            <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                            <ProjectTitle>Portfolio</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescription>
                            Current version of my personal website.
                        </ProjectDescription>
                    </ProjectCard>
                </ProjectContainer>
            </Bottom>
        </Container>
        <Footer/>
    </Section>
    </>
  )
}

export default Home