import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from './theme-provider';

export const Loader = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Small delay before showing animation
    const timer = setTimeout(() => {
      setMounted(true);
    }, 10);  
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <StyledWrapper theme={theme} className={mounted ? 'mounted' : ''}>
      <div className="wrapper">
        <div className="circle circle-1" />
        <div className="circle circle-2" />
        <div className="circle circle-3" />
        <div className="shadow shadow-1" />
        <div className="shadow shadow-2" />
        <div className="shadow shadow-3" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme === 'dark' ? '#000' : '#fff'};
  z-index: 9999;
  
  /* Hide animation elements initially */
  &:not(.mounted) .circle, 
  &:not(.mounted) .shadow {
    opacity: 0;
  }

  .wrapper {
    position: relative;
    width: 120px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle {
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
    transform-origin: 50%;
    animation: circle7124 .45s alternate infinite ease;
    transition: opacity 0.15s ease;
  }

  .circle-1 {
    left: 10%;
    animation-delay: 0s;
  }
  
  .circle-2 {
    left: calc(50% - 10px);
    animation-delay: .15s;
  }
  
  .circle-3 {
    right: 10%;
    animation-delay: .25s;
  }

  @keyframes circle7124 {
    0% {
      top: 60px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.8);
    }

    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }

    100% {
      top: 0%;
    }
  }

  .shadow {
    width: 20px;
    height: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme === 'dark' 
      ? 'rgba(255, 255, 255, 0.3)' 
      : 'rgba(0, 0, 0, 0.3)'
    };
    position: absolute;
    top: 62px;
    transform-origin: 50%;
    z-index: -1;
    filter: blur(1px);
    animation: shadow046 .45s alternate infinite ease;
    transition: opacity 0.15s ease;
  }
  
  .shadow-1 {
    left: 10%;
    animation-delay: 0s;
  }
  
  .shadow-2 {
    left: calc(50% - 10px);
    animation-delay: .15s;
  }
  
  .shadow-3 {
    right: 10%;
    animation-delay: .25s;
  }

  @keyframes shadow046 {
    0% {
      transform: scaleX(1.5);
    }

    40% {
      transform: scaleX(1);
      opacity: .7;
    }

    100% {
      transform: scaleX(.2);
      opacity: .4;
    }
  }
`;


