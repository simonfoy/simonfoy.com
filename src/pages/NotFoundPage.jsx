import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

const Container = styled.div`
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

const NotFoundPage = () => {
  return (
    <Section>
      <Banner />
      <Navbar />
      <Container>
        <Title>Oops! Page Not Found</Title>
        <Description>
          It looks like you've stumbled upon a page that doesn't exist.
        </Description>
      </Container>
      <Footer />
    </Section>
  );
};

export default NotFoundPage;