import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { FaDiscord, FaSchool, FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';

const Section = styled.div`
    display: flex;
    justify-content: center;
    width: 100%; 
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 1000px) {
        width: 100%; 
    }
`;

const Container = styled.div`
    position: relative;
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0px;

    @media only screen and (max-width: 1000px) {
        width: 100%; 
        padding: 5px 10px;
        justify-content: space-between;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 45px;
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
    gap: 45px;
    list-style: none;
    align-items: center;

    @media only screen and (max-width: 1000px) {
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
    width: 75px;
    font-weight: ${props => props.isHovered ? 'bold' : 'normal'};


    &:hover {
        color: #3897d3; 
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
  min-width: 75px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  text-align: center;
  text-decoration: none;
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

const StyledDiscord = styled(FaDiscord)`
    color: #fff;
    margin-right: 8px;
    margin-top: 1px;
`;

const StyledCart = styled(FaSchool)`
    color: #fff;
    margin-right: 8px;
`;

const ListItem3 = styled.button`
font-size: 14px;
  cursor: pointer;
  position: relative;
  background-color: #3897d3;
  width: 100%;
  min-width: 160px;
  height: 34px;
  border-radius: 20px;
  padding: 12px 16px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.2s, color 0.2s;
  border: 2px solid transparent; 

  &:hover {
    background-color: #3897d3;
    color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    font-weight: bold;
  }
`;

const Menu = styled.img`
    display: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);

    @media only screen and (max-width: 1000px) {
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
                        src={hoveredItem === 'about' ? "/assets/images/navbar/down-arrow-blue.svg" : "/assets/images/navbar/down-arrow-black.svg"} 
                        alt="Arrow down" 
                    />
                    <DropdownMenu>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="/about"><ListItem2>About Me</ListItem2></Link>
                    </DropdownMenu>
                </ListItem>

                {/* <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="/newsletter">
                    <ListItem 
                        onMouseEnter={() => setHoveredItem('newsletter')} 
                        onMouseLeave={() => setHoveredItem(null)}
                        isHovered={hoveredItem === 'newsletter'}
                    >Newsletter 
                    </ListItem>
                </Link> */}
                <ListItem 
                    onMouseEnter={() => setHoveredItem('services')} 
                    onMouseLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === 'services'}
                >Services
                    <ArrowDownIcon 
                        src={hoveredItem === 'services' ? "/assets/images/navbar/down-arrow-blue.svg" : "/assets/images/navbar/down-arrow-black.svg"} 
                        alt="Arrow down" 
                    />
                    <DropdownMenu>
                        <ListItem2>Software Development</ListItem2>
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
                        src={hoveredItem === 'portfolio' ? "/assets/images/navbar/down-arrow-blue.svg" : "/assets/images/navbar/down-arrow-black.svg"} 
                        alt="Arrow down" 
                    />
                    <DropdownMenu>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="/projects"><ListItem2>Projects</ListItem2></Link>
                        <ListItem2 onClick={() => window.open('http://simonfoy.com/assets/resume.pdf', '_blank')}>Resume (PDF)</ListItem2>
                        <ListItem2 onClick={() => window.open('http://simonfoy.com/assets/resume.html', '_blank')}>Resume (HTML)</ListItem2>
                        <ListItem2 onClick={() => window.open('https://github.com/simonfoy', '_blank')}>Github</ListItem2>
                    </DropdownMenu>
                </ListItem>

                <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="/404">
                    <ListItem3 
                        onMouseEnter={() => setHoveredItem('discordserver')} 
                        onMouseLeave={() => setHoveredItem(null)}
                        isHovered={hoveredItem === 'discordserver'}
                    ><StyledDiscord/> Discord Server
                    </ListItem3>
                </Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}}to="/404">
                    <ListItem3 
                        onMouseEnter={() => setHoveredItem('youtube')} 
                        onMouseLeave={() => setHoveredItem(null)}
                        isHovered={hoveredItem === 'youtube'}
                    ><StyledCart/> YouTube
                    </ListItem3>
                </Link>
                </List>
                <Menu src="https://www.svgrepo.com/show/506800/burger-menu.svg"/>
            </Links>
        </Container>
    </Section>
  )
}

export default Navbar