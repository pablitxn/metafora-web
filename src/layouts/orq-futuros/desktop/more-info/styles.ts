import styled from 'styled-components';
import { fadeIn } from 'components/home/home-content/desktop/styles';

export const MoreInfoContainer = styled.div``;

export const Icon = styled.div<IconProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  color: white;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  border-radius: 50%;
  background: #000;
  user-select: none;
  cursor: pointer;
  transition: 1s;
  ${({ isActive }) =>
    isActive &&
    `
      transform: translate(-2rem, 15rem) scale(10);
      opacity: 0;
      transition: transform 1.5s, opacity 0.5s;
  `}
`;

export const ExpandedInfo = styled.div<IconProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(219, 43, 118, 0.74);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isActive }) =>
    isActive
      ? ` opacity: 1; `
      : `
          opacity: 0;
          border-radius: 50%;
          transform: scale(0);
        `}
  transition: opacity 0.5s, transform 1s, border-radius 0.75s;
  animation: 0.5s ${fadeIn} ease;
`;

export const Background = styled.div`
  width: 85.375rem;
  height: 85.375rem;
  border-radius: 50%;
  background: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 13rem;
`;

export const Description = styled.div`
  position: relative;
  display: flex;
  width: 21%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 1.155rem;
  display: flex;
  align-items: center;
  color: #e26f0d;
`;

export const Text = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 1.305rem;
  display: flex;
  align-items: center;
  color: #e26f0d;
`;

export const Image = styled.img`
  display: block;
  width: 65%;
  height: auto;
`;
