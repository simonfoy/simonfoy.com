import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 100%; 
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 940px) {
        width: 100%; 
    }
`;

const Container = styled.div`
    position: relative;
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 0px;

    @media only screen and (max-width: 940px) {
        width: 100%; 
        padding: 10px;
        justify-content: space-between;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 400px;
`;

const Logo = styled.img`
    cursor: pointer;
    height: 50px;
`;

const List = styled.ul`
    font-size: 14px;
    margin-bottom: 0;
    text-transform: uppercase;
    display: flex;
    gap: 40px;
    list-style: none;
    align-items: center;

    @media only screen and (max-width: 940px) {
        display: none;
    }
`;

const DropdownMenu = styled.ul`
    position: absolute;
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    list-style: none;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
    z-index: 999;
    left: 33%;
    transform: translateX(-50%);
    top: 100%; 
`;

const ListItem = styled.li`
    cursor: pointer;
    position: relative;
    padding: 5px 10px;
    transition: background-color 0.2s;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;  
    font-weight: ${props => props.isHovered ? 'bold' : 'normal'};

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #3897d3; 
        color: white;
        ${DropdownMenu} {
            visibility: visible;
            opacity: 1;
            color: black;
            font-weight: normal;
        }
    }
`;

const ListItem2 = styled.li`
  cursor: pointer;
  position: relative;
  background-color: #fff;
  width: 100%;
  min-width: 50px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  text-align: center;
  text-decoration: none; /* Remove text decoration */
  color: #000;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #3897d3;
    color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    font-weight: bold;
  }
`;

const ArrowDownIcon = styled.img`
    margin-left: 5px;
    height: 10px;
    width: 10px;
`;

const Menu = styled.img`
    display: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    @media only screen and (max-width: 940px) {
        display: flex;
        cursor: pointer;
        height: 50px;
    }
`;

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <Section>
        <Container>
            <Links>
                <Link to="/"><Logo src="assets/images/navbar/logo.png"/></Link>
                <List>
                <ListItem   
                    onMouseEnter={() => setHoveredItem('about')} 
                    onMouseLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === 'about'}
                >About
                    <ArrowDownIcon 
                        src={hoveredItem === 'about' ? "/assets/images/navbar/down-arrow-white.svg" : "/assets/images/navbar/down-arrow-black.svg"} 
                        alt="Arrow down" 
                    />
                    <DropdownMenu>
                        <Link to="/about"><ListItem2>About Me</ListItem2></Link>
                        <Link to="/404"><ListItem2>Reviews</ListItem2></Link>
                        <Link to="/404"><ListItem2>Vouches</ListItem2></Link>
                    </DropdownMenu>
                </ListItem>

                <ListItem 
                    onMouseEnter={() => setHoveredItem('newsletter')} 
                    onMouseLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === 'newsletter'}
                >Newsletter 
                </ListItem>
                <ListItem 
                    onMouseEnter={() => setHoveredItem('services')} 
                    onMouseLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === 'services'}
                >Services
                    <ArrowDownIcon 
                        src={hoveredItem === 'services' ? "/assets/images/navbar/down-arrow-white.svg" : "/assets/images/navbar/down-arrow-black.svg"} 
                        alt="Arrow down" 
                    />
                    <DropdownMenu>
                        <ListItem2>Minecraft Plugin Development</ListItem2>
                        <ListItem2>Discord Bot</ListItem2>
                        <ListItem2>Web Design</ListItem2>
                        <ListItem2>Web Development</ListItem2>
                        <ListItem2>System Administration</ListItem2>
                    </DropdownMenu>
                </ListItem>

                <ListItem 
                    onMouseEnter={() => setHoveredItem('portfolio')} 
                    onMouseLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === 'portfolio'}
                >Portfolio
                    <ArrowDownIcon 
                        src={hoveredItem === 'portfolio' ? "/assets/images/navbar/down-arrow-white.svg" : "/assets/images/navbar/down-arrow-black.svg"} 
                        alt="Arrow down" 
                    />
                    <DropdownMenu>
                        <ListItem2>Projects</ListItem2>
                        <ListItem2>Resume</ListItem2>
                        <ListItem2 onClick={() => window.open('https://github.com/simonfoy', '_blank')}>Github</ListItem2>
                    </DropdownMenu>
                </ListItem>
                </List>
                <Menu src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
            </Links>
        </Container>
    </Section>
  )
}

export default Navbar