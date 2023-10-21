import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0; }
  50% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
`;

const type = keyframes`
  to { width: 17em; }
`;

const FakeMenu = styled.div`
  width: 350px;
  box-sizing: border-box;
  height: 25px;
  background-color: #bbb;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const FakeButton = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #000;
  position: relative;
  top: 6px;
  left: 6px;
  background-color: #ff3b47;
  border-color: #9d252b;
  display: inline-block;

  &.fakeMinimize {
    left: 11px;
    background-color: #ffc100;
    border-color: #9d802c;
  }
  &.fakeZoom {
    left: 16px;
    background-color: #00d742;
    border-color: #049931;
  }
`;

const FakeScreen = styled.div`
  background-color: white;
  box-sizing: border-box;
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const P = styled.p`
  position: relative;
  left: 50%;
  margin-left: -8.5em;
  text-align: left;
  font-size: 1.25em;
  font-family: monospace;
  white-space: normal;
  overflow: hidden;
  width: 0;
  color: ${props => props.color || '#fff'};
  animation: ${type} 0.5s ${props => props.delay || '0s'} steps(20, end) forwards,
             ${blink} 1s ${props => props.blinkDelay || '0s'} ${props => props.blinkCount || 'infinite'};
`;

const Span = styled.span`
  color: #fff;
  font-weight: bold;
`;

const aboutMe = () => {
    return {
      name: 'Simon Foy',
      email: 'hello@simonfoy.com',
      website: 'simonfoy.com',
    };
  }

  const CommandPrompt = () => {
    const info = aboutMe();
  
    return (
      <div>
        <FakeMenu>
          <FakeButton className="fakeClose" />
          <FakeButton className="fakeMinimize" />
          <FakeButton className="fakeZoom" />
        </FakeMenu>
        <FakeScreen>
          <P color="#9CD9F0" delay="1s" blinkDelay="2s" blinkCount="2">
            $ Name: {info.name}<Span>_</Span>
          </P>
          <P color="#CDEE69" delay="4.25s" blinkDelay="5.25s" blinkCount="2">
            Email: {info.email}<Span>_</Span>
          </P>
          <P color="#E09690" delay="7.5s" blinkDelay="8.5s" blinkCount="2">
            Website: {info.website}<Span>_</Span>
          </P>
          <P delay="10.75s" blinkDelay="11.5s">
            <Span>_</Span>
          </P>
        </FakeScreen>
      </div>
    );
  };
  
  export default CommandPrompt;