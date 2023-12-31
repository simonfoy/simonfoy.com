import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaExternalLinkAlt, FaGithub, FaJava, FaReact } from 'react-icons/fa'

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
    -webkit-line-clamp: 2;
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

const StyledJava = styled(FaJava)`
    color: #007396;
`;

const ProjectsPage = () => {
  return (
    <>
      <TypedStyles/>
      <Section>
        <Container1>
          <Banner/>
          <Navbar/>
        </Container1>
        <Container2>
          <Title>My Projects</Title>
          {/* <Description>Test</Description> */}
          <ProjectContainer>
          <ProjectCard>
                        <ProjectTopRight>
                            <LogoLink href="https://github.com/simonfoy/CraftRoyale" target="_blank"><FaGithub size={18} /></LogoLink>
                            <LogoLink href="https://github.com/simonfoy/CraftRoyale" target="_blank"><FaExternalLinkAlt size={17} /></LogoLink>
                        </ProjectTopRight>
                        <ProjectTitleContainer>
                            <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                            <ProjectTitle>Craft Royale</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescription>
                        A Minecraft Spigot plugin inspired by the popular mobile game Clash Royale. This plugin brings the thrilling tower rush strategy game into the world of Minecraft, offering a unique blend of resource management, tactical gameplay, and Minecraft's creative charm.
                        </ProjectDescription>
                        <SkillIcons>
                            <StyledJava size={24} title="Java" />
                        </SkillIcons>
                    </ProjectCard>
          <ProjectCard>
                        <ProjectTopRight>
                            <LogoLink href="https://github.com/simonfoy/Plants-vs-Zombies" target="_blank"><FaGithub size={18} /></LogoLink>
                            <LogoLink href="https://github.com/simonfoy/Plants-vs-Zombies" target="_blank"><FaExternalLinkAlt size={17} /></LogoLink>
                        </ProjectTopRight>
                        <ProjectTitleContainer>
                            <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                            <ProjectTitle>Plants vs Zombies</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescription>
                        A Minecraft Spigot plugin that brings the beloved strategy game mechanics of the classic "Plants vs. Zombies" into the Minecraft world. Players can defend their base against waves of zombie attackers using a variety of plant defenses, each with unique abilities and traits.
                        </ProjectDescription>
                        <SkillIcons>
                            <StyledJava size={24} title="Java" />
                        </SkillIcons>
                    </ProjectCard>
          <ProjectCard>
                        <ProjectTopRight>
                            <LogoLink href="https://github.com/simonfoy/SmashMobs" target="_blank"><FaGithub size={18} /></LogoLink>
                            <LogoLink href="https://github.com/simonfoy/SmashMobs" target="_blank"><FaExternalLinkAlt size={17} /></LogoLink>
                        </ProjectTopRight>
                        <ProjectTitleContainer>
                            <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                            <ProjectTitle>Smash Mobs</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescription>
                        An action-packed Minecraft Spigot plugin that brings the exhilarating experience of mob battles into the Minecraft universe. Players transform into various Minecraft mobs, each equipped with unique abilities and powers, and battle it out in dynamic arenas to be the last one standing.
                        </ProjectDescription>
                        <SkillIcons>
                            <StyledJava size={24} title="Java" />
                        </SkillIcons>
                    </ProjectCard>
          <ProjectCard>
                        <ProjectTopRight>
                            <LogoLink href="https://github.com/simonfoy/CraftMasterGUI" target="_blank"><FaGithub size={18} /></LogoLink>
                            <LogoLink href="https://github.com/simonfoy/CraftMasterGUI" target="_blank"><FaExternalLinkAlt size={17} /></LogoLink>
                        </ProjectTopRight>
                        <ProjectTitleContainer>
                            <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                            <ProjectTitle>CraftMasterGUI</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescription>
                        A user-friendly Minecraft Spigot plugin designed to enhance the crafting experience for players.
                        </ProjectDescription>
                        <SkillIcons>
                            <StyledJava size={24} title="Java" />
                        </SkillIcons>
                    </ProjectCard>
          <ProjectCard>
                        <ProjectTopRight>
                            <LogoLink href="https://github.com/simonfoy/BedWars" target="_blank"><FaGithub size={18} /></LogoLink>
                            <LogoLink href="https://github.com/simonfoy/BedWars" target="_blank"><FaExternalLinkAlt size={17} /></LogoLink>
                        </ProjectTopRight>
                        <ProjectTitleContainer>
                            <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                            <ProjectTitle>TNT Tag</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescription>
                        an explosive and fast-paced Minecraft Spigot plugin based on the classic game of tag, but with a thrilling twist. In this game, players pass around a live TNT until it explodes, eliminating the player holding it at the time of detonation. The last player standing wins!
                        </ProjectDescription>
                        <SkillIcons>
                            <StyledJava size={24} title="Java" />
                        </SkillIcons>
                    </ProjectCard>
                <ProjectCard>
                        <ProjectTopRight>
                            <LogoLink href="https://github.com/simonfoy/BedWars" target="_blank"><FaGithub size={18} /></LogoLink>
                            <LogoLink href="https://github.com/simonfoy/BedWars" target="_blank"><FaExternalLinkAlt size={17} /></LogoLink>
                        </ProjectTopRight>
                        <ProjectTitleContainer>
                            <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                            <ProjectTitle>Bed Wars</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescription>
                        A dynamic and engaging Minecraft mini-game plugin where players compete on floating islands, defend their beds, and battle to be the last team standing.
                        </ProjectDescription>
                        <SkillIcons>
                            <StyledJava size={24} title="Java" />
                        </SkillIcons>
                    </ProjectCard>
              <ProjectCard>
                  <ProjectTopRight>
                      <LogoLink href="https://github.com/simonfoy/HungerGames" target="_blank"><FaGithub size={18} /></LogoLink>
                      <LogoLink href="https://github.com/simonfoy/HungerGames" target="_blank"><FaExternalLinkAlt size={17} /></LogoLink>
                  </ProjectTopRight>
                  <ProjectTitleContainer>
                      <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                      <ProjectTitle>Hunger Games</ProjectTitle>
                  </ProjectTitleContainer>
                  <ProjectDescription>
                      An immersive Minecraft plugin that transports players into the intense world of the Hunger Games.
                  </ProjectDescription>
                  <SkillIcons>
                      <StyledJava size={24} title="Java" />
                  </SkillIcons>
              </ProjectCard>
              <ProjectCard>
                  <ProjectTopRight>
                      <LogoLink href="https://github.com/simonfoy/ServerSettingsGUI" target="_blank"><FaGithub size={18} /></LogoLink>
                      <LogoLink href="https://github.com/simonfoy/ServerSettingsGUI" target="_blank"><FaExternalLinkAlt size={17} /></LogoLink>
                  </ProjectTopRight>
                  <ProjectTitleContainer>
                      <ProjectIcon src="assets/projects/portfolio/logo.png" alt="Project Icon" />
                      <ProjectTitle>ServerSettingsGUI</ProjectTitle>
                  </ProjectTitleContainer>
                  <ProjectDescription>
                      A dynamic and user-friendly Spigot plugin designed for server administrators and players 
                      to easily access and toggle specific game rules without diving into commands.
                  </ProjectDescription>
                  <SkillIcons>
                      <StyledJava size={24} title="Java" />
                  </SkillIcons>
              </ProjectCard>
              <ProjectCard>
                  <ProjectTopRight>
                      <LogoLink href="https://github.com/simonfoy/simonfoy.com" target="_blank"><FaGithub size={18} /></LogoLink>
                      <LogoLink href="https://simonfoy.com" target="_blank"><FaExternalLinkAlt size={17} /></LogoLink>
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
          </ProjectContainer>
        </Container2>
        <Footer/>
      </Section>
    </>
  )
}

export default ProjectsPage;