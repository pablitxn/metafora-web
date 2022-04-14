import styled from 'styled-components';
import { fadeIn } from '../styles';

export const About03Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 6rem 0 0.5rem 1rem;

  @media (prefers-reduced-motion) {
    animation: 3s ${fadeIn} ease;
  }

  @media (max-width: 1024px) {
    padding: 3rem 1rem 0.5rem;
  }

  @media (min-height: 1057px) {
    padding-top: 12rem;
  }

  @media (max-width: 1366px) {
    padding: 2rem 0;
  }
`;

export const Card = styled.div`
  width: 40%;
  position: relative;

  @media (max-width: 1366px) {
    width: 37%;
    margin-right: 1rem;
  }
`;

export const Title = styled.h2`
  color: #93cb0a;
  font-size: 1.7rem;
  font-family: 'Josefin Sans', sans-serif;
  margin-top: 0;
  line-height: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    padding: 0;
  }
`;

export const Divider = styled.div`
  width: 3rem;
  border-top: 0.125rem solid #feffdf;
  margin-bottom: 2rem;
  align-self: flex-start;

  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
`;

export const Text = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #ffff;
  font-size: 1.5rem;
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
  width: 20rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    width: 50%;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  @media (max-width: 1024px) {
    right: -0.5rem;
    width: 50%;
  }

  @media (max-width: 1366px) {
    width: 40%;
    height: 75%;
    right: -4rem;
  }
`;

export const TextBold = styled.p`
  color: #012e0f;
  background-color: #93cb09;
  font-size: 2.5rem;
  display: inline;
  padding: 0.35rem;
  font-weight: bold;
  line-height: 3rem;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;
